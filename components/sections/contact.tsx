"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Phone } from "lucide-react";
import { useState, type InputHTMLAttributes } from "react";
import { useForm } from "react-hook-form";
import { contactChannels, profile } from "@/data/profile";
import { Reveal } from "@/components/animations/reveal";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/brand-icons";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  contactSchema,
  isContactResponse,
  type ContactValues,
} from "@/lib/contact";
import { cn } from "@/lib/utils";

const fieldClass =
  "w-full rounded-lg border border-line bg-bg px-3 text-sm text-ink outline-none transition-colors focus:border-accent aria-[invalid=true]:border-danger";

const icons = {
  Email: Mail,
  Phone: Phone,
  LinkedIn: LinkedInIcon,
  GitHub: GitHubIcon,
} as const;

export function Contact() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [formError, setFormError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      botcheck: "",
    },
  });

  const onSubmit = handleSubmit(async (values) => {
    setFormError(null);
    setStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(values),
      });
      const payload: unknown = await response.json().catch(() => null);

      if (!isContactResponse(payload) || !payload.ok) {
        if (isContactResponse(payload) && !payload.ok && payload.fieldErrors) {
          for (const [key, messages] of Object.entries(payload.fieldErrors)) {
            const message = messages?.[0];
            if (!message) continue;
            if (key === "name" || key === "email" || key === "subject" || key === "message") {
              setError(key, { message });
            }
          }
        }

        setStatus("error");
        setFormError(
          isContactResponse(payload) && !payload.ok
            ? payload.message
            : "The message could not be sent. Please email me directly.",
        );
        return;
      }

      reset();
      setStatus("success");
    } catch {
      setStatus("error");
      setFormError("The message could not be sent. Please email me directly.");
    }
  });

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="scroll-mt-24 border-t border-line py-20 sm:py-28"
    >
      <Container>
        <Reveal>
          <SectionHeading id="contact-title" eyebrow="Contact" title={profile.contactTitle}>
            Email, phone, LinkedIn, GitHub, or the form. The form sends a message to my inbox. I do
            not store it in a database.
          </SectionHeading>
          <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
            <ul>
              {contactChannels.map((channel) => {
                const Icon = icons[channel.label];
                const external = channel.href.startsWith("http");
                return (
                  <li key={channel.label} className="border-b border-line">
                    <a
                      href={channel.href}
                      className="flex flex-col gap-1 rounded-md py-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:flex-row sm:items-center sm:justify-between"
                      {...(external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      <span className="inline-flex items-center gap-3 text-sm text-muted">
                        <Icon className="size-4 text-faint" aria-hidden />
                        {channel.label}
                        {external ? <span className="sr-only"> (opens in a new tab)</span> : null}
                      </span>
                      <span className="text-sm break-all text-ink sm:text-right">{channel.value}</span>
                    </a>
                  </li>
                );
              })}
            </ul>

            <form
              className="relative rounded-2xl border border-line bg-elev p-5 sm:p-6"
              onSubmit={onSubmit}
              noValidate
              aria-busy={isSubmitting}
            >
              <p className="text-sm text-muted">All fields are required.</p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <Field
                  id="contact-name"
                  label="Name"
                  error={errors.name?.message}
                  {...register("name")}
                  autoComplete="name"
                />
                <Field
                  id="contact-email"
                  label="Email"
                  type="email"
                  error={errors.email?.message}
                  {...register("email")}
                  autoComplete="email"
                  inputMode="email"
                />
              </div>
              <div className="mt-4">
                <Field
                  id="contact-subject"
                  label="Subject"
                  error={errors.subject?.message}
                  {...register("subject")}
                  autoComplete="off"
                />
              </div>
              <div className="mt-4">
                <label htmlFor="contact-message" className="text-sm font-medium text-ink">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={6}
                  className={cn(fieldClass, "mt-2 py-3")}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "contact-message-error" : undefined}
                  {...register("message")}
                />
                {errors.message ? (
                  <p id="contact-message-error" className="mt-1.5 text-sm text-danger">
                    {errors.message.message}
                  </p>
                ) : null}
              </div>
              <div hidden>
                <label htmlFor="botcheck">Company</label>
                <input
                  id="botcheck"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  {...register("botcheck")}
                />
              </div>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
                  {isSubmitting ? "Sending…" : "Send message"}
                </Button>
                <p className="text-sm text-faint" role="status" aria-live="polite">
                  {status === "success"
                    ? "Message sent. I will reply by email."
                    : status === "error"
                      ? formError
                      : null}
                </p>
              </div>
              {status === "error" ? (
                <p className="mt-3 text-sm text-muted">
                  You can also write directly to{" "}
                  <a className="text-ink underline underline-offset-4" href={`mailto:${profile.email}`}>
                    {profile.email}
                  </a>
                  .
                </p>
              ) : null}
            </form>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

type FieldProps = InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  label: string;
  error?: string;
};

function Field({ id, label, error, className, ...props }: FieldProps) {
  const errorId = `${id}-error`;
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-ink">
        {label}
      </label>
      <input
        id={id}
        className={cn(fieldClass, "mt-2 h-11", className)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        {...props}
      />
      {error ? (
        <p id={errorId} className="mt-1.5 text-sm text-danger">
          {error}
        </p>
      ) : null}
    </div>
  );
}
