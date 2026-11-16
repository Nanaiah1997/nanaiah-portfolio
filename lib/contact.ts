import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters.")
    .max(80, "Name must be 80 characters or fewer."),
  email: z
    .string()
    .trim()
    .min(1, "Enter a valid email address.")
    .max(120, "Email must be 120 characters or fewer.")
    .email("Enter a valid email address."),
  subject: z
    .string()
    .trim()
    .min(3, "Subject must be at least 3 characters.")
    .max(140, "Subject must be 140 characters or fewer."),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters.")
    .max(5000, "Message must be 5000 characters or fewer."),
  botcheck: z.string().max(200).optional(),
});

export type ContactValues = z.infer<typeof contactSchema>;

export type ContactFieldErrors = Partial<Record<keyof ContactValues, string[]>>;

export type ContactResponse =
  | { ok: true }
  | { ok: false; message: string; fieldErrors?: ContactFieldErrors };

const contactFields = new Set<keyof ContactValues>([
  "name",
  "email",
  "subject",
  "message",
  "botcheck",
]);

export function fieldErrorsFrom(error: z.ZodError): ContactFieldErrors {
  const fieldErrors: ContactFieldErrors = {};

  for (const issue of error.issues) {
    const pathKey = issue.path[0];
    if (typeof pathKey !== "string" || !contactFields.has(pathKey as keyof ContactValues)) {
      continue;
    }

    const key = pathKey as keyof ContactValues;
    const messages = fieldErrors[key] ?? [];
    messages.push(issue.message);
    fieldErrors[key] = messages;
  }

  return fieldErrors;
}

export function isContactResponse(value: unknown): value is ContactResponse {
  if (!value || typeof value !== "object" || !("ok" in value)) return false;
  return typeof value.ok === "boolean";
}
