import { motion, useCycle } from "framer-motion";
const variant = {
  move: {
    x: [-15, 15],
    y: [0, -30],
    transition: {
      x: { repeat: Infinity, repeatType: "reverse", duration: 0.5 },
      y: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
  move1: {
    x: 0,
    y: [0, -40],
    transition: {
      y: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
};
const Loader = () => {
  const [animation, cycleAnimation] = useCycle("move", "move1");
  return (
    <>
      <motion.div
        className="loader"
        variants={variant}
        animate={animation}
      ></motion.div>
      <div
        className="animateButton"
        onClick={() => {
          cycleAnimation();
          console.log(animation);
        }}
      >
        change Animation
      </div>
    </>
  );
};
export default Loader;
