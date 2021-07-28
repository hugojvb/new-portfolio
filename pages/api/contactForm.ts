import { NextApiRequest, NextApiResponse } from "next";

import nodemailer from "nodemailer";

const contactForm = async (req: NextApiRequest, res: NextApiResponse) => {
	// POST /api/contactform
	if (req.method === "POST") {
		try {
			const { name, email, message } = req.body;

			// create reusable transporter object using the default SMTP transport
			let transporter = nodemailer.createTransport({
				service: "Gmail",
				host: "smtp.ethereal.email",
				port: 587,
				secure: false, // true for 465, false for other ports
				auth: {
					user: process.env.EMAIL_USERNAME,
					pass: process.env.EMAIL_PASSWORD,
				},
			});

			// send mail with defined transport object
			let info = await transporter.sendMail({
				from: `Contact request from ${name}`,
				to: process.env.SEND_MAIL_TO,
				subject: "Received contact from hugojvb.com",
				text: message,
				html: `<b>${message}</b>`,
			});

			console.log("Message sent: %s", info.messageId);

			return res.send({ success: true });
		} catch (e) {
			// ERROR HANDLING
			return res.send({ success: false });
		}
	}
};

export default contactForm;
