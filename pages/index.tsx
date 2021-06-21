import Head from "next/head";
import dynamic from "next/dynamic";
import { Fragment, FC, useEffect, useState } from "react";
import { Fade } from "react-reveal";

const Carousel = dynamic(() => import("@brainhubeu/react-carousel"), { ssr: false });
import { autoplayPlugin } from "@brainhubeu/react-carousel";
import { slidesToShowPlugin } from "@brainhubeu/react-carousel";

import "@brainhubeu/react-carousel/lib/style.css";

// COMPONENTS
import Hero from "../components/Hero";

const IndexPage: FC = () => {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

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

			<div className="min-h-50 flex flex-col items-center justify-start bg-white">
				<Fade top>
					<h1 className="text-6xl font-thin text-primary mb-40">Technologies</h1>
				</Fade>
				{mounted && (
					<Carousel
						plugins={[
							"infinite",
							{
								resolve: autoplayPlugin,
								options: {
									interval: 2000,
								},
							},
							{
								resolve: slidesToShowPlugin,
								options: {
									numberOfSlides: 5,
								},
							},
						]}
					>
						<div>
							<img src="/html.svg" height="100" width="100" />
						</div>
						<div>
							<img src="/css.svg" height="100" width="100" />
						</div>
						<div>
							<img src="/javascript.svg" height="100" width="100" />
						</div>
						<div>
							<img src="/typescript.svg" height="100" width="100" />
						</div>
						<div>
							<img src="/react.svg" height="100" width="100" />
						</div>
						<div>
							<img src="/node.svg" height="100" width="100" />
						</div>
						<div>
							<img src="/next.svg" height="100" width="100" />
						</div>
					</Carousel>
				)}
			</div>
		</Fragment>
	);
};

export default IndexPage;
