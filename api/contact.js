import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Where inquiries are delivered. Set CONTACT_TO_EMAIL in Vercel to change it without a deploy.
const CONTACT_TO = process.env.CONTACT_TO_EMAIL || 'hello@twotree.dev';

const MAX_LENGTH = { name: 200, email: 320, budget: 200, message: 5000 };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Form fields are untrusted: escape them before putting them into the email HTML.
const escapeHtml = (value) =>
    String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const fields = {};
        for (const key of Object.keys(MAX_LENGTH)) {
            const value = req.body?.[key];
            fields[key] = typeof value === 'string' ? value.trim() : '';
        }
        const { name, email, budget, message } = fields;

        if (!name || !email || !message) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        if (!EMAIL_PATTERN.test(email)) {
            return res.status(400).json({ error: 'Please enter a valid email address.' });
        }

        if (Object.entries(fields).some(([key, value]) => value.length > MAX_LENGTH[key])) {
            return res.status(400).json({ error: 'That message is too long. Please shorten it and try again.' });
        }

        const { data, error } = await resend.emails.send({
            from: 'Two Tree <inquiry@about.twotree.dev>',
            to: CONTACT_TO,
            subject: `New Project Inquiry from ${name.replace(/[\r\n]+/g, ' ')}`,
            replyTo: email,
            text: `Name: ${name}\nEmail: ${email}\nBudget: ${budget || 'Not specified'}\n\n${message}`,
            html: `
        <h2>New Project Inquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Budget:</strong> ${escapeHtml(budget || 'Not specified')}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap">${escapeHtml(message)}</p>
      `,
        });

        if (error) {
            console.error('Resend Error:', error);
            return res.status(500).json({ error: 'Something went wrong. Please try again or email hello@twotree.dev.' });
        }

        return res.status(200).json({ message: 'Email sent successfully', id: data?.id });
    } catch (err) {
        console.error('Serverless Function Error:', err);
        return res.status(500).json({ error: 'Failed to send email' });
    }
}
