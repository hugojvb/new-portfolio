import React from "react";
import { Fade } from "react-reveal";

// SCROLL INTO ABOUT SECTION
const scrollToNextSection = () => {
	document.getElementById("about").scrollIntoView({ behavior: "smooth" });
};

// FUNCTIONAL COMPONENT
const Hero = (): JSX.Element => {
	return (
		<header className="min-h-screen flex flex-col items-center justify-center">
			<Fade top>
				<h1 className="text-5xl lg:text-7xl text-secondary antialiased font-thin text-center">I am Hugo and I love what I do</h1>
			</Fade>
			<Fade top delay={500}>
				<button
					onClick={scrollToNextSection}
					className="custom-fill text-2xl lg:text-3xl rounded-full border-solid border-2 border-primary p-3 font-thin text-secondary mt-10 focus:outline-none"
				>
					More About Me
				</button>
			</Fade>
		</header>
	);
};

export default Hero;
