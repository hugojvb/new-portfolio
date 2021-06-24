import Head from "next/head";
import { Fragment, FC, useEffect, useState } from "react";

import { Fade } from "react-reveal";

import dynamic from "next/dynamic";

const Carousel = dynamic(() => import("@brainhubeu/react-carousel"), { ssr: false });
import { autoplayPlugin, arrowsPlugin, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

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
			<div className="min-h-screen flex flex-col items-center bg-white relative ">
				<Fade top>{/* <h1 className="text-6xl font-thin text-primary my-24">My Certificates</h1> */}</Fade>
				<div className="w-2/3 ">
					<Carousel
						plugins={[
							"infinite",
							"centered",
							"arrows",
							{
								resolve: autoplayPlugin,
								options: {
									interval: 4000,
								},
							},
							{
								resolve: slidesToShowPlugin,
								options: {
									numberOfSlides: 1,
								},
							},
							{
								resolve: arrowsPlugin,
								options: {
									arrowLeft: (
										<button>
											<Icon name="angle-double-left" />
										</button>
									),
									arrowLeftDisabled: (
										<button>
											<Icon name="angle-left" />
										</button>
									),
									arrowRight: (
										<button>
											<Icon name="angle-double-right" />
										</button>
									),
									arrowRightDisabled: (
										<button>
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
												<defs>
													<clipPath>
														<path fill="#00f" fill-opacity=".514" d="m-7 1024.36h34v34h-34z" />
													</clipPath>
													<clipPath>
														<path fill="#aade87" fill-opacity=".472" d="m-6 1028.36h32v32h-32z" />
													</clipPath>
												</defs>
												<path
													d="m345.44 248.29l-194.29 194.28c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744l171.91-171.91-171.91-171.9c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.29 194.28c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373"
													transform="matrix(.03541-.00013.00013.03541 2.98 3.02)"
													fill="#4d4d4d"
												/>
											</svg>
										</button>
									),
									addArrowClickHandler: true,
								},
							},
						]}
						animationSpeed={5000}
						draggable={false}
					>
						<div>
							<img
								src="https://udemy-certificate.s3.amazonaws.com/image/UC-32f95c24-b57c-448d-80ec-9458171ed3ee.jpg?v=1585645681000"
								alt="certificate"
							/>
						</div>
						<div>
							<img
								src="https://udemy-certificate.s3.amazonaws.com/image/UC-3a182850-7271-42f0-9289-5fb7ceb7954e.jpg?v=1598175416000"
								alt="certificate"
							/>
						</div>
						<div>
							<img
								src="https://udemy-certificate.s3.amazonaws.com/image/UC-1114ca43-1dd2-476d-b8e4-a93f6769f108.jpg?v=1604263694000"
								alt="certificate"
							/>
						</div>
						<div>
							<img
								src="https://udemy-certificate.s3.amazonaws.com/image/UC-688e1756-653e-4033-93cd-23eaf1cb081c.jpg?v=1591304615000"
								alt="certificate"
							/>
						</div>
						<div>
							<img
								src="https://udemy-certificate.s3.amazonaws.com/image/UC-0d3e9631-75a7-4f8b-843e-a2ad59866b2f.jpg?v=1592179412000"
								alt="certificate"
							/>
						</div>
						<div>
							<img
								src="https://udemy-certificate.s3.amazonaws.com/image/UC-14dcab6c-9e47-435f-9895-5b9fe990d655.jpg?v=1594831041000"
								alt="certificate"
							/>
						</div>
						<div>
							<img
								src="https://udemy-certificate.s3.amazonaws.com/image/UC-b1ea57cc-31a6-400e-8a26-16cdbfe24e63.jpg?v=1594145452000"
								alt="certificate"
							/>
						</div>
						<div>
							<img
								src="https://udemy-certificate.s3.amazonaws.com/image/UC-939706bd-171a-4b09-856c-6d13a32e231d.jpg?v=1623284648000"
								alt="certificate"
							/>
						</div>
						<div>
							<img
								src="https://udemy-certificate.s3.amazonaws.com/image/UC-e3df1811-664d-4fe1-b1be-31e7aac9332b.jpg?v=1622397467000"
								alt="certificate"
							/>
						</div>
					</Carousel>
				</div>
			</div>
		</Fragment>
	);
};

export default IndexPage;
