
import logo_profile from "../assets/peakpx.jpg";
import { IoMailOutline } from "react-icons/io5";
import { IoIosPhonePortrait } from "react-icons/io";
import { motion } from "motion/react";

export default function Aside() {
  return (
    <motion.aside
      initial={{ opacity: 0, x: -200,escale:0.7}}
      animate={{ opacity: 1, scale: 1 ,x:0}}
      transition={{
        duration: 0.4,
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
      }}
      className="flex flex-col divide-y-2 divide-neutral-700 border border-neutral-600  p-6 rounded-[20px] w-72 h-fit shadow-md bg-[#242424]"
    >
      <div className="mb-8">
        <img
          className="w-32 h-32 mx-auto rounded-full border-4 border-neutral-700"
          src={logo_profile}
          alt=""
        />

        <h2 className="font-bold text-3xl my-6">Kevin Arizaga</h2>
        <div className="flex flex-col gap-4">
          <span className="w-full  px-6 py-2 mx-auto bg-[#1a1a1a] rounded-md">
            Web Developer
          </span>
          <span className="w-full  px-6 py-2 mx-auto bg-[#1a1a1a] rounded-md">
            Android Developer
          </span>
        </div>
      </div>
      <div className="flex flex-col ">
        <div className="flex  gap-3 my-4">
          <IoMailOutline className="my-auto" size={25} />
          <div className="text-left">
            <span className=" text-neutral-400 ">Correo</span>
            <p>kevin344k@gmail.com</p>
          </div>
        </div>
        <div className="flex gap-3 my-4">
          <IoIosPhonePortrait className="my-auto" size={25} />
          <div className="text-left">
            <span className=" text-neutral-400">Celular</span>
            <p>+593 999312678</p>
          </div>
        </div>
        <div className="flex gap-3  my-4">
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
