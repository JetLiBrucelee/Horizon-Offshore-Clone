import { Router, type IRouter } from "express";
import { Resend } from "resend";

const router: IRouter = Router();
const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

router.post("/contact", async (req, res) => {
  if (!process.env.RESEND_API_KEY || !process.env.CONTACT_RECIPIENT_EMAIL) {
    res.status(503).json({ error: "Email service is not configured. Please contact us directly at support@horizondrillingsco.com" });
    return;
  }

  const recipientEmail = process.env.CONTACT_RECIPIENT_EMAIL;

  const { name, company, email, phone, subject, message } = req.body;

  if (!name || !email || !message) {
    res.status(400).json({ error: "Name, email, and message are required." });
    return;
  }

  const safeName = escapeHtml(String(name));
  const safeCompany = company ? escapeHtml(String(company)) : "";
  const safeEmail = escapeHtml(String(email));
  const safePhone = phone ? escapeHtml(String(phone)) : "";
  const safeSubject = subject ? escapeHtml(String(subject)) : "";
  const safeMessage = escapeHtml(String(message));

  try {
    await resend.emails.send({
      from: "Horizon Drilling Contact Form <noreply@horizondrillingsco.com>",
      to: [recipientEmail],
      replyTo: safeEmail,
      subject: safeSubject ? `[Contact Form] ${safeSubject}` : `[Contact Form] New Inquiry from ${safeName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0A0E1A; color: #ffffff; padding: 32px; border-radius: 8px;">
          <h2 style="color: #F59E0B; font-size: 22px; margin-bottom: 24px; border-bottom: 2px solid #F59E0B; padding-bottom: 12px;">
            New Contact Form Submission
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #9CA3AF; font-size: 13px; width: 130px; vertical-align: top;">Name</td>
              <td style="padding: 10px 0; color: #ffffff; font-size: 14px;">${safeName}</td>
            </tr>
            ${safeCompany ? `
            <tr>
              <td style="padding: 10px 0; color: #9CA3AF; font-size: 13px; vertical-align: top;">Company</td>
              <td style="padding: 10px 0; color: #ffffff; font-size: 14px;">${safeCompany}</td>
            </tr>` : ""}
            <tr>
              <td style="padding: 10px 0; color: #9CA3AF; font-size: 13px; vertical-align: top;">Email</td>
              <td style="padding: 10px 0; color: #F59E0B; font-size: 14px;"><a href="mailto:${safeEmail}" style="color: #F59E0B;">${safeEmail}</a></td>
            </tr>
            ${safePhone ? `
            <tr>
              <td style="padding: 10px 0; color: #9CA3AF; font-size: 13px; vertical-align: top;">Phone</td>
              <td style="padding: 10px 0; color: #ffffff; font-size: 14px;">${safePhone}</td>
            </tr>` : ""}
            ${safeSubject ? `
            <tr>
              <td style="padding: 10px 0; color: #9CA3AF; font-size: 13px; vertical-align: top;">Subject</td>
              <td style="padding: 10px 0; color: #ffffff; font-size: 14px;">${safeSubject}</td>
            </tr>` : ""}
          </table>
          <div style="margin-top: 24px; background: #0D1629; padding: 20px; border-left: 3px solid #F59E0B; border-radius: 4px;">
            <p style="color: #9CA3AF; font-size: 13px; margin: 0 0 8px 0;">Message</p>
            <p style="color: #ffffff; font-size: 14px; margin: 0; white-space: pre-line;">${safeMessage}</p>
          </div>
          <p style="color: #6B7280; font-size: 11px; margin-top: 24px; padding-top: 16px; border-top: 1px solid #1E2D4A;">
            Sent via Horizon Drilling &amp; Co contact form
          </p>
        </div>
      `,
    });

    res.json({ success: true });
  } catch (err) {
    console.error("Resend error:", err);
    res.status(500).json({ error: "Failed to send email. Please try again later." });
  }
});

export default router;
