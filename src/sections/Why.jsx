import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../components/css/Why.css";
import whyimage1 from "../assets/img/why-image-1.webp";
import whyimage2 from "../assets/img/why-image-2.webp";
import whyimage3 from "../assets/img/why-image-3.webp";

function Why() {
  const [hovered, setHovered] = useState("div1");
  const [descriptionHover, setDescription] = useState("description1");

  const images = {
    div1: whyimage1,
    div2: whyimage2,
    div3: whyimage3,
  };

  const descriptions = {
    description1: "Handwerkliches Können und gärtnerisches Wissen seit 2005.",
    description2:
      "Von der Beratung über die Gestaltung bis zur regelmäßigen Pflege.",
    description3: "Wir nehmen uns Zeit für Sie und Ihre Wünsche.",
  };

  const fadeIn = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { duration: 0.2 },
    viewport: {
      once: true,
      amount: 0.7,
    },
  };

  return (
    <section id="why-gartenart" className="soft-shadow">
      <h2>
        Warum Garten<span className="green-span">Art</span>
      </h2>
      <div>
        <div className="cards">
          <motion.div
            {...fadeIn}
            className="why-card"
            id="why-card-1"
            style={{ gridArea: "card-1" }}
            onMouseEnter={() => {
              setHovered("div1");
              setDescription("description1");
            }}
          >
            <p>Über 15 Jahre Erfahrung</p>
          </motion.div>

          <motion.div
            {...fadeIn}
            className="why-card"
            id="why-card-2"
            style={{ gridArea: "card-2" }}
            onMouseEnter={() => {
              setHovered("div2");
              setDescription("description2");
            }}
          >
            <p>Alles aus einer Hand</p>
          </motion.div>

          <motion.div
            {...fadeIn}
            className="why-card"
            id="why-card-3"
            style={{ gridArea: "card-3" }}
            onMouseEnter={() => {
              setHovered("div3");
              setDescription("description3");
            }}
          >
            <p>Individuelle Beratung</p>
          </motion.div>

          {/*  */}

          <motion.div
            className="why-description"
            style={{ gridArea: "description" }}
            {...fadeIn}
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={descriptionHover}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.1 }}
              >
                {descriptions[descriptionHover]}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          <AnimatePresence mode="wait">
            {hovered && (
              <motion.img
                key={hovered}
                src={images[hovered]}
                style={{ gridArea: "img" }}
                className="why-image"
                loading="lazy"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.1 }}
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default Why;
