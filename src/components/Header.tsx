import React from "react";
import { motion } from "framer-motion";
const Header = () => {
  const svgVariant = {
    hidden: { rotate: -180 },
    visible: { rotate: 0, transition: { duration: 0.5 } },
  };
  const pathVariant = {
    hidden: { pathLength: 0 },
    visible: { pathLength: 1, transition: { duration: 1, ease: "easeInOut" } },
  };
  return (
    <header>
      <div className="logo">
        <motion.svg
          drag
          dragConstraints={{
            left: -50,
            top: -50,
            right: 50,
            bottom: 50,
          }}
          variants={svgVariant}
          initial={"hidden"}
          animate={"visible"}
          className="pizza-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <motion.path
            variants={pathVariant}
            initial={"hidden"}
            animate={"visible"}
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
          />
          <motion.path
            variants={pathVariant}
            initial={"hidden"}
            animate={"visible"}
            fill="none"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
          />
        </motion.svg>
      </div>
      <motion.div
        initial={{ y: -250 }}
        animate={{ y: -10 }}
        transition={{ type: "spring", stiffness: 120 }}
        className="title"
      >
        <h1>Pizza Joint</h1>
      </motion.div>
    </header>
  );
};

export default Header;
