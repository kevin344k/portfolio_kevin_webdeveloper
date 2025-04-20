
import { motion } from "motion/react";
import PropTypes from 'prop-types';








export default function View_proy({data}) {


console.log(data);


  return (
    
    <motion.div 
    initial={{ opacity: 0, escale:0.7}}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 0.4,
      scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
    }}
    className=' flex flex-col  w-full  h-full mt-5 sm:overflow-y-scroll border border-neutral-600   rounded-[20px] sm:w-72 shadow-md bg-[#242424]'>
        <p className="mx-auto sm:text-left  sm:text-3xl ml-5 py-2 px-0 font-bold border-b-4 border-yellow-500 w-fit m-2">
        Proyectos
      </p>

     
      <div className="flex  w-full  h-full  gap-4  p-10   pl-5  overflow-x-scroll snap-center snap-x snap-mandatory ">
      {
      data.map((item,index)=>(
        <div key={index} className='w-72 h-76 flex-none p-3 font-light  rounded-lg shadow-md bg-neutral-50 sm:w-[240px] sm:h-[298px] shadow-neutral-500 hover:scale-105 transition ease-in-out '>
        <img className="w-48 h-48 mx-auto" src={item.preview}></img>
        <div>
          <p className="mb-5 text-neutral-800 truncate">{item.name}</p>
         <div className='flex justify-between items-center'>
         <a href={item.url} className="w-fit bg-red-500 text-white px-4 py-2 rounded-full">Live site</a>
         <p className='margin-auto text-yellow-500 font-bold '>{item.type}</p>
         </div>
    
        </div>
      </div>
      ))
     }
      </div>
    </motion.div>
  
  )
}

View_proy.propTypes = {
  data: PropTypes.array, 
};

