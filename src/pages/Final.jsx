import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearCountryAction } from "../store/slice/countrySlice";
import { clearUserInfoAction } from "../store/slice/userInfo";

const Final = () => {
  const chosenCountry = useSelector((store) => store.country.country);
  const chosenFavorites = useSelector((store) => store.userInfo.infos);
  const dispatch = useDispatch();

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

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        type: "spring",
        mass: 0.4,
        damping: 8,
        when: "beforeChildren",
        staggerChildren: 0.4,
      },
    },
  };

  const childVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  const handleClear = () => {
    dispatch(clearCountryAction());
    dispatch(clearUserInfoAction());
  };

  return (
    <motion.section
      className="space-y-5"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h2 className="text-xl md:text-2xl">
        Thanks For Letting Me Know A Little Bit About You🥰
      </h2>
      <motion.div variants={childVariant}>
        <p className="mb-4">
          Your are currently living in{" "}
          <span className="text-2xl text-yellow-400">{chosenCountry}</span>
        </p>
        <ul>
          {chosenFavorites.length === 0 ? (
            <p className="text-2xl text-yellow-400">No Favorite?</p>
          ) : (
            <p>
              Your favorites are
              {chosenFavorites.map((item, index) => (
                <li key={index} className="text-lg text-yellow-400">
                  {item}
                </li>
              ))}
            </p>
          )}
        </ul>
      </motion.div>
      <motion.div className="text-center pt-10">
        <Link to={"/"}>
          <motion.button
            variants={buttonVariant}
            whileHover="hover"
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-10 border border-gray-400 rounded-full shadow"
            onClick={handleClear}
          >
            Start Again
          </motion.button>
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default Final;
