import { useState } from "react";

// GLOBAL STYLING
import "../styles/global.css";

// RECAPTCHA V3 LIBRARY IMPORT
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

function MyApp({ Component, pageProps }) {
	return (
		<GoogleReCaptchaProvider
			reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
			scriptProps={{
				async: true, // optional, default to false,
				defer: true, // optional, default to false
				appendTo: "body", // optional, default to "head", can be "head" or "body",
				nonce: undefined, // optional, default undefined
			}}
		>
			<Component {...pageProps} />
		</GoogleReCaptchaProvider>
	);
}

export default MyApp;
