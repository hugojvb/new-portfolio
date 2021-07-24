import { FC, Fragment } from "react";
import { Fade } from "react-reveal";

// UTILS
import { projects } from "../utils/projects";

// FUNCTIONAL COMPONENT
const Projects: FC = (): JSX.Element => {
	return (
		<div className="min-h-screen flex flex-col items-center bg-secondary mt-24 pb-20 relative">
			<div className="custom-shape-divider-top-1627074170 absolute w-full top-0 left-0 overflow-hidden leading-none rotate-180">
				<svg
					className="block h-40px invert"
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
				<h2 className="text-6xl text-white mb-24 mt-32 font-thin">My Projects</h2>
			</Fade>
			{projects.map((project) => {
				return (
					<div className="flex flex-col justify-around text-white p-20">
						<Fade top>
							<h2 className="text-3xl font-thin mb-8">{project.name}</h2>
						</Fade>

						<div className="flex justify-around items-center h-96 text-white">
							<div className="w-1/2 p-20">
								<video controls autoPlay muted>
									<source src={project.videoURL} type="video/mp4" />
								</video>
							</div>
							<h4 className="w-1/2 text-white p-20 leading-10">{project.description}</h4>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Projects;
