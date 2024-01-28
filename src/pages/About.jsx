import { motion } from "framer-motion";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { countryAction } from "../store/slice/countrySlice";

const About = () => {
  const countries = ["Myanmar", "Singapore", "ThaiLand", "Malaysia", "Japan"];
  const [chosen, setChosen] = useState(false);
  const dispatch = useDispatch();
  const chosenCountry = useSelector((state) => state.country.country);

  const handleChoose = (value) => {
    setChosen(true);
    dispatch(countryAction(value));
  };

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

  const nextVariants = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 120,
      },
    },
  };

  return (
    <section>
      <div className="mb-4 space-y-4">
        <h2 className="text-xl md:text-2xl">
          Which country are you living currently?
        </h2>

        <ul className="space-y-1 cursor-pointer ms-6">
          {countries.map((item, index) => (
            <motion.li
              key={index}
              onClick={() => handleChoose(item)}
              whileHover={{ scale: 1.3, originX: 0 }}
              className={`${chosenCountry === item ? "text-yellow-500 text-xl" : ""}`}
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </div>

      {chosen && (
        <motion.div
          className="text-center mt-10"
          variants={nextVariants}
          initial="hidden"
          animate="visible"
        >
          <Link to={"/user/infos"}>
            <motion.button
              variants={buttonVariant}
              whileHover="hover"
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-10 border border-gray-400 rounded-full shadow"
            >
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </section>
  );
};

export default About;
