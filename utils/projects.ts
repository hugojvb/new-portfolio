interface projects {
	name: string;
	description: string;
	videoURL: string;
	sourceURL: string;
	liveURL: string;
	icon: string;
}

export const projects: projects[] = [
	{
		name: "Fitbit Workout Tracker",
		description:
			"Developed a Progressive Web App that shows fitbit user data in a minimalistic and responsive grid UI. Built with React (Context, Hooks, Suspense) and the Fitbit API. Deployed with Netlify.",
		videoURL: "/videos/fitbit.mp4",
		sourceURL: "https://github.com/hugojvb/workouttracker",
		liveURL: "https://peaceful-darwin-1a89b0.netlify.app/start",
		icon: "/projects-icons/fitbit.svg",
	},
	{
		name: "Expense Tracker",
		description:
			"Created a Full Stack Web App that allows any registered user to add and remove their expenses and spending goals and track them in a monthly basis. Built with the MEAN stack and Bootstrap. Deployed with Heroku and Netlify.",
		videoURL: "/videos/expense.mp4",
		sourceURL: "https://github.com/hugojvb/expensetracker",
		liveURL: "https://suspicious-roentgen-805db7.netlify.app/",
		icon: "/projects-icons/expense.svg",
	},
	{
		name: "Alexa Skill",
		description:
			"Developed a skill for Alexa that returns a random fact or curiosity about Lisbon using an AWS lambda function and the sdk kit for Java. Published in Amazon UK and US.",
		videoURL: "/videos/alexa.mp4",
		sourceURL: "https://github.com/hugojvb/alexa-skill",
		liveURL:
			"https://www.amazon.com/Hugo-Batista-Lisbon-Facts/dp/B08HVNF51H/ref=sr_1_1?dchild=1&keywords=lisbon+facts&qid=1600113652&s=digital-skills&sr=1-1",
		icon: "/projects-icons/alexa.svg",
	},
	{
		name: "EDP Price Simulator",
		description:
			"Built a simulator to calculate the monthly electricity bill based on three different plans, each with different prices and specificities.",
		videoURL: "/videos/edp_simulador.mp4",
		sourceURL: "https://github.com/hugojvb/simulador-edp",
		liveURL: "https://hardcore-davinci-078170.netlify.app/",
		icon: "/projects-icons/edp.svg",
	},
];
