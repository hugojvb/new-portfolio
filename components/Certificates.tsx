import { FC, useState, useEffect, Fragment } from "react";

import { Fade } from "react-reveal";

import dynamic from "next/dynamic";
import Image from "next/image";

// CAROUSEL IMPORTS
const Carousel = dynamic(() => import("@brainhubeu/react-carousel"), { ssr: false });
import { arrowsPlugin, slidesToShowPlugin, Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

// TYPE OF CERTIFICATES PROPS
interface Certs {
	name: string;
	description: string;
	url: string;
	icon: string;
	duration: number;
}

// FUNCTIONAL COMPONENT
const Certificates: FC<{ certificates: Certs[] }> = ({ certificates }) => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [certificateHovered, setCertificateHovered] = useState(false);

	let slides = [];

	// ADD SLIDES FOR CAROUSEL
	for (let certificate of certificates) {
		slides.push(<img src={certificate.url} alt={certificate.name} loading="lazy" />);
	}

	useEffect(() => {
		let interval;

		// CAROUSEL AUTOPLAY ONLY WHEN NOT HOVERED
		if (!certificateHovered) {
			interval = setInterval(() => {
				if (currentSlide + 1 < slides.length) {
					setCurrentSlide(currentSlide + 1);
				} else {
					setCurrentSlide(currentSlide - slides.length + 1);
				}
			}, 2000);
		}

		return () => {
			clearInterval(interval);
		};
	});

	// CAROUSEL LEFT ARROW CLICK
	const leftArrowClick = () => {
		if (currentSlide > 0) {
			setCurrentSlide(currentSlide - 1);
		} else {
			setCurrentSlide(currentSlide + slides.length - 1);
		}
	};

	// CAROUSEL RIGHT ARROW CLICK
	const rightArrowClick = () => {
		if (currentSlide + 1 < slides.length) {
			setCurrentSlide(currentSlide + 1);
		} else {
			setCurrentSlide(currentSlide - slides.length + 1);
		}
	};

	return (
		<div className="min-h-screen flex flex-col items-center bg-white relative mt-12">
			<Fade top>
				<h2 className="text-6xl font-thin text-secondary mb-24 mt-8">My Certificates</h2>
			</Fade>

			<div className="w-full flex justify-around container">
				<Fade left>
					<div
						className="w-8/12 flex flex-col"
						onMouseEnter={() => setCertificateHovered(true)}
						onMouseLeave={() => setCertificateHovered(false)}
					>
						<Carousel
							plugins={[
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
							draggable={false}
							slides={slides}
							value={currentSlide}
						></Carousel>
						<Dots value={currentSlide} onChange={(value) => setCurrentSlide(value)} number={slides.length} />
					</div>
				</Fade>
				<Fade right>
					<div className="w-1/2 flex flex-col justify-center items-center bg-tertiary rounded-xl ml-8">
						<img src={certificates[currentSlide].icon} alt={certificates[currentSlide].icon} className="h-28 w-28 mb-2.5" />
						<em>
							<p className="font-thin m-16 text-center text-xl text-secondary max-h-full overflow-auto">
								"{certificates[currentSlide].name}"
							</p>
						</em>
					</div>
				</Fade>
			</div>
		</div>
	);
};

export default Certificates;
