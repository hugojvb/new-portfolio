import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const recaptcha = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === "POST") {
		let siteverify;

		try {
			const { token } = req.body;

			siteverify = await axios.post("https://www.google.com/recaptcha/api/siteverify", {
				params: { secret: process.env.RECAPTCHA_SECRET_KEY, response: token },
			});

			if (siteverify.data.sucess) return res.send({ success: true });
		} catch (e) {
			return res.send({ success: false, error: siteverify.data["error-codes"] });
		}
	}
};

export default recaptcha;
