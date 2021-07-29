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

	// PROCESSING SENDING
	const [processing, setProcessing] = useState<boolean | null>(false);

	// MODAL FOR CONTACT FORM SENT
	const [showModal, setShowModal] = useState<boolean | null>(false);

	// RECAPTCHA HANDLING
	const [recaptchaValidated, setRecaptchaValidated] = useState<boolean | null>(false);

	const recaptchaRef = useRef<any | null>(null);

	const verifyRecaptcha = async () => {
		const checkToken = await axios.post("/api/recaptcha", { token: recaptchaRef.current.getValue() });

		if (checkToken.data.success) setRecaptchaValidated(true);
	};

	// SUBMIT CONTACT FORM
	const submitMessage = async (e) => {
		e.preventDefault();

		if (!nameInput || !emailInput || !messageInput || !recaptchaValidated) return;

		setProcessing(true);

		let response = await axios.post("/api/contactForm", { name: nameInput, email: emailInput, message: messageInput });

		if (response.data.success) {
			setShowModal(true);
			setNameInput("");
			setEmailInput("");
			setMessageInput("");
			setProcessing(false);
			recaptchaRef.current.reset();
		}
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
						{processing ? "Processing . . ." : "Submit"}
					</button>
				</form>
			</div>
			{showModal && (
				<>
					<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ease-linear transition-all duration-150">
						<div className="relative w-auto my-6 mx-auto max-w-3xl">
							{/*content*/}
							<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
								{/*header*/}
								<div className="flex items-start justify-center p-5 border-b border-solid border-gray-100 rounded-t">
									<h3 className="text-3xl font-thin">Message sent successfully</h3>
								</div>
								{/*body*/}
								<div className="relative p-6 mb-8 flex-auto text-center flex flex-col items-center">
									<img src="/feedback/checkmark.svg" alt="checkmark" className="w-28 my-8" />
									<p className="my-4 text-blueGray-500 text-lg leading-relaxed font-thin">
										Thank you for your contact. <br /> I'll get back to you as soon as possible!
									</p>
								</div>
								{/*footer*/}
								<div className="flex items-center justify-end p-2 border-t border-solid border-gray-100 rounded-b">
									<button
										className="custom-fill text-secondary bg-white border border-primary font-bold rounded-full uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hover:opacity-70"
										type="button"
										onClick={() => setShowModal(false)}
									>
										Ok
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
				</>
			)}
		</section>
	);
};

export default Contact;
