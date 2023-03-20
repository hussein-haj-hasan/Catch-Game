import React from "react";
import { Link } from "react-router-dom";
import { motion, useDragControls } from "framer-motion";
import Loader from "./Loader";
const Game = () => {
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 1.5, duration: 1.5 } },
    exit: {
      x: "-100vw",
      transition: { ease: "easeInOut" },
    },
  };
  const leftSlide = 50;
  const buttonVariant = {
    visible: {
      scale: 1.1,
      transition: { yoyo: Infinity, duration: 0.3 },
      textShadow: "0px 0px 8px rgb(255,255,255)",
      boxShadow: "0px 0px 8px rgb(255,255,255)",
    },
    hover: {
      x: leftSlide > 100 ? leftSlide + 50 : leftSlide + 50,
    },
  };
  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      drag
      exit="exit"
      className="home container"
    >
      <h2>Welcome to Pizza Joint</h2>
      <motion.button
        style={{ zIndex: 1 }}
        variants={buttonVariant}
        animate="visible"
        whileHover="hover"
      >
        Create Your Pizza
      </motion.button>
    </motion.div>
  );
};

export default Game;
