import "./css/Navbar.css";
import { motion } from "framer-motion";

function Navbar() {
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
    <motion.div {...popIn} className="navbar">
      <div className="navbar-bg">
        <a href="#home">Home</a>
        <a href="#why-gartenart">Warum GartenArt</a>
        <a href="#our-services">Unsere Leistungen</a>
        <a href="#before-after">Vorher/Nachher</a>
      </div>
    </motion.div>
  );
}

export default Navbar;
