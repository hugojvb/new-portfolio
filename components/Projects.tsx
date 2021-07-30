import { FC } from "react";
import { Fade } from "react-reveal";

// UTILS
import { projects } from "../utils/projects";

// FUNCTIONAL COMPONENT
const Projects: FC = (): JSX.Element => {
	return (
		<section className="min-h-screen flex flex-col items-center bg-secondary mt-8 lg:mt-24 pb-32 relative">
			<div className="absolute w-full top-0 rotate-180">
				<svg
					className="invert h-10 w-full"
					data-name="Layer 1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1200 120"
					preserveAspectRatio="none"
				>
					<path
						d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
						className="shape-fill"
					></path>
				</svg>
			</div>
			<Fade top>
				<h2 className="lg:text-6xl text-5xl text-tertiary mb-24 mt-32 font-thin text-center">My Projects</h2>
			</Fade>
			{projects.map((project) => {
				return (
					<div key={project.name} className="flex flex-col justify-around text-tertiary p-10">
						<Fade top>
							<div className="flex items-center mb-6">
								<img src={project.icon} alt={project.name} className="h-12 w-12 mr-2" />
								<h2 className="lg:text-3xl text-2xl font-thin">{project.name}</h2>
							</div>
						</Fade>

						<div className="flex flex-col lg:flex-row justify-around items-center h-full text-white lg:px-1">
							<Fade>
								<div className="w-full lg:w-1/2 p-0">
									<video controls autoPlay muted loop>
										<source src={project.videoURL} type="video/mp4" />
									</video>
								</div>
							</Fade>
							<div className="lg:w-1/2 w-full flex flex-col justify-around h-full p-4 mt-4 lg:px-8 xl:px-16 lg:py-0">
								<h4 className="text-tertiary leading-10">
									<em>"{project.description}"</em>
								</h4>
								<div className="flex mt-4">
									<a
										href={project.sourceURL}
										target="_blank"
										rel="noopener noreferer"
										className="custom-fill-white border border-tertiary rounded-full w-24 h-10 focus:outline-none flex justify-center items-center"
									>
										Source
									</a>
									<a
										href={project.liveURL}
										target="_blank"
										rel="noopener noreferer"
										className="ml-10 hover:text-gray-400 transition-all hover:duration-300 focus:outline-none flex justify-center items-center"
									>
										Live
									</a>
								</div>
							</div>
						</div>
					</div>
				);
			})}

			<div className="absolute w-full bottom-0">
				<svg
					className="invert h-20 w-full"
					data-name="Layer 1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1200 120"
					preserveAspectRatio="none"
				>
					<path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" className="shape-fill"></path>
				</svg>
			</div>
		</section>
	);
};

export default Projects;
