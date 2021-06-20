import Head from "next/head";
import { Fragment, FC } from "react";
import { Fade, Slide } from "react-reveal";

const IndexPage: FC = () => (
	<Fragment>
		<Head>
			<title>Hugo Batista - Software Developer</title>
			<link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png" />
			<link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png" />
			<link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png" />
			<link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png" />
			<link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png" />
			<link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png" />
			<link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png" />
			<link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png" />
			<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png" />
			<link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-icon-192x192.png" />
			<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
			<link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png" />
			<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
			<link rel="manifest" href="/favicon/manifest.json" />
			<meta name="msapplication-TileColor" content="#ffffff" />
			<meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png" />
			<meta name="theme-color" content="#ffffff" />
		</Head>
		<div className="min-h-screen flex flex-col items-center justify-center">
			<Fade top>
				<h1 className="text-7xl text-primary antialiased font-thin">I am Hugo and I love what I do</h1>
			</Fade>
			<Fade top delay={500}>
				<button
					onClick={(e) => window.scrollBy({ top: window.innerHeight, left: 0, behavior: "smooth" })}
					className="text-3xl rounded-full border-solid border-2 border-primary p-3 font-thin text-primary mt-10 focus:outline-none hover:bg-gray-100"
				>
					More About Me
				</button>
			</Fade>
		</div>
		<div className="min-h-screen flex flex-col items-center justify-evenly bg-primary">
			<div className="container">
				<Slide top>
					<h1 className="text-6xl font-thin text-white">About Me</h1>
				</Slide>
				<Slide bottom delay={500}>
					<ul className="list-inside text-2xl text-white mt-12 ml-12">
						<li className="py-4 flex">
							<img src="/checkmark.svg" alt="checkmark" className="mr-6 filter invert" /> I am a Software Developer who loves to learn.
						</li>
						<li className="py-4 flex">
							<img src="/checkmark.svg" alt="checkmark" className="mr-6 filter invert" /> My favorite language is Javascript, working
							with React, Node and Typescript.
						</li>
						<li className="py-4 flex">
							<img src="/checkmark.svg" alt="checkmark" className="mr-6 filter invert" /> My strength is in the Front End.
						</li>
					</ul>
				</Slide>
			</div>
		</div>
	</Fragment>
);

export default IndexPage;
