import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ToppingsType } from "../../types";
const Toppings = ({ addTopping, pizza }: ToppingsType) => {
  let toppings = [
    "mushrooms",
    "peppers",
    "chili",
    "onions",
    "olives",
    "extra cheese",
    "tomatoes",
  ];
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

    hover: {
      scale: 1.1,
      transition: { yoyo: Infinity, duration: 0.3 },
      textShadow: "0px 0px 8px rgb(255,255,255)",
      boxShadow: "0px 0px 8px rgb(255,255,255)",
    },
  };

  return (
    <motion.div
      className="toppings container"
      variants={variantContainer}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map((topping) => {
          let spanClass = pizza.toppings.includes(topping) ? "active" : "";
          return (
            <motion.li
              whileHover={{ color: "yellow", scale: 1.2, originX: 0 }}
              transition={{ type: "spring", stiffness: 120 }}
              key={topping}
              onClick={() => addTopping(topping)}
            >
              <span className={spanClass}>{topping}</span>
            </motion.li>
          );
        })}
      </ul>

      <Link to="/order">
        <motion.button variants={variantNext} whileHover="hover">
          Order
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Toppings;
