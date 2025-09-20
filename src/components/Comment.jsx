import "./css/Feedback.css";
import { animate, inView, motion } from "framer-motion";

function Comment({ content }) {
  const commentPopIn = {
    initial: { opacity: 0, scale: 0.7 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.15 } },
  };

  return (
    <motion.div
      className="comment-conatainer soft-shadow"
      variants={commentPopIn}
      // initial={{ opacity: 0, scale: 0.7 }}
      // whileInView={{ opacity: 1, scale: 1 }}
      // viewport={{ once: true, amount: 0.6 }}
      // transition={{ duration: 0.3 }}
    >
      <p>⭐⭐⭐⭐⭐</p>
      <p>{content}</p>
    </motion.div>
  );
}

export default Comment;
