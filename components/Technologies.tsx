import { FC, useEffect } from "react";
import dynamic from "next/dynamic";

// CAROUSEL IMPORTS
const Carousel = dynamic(() => import("@brainhubeu/react-carousel"), { ssr: false });
import { autoplayPlugin, slidesToShowPlugin, arrowsPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

// UTILS
import { techIcons } from "../utils/techicons";

// ANIMATE ON SCROLL
import { Fade } from "react-reveal";

// FUNCTIONAL COMPONENT
const Technologies: FC = (): JSX.Element => {
	useEffect(() => {}, []);

	return (
		<div className="flex-col items-center justify-center my-20">
			<Carousel
				plugins={[
					"infinite",
					"fastSwipe",
					{
						resolve: autoplayPlugin,
						options: {
							interval: 1500,
							stopAutoPlayOnHover: false,
						},
					},
					{
						resolve: slidesToShowPlugin,
						options: {
							numberOfSlides: 5,
						},
					},
				]}
				animationSpeed={1500}
				draggable={false}
			>
				{techIcons.map((icon) => {
					return (
						<div key={icon.name}>
							<img src={icon.url} className={`${icon.heightClass} ${icon.widthClass}`} />
						</div>
					);
				})}
			</Carousel>
		</div>
	);
};

export default Technologies;
