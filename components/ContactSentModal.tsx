import { FC, Dispatch, SetStateAction } from "react";

const ContactSentModal: FC<{ setShowModal: Dispatch<SetStateAction<boolean>>; sendSuccess: boolean }> = ({
	setShowModal,
	sendSuccess,
}): JSX.Element => {
	return sendSuccess ? (
		<>
			<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ease-linear transition-all duration-150">
				<div className="relative w-5/6 md:w-auto my-6 mx-auto max-w-3xl">
					<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
						<div className="flex items-start justify-center p-5 border-b border-solid border-gray-100 rounded-t">
							<h3 className="text-3xl font-thin text-center">Message sent successfully</h3>
						</div>
						<div className="relative p-6 mb-8 flex-auto text-center flex flex-col items-center">
							<img src="/feedback/checkmark.svg" alt="checkmark" className="w-28 my-8" />
							<p className="my-4 text-blueGray-500 text-lg leading-relaxed font-thin">
								Thank you for your contact. <br /> I'll get back to you as soon as possible!
							</p>
						</div>
						<div className="flex items-center justify-end p-2 border-t border-solid border-gray-100 rounded-b">
							<button
								className="custom-fill text-secondary bg-white border border-primary font-bold rounded-full uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hover:opacity-70"
								type="button"
								onClick={() => setShowModal(false)}
							>
								Ok
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
		</>
	) : (
		<>
			<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ease-linear transition-all duration-150">
				<div className="relative w-5/6 md:w-auto my-6 mx-auto max-w-3xl">
					<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
						<div className="flex items-start justify-center p-5 border-b border-solid border-gray-100 rounded-t">
							<h3 className="text-3xl font-thin text-center">Something went wrong</h3>
						</div>
						<div className="relative p-6 mb-8 flex-auto text-center flex flex-col items-center">
							<img src="/feedback/error.svg" alt="error" className="w-28 my-8" />
							<p className="my-4 text-blueGray-500 text-lg leading-relaxed font-thin">
								Failed to send your contact form. <br /> Please try again.
							</p>
						</div>
						<div className="flex items-center justify-end p-2 border-t border-solid border-gray-100 rounded-b">
							<button
								className="custom-fill text-secondary bg-white border border-primary font-bold rounded-full uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hover:opacity-70"
								type="button"
								onClick={() => setShowModal(false)}
							>
								Ok
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
		</>
	);
};

export default ContactSentModal;
