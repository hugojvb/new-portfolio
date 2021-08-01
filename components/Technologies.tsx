import { FC } from "react";
import dynamic from "next/dynamic";

// CAROUSEL IMPORTS
const Carousel = dynamic(() => import("@brainhubeu/react-carousel"), { ssr: false });
import { autoplayPlugin, slidesToShowPlugin, arrowsPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

// UTILS
import { techIcons } from "../utils/techicons";

// FUNCTIONAL COMPONENT
const Technologies: FC<{ windowWidth: number }> = ({ windowWidth }): JSX.Element => {
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
							numberOfSlides: windowWidth <= 768 ? 1 : windowWidth <= 1440 ? 3 : 5,
						},
					},
				]}
				animationSpeed={1500}
				draggable={false}
			>
				{techIcons.map((icon) => {
					return (
						<img
							src={icon.url}
							className={icon.size == "small" ? "h-32" : icon.size == "medium" ? "h-36" : "h-44"}
							key={icon.name}
							alt={icon.name}
						/>
					);
				})}
			</Carousel>
		</div>
	);
};

export default Technologies;
