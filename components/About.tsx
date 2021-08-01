import { FC } from "react";
import dynamic from "next/dynamic";

// ANIMATE ON SCROLL
const ScrollAnimation = dynamic(() => import("react-animate-on-scroll"), { ssr: false });

// FUNCTIONAL COMPONENT
const About: FC<{ courseHours: number }> = ({ courseHours }): JSX.Element => {
	// EXPERIENCE TIME
	let fullStackExpTime: number = Math.floor((Date.now() - new Date("8/25/2020").getTime()) / 1000 / 60 / 60 / 24 / 30.4);
	let nearshoreExpTime: number = Math.floor((Date.now() - new Date("12/1/2020").getTime()) / 1000 / 60 / 60 / 24 / 30.4);

	// TIME PARSER
	const timeParser = (months: number): string => {
		if (months < 12) {
			return months + " months ";
		} else if (months % 12 === 0) {
			return Math.floor(months / 12) + (Math.floor(months / 12) === 1 ? " year " : " years ");
		} else if (months > 12) {
			return (
				Math.floor(months / 12) +
				(Math.floor(months / 12) === 1 ? " year" : " years") +
				" and " +
				(months % 12) +
				(months % 12 === 1 ? " month " : " months ")
			);
		}
	};

	return (
		<section id="about" className="min-h-screen flex flex-col items-center justify-evenly bg-primary relative">
			<div className="container mb-60">
				<ScrollAnimation animateIn="animate__fadeInDown">
					<h1 className="lg:text-6xl text-5xl font-thin text-secondary text-center mt-12">About Me</h1>
				</ScrollAnimation>
				<div className="text-2xl text-secondary mt-20 flex flex-col md:flex-row justify-evenly items-center">
					<li className="py-8 flex flex-col items-center text-center text-xl mx-8 w-56 ">
						<ScrollAnimation animateIn="animate__fadeInUp">
							<img src="/programming-icons/e-learning.svg" alt="checkmark" className="filter invert h-40 w-40 mb-8" />
						</ScrollAnimation>
						<ScrollAnimation animateIn="animate__fadeInUp">
							<p className="font-normal">+{courseHours} Hours in Targeted Courses</p>
						</ScrollAnimation>
					</li>

					<li className="py-8 flex flex-col items-center text-center text-xl mx-8 w-56">
						<ScrollAnimation animateIn="animate__fadeInUp" delay={200}>
							<img src="/programming-icons/programmer.svg" alt="checkmark" className="filter invert h-40 w-40 mb-8" />
						</ScrollAnimation>
						<ScrollAnimation animateIn="animate__fadeInUp" delay={200}>
							<p className="font-normal">+{timeParser(fullStackExpTime)} in Frontend/Full Stack Development</p>
						</ScrollAnimation>
					</li>

					<li className="py-8 flex flex-col items-center text-center text-xl mx-8 w-56">
						<ScrollAnimation animateIn="animate__fadeInUp" delay={400}>
							<img src="/programming-icons/nearshore.svg" alt="checkmark" className="filter invert h-40 w-40 mb-8 " />
						</ScrollAnimation>
						<ScrollAnimation animateIn="animate__fadeInUp" delay={400}>
							<p className="font-normal">+{timeParser(nearshoreExpTime)} working Nearshore</p>
						</ScrollAnimation>
					</li>
				</div>
			</div>
			<div className="absolute w-full bottom-0">
				<svg className="h-168px" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
					<path
						d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
						className="fill-current text-white"
					></path>
				</svg>
			</div>
		</section>
	);
};

export default About;
