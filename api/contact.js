import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { name, email, budget, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        const { data, error } = await resend.emails.send({
            from: 'Two Tree Portfolio <onboarding@resend.dev>',
            to: 'hello@twotree.dev',
            subject: `New Project Inquiry from ${name}`,
            reply_to: email,
            html: `
        <h2>New Project Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Budget:</strong> ${budget || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
        });

        if (error) {
            console.error('Resend Error:', error);
            return res.status(500).json({ error: error.message });
        }

        return res.status(200).json({ message: 'Email sent successfully', data });
    } catch (err) {
        console.error('Serverless Function Error:', err);
        return res.status(500).json({ error: 'Failed to send email' });
    }
}
