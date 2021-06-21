import Head from "next/head";
import { Fragment, FC, useEffect, useState } from "react";

import { Fade } from "react-reveal";

// COMPONENTS
import Hero from "../components/Hero";
import About from "../components/About";
import Technologies from "../components/Technologies";

const IndexPage: FC = () => {
	return (
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

			<Hero />
			<About />
			<Technologies />
			<div className="min-h-screen flex flex-col items-center justify-evenly bg-primary relative">
				<div className="container mb-60">
					<Fade top>
						<h1 className="text-6xl font-thin text-white">About Me</h1>
					</Fade>
					<ul className="list-inside text-2xl text-white mt-12 ml-12">
						<Fade bottom delay={1000}>
							<li className="py-4 flex">
								<Fade left delay={1500}>
									<img src="/checkmark.svg" alt="checkmark" className="mr-6 filter invert" />
								</Fade>
								I am a Software Developer who loves to learn.
							</li>
						</Fade>

						<Fade bottom delay={1500}>
							<li className="py-4 flex">
								<Fade left delay={2000}>
									<img src="/checkmark.svg" alt="checkmark" className="mr-6 filter invert" />
								</Fade>
								My strength is in the Front End.
							</li>
						</Fade>
						<Fade bottom delay={2000}>
							<li className="py-4 flex">
								<Fade left delay={2500}>
									<img src="/checkmark.svg" alt="checkmark" className="mr-6 filter invert" />
								</Fade>
							</li>
						</Fade>
					</ul>
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
		</Fragment>
	);
};

export default IndexPage;
