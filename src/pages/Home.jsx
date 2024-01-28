import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
const Home = () => {
  const buttonVariant = {
    hover: {
      scale: 1.1,
      boxShadow: "0px 0px 8px rgb(255,255,255)",
      transition: {
        duration: 0.3,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  const containerVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 1,
        duration: 2,
      },
    },
  };

  return (
    <motion.section
      variants={containerVariant}
      initial="hidden"
      animate="visible"
    >
      <p className="text-xl text-center md:text-2xl">
        Tell Me Something About You
      </p>
      <div className="text-center mt-8">
        <Link to={"/about"}>
          <motion.button
            variants={buttonVariant}
            whileHover="hover"
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-full shadow"
          >
            Click me to start
          </motion.button>
        </Link>
      </div>
      <Loader />
    </motion.section>
  );
};

export default Home;
