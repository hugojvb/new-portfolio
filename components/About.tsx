import { FC } from "react";
import { Fade } from "react-reveal";

const About: FC<{ courseHours: number }> = ({ courseHours }) => {
	let fullStackExpTime: number = Math.floor((Date.now() - new Date("8/25/2020").getTime()) / 1000 / 60 / 60 / 24 / 30.4);
	let nearshoreExpTime: number = Math.floor((Date.now() - new Date("12/1/2020").getTime()) / 1000 / 60 / 60 / 24 / 30.4);
	let fullStackExpParsed: string;
	let nearshoreExpParsed: string;

	// FULLSTACK EXPERIENCE TIME PARSER
	if (fullStackExpTime < 12) {
		fullStackExpParsed = fullStackExpTime + " months ";
	} else if (fullStackExpTime % 12 === 0) {
		fullStackExpParsed = Math.floor(fullStackExpTime / 12) + (Math.floor(fullStackExpTime / 12) === 1 ? " year " : " years ");
	} else if (fullStackExpTime > 12) {
		fullStackExpParsed =
			Math.floor(fullStackExpTime / 12) +
			(Math.floor(fullStackExpTime / 12) === 1 ? " year" : " years") +
			" and " +
			(fullStackExpTime % 12) +
			(fullStackExpTime % 12 === 1 ? " month " : " months ");
	}

	// NEARSHORE EXPERIENCE TIME PARSER
	if (nearshoreExpTime < 12) {
		nearshoreExpParsed = nearshoreExpTime + " months ";
	} else if (nearshoreExpTime % 12 === 0) {
		nearshoreExpParsed = Math.floor(nearshoreExpTime / 12) + (Math.floor(nearshoreExpTime / 12) === 1 ? " year " : " years ");
	} else if (nearshoreExpTime > 12) {
		nearshoreExpParsed =
			Math.floor(nearshoreExpTime / 12) +
			(Math.floor(nearshoreExpTime / 12) === 1 ? " year" : " years") +
			" and " +
			(nearshoreExpTime % 12) +
			(nearshoreExpTime % 12 === 1 ? " month " : " months ");
	}

	return (
		<div className="min-h-screen flex flex-col items-center justify-evenly bg-primary relative">
			<div className="container mb-60">
				<Fade top>
					<h1 className="text-6xl font-thin text-secondary text-center">About Me</h1>
				</Fade>
				<div className="text-2xl text-secondary mt-20 flex justify-evenly">
					<li className="py-4 flex flex-col items-center text-center text-xl mx-8 w-56">
						<Fade bottom>
							<img src="/e-learning.svg" alt="checkmark" className="filter invert h-40 w-40 mb-8" />
						</Fade>
						<Fade bottom>
							<p className="font-normal">+{courseHours} Hours in Targeted Courses</p>
						</Fade>
					</li>

					<li className="py-4 flex flex-col items-center text-center text-xl mx-8 w-56">
						<Fade bottom delay={200}>
							<img src="/programmer.svg" alt="checkmark" className="filter invert h-40 w-40 mb-8" />
						</Fade>
						<Fade bottom delay={200}>
							<p className="font-normal">+{fullStackExpParsed} experience in Frontend/Full Stack Development</p>
						</Fade>
					</li>

					<li className="py-4 flex flex-col items-center text-center text-xl mx-8 w-56">
						<Fade bottom delay={400}>
							<img src="/nearshore.svg" alt="checkmark" className="filter invert h-40 w-40 mb-8 " />
						</Fade>
						<Fade bottom delay={400}>
							<p className="font-normal">+{nearshoreExpParsed} experience working Nearshore</p>
						</Fade>
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
		</div>
	);
};

export default About;
