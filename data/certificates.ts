import { techIcons } from "./techicons";

interface cert {
  name: string;
  description: string;
  url: string;
  icon: { name: string; url: string; size: string };
  duration: number;
}

export const certificates: cert[] = [
  {
    name: "The Complete Web Developer",
    description: "",
    url: "https://udemy-certificate.s3.amazonaws.com/image/UC-32f95c24-b57c-448d-80ec-9458171ed3ee.jpg?v=1585645681000",
    icon: techIcons.find((icon) => icon.name === "react"),
    duration: 35,
  },
  {
    name: "Java Programming Masterclass for Software Developers",
    description: "",
    url: "https://udemy-certificate.s3.amazonaws.com/image/UC-3a182850-7271-42f0-9289-5fb7ceb7954e.jpg?v=1598175416000",
    icon: techIcons.find((icon) => icon.name === "java"),
    duration: 80.5,
  },
  {
    name: "Angular - The Complete Guide",
    description: "",
    url: "https://udemy-certificate.s3.amazonaws.com/image/UC-1114ca43-1dd2-476d-b8e4-a93f6769f108.jpg?v=1604263694000",
    icon: techIcons.find((icon) => icon.name === "angular"),
    duration: 33.5,
  },
  {
    name: "Modern HTML & CSS from the beginning",
    description: "",
    url: "https://udemy-certificate.s3.amazonaws.com/image/UC-688e1756-653e-4033-93cd-23eaf1cb081c.jpg?v=1591304615000",
    icon: techIcons.find((icon) => icon.name === "html"),
    duration: 21,
  },
  {
    name: "Modern Javascript from the beginning",
    description: "",
    url: "https://udemy-certificate.s3.amazonaws.com/image/UC-0d3e9631-75a7-4f8b-843e-a2ad59866b2f.jpg?v=1592179412000",
    icon: techIcons.find((icon) => icon.name === "javascript"),
    duration: 21.5,
  },
  {
    name: "Node.js API Masterclass with Express and MongoDB",
    description: "",
    url: "https://udemy-certificate.s3.amazonaws.com/image/UC-14dcab6c-9e47-435f-9895-5b9fe990d655.jpg?v=1594831041000",
    icon: techIcons.find((icon) => icon.name === "mongoDB"),
    duration: 12,
  },
  {
    name: "React front to back",
    description: "",
    url: "https://udemy-certificate.s3.amazonaws.com/image/UC-b1ea57cc-31a6-400e-8a26-16cdbfe24e63.jpg?v=1594145452000",
    icon: techIcons.find((icon) => icon.name === "react"),
    duration: 14,
  },
  {
    name: "Microfrontends with React: A complete developer's guide",
    description: "",
    url: "https://udemy-certificate.s3.amazonaws.com/image/UC-939706bd-171a-4b09-856c-6d13a32e231d.jpg?v=1623284648000",
    icon: techIcons.find((icon) => icon.name === "webpack"),
    duration: 9,
  },
  {
    name: "Nodejs: Advanced Concepts",
    description: "",
    url: "https://udemy-certificate.s3.amazonaws.com/image/UC-e3df1811-664d-4fe1-b1be-31e7aac9332b.jpg?v=1622397467000",
    icon: techIcons.find((icon) => icon.name === "node"),
    duration: 16,
  },
  {
    name: "Implement High Fidelity Designs with Material-UI and ReactJS",
    description: "",
    url: "https://udemy-certificate.s3.amazonaws.com/image/UC-a5b291a2-80d1-4a2f-9672-99a0d960fae4.jpg?v=1627680413000",
    icon: techIcons.find((icon) => icon.name === "material-ui"),
    duration: 40.5,
  },
  {
    name: "Advanced React and Redux",
    description: "",
    url: "https://udemy-certificate.s3.amazonaws.com/image/UC-a5b43c1c-b1a5-4db6-bebe-be022fb350d7.jpg?v=1630261091000",
    icon: techIcons.find((icon) => icon.name === "redux"),
    duration: 21,
  },
  {
    name: "Spring & Hibernate for Beginners (includes Spring Boot)",
    description: "",
    url: "https://udemy-certificate.s3.amazonaws.com/image/UC-7240a830-ba54-438b-9ce4-5b3497692213.jpg?v=1634411347000",
    icon: techIcons.find((icon) => icon.name === "spring"),
    duration: 42.5,
  },
  {
    name: "Docker and Kubernetes: The Complete Guide",
    description: "",
    url: "https://udemy-certificate.s3.amazonaws.com/image/UC-64d54668-eaa7-4805-9671-107572052b5f.jpg?v=1649706929000",
    icon: techIcons.find((icon) => icon.name === "docker"),
    duration: 22,
  },
];
