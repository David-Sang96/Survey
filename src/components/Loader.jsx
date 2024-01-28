import { motion, useCycle } from "framer-motion";

const loaderVariant = {
  animationOne: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 0.5,
      },
      y: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
  animationTwo: {
    y: [0, -40],
    x: 0,
    transition: {
      y: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
  animationThree: {
    x: [30, -30, 30, -30, 30],
    y: [0, -40],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 1,
        ease: "easeOut",
      },
      y: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 1,
        ease: "easeOut",
      },
    },
  },
};

const Loader = () => {
  const [animation, cycleAnimation] = useCycle(
    "animationOne",
    "animationTwo",
    "animationThree"
  );
  return (
    <>
      <motion.div
        className="w-4 h-4 my-10 mx-auto rounded-full bg-slate-400"
        variants={loaderVariant}
        animate={animation}
      ></motion.div>
      <div
        onClick={() => cycleAnimation()}
        className="cursor-pointer text-center"
      >
        Let the ball bounce
      </div>
    </>
  );
};

export default Loader;
