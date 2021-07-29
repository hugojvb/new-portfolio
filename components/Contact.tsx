import { FC, useEffect, useState, useRef } from "react";

import axios from "axios";

// CONTACT CHILDREN IMPORTS
import ContactSentModal from "./ContactSentModal";
import ContactForm from "./ContactForm";

// FUNCTIONAL COMPONENT
const Contact: FC = (): JSX.Element => {
	// FORM INPUTS CONTROL
	const [nameInput, setNameInput] = useState<string | null>("");
	const [emailInput, setEmailInput] = useState<string | null>("");
	const [messageInput, setMessageInput] = useState<string | null>("");

	// INPUT ERROR HANDLING
	const [nameError, setNameError] = useState<boolean | null>(false);
	const [emailError, setEmailError] = useState<boolean | null>(false);
	const [messageError, setMessageError] = useState<boolean | null>(false);
	const [recaptchaError, setRecaptchaError] = useState<boolean | null>(false);

	// PROCESSING AFTER SUBMIT
	const [processing, setProcessing] = useState<boolean | null>(false);
	const [showModal, setShowModal] = useState<boolean | null>(false);
	const [sendSuccess, setSendSuccess] = useState<boolean | null>(false);

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

		// RESET FORM INPUT ERRORS
		setNameError(false);
		setEmailError(false);
		setMessageError(false);
		setRecaptchaError(false);

		let errorFound: boolean = false;

		// FORM FIELDS VALIDATION
		if (!recaptchaValidated) {
			errorFound = true;
			setRecaptchaError(true);
		}
		if (nameInput.length < 3) {
			errorFound = true;
			setNameError(true);
		}
		if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput)) {
			errorFound = true;
			setEmailError(true);
		}
		if (messageInput.length < 50) {
			errorFound = true;
			setMessageError(true);
		}

		if (errorFound) return;

		setProcessing(true);

		let response = await axios.post("/api/contactForm", { name: nameInput, email: emailInput, message: messageInput });

		if (response.data.success) {
			setSendSuccess(true);
			setNameInput("");
			setEmailInput("");
			setMessageInput("");
			setProcessing(false);
			setShowModal(true);
			recaptchaRef.current.reset();
		} else if (!response.data.success) {
			setSendSuccess(false);
			setProcessing(false);
			setShowModal(true);
			recaptchaRef.current.reset();
		}
	};

	return (
		<section>
			<div className="min-h-full pt-20 pb-20 border-t-2 border-gray-50">
				<h2 className="text-5xl text-center font-thin text-secondary mb-14">Contact</h2>
				<ContactForm
					nameInput={nameInput}
					setNameInput={setNameInput}
					nameError={nameError}
					emailInput={emailInput}
					setEmailInput={setEmailInput}
					emailError={emailError}
					messageInput={messageInput}
					setMessageInput={setMessageInput}
					messageError={messageError}
					recaptchaRef={recaptchaRef}
					verifyRecaptcha={verifyRecaptcha}
					recaptchaError={recaptchaError}
					submitMessage={submitMessage}
					processing={processing}
				/>
			</div>
			{showModal && <ContactSentModal setShowModal={setShowModal} sendSuccess={sendSuccess} />}
		</section>
	);
};

export default Contact;
