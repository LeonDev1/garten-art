import { color, motion } from "framer-motion";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import "../components/css/BeforeAfter.css";
import afterImg from "../assets/img/after.webp";
import beforeImg from "../assets/img/before.webp";

function BeforeAfter() {
  const popIn = {
    initial: { opacity: 0, scale: 0.9 },
    whileInView: { opacity: 1, scale: 1 },
    transition: { duration: 0.5 },
    viewport: {
      once: true,
      amount: 0.6,
    },
  };
  return (
    <section id="before-after" className="section-shadow">
      <h2 {...popIn}>
        Vorher / <span className="green-span">Nachher</span>
      </h2>
      <motion.div {...popIn} id="slider-div">
        <ReactCompareSlider
          itemOne={<ReactCompareSliderImage src={beforeImg} loading="lazy" />}
          itemTwo={<ReactCompareSliderImage src={afterImg} loading="lazy" />}
          className="slider soft-shadow"
        />
      </motion.div>
    </section>
  );
}

export default BeforeAfter;
