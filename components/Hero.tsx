import dynamic from "next/dynamic";

// ANIMATE ON SCROLL
const ScrollAnimation = dynamic(() => import("react-animate-on-scroll"), {
	ssr: false,
});

// SCROLL INTO ABOUT SECTION
const scrollToNextSection = () => {
	document.getElementById("about").scrollIntoView({ behavior: "smooth" });
};

// FUNCTIONAL COMPONENT
const Hero = (): JSX.Element => {
	return (
		<header className="min-h-screen flex flex-col items-center justify-center">
			<ScrollAnimation
				animateOnce
				animateIn="animate__fadeInDown"
				delay={250}
			>
				<h1 className="text-5xl lg:text-7xl text-secondary antialiased font-thin text-center">
					I am Hugo and I love what I do
				</h1>
			</ScrollAnimation>
			<ScrollAnimation
				animateOnce
				animateIn="animate__fadeInDown"
				delay={500}
			>
				<button
					onClick={scrollToNextSection}
					className="custom-fill text-2xl lg:text-3xl rounded-full border-solid border-2 border-primary p-3 font-thin text-secondary mt-10 focus:outline-none"
				>
					More About Me
				</button>
			</ScrollAnimation>
		</header>
	);
};

export default Hero;
