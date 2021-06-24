import { FC } from "react";

import { Fade } from "react-reveal";

import dynamic from "next/dynamic";

const Carousel = dynamic(() => import("@brainhubeu/react-carousel"), { ssr: false });
import { autoplayPlugin, arrowsPlugin, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

const Certificates: FC = () => {
	return (
		<div className="min-h-screen flex flex-col items-center bg-white relative mt-40">
			<Fade top>{/* <h1 className="text-6xl font-thin text-primary mb-24 mt-8">My Certificates</h1> */}</Fade>
			<div className="w-3/4 flex justify-around">
				<Carousel
					plugins={[
						"infinite",
						"centered",
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
								interval: 4000,
							},
						},
						{
							resolve: slidesToShowPlugin,
							options: {
								numberOfSlides: 1,
							},
						},
					]}
					animationSpeed={5000}
					draggable={false}
				>
					<div>
						<img
							src="https://udemy-certificate.s3.amazonaws.com/image/UC-32f95c24-b57c-448d-80ec-9458171ed3ee.jpg?v=1585645681000"
							alt="certificate"
						/>
					</div>
					<div>
						<img
							src="https://udemy-certificate.s3.amazonaws.com/image/UC-3a182850-7271-42f0-9289-5fb7ceb7954e.jpg?v=1598175416000"
							alt="certificate"
						/>
					</div>
					<div>
						<img
							src="https://udemy-certificate.s3.amazonaws.com/image/UC-1114ca43-1dd2-476d-b8e4-a93f6769f108.jpg?v=1604263694000"
							alt="certificate"
						/>
					</div>
					<div>
						<img
							src="https://udemy-certificate.s3.amazonaws.com/image/UC-688e1756-653e-4033-93cd-23eaf1cb081c.jpg?v=1591304615000"
							alt="certificate"
						/>
					</div>
					<div>
						<img
							src="https://udemy-certificate.s3.amazonaws.com/image/UC-0d3e9631-75a7-4f8b-843e-a2ad59866b2f.jpg?v=1592179412000"
							alt="certificate"
						/>
					</div>
					<div>
						<img
							src="https://udemy-certificate.s3.amazonaws.com/image/UC-14dcab6c-9e47-435f-9895-5b9fe990d655.jpg?v=1594831041000"
							alt="certificate"
						/>
					</div>
					<div>
						<img
							src="https://udemy-certificate.s3.amazonaws.com/image/UC-b1ea57cc-31a6-400e-8a26-16cdbfe24e63.jpg?v=1594145452000"
							alt="certificate"
						/>
					</div>
					<div>
						<img
							src="https://udemy-certificate.s3.amazonaws.com/image/UC-939706bd-171a-4b09-856c-6d13a32e231d.jpg?v=1623284648000"
							alt="certificate"
						/>
					</div>
					<div>
						<img
							src="https://udemy-certificate.s3.amazonaws.com/image/UC-e3df1811-664d-4fe1-b1be-31e7aac9332b.jpg?v=1622397467000"
							alt="certificate"
						/>
					</div>
				</Carousel>
				<Fade delay={500}>
					<div className="w-1/2 flex flex-col justify-center items-center bg-secondary rounded-xl ml-8">
						<img src="/e-learning.svg" alt="checkmark" className="filter invert h-20 w-20 mb-8" />
						<p className="font-thin p-12 text-xl text-white">
							Sit eu laborum esse officia voluptate consectetur voluptate adipisicing eu. Ut elit sit ex pariatur laborum nulla qui
							excepteur in do quis pariatur duis. Reprehenderit amet exercitation fugiat dolore nostrud non irure occaecat sunt eiusmod
							anim id elit. Esse nulla aute dolore proident duis ad duis ullamco. Ex consequat dolor duis ea ex enim. Aliqua ex nulla ut
							labore sit id ea consequat adipisicing proident sunt et nulla. Est nisi ullamco duis officia elit sint in cupidatat
							occaecat.
						</p>
					</div>
				</Fade>
			</div>
		</div>
	);
};

export default Certificates;
