import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, company, industry, phone, subject, message } = body;

    const safeName = typeof name === "string" && name.trim() ? name.trim() : "Website Visitor";
    const safeEmail = typeof email === "string" ? email.trim() : "";
    const safeCompany = typeof company === "string" && company.trim() ? company.trim() : "N/A";
    const safeIndustry = typeof industry === "string" && industry.trim() ? industry.trim() : "N/A";
    const safePhone = typeof phone === "string" && phone.trim() ? phone.trim() : "N/A";
    const safeSubject = typeof subject === "string" && subject.trim() ? subject.trim() : "General Inquiry";
    const safeMessage = typeof message === "string" ? message.trim() : "";

    if (!safeEmail) {
      return NextResponse.json({ error: "Missing email" }, { status: 400 });
    }

    const contactTo = process.env.CONTACT_TO || "info@growthlinelogistics.co.tz";
    const smtpFrom = process.env.SMTP_FROM || process.env.SMTP_USER;
    if (!smtpFrom) {
      return NextResponse.json({ error: "SMTP_FROM is not configured" }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "465"),
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const inboundMailOptions = {
      from: `"Growthline Logistics Website" <${smtpFrom}>`,
      to: contactTo,
      replyTo: safeEmail,
      subject: `New Website Request: ${safeSubject} (${safeCompany})`,
      text: `
        New Project Request from Growthline Website

        Name: ${safeName}
        Email: ${safeEmail}
        Phone: ${safePhone}
        Company: ${safeCompany}
        Industry: ${safeIndustry}
        Subject: ${safeSubject}

        Message:
        ${safeMessage}
      `,
      html: `
        <div style="font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif; max-width: 720px; margin: 0 auto; border: 1px solid #eee; background: #ffffff;">
          <div style="padding: 18px 22px; background: #0056b3; color: #ffffff;">
            <div style="font-weight: 800; letter-spacing: 1.5px; text-transform: uppercase; font-size: 12px;">Growthline Logistics</div>
            <div style="font-size: 22px; font-weight: 900; margin-top: 6px;">New Website Request</div>
          </div>

          <div style="padding: 22px;">
            <div style="display: grid; gap: 8px; font-size: 14px; color: #111827;">
              <div><strong>Name:</strong> ${safeName}</div>
              <div><strong>Email:</strong> ${safeEmail}</div>
              <div><strong>Phone:</strong> ${safePhone}</div>
              <div><strong>Company:</strong> ${safeCompany}</div>
              <div><strong>Industry:</strong> ${safeIndustry}</div>
              <div><strong>Subject:</strong> ${safeSubject}</div>
            </div>

            <div style="height: 1px; background: #eef2ff; margin: 18px 0;"></div>

            <div style="font-weight: 900; text-transform: uppercase; letter-spacing: 1.2px; font-size: 12px; color: #0056b3;">Message</div>
            <div style="margin-top: 10px; white-space: pre-wrap; font-size: 15px; color: #374151; line-height: 1.6;">${safeMessage || "(No message provided)"}</div>
          </div>
        </div>
      `,
    };

    const autoReplyOptions = {
      from: `"Growthline Logistics" <${smtpFrom}>`,
      to: safeEmail,
      subject: "We received your request — Growthline Logistics",
      text: `Hello ${safeName},\n\nThank you for contacting Growthline Logistics. We have received your request and our team will be in contact with you soon.\n\nSummary:\nCompany: ${safeCompany}\nSubject: ${safeSubject}\n\nRegards,\nGrowthline Logistics\ninfo@growthlinelogistics.co.tz\n+255 799 012 028`,
      html: `
        <div style="font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif; max-width: 720px; margin: 0 auto; border: 1px solid #eee; background: #ffffff;">
          <div style="padding: 18px 22px; background: #0b0f19; color: #ffffff;">
            <div style="font-weight: 800; letter-spacing: 1.5px; text-transform: uppercase; font-size: 12px; color: #9ca3af;">Growthline Logistics</div>
            <div style="font-size: 22px; font-weight: 900; margin-top: 6px;">Thank you — we received your request</div>
          </div>

          <div style="padding: 22px; color: #111827;">
            <p style="margin: 0; font-size: 15px; line-height: 1.7;">Hello <strong>${safeName}</strong>,</p>
            <p style="margin: 14px 0 0; font-size: 15px; line-height: 1.7;">
              Thank you for contacting <strong>Growthline Logistics</strong>. We have received your request and our team will be in contact with you soon.
            </p>

            <div style="margin: 18px 0; padding: 14px 16px; background: #f8fafc; border-left: 4px solid #0056b3;">
              <div style="font-size: 12px; font-weight: 900; letter-spacing: 1.2px; text-transform: uppercase; color: #0056b3;">Request Summary</div>
              <div style="margin-top: 10px; font-size: 14px; color: #374151;">
                <div><strong>Company:</strong> ${safeCompany}</div>
                <div><strong>Subject:</strong> ${safeSubject}</div>
              </div>
            </div>

            <p style="margin: 0; font-size: 14px; color: #6b7280; line-height: 1.7;">
              If you have any additional details to share, simply reply to this email.
            </p>

            <div style="height: 1px; background: #eef2ff; margin: 18px 0;"></div>

            <p style="margin: 0; font-size: 13px; color: #6b7280; line-height: 1.7;">
              <strong>Growthline Logistics</strong><br />
              info@growthlinelogistics.co.tz<br />
              +255 799 012 028
            </p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(inboundMailOptions);
    await transporter.sendMail(autoReplyOptions);

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error: any) {
    console.error("SMTP Error:", error);
    return NextResponse.json(
      { error: "Failed to send message", details: error.message },
      { status: 500 }
    );
  }
}
