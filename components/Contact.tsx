import { FC, Fragment, useState } from "react";

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
				<h2 className="text-5xl text-center font-thin text-secondary mb-14">Contact</h2>
				<form className="w-full flex flex-col justify-around items-center my-8 h-auto">
					<div className="relative w-1/2 my-4">
						<input
							placeholder=" "
							className="py-2 border-b-2 border-secondary w-full outline-none hover:border-primary focus:border-primary"
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
					<div className="relative w-1/2 my-12">
						<input
							placeholder=" "
							className="py-2 border-b-2 border-secondary w-full outline-none hover:border-primary focus:border-primary"
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
							className="py-2 border-b-2 border-secondary w-full resize-none outline-none hover:border-primary focus:border-primary"
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
			</div>
		</Fragment>
	);
};

export default Contact;