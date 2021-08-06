import { NextApiRequest, NextApiResponse } from "next";

import sgMail from "@sendgrid/mail";

const contactForm = async (req: NextApiRequest, res: NextApiResponse) => {
	// POST /api/contactform
	if (req.method === "POST") {
		try {
			// GRAB BODY FROM REQUEST
			const { name, email, message } = req.body;

			// VALIDATE INPUT FORM
			if (name.length < 3 || !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) || message.length < 50) return;

			// SET API KEY FROM SENDGRID
			sgMail.setApiKey(process.env.SENDGRID_API_KEY);

			// SEND EMAIL TO MULTIPLE RECIPIENTS
			try {
				await sgMail.send({
					to: process.env.SEND_MAIL_TO, // Change to your recipient
					from: process.env.SEND_MAIL_FROM, // Change to your verified sender
					subject: `Received contact from ${name} <${email}>`,
					text: message,
					html: `<b>${message} from <${email}></b>`,
				});
			} catch (error) {
				console.error(error);

				if (error.response) {
					console.error(error.response.body);
				}

				throw Error(error);
			}

			return res.send({ success: true });
		} catch (e) {
			// ERROR HANDLING
			return res.send({ success: false, error: e });
		}
	}
};

export default contactForm;
