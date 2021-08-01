import { FC, Dispatch, SetStateAction } from "react";
import dynamic from "next/dynamic";

// ANIMATE ON SCROLL
const ScrollAnimation = dynamic(() => import("react-animate-on-scroll"), { ssr: false });

// CAROUSEL IMPORTS
const Carousel = dynamic(() => import("@brainhubeu/react-carousel"), { ssr: false });
import { arrowsPlugin, slidesToShowPlugin, Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

// IMPORT CERT INTERFACE
import { Cert } from "./Certificates";

type setBoolean = Dispatch<SetStateAction<boolean>>;
type setNumber = Dispatch<SetStateAction<number>>;

interface Props {
	setCertificateHovered: setBoolean;
	leftArrowClick: () => void;
	rightArrowClick: () => void;
	slides: JSX.Element[];
	currentSlide: number;
	setCurrentSlide: setNumber;
	certificates: Cert[];
}

// FUNCTIONAL COMPONENT
const CertificatesCarousel: FC<Props> = ({
	setCertificateHovered,
	leftArrowClick,
	rightArrowClick,
	slides,
	currentSlide,
	setCurrentSlide,
	certificates,
}): JSX.Element => {
	return (
		<>
			<div
				className="w-full lg:w-8/12 flex flex-col"
				onMouseEnter={() => setCertificateHovered(true)}
				onMouseLeave={() => setCertificateHovered(false)}
			>
				<ScrollAnimation animateOnce animateIn="animate__fadeIn">
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
											<img src="/arrows/left-arrow.svg" alt="left-arrow" />
										</button>
									),
									arrowLeftDisabled: (
										<button className="w-8 hover:-translate-x-0.5 hover:duration-300 focus:outline-none outline-none">
											<img src="/arrows/left-arrow.svg" alt="left-arrow" />
										</button>
									),
									arrowRight: (
										<button
											onClick={rightArrowClick}
											className="w-8 hover:translate-x-0.5 hover:duration-300 focus:outline-none outline-none"
										>
											<img src="/arrows/right-arrow.svg" alt="right-arrow" />
										</button>
									),
									arrowRightDisabled: (
										<button className="w-8 hover:translate-x-0.5 hover:duration-300 focus:outline-none outline-none">
											<img src="/arrows/right-arrow.svg" alt="right-arrow" />
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
				</ScrollAnimation>
			</div>
			<ScrollAnimation
				animateOnce
				animateIn="animate__fadeIn"
				className="w-full lg:w-4/12 flex flex-col justify-center items-center rounded-xl lg:pl-8 pt-16"
			>
				<img
					src={certificates[currentSlide].icon.url}
					alt={certificates[currentSlide].icon.url}
					className={
						certificates[currentSlide].icon.size == "small" ? "h-32" : certificates[currentSlide].icon.size == "medium" ? "h-36" : "h-44"
					}
				/>
				<em>
					<p className="m-8 text-center text-xl text-secondary max-h-full overflow-auto">"{certificates[currentSlide].name}"</p>
				</em>
			</ScrollAnimation>
		</>
	);
};

export default CertificatesCarousel;
