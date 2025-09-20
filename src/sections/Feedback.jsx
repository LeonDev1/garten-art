import "../components/css/Feedback.css";
import Comment from "../components/Comment";
import { motion } from "framer-motion";

function Feedback() {
  const containerPopIn = {
    initial: {},
    animate: {
      transition: { staggerChildren: 0.15 },
    },
  };
  return (
    <section id="feedback">
      <motion.div
        className="comments"
        variants={containerPopIn}
        initial="initial"
        whileInView="animate"
      >
        <Comment
          content={
            "Perfekte Umsetzung unserer Ideen! Ergebnis übertrifft alle Erwartungen."
          }
        ></Comment>
        <Comment
          content={
            "Absolut zuverlässig. Unser Garten sieht immer makellos aus."
          }
        ></Comment>
        <Comment
          content={
            "Verwilderter Garten wurde zum Traum-Ort. Professionell und freundlich!"
          }
        ></Comment>
      </motion.div>
    </section>
  );
}

export default Feedback;
