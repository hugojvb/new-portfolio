import { FC, useState, useEffect } from "react";

import { Fade } from "react-reveal";

import dynamic from "next/dynamic";

const Carousel = dynamic(() => import("@brainhubeu/react-carousel"), { ssr: false });
const Dots = dynamic(() => import("@brainhubeu/react-carousel").then((mod) => mod.Dots), { ssr: false });
import { autoplayPlugin, arrowsPlugin, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

const Certificates: FC = () => {
	const [dotValue, setDotValue] = useState(0);
	const [certificateHovered, setCertificateHovered] = useState(false);

	const [slides, setSlides] = useState([
		<img src="https://udemy-certificate.s3.amazonaws.com/image/UC-32f95c24-b57c-448d-80ec-9458171ed3ee.jpg?v=1585645681000" alt="certificate" />,
		<img src="https://udemy-certificate.s3.amazonaws.com/image/UC-3a182850-7271-42f0-9289-5fb7ceb7954e.jpg?v=1598175416000" alt="certificate" />,
		<img src="https://udemy-certificate.s3.amazonaws.com/image/UC-1114ca43-1dd2-476d-b8e4-a93f6769f108.jpg?v=1604263694000" alt="certificate" />,
		<img src="https://udemy-certificate.s3.amazonaws.com/image/UC-688e1756-653e-4033-93cd-23eaf1cb081c.jpg?v=1591304615000" alt="certificate" />,
		<img src="https://udemy-certificate.s3.amazonaws.com/image/UC-0d3e9631-75a7-4f8b-843e-a2ad59866b2f.jpg?v=1592179412000" alt="certificate" />,
		<img src="https://udemy-certificate.s3.amazonaws.com/image/UC-14dcab6c-9e47-435f-9895-5b9fe990d655.jpg?v=1594831041000" alt="certificate" />,
		<img src="https://udemy-certificate.s3.amazonaws.com/image/UC-b1ea57cc-31a6-400e-8a26-16cdbfe24e63.jpg?v=1594145452000" alt="certificate" />,
		<img src="https://udemy-certificate.s3.amazonaws.com/image/UC-939706bd-171a-4b09-856c-6d13a32e231d.jpg?v=1623284648000" alt="certificate" />,
		<img src="https://udemy-certificate.s3.amazonaws.com/image/UC-e3df1811-664d-4fe1-b1be-31e7aac9332b.jpg?v=1622397467000" alt="certificate" />,
	]);

	useEffect(() => {
		let interval;

		if (!certificateHovered) {
			interval = setInterval(() => {
				if (dotValue + 1 < slides.length) {
					setDotValue(dotValue + 1);
				} else {
					setDotValue(dotValue - slides.length + 1);
				}
			}, 3000);
		}

		return () => {
			clearInterval(interval);
		};
	});

	// Button Clicks

	const leftArrowClick = () => {
		if (dotValue + 1 < slides.length) {
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
				<h1 className="text-6xl font-thin text-secondary mb-24 mt-8">My Certificates</h1>
			</Fade>

			<div
				className="w-3/4 flex justify-around"
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
					{dotValue === 0 ? (
						<div className="w-1/2 flex flex-col justify-center items-center bg-tertiary rounded-xl ml-8">
							<img src="/react.svg" alt="react" className="h-28 w-28 mb-2.5" />
							<p className="font-thin p-12 text-xl text-secondary max-h-60 overflow-auto">Course for learning the MERN stack</p>
						</div>
					) : dotValue === 1 ? (
						<div className="w-1/2 flex flex-col justify-center items-center bg-tertiary rounded-xl ml-8">
							<img src="/java.svg" alt="java" className="h-20 w-20 mb-2.5" />
							<p className="font-thin p-12 text-xl text-secondary max-h-60 overflow-auto">Java course of 80 hours</p>
						</div>
					) : dotValue === 2 ? (
						<div className="w-1/2 flex flex-col justify-center items-center bg-tertiary rounded-xl ml-8">
							<img src="/angular.svg" alt="angular" className="h-20 w-20 mb-2.5" />
							<p className="font-thin p-12 text-xl text-secondary max-h-60 overflow-auto">Angular course</p>
						</div>
					) : dotValue === 3 ? (
						<div className="w-1/2 flex flex-col justify-center items-center bg-tertiary rounded-xl ml-8">
							<img src="/html.svg" alt="html" className="h-20 w-20 mb-2.5" />
							<p className="font-thin p-12 text-xl text-secondary max-h-60 overflow-auto">HTML and CSS course</p>
						</div>
					) : dotValue === 4 ? (
						<div className="w-1/2 flex flex-col justify-center items-center bg-tertiary rounded-xl ml-8">
							<img src="/javascript.svg" alt="javascript" className="h-20 w-20 mb-2.5" />
							<p className="font-thin p-12 text-xl text-secondary max-h-60 overflow-auto">Javascript course</p>
						</div>
					) : dotValue === 5 ? (
						<div className="w-1/2 flex flex-col justify-center items-center bg-tertiary rounded-xl ml-8">
							<img src="/node.svg" alt="node" className="h-20 w-20 mb-2.5" />
							<p className="font-thin p-12 text-xl text-secondary max-h-60 overflow-auto">Node course</p>
						</div>
					) : dotValue === 6 ? (
						<div className="w-1/2 flex flex-col justify-center items-center bg-tertiary rounded-xl ml-8">
							<img src="/react.svg" alt="react" className="h-20 w-20 mb-2.5" />
							<p className="font-thin p-12 text-xl text-secondary max-h-60 overflow-auto">React course</p>
						</div>
					) : dotValue === 7 ? (
						<div className="w-1/2 flex flex-col justify-center items-center bg-tertiary rounded-xl ml-8">
							<img src="/react.svg" alt="react" className="h-20 w-20 mb-2.5" />
							<p className="font-thin p-12 text-xl text-secondary max-h-60 overflow-auto">Advanced react course</p>
						</div>
					) : (
						<div className="w-1/2 flex flex-col justify-center items-center bg-tertiary rounded-xl ml-8">
							<img src="/node.svg" alt="node" className="h-20 w-20 mb-2.5" />
							<p className="font-thin p-12 text-xl text-secondary max-h-60 overflow-auto">Advanced node course</p>
						</div>
					)}
				</Fade>
			</div>
		</div>
	);
};

export default Certificates;
