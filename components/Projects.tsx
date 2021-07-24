import { FC, Fragment } from "react";
import { Fade } from "react-reveal";

// UTILS
import { projects } from "../utils/projects";

// FUNCTIONAL COMPONENT
const Projects: FC = (): JSX.Element => {
	return (
		<div className="min-h-screen flex flex-col items-center bg-secondary mt-24 pb-32 relative">
			<div className="absolute w-full top-0 rotate-180">
				<svg
					className="invert h-20 w-full"
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
				<h2 className="text-6xl text-tertiary mb-24 mt-32 font-thin">My Projects</h2>
			</Fade>
			{projects.map((project) => {
				return (
					<div className="flex flex-col justify-around text-tertiary p-20">
						<Fade top>
							<div className="flex items-center mb-2">
								<img src={project.icon} alt={project.name} className="h-12 w-12 mr-2" />
								<h2 className="text-3xl font-thin">{project.name}</h2>
							</div>
						</Fade>

						<div className="flex justify-around items-center h-96 text-white">
							<div className="w-1/2 p-4">
								<video controls autoPlay muted loop>
									<source src={project.videoURL} type="video/mp4" />
								</video>
							</div>
							<h4 className="w-1/2 text-tertiary p-20 leading-10">
								<em>"{project.description}"</em>
							</h4>
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
		</div>
	);
};

export default Projects;
