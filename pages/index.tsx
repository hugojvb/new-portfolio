import Head from "next/head";
import { Fragment, FC, useEffect, useState } from "react";

// COMPONENTS
import Hero from "../components/Hero";
import About from "../components/About";
import Technologies from "../components/Technologies";
import Certificates from "../components/Certificates";
import Projects from "../components/Projects";
import { cursorTo } from "readline";

// CERTIFICATES
const certificates = [
	{
		name: "The Complete Web Developer 2020",
		description: "",
		url: "/cert_completeweb.jpg",
		icon: "/react.svg",
		duration: 35,
	},
	{
		name: "Java Programming Masterclass for Software Developers",
		description: "",
		url: "/cert_java.jpg",
		icon: "/java.svg",
		duration: 80.5,
	},
	{
		name: "Angular - The Complete Guide",
		description: "",
		url: "/cert_angular.jpg",
		icon: "/angular.svg",
		duration: 33.5,
	},
	{
		name: "Modern HTML & CSS from the beginning",
		description: "",
		url: "/cert_html.jpg",
		icon: "/html.svg",
		duration: 21,
	},
	{
		name: "Modern Javascript from the beginning",
		description: "",
		url: "/cert_javascript.jpg",
		icon: "/javascript.svg",
		duration: 21.5,
	},
	{
		name: "Node.js API Masterclass with Express and MongoDB",
		description: "",
		url: "/cert_node.jpg",
		icon: "/node.svg",
		duration: 12,
	},
	{
		name: "React front to back",
		description: "",
		url: "/cert_react.jpg",
		icon: "/react.svg",
		duration: 14,
	},
	{
		name: "Microfrontends with React: A complete developer's guide",
		description: "",
		url: "/cert_microreact.jpg",
		icon: "/react.svg",
		duration: 9,
	},
	{
		name: "Nodejs: Advanced Concepts",
		description: "",
		url: "/cert_advancednode.jpg",
		icon: "/node.svg",
		duration: 16,
	},
];

const courseHours = certificates.reduce((sum, cur) => sum + cur.duration, 0);

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
			<About courseHours={courseHours} />
			<Certificates certificates={certificates} />
			<Projects />
			<Technologies />
		</Fragment>
	);
};

export default IndexPage;
