import { motion } from "framer-motion";

const Header = () => {
  const containerVariant = {
    hidden: {
      pathLength: 0,
    },
    visible: {
      pathLength: 1,
      transition: {
        duration: 3,
        ease: "easeInOut",
      },
    },
  };

  const textVariant = {
    hidden: {
      y: "-200px",
    },
    visible: {
      y: 0,
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 120,
      },
    },
  };

  return (
    <header>
      <motion.div
        variants={containerVariant}
        initial="hidden"
        animate="visible"
        className="flex items-center space-x-4"
      >
        <div style={{ touchAction: "manipulation" }}>
          <motion.svg
            drag
            dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
            dragElastic={1}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-14 "
          >
            <motion.path
              variants={containerVariant}
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </motion.svg>
          <motion.p
            variants={textVariant}
            className="hidden md:block text-yellow-400 font-bold"
          >
            Drag Me
          </motion.p>
        </div>
        <motion.div
          className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-white"
          variants={textVariant}
        >
          <p>Dream Home</p>
        </motion.div>
      </motion.div>
    </header>
  );
};

export default Header;
