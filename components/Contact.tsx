import { FC, Fragment, useState } from "react";

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
	const [nameInput, setNameInput] = useState<string | null>("");
	const [emailInput, setEmailInput] = useState<string | null>("");
	const [messageInput, setMessageInput] = useState<string | null>("");

	const submitMessage = (e) => {
		e.preventDefault();

		if (!nameInput || !emailInput || !messageInput) return;
	};

	return (
		<Fragment>
			<div className="min-h-full pt-20 pb-20 border-t-2 border-gray-50">
				<h2 className="text-5xl text-center font-thin text-secondary">Contact</h2>
				<form className="w-full flex flex-col justify-around items-center my-8 h-auto">
					<div className="relative w-1/2 my-4">
						<input
							placeholder=" "
							className="py-2 border-b-2 border-secondary w-full outline-none"
							type="text"
							name="name"
							value={nameInput}
							onChange={(e) => setNameInput(e.target.value)}
							required
						/>
						<label className="absolute left-0 bottom-2.5" htmlFor="name">
							Name *
						</label>
					</div>
					<div className="relative w-1/2 my-4">
						<input
							placeholder=" "
							className="py-2 border-b-2 border-secondary w-full outline-none"
							type="email"
							name="email"
							value={emailInput}
							onChange={(e) => setEmailInput(e.target.value)}
							required
						/>
						<label className="absolute left-0 bottom-2.5" htmlFor="email">
							Email *
						</label>
					</div>
					<div className="relative w-1/2 my-4">
						<textarea
							rows={3}
							placeholder=" "
							className="py-2 border-b-2 border-secondary w-full resize-none outline-none"
							name="message"
							value={messageInput}
							onChange={(e) => setMessageInput(e.target.value)}
							required
						></textarea>
						<label className="absolute left-0 top-2" htmlFor="message">
							Message *
						</label>
					</div>
					<button
						type="submit"
						onClick={submitMessage}
						className="custom-fill border-2 border-primary rounded-full w-32 h-14 focus:outline-none mt-14"
					>
						Submit
					</button>
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
