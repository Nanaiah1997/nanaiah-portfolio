import { NextResponse } from "next/server";
import { profile } from "@/data/profile";
import { contactSchema, fieldErrorsFrom, type ContactValues } from "@/lib/contact";
import { getSiteUrl } from "@/lib/site";

const hits = new Map<string, number[]>();

function clientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    if (first) return first;
  }
  return request.headers.get("x-real-ip") ?? "unknown";
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((timestamp) => now - timestamp < 60_000);
  if (recent.length >= 5) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  return false;
}

function providerHeaders(request: Request) {
  const origin = request.headers.get("origin") ?? getSiteUrl();
  const referer = request.headers.get("referer") ?? `${origin}/`;

  return {
    "Content-Type": "application/json",
    Accept: "application/json",
    Origin: origin,
    Referer: referer,
    "User-Agent": request.headers.get("user-agent") ?? "Mozilla/5.0",
  };
}

async function deliver(input: ContactValues, request: Request) {
  const resendKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const text = `Name: ${input.name}\nEmail: ${input.email}\n\n${input.message}`;

  if (resendKey && from) {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [profile.email],
        reply_to: input.email,
        subject: input.subject,
        text,
      }),
      signal: AbortSignal.timeout(12_000),
    });

    if (!response.ok) {
      throw new Error(`Resend responded with ${response.status}`);
    }
    return;
  }

  const response = await fetch(
    `https://formsubmit.co/ajax/${encodeURIComponent(profile.email)}`,
    {
      method: "POST",
      headers: providerHeaders(request),
      body: JSON.stringify({
        name: input.name,
        email: input.email,
        message: input.message,
        _replyto: input.email,
        _subject: input.subject,
        _template: "table",
        _captcha: "false",
      }),
      signal: AbortSignal.timeout(12_000),
    },
  );

  if (!response.ok) {
    throw new Error(`Email provider responded with ${response.status}`);
  }

  const payload: unknown = await response.json().catch(() => null);
  if (
    payload &&
    typeof payload === "object" &&
    "success" in payload &&
    String(payload.success) === "false"
  ) {
    const providerMessage =
      "message" in payload ? String(payload.message) : "Email provider rejected the message";
    throw new Error(providerMessage);
  }
}

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) {
    return NextResponse.json(
      { ok: false, message: "Send the form as JSON." },
      { status: 415 },
    );
  }

  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (Number.isFinite(contentLength) && contentLength > 20_000) {
    return NextResponse.json(
      { ok: false, message: "Message is too large." },
      { status: 413 },
    );
  }

  if (isRateLimited(clientIp(request))) {
    return NextResponse.json(
      { ok: false, message: "Too many messages. Please try again in a minute." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "The form could not be read." },
      { status: 400 },
    );
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        message: "Check the highlighted fields and try again.",
        fieldErrors: fieldErrorsFrom(parsed.error),
      },
      { status: 400 },
    );
  }

  if (parsed.data.botcheck && parsed.data.botcheck.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  try {
    await deliver(parsed.data, request);
  } catch (error) {
    const detail = error instanceof Error ? error.message : "Unknown delivery error";
    console.error("Contact delivery failed:", detail);
    return NextResponse.json(
      {
        ok: false,
        message: "The message could not be sent. Please email me directly.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json(
    { ok: true },
    { headers: { "Cache-Control": "no-store" } },
  );
}
