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
    res.status(503).json({ error: "Our contact form is temporarily unavailable. Please try again later or reach out to us directly." });
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
<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /><meta name="viewport" content="width=device-width,initial-scale=1" /></head>
<body style="margin:0;padding:0;background:#F4F1EC;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#F4F1EC;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;">

          <tr>
            <td style="padding:0 8px 16px 8px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td align="left" style="vertical-align:middle;">
                    <img src="https://horizondrillingsco.com/logo.png" alt="Horizon Drilling &amp; Co" width="44" height="44" style="display:block;border:0;outline:none;text-decoration:none;border-radius:8px;" />
                  </td>
                  <td align="right" style="vertical-align:middle;font-size:11px;letter-spacing:2px;color:#8A7A5C;text-transform:uppercase;font-weight:600;">
                    New Inquiry
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="background:#FFFFFF;border-radius:14px;box-shadow:0 1px 3px rgba(20,20,20,0.04);overflow:hidden;">

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="padding:36px 40px 28px 40px;border-bottom:1px solid #EFE9DD;">
                    <p style="margin:0 0 8px 0;font-size:11px;letter-spacing:3px;color:#F59E0B;text-transform:uppercase;font-weight:700;">Horizon Drilling &amp; Co</p>
                    <h1 style="margin:0;font-size:26px;line-height:1.2;color:#1A1F2E;font-weight:700;letter-spacing:-0.4px;">
                      A new message from <span style="color:#F59E0B;">${safeName}</span>
                    </h1>
                    ${safeSubject ? `<p style="margin:14px 0 0 0;font-size:14px;color:#5C6470;">Regarding: <strong style="color:#1A1F2E;font-weight:600;">${safeSubject}</strong></p>` : ""}
                  </td>
                </tr>

                <tr>
                  <td style="padding:28px 40px 8px 40px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="padding:0 0 18px 0;width:50%;vertical-align:top;">
                          <p style="margin:0 0 4px 0;font-size:10px;letter-spacing:1.5px;color:#A39780;text-transform:uppercase;font-weight:600;">From</p>
                          <p style="margin:0;font-size:15px;color:#1A1F2E;font-weight:600;">${safeName}</p>
                        </td>
                        ${safeCompany ? `
                        <td style="padding:0 0 18px 0;width:50%;vertical-align:top;">
                          <p style="margin:0 0 4px 0;font-size:10px;letter-spacing:1.5px;color:#A39780;text-transform:uppercase;font-weight:600;">Company</p>
                          <p style="margin:0;font-size:15px;color:#1A1F2E;font-weight:600;">${safeCompany}</p>
                        </td>` : `<td style="width:50%;"></td>`}
                      </tr>
                      <tr>
                        <td style="padding:0 0 18px 0;vertical-align:top;">
                          <p style="margin:0 0 4px 0;font-size:10px;letter-spacing:1.5px;color:#A39780;text-transform:uppercase;font-weight:600;">Email</p>
                          <a href="mailto:${safeEmail}" style="margin:0;font-size:15px;color:#F59E0B;font-weight:600;text-decoration:none;border-bottom:1px solid #F59E0B;">${safeEmail}</a>
                        </td>
                        ${safePhone ? `
                        <td style="padding:0 0 18px 0;vertical-align:top;">
                          <p style="margin:0 0 4px 0;font-size:10px;letter-spacing:1.5px;color:#A39780;text-transform:uppercase;font-weight:600;">Phone</p>
                          <a href="tel:${safePhone}" style="margin:0;font-size:15px;color:#1A1F2E;font-weight:600;text-decoration:none;">${safePhone}</a>
                        </td>` : `<td></td>`}
                      </tr>
                    </table>
                  </td>
                </tr>

                <tr>
                  <td style="padding:8px 40px 36px 40px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#FBF8F1;border-radius:10px;">
                      <tr>
                        <td style="padding:24px 26px;border-left:3px solid #F59E0B;border-radius:10px;">
                          <p style="margin:0 0 10px 0;font-size:10px;letter-spacing:1.5px;color:#8A7A5C;text-transform:uppercase;font-weight:700;">Message</p>
                          <p style="margin:0;font-size:15px;line-height:1.65;color:#2C3340;white-space:pre-line;">${safeMessage}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <tr>
                  <td style="padding:0 40px 36px 40px;">
                    <a href="mailto:${safeEmail}${safeSubject ? `?subject=Re:%20${encodeURIComponent(subject)}` : ""}" style="display:inline-block;background:#1A1F2E;color:#FFFFFF;font-size:13px;font-weight:600;letter-spacing:0.4px;text-decoration:none;padding:13px 24px;border-radius:8px;">
                      Reply to ${safeName} &nbsp;&rarr;
                    </a>
                  </td>
                </tr>

              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:24px 16px 8px 16px;text-align:center;">
              <p style="margin:0 0 6px 0;font-size:12px;color:#8A7A5C;font-weight:600;letter-spacing:0.3px;">Engineered for the deep. Built for the long horizon.</p>
              <p style="margin:0;font-size:11px;color:#A39780;">
                <a href="https://horizondrillingsco.com" style="color:#A39780;text-decoration:none;">horizondrillingsco.com</a>
                &nbsp;&middot;&nbsp;
                Sent via the Horizon Drilling &amp; Co contact form
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `,
    });

    res.json({ success: true });
  } catch (err) {
    console.error("Resend error:", err);
    res.status(500).json({ error: "Failed to send email. Please try again later." });
  }
});

export default router;
