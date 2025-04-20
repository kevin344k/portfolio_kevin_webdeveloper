import { useState } from "react";
import { motion } from "motion/react";
import Acerca_de_mí from "../Views/Acerca_de_mí";
import View_proy from "../Views/View_proy";
import View_skills from "../Views/View_skills";
import View_xp from "../Views/View_xp";
import View_edc from "../Views/View_edc";

import PropTypes from "prop-types";

export default function Section_big({ data }) {
  console.log(data);

  const [clickNav, setClickNav] = useState(0);

  const arr = [
    <Acerca_de_mí key={1} />,
    <View_proy key={2} data={data}></View_proy>,
    <View_skills key={3}></View_skills>,
    <View_xp key={4}></View_xp>,
    <View_edc key={5}></View_edc>,
    
  ];

  console.log(clickNav);

  const handlerClick = (index) => {
    setClickNav(index);
  };

  const RenderSection = () => {
    return arr[clickNav];
  };

  return (
    <>
      <motion.section
        initial={{ opacity: 0, x: 200, escale: 0.7 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{
          duration: 0.4,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        }}
        className="hidden relative bg-[#242424] sm:w-[800px] rounded-[20px] border border-neutral-600 sm:flex flex-col gap-3 overflow-hidden"
      >
        <div className="flex h-[50px]  justify-end  ">
          <ul className="hidden sm:flex font-bold w-fit margin-auto h-fitrounded-tr-[20px] rounded-bl-[20px] rounded-tr-[20px]  bg-neutral-600 ">
            <li
              onClick={() => {
                handlerClick(0);
              }}
              className="px-4 p-3  hover:bg-[#1a1a1a] rounded-bl-[20px] cursor-pointer hover:text-yellow-200 hover:scale-105 active:scale-95"
            >
              Acerca de mí
            </li>
            <li
              onClick={() => {
                handlerClick(1);
              }}
              className="p-3 hover:bg-[#1a1a1a] cursor-pointer  hover:text-yellow-200 hover:scale-105 active:scale-95 transition-all duration-75 ease-in-out"
            >
              Proyectos
            </li>
            <li
              onClick={() => {
                handlerClick(2);
              }}
              className="p-3 hover:bg-[#1a1a1a] cursor-pointer  hover:text-yellow-200 hover:scale-105 active:scale-95"
            >
              Habilidades
            </li>
            <li
              onClick={() => {
                handlerClick(3);
              }}
              className="p-3 hover:bg-[#1a1a1a] cursor-pointer  hover:text-yellow-200 hover:scale-105 active:scale-95"
            >
              Experiencia
            </li>
            <li
              onClick={() => {
                handlerClick(4);
              }}
              className="p-3 hover:bg-[#1a1a1a] cursor-pointer  hover:text-yellow-200 hover:scale-105 active:scale-95"
            >
              Educación
            </li>
            <li
              onClick={() => {
                handlerClick(5);
              }}
              className="p-3 hover:bg-[#1a1a1a] cursor-pointer  hover:text-yellow-200 rounded-tr-[20px] hover:scale-105 active:scale-95"
            >
              Contacto
            </li>
          </ul>
        </div>

        <div className="hidden sm:flex h-[570px]  flex-col justify-center  ">
          <RenderSection></RenderSection>
        </div>

      </motion.section>
         {/*Codigo mobile */}
         <div className="flex flex-col gap-8">
          <Acerca_de_mí key={1} />
          <View_proy key={2} data={data}></View_proy>
          <View_skills key={3}></View_skills>
       
          <View_edc key={5}></View_edc>

       
        </div>
        {/**Codigo mobile fin */}
    </>
  );
}

Section_big.propTypes = {
  data: PropTypes.array,
};
