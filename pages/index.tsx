import Head from "next/head";
import { Fragment, FC, useEffect, useState } from "react";

// COMPONENTS
import Hero from "../components/Hero";
import About from "../components/About";
import Technologies from "../components/Technologies";
import Certificates from "../components/Certificates";
import Projects from "../components/Projects";

// CERTIFICATES
const certificates = [
	{
		name: "The Complete Web Developer 2020",
		description: "",
		url: "https://udemy-certificate.s3.amazonaws.com/image/UC-32f95c24-b57c-448d-80ec-9458171ed3ee.jpg?v=1585645681000",
		icon: "/react.svg",
		duration: 35,
	},
	{
		name: "Java Programming Masterclass for Software Developers",
		description: "",
		url: "https://udemy-certificate.s3.amazonaws.com/image/UC-3a182850-7271-42f0-9289-5fb7ceb7954e.jpg?v=1598175416000",
		icon: "/java.svg",
		duration: 80.5,
	},
	{
		name: "Angular - The Complete Guide",
		description: "",
		url: "https://udemy-certificate.s3.amazonaws.com/image/UC-1114ca43-1dd2-476d-b8e4-a93f6769f108.jpg?v=1604263694000",
		icon: "/angular.svg",
		duration: 33.5,
	},
	{
		name: "Modern HTML & CSS from the beginning",
		description: "",
		url: "https://udemy-certificate.s3.amazonaws.com/image/UC-688e1756-653e-4033-93cd-23eaf1cb081c.jpg?v=1591304615000",
		icon: "/html.svg",
		duration: 21,
	},
	{
		name: "Modern Javascript from the beginning",
		description: "",
		url: "https://udemy-certificate.s3.amazonaws.com/image/UC-0d3e9631-75a7-4f8b-843e-a2ad59866b2f.jpg?v=1592179412000",
		icon: "/javascript.svg",
		duration: 21.5,
	},
	{
		name: "Node.js API Masterclass with Express and MongoDB",
		description: "",
		url: "https://udemy-certificate.s3.amazonaws.com/image/UC-14dcab6c-9e47-435f-9895-5b9fe990d655.jpg?v=1594831041000",
		icon: "/node.svg",
		duration: 12,
	},
	{
		name: "React front to back",
		description: "",
		url: "https://udemy-certificate.s3.amazonaws.com/image/UC-b1ea57cc-31a6-400e-8a26-16cdbfe24e63.jpg?v=1594145452000",
		icon: "/react.svg",
		duration: 14,
	},
	{
		name: "Microfrontends with React: A complete developer's guide",
		description: "",
		url: "https://udemy-certificate.s3.amazonaws.com/image/UC-939706bd-171a-4b09-856c-6d13a32e231d.jpg?v=1623284648000",
		icon: "/react.svg",
		duration: 9,
	},
	{
		name: "Nodejs: Advanced Concepts",
		description: "",
		url: "https://udemy-certificate.s3.amazonaws.com/image/UC-e3df1811-664d-4fe1-b1be-31e7aac9332b.jpg?v=1622397467000",
		icon: "/node.svg",
		duration: 16,
	},
];

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
			<Certificates certificates={certificates} />
			<Projects />
			<Technologies />
		</Fragment>
	);
};

export default IndexPage;
