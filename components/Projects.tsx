import { FC, Fragment } from "react";
import { Fade } from "react-reveal";

import { projects } from "../utils/projects";

// FUNCTIONAL COMPONENT
const Projects: FC = () => {
	return (
		<div className="min-h-screen flex flex-col items-center bg-secondary mt-24 relative">
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
				<div className="flex justify-around items-center h-96 text-white">
					<h3>{project.name}</h3>
					<div className="w-1/2 p-20">
						<video src={project.videoURL}></video>
					</div>
					<h4 className="w-1/2 text-white m-20 p-20 flex items-center justify-center">{project.description}</h4>
				</div>;
			})}
		</div>
	);
};

export default Projects;
