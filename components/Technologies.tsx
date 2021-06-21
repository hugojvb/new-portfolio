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
		<div className="min-h-50 flex flex-col items-center justify-start bg-white">
			<Fade top>
				<h1 className="text-6xl font-thin text-primary mb-40">Technologies</h1>
			</Fade>
			{mounted && (
				<Carousel
					plugins={[
						"infinite",
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
