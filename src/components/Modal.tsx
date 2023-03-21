import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { modalType } from "../../types";
const Modal = ({ showModal, setShowModal, setScore, setLevel }: modalType) => {
  const backdrop = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, when: "beforeChildren" },
  };
  const modal = {
    hidden: { opacity: 0, y: "-100vh" },
    visible: {
      opacity: 1,
      y: "200px",
      transition: { delay: 0.5 },
    },
  };
  return (
    <AnimatePresence mode="wait">
      {showModal && (
        <motion.div
          className="backdrop"
          variants={backdrop}
          initial={"hidden"}
          animate={"visible"}
          // exit={"hidden"}
        >
          <motion.div
            className="modal"
            variants={modal}
            // exit={{ opacity: 0, y: "-100vh" }}
          >
            <p>Want to start new Game?</p>
            <Link to="/">
              <button
                onClick={() => {
                  setScore(0);
                  setLevel(null);
                }}
              >
                Start Again
              </button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default Modal;
