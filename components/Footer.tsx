import { FC } from "react";

// UTILS
import { socials } from "../utils/socials";

const Footer: FC = (): JSX.Element => {
	return (
		<footer className="bg-primary bottom-0 p-3">
			<div className="h-48 flex justify-center items-center p-32">
				<div className="flex border-b-2 border-white">
					{socials.map((social) => {
						return (
							<a
								key={social.name}
								href={social.url}
								target="_blank"
								rel="noopener noreferer"
								className="hover:-translate-y-0.5 duration-100 my-4 mx-4"
							>
								<img src={social.icon} alt={social.name} className="w-8 invert" />
							</a>
						);
					})}
				</div>
			</div>
			<h3 className="text-xs text-white text-center p-0">Copyright &copy; {new Date().getFullYear()} | Hugo Batista | All Rights Reserved </h3>
		</footer>
	);
};

export default Footer;
