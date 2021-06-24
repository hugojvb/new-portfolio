import { FC, useEffect } from "react";

import dynamic from "next/dynamic";

const Carousel = dynamic(() => import("@brainhubeu/react-carousel"), { ssr: false });
import { autoplayPlugin } from "@brainhubeu/react-carousel";
import { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

import { Fade } from "react-reveal";

const Technologies: FC = () => {
	useEffect(() => {}, []);

	return (
		<div className="flex flex-col items-center my-20">
			<Fade top>{/* <h1 className="text-6xl font-thin mb-24 mt-8">Favorite Technologies</h1> */}</Fade>

			<Carousel
				plugins={[
					"infinite",
					"centered",
					{
						resolve: autoplayPlugin,
						options: {
							interval: 2000,
						},
					},
					{
						resolve: slidesToShowPlugin,
						options: {
							numberOfSlides: 5,
						},
					},
				]}
				animationSpeed={5000}
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
