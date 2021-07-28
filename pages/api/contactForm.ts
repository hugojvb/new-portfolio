import { NextApiRequest, NextApiResponse } from "next";

import nodemailer from "nodemailer";

const contactForm = async (req: NextApiRequest, res: NextApiResponse) => {
	// POST /api/contactform
	if (req.method === "POST") {
		try {
			// GRAB BODY FROM REQUEST
			const { name, email, message } = req.body;

			// SMTP TRANSPORTER
			let transporter = nodemailer.createTransport({
				service: "Gmail",
				host: "smtp.gmail",
				port: 587,
				secure: false, // true for 465, false for other ports
				auth: {
					user: process.env.EMAIL_USERNAME,
					pass: process.env.EMAIL_PASSWORD,
				},
			});

			// SEND MAIL FROM TRANSPORT
			let info = await transporter.sendMail({
				from: email,
				to: process.env.SEND_MAIL_TO,
				subject: `Received contact from ${name}`,
				text: message,
				html: `<b>${message}</b>`,
			});

			console.log("Message sent: %s", info.messageId);

			return res.send({ success: true });
		} catch (e) {
			// ERROR HANDLING
			return res.send({ success: false, error: e });
		}
	}
};

export default contactForm;
