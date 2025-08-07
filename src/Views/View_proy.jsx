
import { motion } from "motion/react";
import PropTypes from 'prop-types';








export default function View_proy({data}) {





  return (
    
    <motion.div 
    initial={{ opacity: 0, escale:0.7}}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 0.4,
      scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
    }}
    className=' flex flex-col  w-full  h-full mt-5  border border-neutral-600   rounded-[20px] sm:w-72 shadow-md bg-[#242424] md:w-full md:border-none md:mt-0 md:px-4 md:overflow-y-scroll '>
        <p className="mx-auto sm:text-left  md:text-xl ml-5 py-2 px-0 font-bold border-b-4 border-yellow-500 w-fit m-2">
        Proyectos ({data?.length || 0})

      </p>

     
      <div className="flex  w-full  h-full  gap-4  p-10   pl-5  overflow-x-scroll snap-center snap-x snap-mandatory md:flex-wrap md:p-0 md:overflow-x-visible md:justify-center ">
      {
      data.map((item,index)=>(
        <div key={index} className='w-50 h-74   md:w-55  flex-none p-3 font-light  rounded-lg shadow-md bg-neutral-50 sm:w-[240px] sm:h-[298px] shadow-neutral-500 hover:scale-105 transition ease-in-out '>
       <div className="h-45">
         <img className="w-full h-full mx-auto bg-contain" src={item.preview}></img>
       </div>
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

