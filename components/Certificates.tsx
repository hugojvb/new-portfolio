import { FC, useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";

const ScrollAnimation = dynamic(() => import("react-animate-on-scroll"), {
  ssr: false,
});

import CertificatesCarousel from "./CertificatesCarousel";

import { useOnScreen } from "../utils/useOnScreen";

export interface Cert {
  name: string;
  description: string;
  url: string;
  icon: { name: string; url: string; size: string };
  duration: number;
}

const Certificates: FC<{ certificates: Cert[] }> = ({
  certificates,
}): JSX.Element => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [certificateHovered, setCertificateHovered] = useState(false);

  const certificatesRef = useRef();
  const isVisible = useOnScreen(certificatesRef);

  let slides: JSX.Element[] = [];

  for (let certificate of certificates) {
    slides.push(<img src={certificate.url} alt={certificate.name} />);
  }

  useEffect(() => {
    let interval;

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

  const leftArrowClick = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      setCurrentSlide(currentSlide + slides.length - 1);
    }
  };

  const rightArrowClick = () => {
    if (currentSlide + 1 < slides.length) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(currentSlide - slides.length + 1);
    }
  };

  return (
    <section className="min-h-screen lg:min-h-full flex flex-col items-center bg-white mt-12">
      <ScrollAnimation animateOnce animateIn="animate__fadeInDown">
        <h2 className="lg:text-6xl text-5xl font-thin text-secondary mb-24 mt-8 text-center">
          My Certificates
        </h2>
      </ScrollAnimation>

      <div
        className="w-full flex flex-col lg:flex-row lg:p-8 justify-around container"
        ref={certificatesRef}
      >
        <CertificatesCarousel
          setCertificateHovered={setCertificateHovered}
          leftArrowClick={leftArrowClick}
          rightArrowClick={rightArrowClick}
          slides={slides}
          currentSlide={currentSlide}
          setCurrentSlide={setCurrentSlide}
          certificates={certificates}
        />
      </div>
    </section>
  );
};

export default Certificates;
