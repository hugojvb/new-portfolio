import { FC, useEffect } from "react";

import dynamic from "next/dynamic";

const Carousel = dynamic(() => import("@brainhubeu/react-carousel"), { ssr: false });
import { autoplayPlugin, slidesToShowPlugin, arrowsPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

import { Fade } from "react-reveal";

const Technologies: FC = () => {
	useEffect(() => {}, []);

	return (
		<div className="flex-col items-center justify-center my-20 mx-8">
			<Fade top>{/* <h1 className="text-6xl font-thin mb-24 mt-8">Favorite Technologies</h1> */}</Fade>

			<Carousel
				plugins={[
					"infinite",
					"fastSwipe",
					{
						resolve: arrowsPlugin,
						options: {
							arrowLeft: (
								<button className="w-8 hover:-translate-x-0.5 hover:duration-300 focus:outline-none outline-none">
									<img src="/left-arrow.svg" alt="left-arrow" />
								</button>
							),
							arrowLeftDisabled: (
								<button className="w-8 hover:-translate-x-0.5 hover:duration-300 focus:outline-none outline-none">
									<img src="/left-arrow.svg" alt="left-arrow" />
								</button>
							),
							arrowRight: (
								<button className="w-8 hover:translate-x-0.5 hover:duration-300 focus:outline-none outline-none">
									<img src="/right-arrow.svg" alt="right-arrow" />
								</button>
							),
							arrowRightDisabled: (
								<button className="w-8 hover:translate-x-0.5 hover:duration-300 focus:outline-none outline-none">
									<img src="/right-arrow.svg" alt="right-arrow" />
								</button>
							),
							addArrowClickHandler: true,
						},
					},
					{
						resolve: autoplayPlugin,
						options: {
							interval: 1000,
						},
					},
					{
						resolve: slidesToShowPlugin,
						options: {
							numberOfSlides: 5,
						},
					},
				]}
				animationSpeed={1000}
			>
				<div>
					<img src="/html.svg" className="w-40 h-40" />
				</div>
				<div>
					<img src="/css.svg" className="w-40 h-40" />
				</div>
				<div>
					<img src="/javascript.svg" className="w-40 h-40" />
				</div>
				<div>
					<img src="/typescript.svg" className="w-40 h-40" />
				</div>
				<div>
					<img src="/react.svg" className="w-60 h-60" />
				</div>
				<div>
					<img src="/node.svg" className="w-40 h-40" />
				</div>
				<div>
					<img src="/next.svg" className="w-40 h-40" />
				</div>
			</Carousel>
		</div>
	);
};

export default Technologies;
