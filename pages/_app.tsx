import { useState } from "react";
import axios from "axios";

// GLOBAL STYLING
import "../styles/global.css";

// RECAPTCHA V3 LIBRARY IMPORT
import { GoogleReCaptchaProvider, GoogleReCaptcha } from "react-google-recaptcha-v3";

function MyApp({ Component, pageProps }) {
	const [token, setToken] = useState<string | null>("");

	const handleVerify = async (token) => {
		setToken(token);
		await axios.post("/api/recaptcha", { token });
	};

	return (
		<GoogleReCaptchaProvider
			reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
			scriptProps={{
				async: false, // optional, default to false,
				defer: false, // optional, default to false
				appendTo: "head", // optional, default to "head", can be "head" or "body",
				nonce: undefined, // optional, default undefined
			}}
		>
			<GoogleReCaptcha onVerify={handleVerify} />
			<Component {...pageProps} />
		</GoogleReCaptchaProvider>
	);
}

export default MyApp;
