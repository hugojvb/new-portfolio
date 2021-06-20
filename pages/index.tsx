import Head from "next/head";
import { Fragment, FC } from "react";
import { Fade } from "react-reveal";

const IndexPage: FC = () => (
	<Fragment>
		<Head>
			<title>Hugo Batista - Software Developer</title>
		</Head>
		<div className="min-h-screen flex flex-col items-center justify-center">
			<Fade top>
				<h1 className="text-7xl text-yellow-300 antialiased font-thin">I am Hugo and I love what I do</h1>
			</Fade>
			<Fade top delay={1000}>
				<button className="text-3xl rounded-full border-solid border-2 border-yellow-300 p-3 font-thin text-yellow-300 mt-10 focus:outline-none hover:bg-gray-100">
					More About Me
				</button>
			</Fade>
		</div>
	</Fragment>
);

export default IndexPage;
