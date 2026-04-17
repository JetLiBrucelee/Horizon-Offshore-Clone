import { Router, type IRouter } from "express";
import { Resend } from "resend";

const router: IRouter = Router();
const resend = new Resend(process.env.RESEND_API_KEY);

router.post("/contact", async (req, res) => {
  const { name, company, email, phone, subject, message } = req.body;

  if (!name || !email || !message) {
    res.status(400).json({ error: "Name, email, and message are required." });
    return;
  }

  try {
    await resend.emails.send({
      from: "Horizon Drilling Contact Form <onboarding@resend.dev>",
      to: ["support@horizondrillingsco.com"],
      replyTo: email,
      subject: subject ? `[Contact Form] ${subject}` : `[Contact Form] New Inquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0A0E1A; color: #ffffff; padding: 32px; border-radius: 8px;">
          <h2 style="color: #F59E0B; font-size: 22px; margin-bottom: 24px; border-bottom: 2px solid #F59E0B; padding-bottom: 12px;">
            New Contact Form Submission
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #9CA3AF; font-size: 13px; width: 130px; vertical-align: top;">Name</td>
              <td style="padding: 10px 0; color: #ffffff; font-size: 14px;">${name}</td>
            </tr>
            ${company ? `
            <tr>
              <td style="padding: 10px 0; color: #9CA3AF; font-size: 13px; vertical-align: top;">Company</td>
              <td style="padding: 10px 0; color: #ffffff; font-size: 14px;">${company}</td>
            </tr>` : ""}
            <tr>
              <td style="padding: 10px 0; color: #9CA3AF; font-size: 13px; vertical-align: top;">Email</td>
              <td style="padding: 10px 0; color: #F59E0B; font-size: 14px;"><a href="mailto:${email}" style="color: #F59E0B;">${email}</a></td>
            </tr>
            ${phone ? `
            <tr>
              <td style="padding: 10px 0; color: #9CA3AF; font-size: 13px; vertical-align: top;">Phone</td>
              <td style="padding: 10px 0; color: #ffffff; font-size: 14px;">${phone}</td>
            </tr>` : ""}
            ${subject ? `
            <tr>
              <td style="padding: 10px 0; color: #9CA3AF; font-size: 13px; vertical-align: top;">Subject</td>
              <td style="padding: 10px 0; color: #ffffff; font-size: 14px;">${subject}</td>
            </tr>` : ""}
          </table>
          <div style="margin-top: 24px; background: #0D1629; padding: 20px; border-left: 3px solid #F59E0B; border-radius: 4px;">
            <p style="color: #9CA3AF; font-size: 13px; margin: 0 0 8px 0;">Message</p>
            <p style="color: #ffffff; font-size: 14px; margin: 0; white-space: pre-line;">${message}</p>
          </div>
          <p style="color: #6B7280; font-size: 11px; margin-top: 24px; padding-top: 16px; border-top: 1px solid #1E2D4A;">
            Sent via Horizon Drilling & Co contact form
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
