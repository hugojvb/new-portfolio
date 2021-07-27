import "../styles/global.css";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

function MyApp({ Component, pageProps }) {
	return (
		<GoogleReCaptchaProvider
			reCaptchaKey={process.env.RECAPTCHA_SITE_KEY}
			scriptProps={{
				async: false, // optional, default to false,
				defer: false, // optional, default to false
				appendTo: "head", // optional, default to "head", can be "head" or "body",
				nonce: undefined, // optional, default undefined
			}}
		>
			<Component {...pageProps} />;
		</GoogleReCaptchaProvider>
	);
}

export default MyApp;
