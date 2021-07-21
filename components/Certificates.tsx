import { FC, useState, useEffect, Fragment } from "react";

import { Fade } from "react-reveal";

import dynamic from "next/dynamic";

const Carousel = dynamic(() => import("@brainhubeu/react-carousel"), { ssr: false });
import { arrowsPlugin, slidesToShowPlugin, Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

interface Certs {
	name: string;
	description: string;
	url: string;
	icon: string;
	duration: number;
}

const Certificates: FC<{ certificates: Certs[] }> = ({ certificates }) => {
	const [dotValue, setDotValue] = useState(0);
	const [certificateHovered, setCertificateHovered] = useState(false);

	let slides = [];

	for (let certificate of certificates) {
		slides.push(certificate.url);
	}

	useEffect(() => {
		let interval;

		if (!certificateHovered) {
			interval = setInterval(() => {
				if (dotValue + 1 < slides.length) {
					setDotValue(dotValue + 1);
				} else {
					setDotValue(dotValue - slides.length + 1);
				}
			}, 2000);
		}

		return () => {
			clearInterval(interval);
		};
	});

	// Button Clicks
	const leftArrowClick = () => {
		if (dotValue > 0) {
			setDotValue(dotValue - 1);
		} else {
			setDotValue(dotValue + slides.length - 1);
		}
	};

	const rightArrowClick = () => {
		if (dotValue + 1 < slides.length) {
			setDotValue(dotValue + 1);
		} else {
			setDotValue(dotValue - slides.length + 1);
		}
	};

	return (
		<div className="min-h-screen flex flex-col items-center bg-white relative mt-20">
			<Fade top>
				<h2 className="text-6xl font-thin text-secondary mb-24 mt-8">My Certificates</h2>
			</Fade>

			<div
				className="w-full flex justify-around container"
				onMouseEnter={() => setCertificateHovered(true)}
				onMouseLeave={() => setCertificateHovered(false)}
			>
				<Fade left>
					<div className="w-8/12 flex flex-col">
						<Carousel
							plugins={[
								"infinite",
								"centered",
								{
									resolve: arrowsPlugin,
									options: {
										arrowLeft: (
											<button
												onClick={leftArrowClick}
												className="w-8 hover:-translate-x-0.5 hover:duration-300 focus:outline-none outline-none"
											>
												<img src="/left-arrow.svg" alt="left-arrow" />
											</button>
										),
										arrowLeftDisabled: (
											<button className="w-8 hover:-translate-x-0.5 hover:duration-300 focus:outline-none outline-none">
												<img src="/left-arrow.svg" alt="left-arrow" />
											</button>
										),
										arrowRight: (
											<button
												onClick={rightArrowClick}
												className="w-8 hover:translate-x-0.5 hover:duration-300 focus:outline-none outline-none"
											>
												<img src="/right-arrow.svg" alt="right-arrow" />
											</button>
										),
										arrowRightDisabled: (
											<button className="w-8 hover:translate-x-0.5 hover:duration-300 focus:outline-none outline-none">
												<img src="/right-arrow.svg" alt="right-arrow" />
											</button>
										),
									},
								},
								{
									resolve: slidesToShowPlugin,
									options: {
										numberOfSlides: 1,
									},
								},
							]}
							animationSpeed={1500}
							draggable={false}
							slides={slides}
							value={dotValue}
						></Carousel>
						<Dots value={dotValue} onChange={(value) => setDotValue(value)} number={slides.length} />
					</div>
				</Fade>
				<Fade right>
					<div className="w-1/2 flex flex-col justify-center items-center bg-tertiary rounded-xl ml-8">
						{certificates.map((c) => {
							<Fragment>
								<img src={c.icon} alt={c.icon} className="h-28 w-28 mb-2.5" />
								<p className="font-thin m-16 text-center text-xl text-secondary max-h-full overflow-auto">{c.name}</p>
							</Fragment>;
						})}
					</div>
					;
				</Fade>
			</div>
		</div>
	);
};

export default Certificates;
