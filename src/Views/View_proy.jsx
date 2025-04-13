import { useEffect, useState } from 'react'

// Import Swiper React components


import "../css/slider.css"
import { div } from 'motion/react-client';

// import required modules



export default function View_proy({data}) {


  
console.log(data);


  return (
    
    <div className='flex flex-wrap justify-center gap-4 margin-auto w-full overflow-hidden '>
       {
      data.map((item,index)=>(
        <div key={index} className=' p-3 font-light rounded-lg shadow-md bg-neutral-50 shadow-neutral-500 hover:scale-105 transition ease-in-out '>
        <img className="w-48 h-48" src={item.preview}></img>
        <div>
          <p className="mb-5 text-neutral-800">{item.name}</p>
          <a href={item.url} className="w-full bg-red-400 text-white px-4 py-2 rounded-full">Live site</a>
        </div>
      </div>
      ))
     }
    </div>
  
  )
}
