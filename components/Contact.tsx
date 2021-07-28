import { FC, useEffect, useState, useRef } from "react";

import axios from "axios";

// RECAPTCHA V2
import ReCAPTCHA from "react-google-recaptcha";

// FUNCTIONAL COMPONENT
const Contact: FC = (): JSX.Element => {
	// FORM INPUTS CONTROL
	const [nameInput, setNameInput] = useState<string | null>("");
	const [emailInput, setEmailInput] = useState<string | null>("");
	const [messageInput, setMessageInput] = useState<string | null>("");

	// RECAPTCHA HANDLING
	const [recaptchaValidated, setRecaptchaValidated] = useState<boolean | null>(false);

	const recaptchaRef = useRef<any | null>(null);

	const verifyRecaptcha = async () => {
		const checkToken = await axios.post("/api/recaptcha", { token: recaptchaRef.current.getValue() });

		console.log(checkToken);
		if (checkToken.data.success) setRecaptchaValidated(true);
	};

	// SUBMIT CONTACT FORM
	const submitMessage = async (e) => {
		e.preventDefault();

		if (!nameInput || !emailInput || !messageInput || !recaptchaValidated) return;

		let response = axios.post("/api/contactform", { name: nameInput, email: emailInput, message: messageInput });
	};

	return (
		<section>
			<div className="min-h-full pt-20 pb-20 border-t-2 border-gray-50">
				<h2 className="text-5xl text-center font-thin text-secondary mb-14">Contact</h2>
				<form className="w-full flex flex-col justify-around items-center my-8 h-auto">
					<div className="relative w-5/6 lg:w-1/2 my-4">
						<input
							placeholder=" "
							className="py-2 border-b-2 border-secondary w-full outline-none hover:border-primary transition-all duration-300 focus:border-primary"
							type="text"
							name="name"
							value={nameInput}
							onChange={(e) => setNameInput(e.target.value)}
							required
						/>
						<label className="absolute left-0 bottom-2.5" htmlFor="name">
							Name *
						</label>
					</div>
					<div className="relative w-5/6 lg:w-1/2 my-12">
						<input
							placeholder=" "
							className="py-2 border-b-2 border-secondary w-full outline-none hover:border-primary transition-all duration-300 focus:border-primary"
							type="email"
							name="email"
							value={emailInput}
							onChange={(e) => setEmailInput(e.target.value)}
							required
						/>
						<label className="absolute left-0 bottom-2.5" htmlFor="email">
							Email *
						</label>
					</div>
					<div className="relative w-5/6 lg:w-1/2 my-4">
						<textarea
							rows={3}
							placeholder=" "
							className="py-2 border-b-2 border-secondary w-full resize-none outline-none hover:border-primary transition-all duration-300 focus:border-primary"
							name="message"
							value={messageInput}
							onChange={(e) => setMessageInput(e.target.value)}
							required
						></textarea>
						<label className="absolute left-0 top-2" htmlFor="message">
							Message *
						</label>
					</div>
					<div className="mt-6">
						<ReCAPTCHA ref={recaptchaRef} sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} onChange={verifyRecaptcha} hl="en" />
					</div>
					<button
						type="submit"
						onClick={submitMessage}
						className="custom-fill border-2 border-primary rounded-full w-32 h-14 focus:outline-none mt-14"
					>
						Submit
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
