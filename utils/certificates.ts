import { techIcons } from "./techicons";

interface certs {
	name: string;
	description: string;
	url: string;
	stack: { name: string; url: string; heightClass: string; widthClass?: string };
	duration: number;
}

export const certificates: certs[] = [
	{
		name: "The Complete Web Developer 2020",
		description: "",
		url: "/certificates/cert_completeweb.jpg",
		stack: techIcons.filter((icon) => icon.name === "react")[0],
		duration: 35,
	},
	{
		name: "Java Programming Masterclass for Software Developers",
		description: "",
		url: "/certificates/cert_java.jpg",
		stack: techIcons.filter((icon) => icon.name === "java")[0],
		duration: 80.5,
	},
	{
		name: "Angular - The Complete Guide",
		description: "",
		url: "/certificates/cert_angular.jpg",
		stack: techIcons.filter((icon) => icon.name === "angular")[0],
		duration: 33.5,
	},
	{
		name: "Modern HTML & CSS from the beginning",
		description: "",
		url: "/certificates/cert_html.jpg",
		stack: techIcons.filter((icon) => icon.name === "html")[0],
		duration: 21,
	},
	{
		name: "Modern Javascript from the beginning",
		description: "",
		url: "/certificates/cert_javascript.jpg",
		stack: techIcons.filter((icon) => icon.name === "javascript")[0],
		duration: 21.5,
	},
	{
		name: "Node.js API Masterclass with Express and MongoDB",
		description: "",
		url: "/certificates/cert_node.jpg",
		stack: techIcons.filter((icon) => icon.name === "node")[0],
		duration: 12,
	},
	{
		name: "React front to back",
		description: "",
		url: "/certificates/cert_react.jpg",
		stack: techIcons.filter((icon) => icon.name === "react")[0],
		duration: 14,
	},
	{
		name: "Microfrontends with React: A complete developer's guide",
		description: "",
		url: "/certificates/cert_microreact.jpg",
		stack: techIcons.filter((icon) => icon.name === "react")[0],
		duration: 9,
	},
	{
		name: "Nodejs: Advanced Concepts",
		description: "",
		url: "/certificates/cert_advancednode.jpg",
		stack: techIcons.filter((icon) => icon.name === "node")[0],
		duration: 16,
	},
];
