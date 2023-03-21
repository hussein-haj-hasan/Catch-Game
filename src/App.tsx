import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Base from "./components/Base";
import Order from "./components/Order";
import Modal from "./components/Modal";
import { motion, AnimatePresence } from "framer-motion";
import { levelType } from "../types";
function App() {
  const location = useLocation();
  const [level, setLevel] = useState<levelType>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showHeader, setShowHeader] = useState<boolean>(true);

  const [score, setScore] = useState(0);
  return (
    <>
      <Header showHeader={showHeader} />
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        setScore={setScore}
        setLevel={setLevel}
      />
      <AnimatePresence
        mode="wait"
        onExitComplete={() => {
          setShowModal(false);
          setShowHeader(true);
        }}
      >
        <Routes location={location} key={location.key}>
          <Route
            path="/base"
            element={<Base setLevel={setLevel} level={level} />}
          />
          <Route
            path="/order"
            element={
              <Order
                showModal={showModal}
                level={level}
                setShowModal={setShowModal}
                score={score}
                setScore={setScore}
                setShowHeader={setShowHeader}
              />
            }
          />
          <Route path="/" element={<Home />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
