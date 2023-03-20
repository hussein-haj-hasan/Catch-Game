import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { modalType } from "../../types";
const Modal = ({ showModal, setShowModal }: modalType) => {
  const backdrop = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const modal = {
    hidden: { opacity: 0, y: "-100vh" },
    visible: {
      opacity: 1,
      y: "30vh",
      when: "beforeChildren",
      transition: { delay: 0.5 },
    },
    exit: { Opacity: 0, y: "-100vh" },
  };
  return (
    <AnimatePresence mode="wait">
      {showModal && (
        <motion.div
          className="backdrop"
          variants={backdrop}
          initial={"hidden"}
          animate={"visible"}
          exit="hidden"
        >
          <motion.div className="modal" variants={modal} exit="exit">
            <p>Want to make another Pizza?</p>
            <Link to="/">
              <button>Start Again</button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default Modal;
