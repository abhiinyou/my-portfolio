import React from "react";
import { motion } from "framer-motion";

const MotionWrap = (Compoenent, classNames) =>
  function HOC() {
    return (
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className={`${classNames} app__flex`}
      >
        <Compoenent />
      </motion.div>
    );
  };

  // used motion wrap for alternate slide colors