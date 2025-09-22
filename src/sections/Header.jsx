import "../components/css/Header.css";
import { animate, easeIn, easeInOut, easeOut, motion } from "framer-motion";

import header1 from "../assets/img/header-garden-1.webp";
import header2 from "../assets/img/header-garden-2.webp";
import header3 from "../assets/img/header-garden-3.webp";

import Button from "../components/Button.jsx";

function Header() {
  const containerPopIn = {
    initial: {},
    animate: {
      transition: { duration: 0.05, staggerChildren: 0.1 },
    },
  };

  const imgPopIn = {
    initial: { opacity: 0, scale: 0.7 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.1 } },
  };

  const textFadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5 },
  };

  return (
    <section id="home">
      <motion.div
        className="header-div soft-shadow"
        variants={containerPopIn}
        initial="initial"
        animate="animate"
      >
        <motion.h1 {...textFadeIn}>
          Garten<span className="green-span">Art</span>
        </motion.h1>
        <motion.p {...textFadeIn} className="header-text">
          Ihr Traumgarten wird Wirklichkeit
        </motion.p>
        <div className="header-images">
          <motion.img
            variants={imgPopIn}
            src={header1}
            loading="lazy"
            className="header-image img-shadow"
            alt="Gartenbild"
          />
          <motion.img
            variants={imgPopIn}
            src={header3}
            loading="lazy"
            className="header-image img-shadow"
            alt="Gartenbild"
          />
          <motion.img
            variants={imgPopIn}
            src={header2}
            loading="lazy"
            className="header-image img-shadow"
            alt="Gartenbild"
          />
        </div>
        <Button link={"#our-services"} className="header-button">
          Unsere Gärten entdecken
        </Button>
      </motion.div>
    </section>
  );
}

export default Header;
