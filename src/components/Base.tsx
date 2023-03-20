import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Base = ({ addBase, pizza }: { addBase: any; pizza: any }) => {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];
  const variantContainer = {
    hidden: {
      x: "100vw",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120, delay: 0.5 },
    },
    exit: {
      x: "-100vw",
      transition: { ease: "easeInOut" },
    },
  };
  const variantNext = {
    hidden: {
      x: "-100vw",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120, delay: 0.5 },
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
    <motion.div
      className="base container"
      variants={variantContainer}
      initial={"hidden"}
      animate={"visible"}
      exit="exit"
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? "active" : "";
          return (
            <motion.li
              whileHover={{ color: "yellow", scale: 1.2, originX: 0 }}
              transition={{ type: "spring", stiffness: 120 }}
              key={base}
              onClick={() => addBase(base)}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>

      {pizza.base && (
        <motion.div className="next" variants={variantNext}>
          <Link to="/toppings">
            <motion.button variants={buttonVariant} whileHover="hover">
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Base;
