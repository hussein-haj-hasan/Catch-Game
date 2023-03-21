import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Loader from "./Loader";
import "../app.scss";
const Home = () => {
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 1.5, duration: 1.5 } },
    exit: {
      x: "-100vw",
      transition: { ease: "easeInOut" },
    },
  };

  const buttonVariant = {
    hover: {
      scale: 1.1,
      transition: { yoyo: Infinity, duration: 0.3 },
      textShadow: "0px 0px 8px rgb(255,255,255)",
      boxShadow: "0px 0px 8px rgb(255,255,255)",
    },
  };
  return (
    <>
      <motion.div
        variants={containerVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="home container"
      >
        {/*  */}
        <div className="text-practise">
          <svg viewBox="0 0 900 300">
            <symbol id="s-text">
              <text text-anchor="middle" x="50%" y="50%" dy=".35em">
                Catch Abo-Ali
              </text>
            </symbol>
            <use className="text" xlinkHref="#s-text"></use>
            <use className="text" xlinkHref="#s-text"></use>
            <use className="text" xlinkHref="#s-text"></use>
            <use className="text" xlinkHref="#s-text"></use>
          </svg>
        </div>
        {/*  */}
        <Link to="/base">
          <motion.button
            className="createButton"
            variants={buttonVariant}
            whileHover="hover"
          >
            Start New Game
          </motion.button>
        </Link>
        <Loader />
      </motion.div>
    </>
  );
};

export default Home;
