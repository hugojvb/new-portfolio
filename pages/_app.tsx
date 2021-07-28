import { useState } from "react";

// GLOBAL STYLING
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />;
}

export default MyApp;
