import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({message: 'Method not allowed'});
    }
    console.log('Bot field value:', req.body.botField)
    if (req.body.botField) {
        return res.status(400).json({message: 'Bot detected'});
    }

    const {name, email, message} = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({message: 'Missing required fields'});
    }

    try {
        await sendgrid.send({
            to: process.env.EMAIL_TO,
            from: process.env.EMAIL_FROM,
            subject: `New Message from ${name}`,
            text: `
You received a new message from your website contact form:

Name: ${name}
Email: ${email}
Message:
${message}
            `,
        });


        return res.status(200).json({message: 'Message sent successfully'});

    } catch (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({message: 'Error sending email'});
    }
}