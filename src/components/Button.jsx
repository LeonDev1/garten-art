import { a } from "framer-motion/client";
import "./css/Button.css";
import { motion } from "framer-motion";

function Button({ children, className, link }) {
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
    <a className="common-button-a" href={link}>
      <motion.button
        {...popIn}
        className={`common-button${className ? " " + className : ""}`}
      >
        <p className="common-button-text">{children}</p>
      </motion.button>
    </a>
  );
}

export default Button;
