import { FC, useEffect, useState } from "react";

import dynamic from "next/dynamic";

const Carousel = dynamic(() => import("@brainhubeu/react-carousel"), { ssr: false });
import { autoplayPlugin } from "@brainhubeu/react-carousel";
import { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

import { Fade } from "react-reveal";

const Technologies: FC = () => {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<div className="flex flex-col items-center my-20 bg-white">
			<Fade top>
				<h1 className="text-5xl font-thin text-primary  mb-40 ">My Favorite Technologies</h1>
			</Fade>

			{mounted && (
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
					draggable={false}
				>
					<div>
						<img src="/html.svg" height="100" width="100" />
					</div>
					<div>
						<img src="/css.svg" height="100" width="100" />
					</div>
					<div>
						<img src="/javascript.svg" height="100" width="100" />
					</div>
					<div>
						<img src="/typescript.svg" height="100" width="100" />
					</div>
					<div>
						<img src="/react.svg" height="100" width="100" />
					</div>
					<div>
						<img src="/node.svg" height="100" width="100" />
					</div>
					<div>
						<img src="/next.svg" height="100" width="100" />
					</div>
				</Carousel>
			)}
		</div>
	);
};

export default Technologies;
