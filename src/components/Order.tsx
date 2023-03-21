import { OrderType } from "../../types";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "../assets/ab.jpg";
function Order({
  level,
  setShowModal,
  score,
  setScore,
  setShowHeader,
  showModal,
}: OrderType) {
  const fieldRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);
  const [btnPosition, setBtnPosition] = useState({ x: 0, y: 0 });
  let OFFSET = 100;
  if (level == "Call | Medium") OFFSET = 200;
  if (level == "Face2Face | Hard") OFFSET = 1000;
  console.log(level);
  useEffect(() => {
    setTimeout(() => {
      setShowHeader(false);
    }, 1000);

    return () => {
      setShowHeader(true);
    };
  }, []);

  function distanceFromCenter(
    boxPosition: number,
    mousePosition: number,
    boxSize: number
  ) {
    return boxPosition - mousePosition + boxSize / 2;
  }

  function setButtonPosition(left: number, top: number) {
    const windowBox = fieldRef.current?.getBoundingClientRect();
    const buttonBox = btnRef.current?.getBoundingClientRect();
    console.log(windowBox);
    if (buttonBox && windowBox) {
      if (distanceFromCenter(left, windowBox.left, buttonBox.width) < 0) {
        left = windowBox.right - buttonBox.width - OFFSET;
      }
      if (distanceFromCenter(left, windowBox.right, buttonBox.width) > 0) {
        left = windowBox.left + OFFSET;
      }
      if (distanceFromCenter(top, windowBox.top, buttonBox.height) < 0) {
        top = windowBox.bottom - buttonBox.height - OFFSET;
      }
      if (distanceFromCenter(top, windowBox.bottom, buttonBox.height) > 0) {
        top = windowBox.top + OFFSET;
      }
      setBtnPosition({ x: left, y: top });
    }
  }
  return (
    <div
      ref={fieldRef}
      style={{
        margin: 0,
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
      }}
      onMouseMove={(e) => {
        const { offsetTop, offsetLeft } = e.currentTarget;
        const x = e.pageX - offsetLeft;
        const y = e.pageY - offsetTop;
        console.log(x, y);
        const buttonBox = btnRef.current?.getBoundingClientRect();
        if (buttonBox) {
          const horizontalDistanceFrom = distanceFromCenter(
            buttonBox.x,
            x,
            buttonBox.width
          );
          const verticalDistanceFrom = distanceFromCenter(
            buttonBox.y,
            y,
            buttonBox.height
          );
          const horizontalOffset = buttonBox.width / 2 + OFFSET;
          const verticalOffset = buttonBox.height / 2 + OFFSET;
          if (
            Math.abs(horizontalDistanceFrom) <= horizontalOffset &&
            Math.abs(verticalDistanceFrom) <= verticalOffset
          ) {
            setButtonPosition(
              buttonBox.x + (horizontalOffset / horizontalDistanceFrom) * 10,
              buttonBox.y + (verticalOffset / verticalDistanceFrom) * 10
            );
          }
        }
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "10px",
          gap: "10px",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          width: "250px",
          left: "calc(50% - 125px)",
        }}
      >
        <h3>Score:{score}</h3>
        <h3>Level:{level}</h3>
        <button
          onClick={() => setShowModal(true)}
          style={{ margin: 0, padding: "5px 10px", fontSize: "1rem" }}
        >
          new game
        </button>
      </div>
      <motion.div
        ref={btnRef}
        animate={{ x: btnPosition.x, y: btnPosition.y }}
        style={{
          position: "absolute",
          whiteSpace: "nowrap",
          fontSize: "2rem",
          width: "126px",
          height: "126px",
          margin: 0,
        }}
        onClick={() => setScore((prev) => prev + 1)}
      >
        <img
          src={Image}
          style={{
            borderRadius: "100%",
            width: "100%",
            objectFit: "cover",
            height: "100%",
          }}
        />
      </motion.div>
    </div>
  );
}

export default Order;
