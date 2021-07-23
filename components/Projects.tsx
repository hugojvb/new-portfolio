import { FC, Fragment } from "react";
import { Fade } from "react-reveal";

import { projects } from "../utils/projects";

// FUNCTIONAL COMPONENT
const Projects: FC = () => {
	return (
		<div className="min-h-screen flex flex-col items-center bg-secondary mt-32 relative">
			<Fade top>
				<h2 className="text-6xl text-white mb-24 mt-32 font-thin">My Projects</h2>
			</Fade>
			{projects.map((project) => {
				<div className="flex justify-around items-center h-96">
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
