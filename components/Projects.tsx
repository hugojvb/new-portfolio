import { FC, Fragment } from "react";

// FUNCTIONAL COMPONENT
const Projects: FC = () => {
	return (
		<div className="min-h-screen flex flex-col items-center bg-secondary mt-40">
			<h2 className="text-6xl text-white mb-24 mt-32 font-thin">My Projects</h2>
			<div className="flex justify-around items-center h-96">
				<div className="w-1/2 p-20">
					<video></video>
				</div>

				<h4 className="w-1/2 text-white m-20 p-20 flex items-center justify-center">
					Ex eu officia irure esse velit esse. Quis enim ipsum reprehenderit do fugiat ad est fugiat aute. Officia pariatur Lorem nisi ea
					enim excepteur laborum laboris magna amet. Incididunt tempor nisi irure pariatur et ullamco dolore sit consequat quis nulla ea. In
					irure laboris est cillum proident nostrud consequat sunt amet aliqua et nulla. Incididunt et sunt ipsum qui officia amet.
				</h4>
			</div>
		</div>
	);
};

export default Projects;
