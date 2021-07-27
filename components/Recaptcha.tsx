import { useCallback, useEffect } from "react";

import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

const Recaptcha = (): JSX.Element => {
	const { executeRecaptcha } = useGoogleReCaptcha();

	// Create an event handler so you can call the verification on button click event or form submit
	const handleRecaptchaVerify = useCallback(async () => {
		if (!executeRecaptcha) {
			console.log("Execute recaptcha not yet available");
			return;
		}

		const token = await executeRecaptcha("yourAction");
		// Do whatever you want with the token
	}, []);

	// You can use useEffect to trigger the verification as soon as the component being loaded
	useEffect(() => {
		handleRecaptchaVerify();
	}, [handleRecaptchaVerify]);

	return <button onClick={handleRecaptchaVerify}>Verify recaptcha</button>;
};

export default Recaptcha;
