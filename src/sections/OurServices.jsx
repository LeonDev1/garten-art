import "../components/css/OurSevices.css";
import { motion, scale } from "framer-motion";
import whyImage3 from "../assets/img/why-image-3.webp";
import headerGarden2 from "../assets/img/header-garden-2.webp";
import headerGarden1 from "../assets/img/header-garden-1.webp";

function OurSevices() {
  const popIn = {
    initial: { opacity: 0, scale: 0.9 },
    whileInView: { opacity: 1, scale: 1 },
    transition: { duration: 0.15 },
    viewport: {
      once: true,
      amount: 0.6,
    },
  };

  return (
    <section id="our-services">
      <h2>
        Unsere <span className="green-span">Leistungen</span>
      </h2>

      <div className="ourserv-container">
        <motion.div {...popIn} className="ourserv-card soft-shadow">
          <h2>Gartengestaltung</h2>
          <img src={whyImage3} loading="lazy" alt="Gartengestaltung" />
        </motion.div>

        <motion.div {...popIn} className="ourserv-card soft-shadow">
          <h2>Gartenpflege</h2>
          <img src={headerGarden2} loading="lazy" alt="Gartenpflege" />
        </motion.div>

        <motion.div {...popIn} className="ourserv-card soft-shadow">
          <h2>Wege & Terrassen</h2>
          <img src={headerGarden1} loading="lazy" alt="Wege & Terrassen" />
        </motion.div>
      </div>
    </section>
  );
}

export default OurSevices;
