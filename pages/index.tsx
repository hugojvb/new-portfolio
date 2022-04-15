import Head from "next/head";
import { Fragment, FC, useEffect, useState } from "react";

import Hero from "../components/Hero";
import About from "../components/About";
import Technologies from "../components/Technologies";
import Certificates from "../components/Certificates";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

import { certificates } from "../data/certificates";

const courseHours: number =
  Math.floor(certificates.reduce((sum, cur) => sum + cur.duration, 0) / 10) *
  10;

const IndexPage: FC = (): JSX.Element => {
  const [windowWidth, setWindowWidth] = useState<number | null>(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    window.scrollTo(0, 0);

    return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth]);

  return (
    <Fragment>
      <Head>
        <title>Hugo Batista - Software Developer</title>
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/favicon/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/favicon/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/favicon/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/favicon/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/favicon/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/favicon/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/favicon/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/favicon/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="/favicon/ms-icon-144x144.png"
        />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="description"
          content="Hugo Batista is a passionate Software Developer who works with Typescript, React, Node, Golang and many other technologies."
        />
      </Head>

      <Hero />
      <About courseHours={courseHours} />
      <Certificates certificates={certificates} />
      <Projects />
      <Technologies windowWidth={windowWidth} />
      <Contact />
      <Footer />
    </Fragment>
  );
};

export default IndexPage;
