import { NextApiRequest, NextApiResponse } from "next";

import sgMail from "@sendgrid/mail";

const contactForm = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      const { name, email, message } = req.body;

      if (
        name.length < 3 ||
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) ||
        message.length < 50
      )
        return;

      sgMail.setApiKey(process.env.SENDGRID_API_KEY);

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
      return res.send({ success: false, error: e });
    }
  }
};

export default contactForm;
