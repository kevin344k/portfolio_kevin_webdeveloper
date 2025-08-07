import logo_profile from "../assets/profile-image-kevin.jpeg";
import { IoMailOutline } from "react-icons/io5";
import { IoIosPhonePortrait } from "react-icons/io";
import { motion } from "motion/react";
import { FaGithub } from "react-icons/fa";

export default function Aside() {
  return (
    <motion.aside
      initial={{ opacity: 0, x: -200, escale: 0.7 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{
        duration: 0.4,
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
      }}
      className={`flex flex-col min-w-[300px] w-full divide-y-2 divide-neutral-700 border border-neutral-600  p-2 rounded-[20px] sm:w-72 h-fit shadow-md bg-[#242424] mb-8 md:h-[634px] md:mb-0`}
    >
      <div className=" flex flex-col justify-center items-center">
        <div className="flex w-full justify-end mb-3 items-center">
          <div className="flex flex-row-reverse  gap-3 ">
            <img
              className="w-12 h-12 bg-cover bg-center m-auto  md:w-15 md:h-15 mx-auto rounded-full border-4 border-neutral-700"
              src={logo_profile}
              alt=""
            />
            <h2 className="text-md font-bold md:text-2xl my-6">
              Kevin Arizaga
            </h2>
          </div>
        </div>
        <div className={` flex flex-col w-full sm:flex-col gap-4 mb-4`}>
          <span className="w-full  px-6 py-2 mx-auto bg-[#1a1a1a] rounded-md">
            Web Developer
          </span>
          <span className="w-full  px-6 py-2 mx-auto bg-[#1a1a1a] rounded-md">
            Android Developer
          </span>
        </div>
      </div>
      <div
        className={`
          flex flex-col justify-center items-center`}
      >
        <div className="flex justify-start items-center w-[200px] gap-3 my-4">
          <IoMailOutline className="my-auto self-stretch" size={25} />
          <div className="text-left flex flex-col">
            <span className=" text-neutral-400 ">Email</span>
            <a
              href="mailto:kevin.arizaga2002@gmail.com"
              className="truncate w-36 hover:text-yellow-200"
            >
              kevin.arizaga2002@gmail.com
            </a>
          </div>
        </div>
        <div className="flex w-[200px] gap-3 my-4">
          <IoIosPhonePortrait className="my-auto" size={25} />
          <div className="text-left flex flex-col">
            <span className=" text-neutral-400">Celular</span>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="
https://wa.me/593999312678

"
              className="hover:text-yellow-200"
            >
              {" "}
              +593 999312678
            </a>
          </div>
        </div>
        <div className="flex w-[200px] gap-3  my-4">
          <FaGithub size={25} />
          <div className="text-left flex flex-col">
            <span className=" text-neutral-400">Github</span>
            <a
              className="hover:text-yellow-200"
              href="https://github.com/kevin344k"
            >
              kevin344k
            </a>
          </div>
        </div>
      </div>
    </motion.aside>
  );
}
