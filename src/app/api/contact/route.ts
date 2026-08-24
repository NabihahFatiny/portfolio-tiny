import { NextRequest, NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  company?: string; // honeypot field, should stay empty
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, subject, message, company } = body;

  // Honeypot: bots tend to fill every field, humans never see this one.
  if (company) {
    return NextResponse.json({ success: true });
  }

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  if (!EMAIL_REGEX.test(email.trim())) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  }

  // TODO: Wire this up to your email provider or database of choice, e.g.
  // Resend, SendGrid, Nodemailer, or a serverless form backend.
  console.log("New contact form submission:", {
    name: name.trim(),
    email: email.trim(),
    subject: subject?.trim() || "(no subject)",
    message: message.trim(),
  });

  return NextResponse.json({ success: true });
}
