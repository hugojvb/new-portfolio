import { FC } from "react";
import { Fade } from "react-reveal";

const About: FC = () => {
	return (
		<div className="min-h-screen flex flex-col items-center justify-evenly bg-primary relative">
			<div className="container mb-60">
				<Fade top>
					<h1 className="text-6xl font-thin text-white">About Me</h1>
				</Fade>
				<div className="text-2xl text-white mt-12 ml-12 flex justify-around">
					<Fade bottom delay={1000}>
						<li className="py-4 flex flex-col">
							<Fade left delay={1500}>
								<img src="/checkmark.svg" alt="checkmark" className="filter invert" />
							</Fade>
							I am a Software Developer who loves to learn.
						</li>
					</Fade>

					<Fade bottom delay={1500}>
						<li className="py-4 flex flex-col">
							<Fade left delay={2000}>
								<img src="/checkmark.svg" alt="checkmark" className="filter invert" />
							</Fade>
							My strength is in the Front End.
						</li>
					</Fade>

					<Fade bottom delay={2500}>
						<li className="py-4 flex flex-col">
							<Fade left delay={3000}>
								<img src="/checkmark.svg" alt="checkmark" className="filter invert" />
							</Fade>
							+1 year experience in Fdivl Stack Development
						</li>
					</Fade>
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
