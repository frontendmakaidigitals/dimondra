import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(
  process.env.RESEND_API_KEY || "re_X5r2mbNL_ALcDw9cKjq8QGXbHVk6bBABT"
);

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, message, contact, subject } = body;

  try {
    const data = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "Dimondra <onboarding@resend.dev>",
      to: ["connect@dimondra.com"],
      subject: "Contact Form Submission",
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Contact:</strong> ${contact}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    });

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
