import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { OrderType } from "../../types";
const Order = ({ pizza, setShowModal }: OrderType) => {
  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 5000);
  }, [setShowModal]);

  const variantContainer = {
    hidden: {
      x: "100vw",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        mass: 0.4,
        damping: 8,
        staggerChildren: 0.4,
        when: "beforeChildren",
      },
    },
    exit: {
      x: "-100vw",
      transition: { ease: "easeInOut" },
    },
  };

  const variantChild = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      variants={variantContainer}
      initial={"hidden"}
      animate={"visible"}
      exit="exit"
      className="container order"
    >
      <motion.h2 exit={{ x: -1000 }}>Thank you for your order :)</motion.h2>

      <motion.p variants={variantChild}>
        You ordered a {pizza.base} pizza with:
      </motion.p>

      <motion.div variants={variantChild}>
        {pizza.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
