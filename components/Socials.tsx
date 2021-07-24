import { FC, Fragment } from "react";

const socials: { name: string; url: string }[] = [
	{
		name: "Github",
		url: "https://www.github.com/hugojvb",
	},
	{
		name: "LinkedIn",
		url: "https://www.linkedin.com/in/hugojvb",
	},
	{
		name: "Email",
		url: "https://www.github.com/hugojvb",
	},
];

const Socials: FC = () => {
	return (
		<Fragment>
			<div className="min-h-full bg-primary pt-20">
				<h2 className="text-5xl text-center font-thin text-secondary">Reach me</h2>
				<div className="h-48 flex justify-around items center p-24">
					{socials.map((social) => {
						return (
							<a
								href={social.url}
								className="flex justify-center items-center hover:opacity-90 h-20 w-48 rounded-lg bg-secondary text-white"
							>
								{social.name}
							</a>
						);
					})}
				</div>
			</div>
		</Fragment>
	);
};

export default Socials;
