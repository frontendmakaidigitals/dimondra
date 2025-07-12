import nodemailer from "nodemailer";
import type { NextApiRequest, NextApiResponse } from "next";

interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

interface SuccessResponse {
    success: boolean;
}

interface ErrorResponse {
    error: string;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<SuccessResponse | ErrorResponse>
): Promise<void> {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    const { name, email, message } = req.body as ContactFormData;

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT as string),
        secure: false, // Set to true if using port 465
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    try {
        await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: process.env.SMTP_TO,
            subject: "Contact Form Submission",
            html: `
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong><br>${message}</p>
            `,
        });

        res.status(200).json({ success: true });
    } catch (err) {
        console.error("Failed to send email:", err);
        res.status(500).json({ error: "Failed to send email" });
    }
}
