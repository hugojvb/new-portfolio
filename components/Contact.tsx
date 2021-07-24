import { FC, Fragment } from "react";

const contacts: { name: string; url: string; icon: string }[] = [
	{
		name: "Github",
		url: "https://www.github.com/hugojvb",
		icon: "/contact-icons/github.svg",
	},
	{
		name: "LinkedIn",
		url: "https://www.linkedin.com/in/hugojvb",
		icon: "/contact-icons/linkedin.svg",
	},
	{
		name: "Email",
		url: "https://www.github.com/hugojvb",
		icon: "/contact-icons/email.svg",
	},
];

const Contact: FC = () => {
	return (
		<Fragment>
			<div className="min-h-full pt-20 pb-20 border-t-2 border-gray-50">
				<h2 className="text-5xl text-center font-thin text-secondary">Contact</h2>
				<form className="w-full flex flex-col justify-around items-center my-8 h-80">
					<div className="relative w-1/2">
						<input placeholder=" " className="p-2 border-b-2 border-secondary w-full outline-none" type="text" name="name" />
						<label className="absolute left-2 bottom-2.5" htmlFor="name">
							Name
						</label>
					</div>
					<div className="relative w-1/2">
						<input placeholder=" " className="p-2 border-b-2 border-secondary w-full outline-none" type="email" name="email" />
						<label className="absolute left-2 bottom-2.5" htmlFor="email">
							Email
						</label>
					</div>
					<div className="relative w-1/2">
						<textarea
							rows={3}
							placeholder=" "
							className="p-2 border-b-2 border-secondary w-full resize-none outline-none"
							name="message"
						></textarea>
						<label className="absolute left-2 top-2" htmlFor="message">
							Message
						</label>
					</div>
				</form>
				<div className="h-48 flex justify-evenly items center p-24">
					{contacts.map((contact) => {
						return (
							<a
								href={contact.url}
								target="_blank"
								rel="noopener noreferer"
								className="flex justify-center items-center bg-gray-100 hover:-translate-y-0.5 duration-100 h-16 w-40 rounded-full bg-white text-secondary"
							>
								<img src={contact.icon} alt={contact.name} className="w-6 mr-2" />
							</a>
						);
					})}
				</div>
			</div>
		</Fragment>
	);
};

export default Contact;
