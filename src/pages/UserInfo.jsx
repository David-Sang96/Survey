import { motion } from "framer-motion";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userInfo } from "../store/slice/userInfo";

const UserInfo = () => {
  const [chosen, setChosen] = useState(false);
  const people = [
    "Family",
    "Friends",
    "Romantic Relationships",
    "Mentors",
    "Colleagues",
    "Inspirational Figures",
    "Community",
    "Pets",
    "Personal Heroes",
  ];
  const dispatch = useDispatch();
  const chosenItems = useSelector((store) => store.userInfo.infos);

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

  const handleAdd = (value) => {
    dispatch(userInfo(value));
    setChosen(true);
  };

  return (
    <section>
      <div className="mb-4 space-y-4">
        <h2 className="text-xl md:text-2xl">
          What are your most favorite things & people?
        </h2>
        <ul className="space-y-1 cursor-pointer ms-6">
          {people.map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.3, originX: 0 }}
              onClick={() => handleAdd(item)}
              className={`${chosenItems.includes(item) ? "text-yellow-500 text-xl" : ""} cursor-pointer`}
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
          <Link to={"/user/infos/final"}>
            <motion.button
              variants={buttonVariant}
              whileHover="hover"
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-10 border border-gray-400 rounded-full shadow"
            >
              Submit
            </motion.button>
          </Link>
        </motion.div>
      )}
    </section>
  );
};

export default UserInfo;
