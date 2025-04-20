import logo_profile from "../assets/peakpx.jpg";
import { IoMailOutline } from "react-icons/io5";
import { IoIosPhonePortrait } from "react-icons/io";
import { motion } from "motion/react";



export default function Aside() {

  return (
    <motion.aside
      initial={{ opacity: 0, x: -200, escale: 0.7 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{
        duration: 0.4,
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
      }}
      className={`flex flex-col min-w-[300px] w-full divide-y-2divide-neutral-700 border border-neutral-600  p-2 rounded-[20px] sm:w-72 h-fit shadow-md bg-[#242424] `}
    >
      <div className=" flex flex-col justify-center items-center">
        <div className="flex w-full justify-end mb-3 items-center">
          <div className="flex flex-row-reverse  gap-3 ">
            <img
              className="w-10 h-10  m-auto  sm:w-32 sm:h-32 mx-auto rounded-full border-4 border-neutral-700"
              src={logo_profile}
              alt=""
            />

            <h2 className="text-md font-bold sm:text-3xl my-6">
              Kevin Arizaga
            </h2>
          </div>
    
        </div>
        <div
          className={` flex flex-col w-full sm:flex-col gap-4 mb-4`}
        >
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
        <div className="flex w-[200px] gap-3 my-4">
          <IoMailOutline className="my-auto" size={25} />
          <div className="text-left">
            <span className=" text-neutral-400 ">Correo</span>
            <p>kevin344k@gmail.com</p>
          </div>
        </div>
        <div className="flex w-[200px] gap-3 my-4">
          <IoIosPhonePortrait className="my-auto" size={25} />
          <div className="text-left">
            <span className=" text-neutral-400">Celular</span>
            <p>+593 999312678</p>
          </div>
        </div>
        <div className="flex w-[200px] gap-3  my-4">
          <IoMailOutline className="my-auto" size={25} />
          <div className="text-left">
            <span className=" text-neutral-400">Correo</span>
            <p>kevin344.com</p>
          </div>
        </div>
      </div>
    </motion.aside>
  );
}
