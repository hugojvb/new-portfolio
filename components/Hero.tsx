import React from "react";
import { Fade } from "react-reveal";

function Hero() {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center">
			<Fade top>
				<h1 className="text-7xl text-primary antialiased font-thin">I am Hugo and I love what I do</h1>
			</Fade>
			<Fade top delay={500}>
				<button
					onClick={(e) => window.scrollTo({ top: window.innerHeight, left: 0, behavior: "smooth" })}
					className="custom-fill text-3xl rounded-full border-solid border-2 border-primary p-3 font-thin text-primary mt-10 focus:outline-none"
				>
					More About Me
				</button>
			</Fade>
		</div>
	);
}

export default Hero;
