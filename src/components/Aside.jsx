import logo_profile from "../assets/peakpx.jpg";
import { IoMailOutline } from "react-icons/io5";
import { IoIosPhonePortrait } from "react-icons/io";
import { motion } from "motion/react";
import arrow_top from '../assets/arrow-top.svg'
import { useState } from "react";

export default function Aside() {


const [clickContact,setClickContact]=useState(false)



const handleClickContact=()=>{
  clickContact==false?setClickContact(true):setClickContact(false)
}


  return (
    <motion.aside
      initial={{ opacity: 0, x: -200, escale: 0.7 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{
        duration: 0.4,
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
      }}
      className="flex flex-col min-w-[300px] w-full divide-y-2 divide-neutral-700 border border-neutral-600  p-2 rounded-[20px] sm:w-72 h-fit shadow-md bg-[#242424]"
    >
      <div className="mb-8 flex flex-col justify-center items-center">
       <div className="flex w-full justify-between items-center">
    <div className="flex gap-3 ">
    <img
          className="w-10 h-10  m-auto  sm:w-32 sm:h-32 mx-auto rounded-full border-4 border-neutral-700"
          src={logo_profile}
          alt=""
        />

        <h2 className="text-md font-bold sm:text-3xl my-6">Kevin Arizaga</h2>
    </div>
    <div className="flex gap-1 items-center" onClick={handleClickContact}>
    <p className="font-bold">Contact</p>  <img  className={`size-8 ${clickContact==false?'rotate-180':'rotate-0'} `}  src={arrow_top} alt=""  />
    </div>
       </div>
        <div className={`${clickContact==false?'hidden':'flex'} flex-col w-full sm:flex-col gap-4 mb-4`} >
          <span className="w-full  px-6 py-2 mx-auto bg-[#1a1a1a] rounded-md">
            Web Developer
          </span>
          <span className="w-full  px-6 py-2 mx-auto bg-[#1a1a1a] rounded-md">
            Android Developer
          </span>
        </div>
      </div>
      <div className={`${clickContact==false?'hidden':'flex'}  flex-col justify-center items-center`}>
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
