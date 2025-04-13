
import {useState} from 'react'
import { motion } from "motion/react";
import Acerca_de_mí from "../Views/Acerca_de_mí";
import View_proy from "../Views/View_proy";
import View_skills from "../Views/View_skills";
import View_xp from "../Views/View_xp";
import View_edc from "../Views/View_edc";
import View_contact from "../Views/View_contact";



export default function Section_big({data}) {

const [clickNav,setClickNav]=useState(0)

const arr=[<Acerca_de_mí key={1}/>,<View_proy key={2} data={data}></View_proy >,<View_skills key={3}></View_skills>,<View_xp key={4}></View_xp>,<View_edc key={5}></View_edc>,<View_contact key={6}></View_contact>]


console.log(clickNav);

const handlerClick=(index)=>{
setClickNav(index)
}


const RenderSection=()=>{

return arr[clickNav]
}


  return (
    <motion.section 
    initial={{ opacity: 0, x: 200,escale:0.7}}
    animate={{ opacity: 1, scale: 1 ,x:0}}
    transition={{
      duration: 0.4,
      scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
    }}
    className=" relative bg-[#242424] p-3 w-[800px] rounded-[20px] border border-neutral-600 overflow-hidden ">

      <ul className="font-bold w-fit h-fit rounded-tr-[20px] rounded-bl-[20px]   flex  bg-neutral-600 absolute right-0 top-0">
        <li onClick={()=>{handlerClick(0)}} className="px-4 p-3  hover:bg-[#1a1a1a] rounded-bl-[20px] cursor-pointer hover:text-yellow-200">
          Acerca de mí
        </li>
        <li onClick={()=>{handlerClick(1)}} className="p-3 hover:bg-[#1a1a1a] cursor-pointer  hover:text-yellow-200 ">
          Proyectos
        </li>
        <li onClick={()=>{handlerClick(2)}} className="p-3 hover:bg-[#1a1a1a] cursor-pointer  hover:text-yellow-200 ">
          Habilidades
        </li>
        <li onClick={()=>{handlerClick(3)}} className="p-3 hover:bg-[#1a1a1a] cursor-pointer  hover:text-yellow-200 ">
          Experiencia
        </li>
        <li onClick={()=>{handlerClick(4)}}  className="p-3 hover:bg-[#1a1a1a] cursor-pointer  hover:text-yellow-200 ">
          Educación
        </li>
        <li onClick={()=>{handlerClick(5)}} className="p-3 hover:bg-[#1a1a1a] cursor-pointer  hover:text-yellow-200 rounded-tr-[20px] ">
          Contacto
        </li>
      </ul>

      <div className=" flex  flex-col mt-14  mb-0 justify-center ">
        <div className='h-full overflow-y-hidden'>
            <RenderSection></RenderSection>
        </div>
    
     
      </div>


  
    </motion.section>
  );
}
