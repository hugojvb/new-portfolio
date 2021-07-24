import { FC, useEffect } from "react";
import dynamic from "next/dynamic";

// CAROUSEL IMPORTS
const Carousel = dynamic(() => import("@brainhubeu/react-carousel"), { ssr: false });
import { autoplayPlugin, slidesToShowPlugin, arrowsPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

// ANIMATE ON SCROLL
import { Fade } from "react-reveal";

// FUNCTIONAL COMPONENT
const Technologies: FC = (): JSX.Element => {
	useEffect(() => {}, []);

	return (
		<div className="flex-col items-center justify-center my-20">
			<Fade top>{/* <h1 className="text-6xl font-thin mb-24 mt-8">Favorite Technologies</h1> */}</Fade>

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
					<img src="/react.svg" className="w-64 h-64" />
				</div>
				<div>
					<img src="/node.svg" className="w-44 h-44" />
				</div>
				<div>
					<img src="/mongoDB.svg" className="h-44" />
				</div>
				<div>
					<img src="/next.svg" className="w-40 h-40" />
				</div>
				<div>
					<img src="/tailwindcss.svg" className="h-40 w-40" />
				</div>
				<div>
					<img src="/material-ui.svg" className="h-40 w-40" />
				</div>
				<div>
					<img src="/bootstrap.svg" className="h-40 w-40" />
				</div>
				<div>
					<img src="/jquery.svg" className="h-20" />
				</div>
				<div>
					<img src="/php.svg" className="w-48 h-48" />
				</div>
				<div>
					<img src="/mysql.svg" className="w-52 h-52" />
				</div>
				<div>
					<img src="/java.svg" className="w-44 h-44" />
				</div>
				<div>
					<img src="/angular.svg" className="w-40 h-40" />
				</div>
				<div>
					<img src="/sass.svg" className="w-40 h-40" />
				</div>
			</Carousel>
		</div>
	);
};

export default Technologies;
