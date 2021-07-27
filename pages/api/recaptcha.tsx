import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const recaptcha = async (req: NextApiRequest, res: NextApiResponse) => {
	// POST /api/recaptcha
	if (req.method === "POST") {
		let siteverify;

		try {
			const { token } = req.body;

			// CHECK IF TOKEN IS VALID
			siteverify = await axios.post("https://www.google.com/recaptcha/api/siteverify", {
				params: { secret: process.env.RECAPTCHA_SECRET_KEY, response: token },
			});

			// TOKEN IS VALID
			if (siteverify.data.sucess) return res.send({ success: true });
		} catch (e) {
			// ERROR HANDLING
			return res.send({ success: false, error: siteverify.data["error-codes"] });
		}
	}
};

export default recaptcha;
