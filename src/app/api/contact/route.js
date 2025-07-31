import formidable from 'formidable';
import fs from 'fs';
import nodemailer from 'nodemailer';

// Disable Next.js body parsing so we can handle multipart
export const config = {
  api: { bodyParser: false },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  // Parse multipart/form-data
  const form = new formidable.IncomingForm({ multiples: true, maxFileSize: 10 * 1024 * 1024 });
  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error('Form parse error:', err);
      return res.status(400).json({ error: 'Error parsing form data.' });
    }

    const { name, phone, service, message } = fields;
    if (!name || !phone || !service || !message) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    // Determine recipients
    const recipients = ['primary@example.com'];
    if (service === 'window-well') {
      recipients.push('second@example.com');
    }

    // Build attachments array from uploaded files
    const attachments = [];
    const uploaded = Array.isArray(files.attachments) ? files.attachments : [files.attachments];
    uploaded.forEach((file) => {
      if (file && file.path) {
        attachments.push({
          filename: file.name,
          content: fs.readFileSync(file.path),
        });
      }
    });

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // Send email
    try {
      await transporter.sendMail({
        from: `"Quote Request" <${process.env.GMAIL_USER}>`,
        to: recipients.join(','),
        subject: `New Quote Request: ${service}`,
        html: `
          <h2>New Quote Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Service:</strong> ${service}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
        attachments,
      });

      return res.status(200).json({ success: true });
    } catch (mailErr) {
      console.error('Email send error:', mailErr);
      return res.status(500).json({ error: 'Failed to send email.' });
    }
  });
}
