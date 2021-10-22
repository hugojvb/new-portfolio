import { FC, useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";

// ANIMATE ON SCROLL
const ScrollAnimation = dynamic(() => import("react-animate-on-scroll"), {
	ssr: false,
});

// CAROUSEL FOR ALL CERTIFICATES
import CertificatesCarousel from "./CertificatesCarousel";

// CHECK IF COMPONENT IS VISIBLE HOOK
import { useOnScreen } from "../utils/useOnScreen";

// TYPE OF CERTIFICATES PROPS
export interface Cert {
	name: string;
	description: string;
	url: string;
	icon: { name: string; url: string; size: string };
	duration: number;
}

// FUNCTIONAL COMPONENT
const Certificates: FC<{ certificates: Cert[] }> = ({
	certificates,
}): JSX.Element => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [certificateHovered, setCertificateHovered] = useState(false);
	const [renderCertificates, setRenderCertificates] = useState(false);

	// IS VISIBLE BASED ON CERTIFICATES REF
	const certificatesRef = useRef();
	const certificatesSectionRef = useRef();
	const isVisible = useOnScreen(certificatesRef);
	const isSectionVisible = useOnScreen(certificatesSectionRef);

	let slides: JSX.Element[] = [];

	// ADD SLIDES FOR CAROUSEL
	for (let certificate of certificates) {
		slides.push(<img src={certificate.url} alt={certificate.name} />);
	}

	useEffect(() => {
		let interval;

		if (isSectionVisible) setRenderCertificates(true);

		// CAROUSEL AUTOPLAY ONLY WHEN NOT HOVERED
		if (!certificateHovered && isVisible) {
			interval = setInterval(() => {
				if (currentSlide + 1 < slides.length) {
					setCurrentSlide(currentSlide + 1);
				} else {
					setCurrentSlide(currentSlide - slides.length + 1);
				}
			}, 1500);
		}

		return () => {
			clearInterval(interval);
		};
	}, [certificateHovered, currentSlide, isVisible]);

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
		<section
			className="min-h-screen lg:min-h-full flex flex-col items-center bg-white mt-12"
			ref={certificatesSectionRef}
		>
			<ScrollAnimation animateOnce animateIn="animate__fadeInDown">
				<h2 className="lg:text-6xl text-5xl font-thin text-secondary mb-24 mt-8 text-center">
					My Certificates
				</h2>
			</ScrollAnimation>

			<div
				className="w-full flex flex-col lg:flex-row lg:p-8 justify-around container"
				ref={certificatesRef}
			>
				{renderCertificates && (
					<CertificatesCarousel
						setCertificateHovered={setCertificateHovered}
						leftArrowClick={leftArrowClick}
						rightArrowClick={rightArrowClick}
						slides={slides}
						currentSlide={currentSlide}
						setCurrentSlide={setCurrentSlide}
						certificates={certificates}
					/>
				)}
			</div>
		</section>
	);
};

export default Certificates;
