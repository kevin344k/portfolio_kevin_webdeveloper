
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
    className='flex flex-wrap justify-center gap-4 margin-auto w-full h-full mt-5 overflow-y-scroll'>
       {
      data.map((item,index)=>(
        <div key={index} className=' p-3 font-light rounded-lg shadow-md bg-neutral-50 w-[240px] h-[298px] shadow-neutral-500 hover:scale-105 transition ease-in-out '>
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
    </motion.div>
  
  )
}

View_proy.propTypes = {
  data: PropTypes.array, 
};

