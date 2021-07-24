import { techStack } from "./techstack";

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
		stack: techStack.filter((stack) => stack.name === "react")[0],
		duration: 35,
	},
	{
		name: "Java Programming Masterclass for Software Developers",
		description: "",
		url: "/certificates/cert_java.jpg",
		stack: techStack.filter((stack) => stack.name === "java")[0],
		duration: 80.5,
	},
	{
		name: "Angular - The Complete Guide",
		description: "",
		url: "/certificates/cert_angular.jpg",
		stack: techStack.filter((stack) => stack.name === "angular")[0],
		duration: 33.5,
	},
	{
		name: "Modern HTML & CSS from the beginning",
		description: "",
		url: "/certificates/cert_html.jpg",
		stack: techStack.filter((stack) => stack.name === "html")[0],
		duration: 21,
	},
	{
		name: "Modern Javascript from the beginning",
		description: "",
		url: "/certificates/cert_javascript.jpg",
		stack: techStack.filter((stack) => stack.name === "javascript")[0],
		duration: 21.5,
	},
	{
		name: "Node.js API Masterclass with Express and MongoDB",
		description: "",
		url: "/certificates/cert_node.jpg",
		stack: techStack.filter((stack) => stack.name === "node")[0],
		duration: 12,
	},
	{
		name: "React front to back",
		description: "",
		url: "/certificates/cert_react.jpg",
		stack: techStack.filter((stack) => stack.name === "react")[0],
		duration: 14,
	},
	{
		name: "Microfrontends with React: A complete developer's guide",
		description: "",
		url: "/certificates/cert_microreact.jpg",
		stack: techStack.filter((stack) => stack.name === "react")[0],
		duration: 9,
	},
	{
		name: "Nodejs: Advanced Concepts",
		description: "",
		url: "/certificates/cert_advancednode.jpg",
		stack: techStack.filter((stack) => stack.name === "node")[0],
		duration: 16,
	},
];
