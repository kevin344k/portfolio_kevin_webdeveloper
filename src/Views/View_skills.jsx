import react from "../assets/react.svg";
import { motion } from "motion/react";
export default function View_skills() {
  return (
    <motion.div 
    initial={{ opacity: 0, escale:0.7}}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 0.4,
      scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
    }}
    className=" h-full flex flex-col justify-start mt-4 items-center px-3  border border-neutral-600   rounded-[20px] sm:w-72 shadow-md bg-[#242424] md:w-full md:border-none md:mt-0 md:px-4">
        <div className="flex flex-col items-left gap-2 mb-8 mt-5 w-full">
       <p className="text-xl text-left font-bold">Habilidades</p>
       <div className="w-26 h-1 bg-yellow-500 "></div>
       </div>
      <div className="w-full">
       <div className="flex flex-col items-center gap-2 mb-8">
       <p className="tracking-wider text-xl ">Frontend:</p>
     
       </div>
        <div className=" w-full flex  flex-wrap items-center gap-12 bg-neutral-50 rounded-md justify-center py-2">
          <img
            className="w-20 h-20"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png"
            alt=""
          />
          <img
            className="w-20 h-20"
            src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
            alt="Javascript"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/95/Tailwind_CSS_logo.svg"
            alt=""
            className="w-48 h-10"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png"
            alt=""
            className="w-20 h-20"
          />
          <img
            src="https://logos-world.net/wp-content/uploads/2024/09/Figma-Logo.png"
            alt=""
            className="w-26 h-20"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
            alt=""
            className="w-20 h-20"
          />
          <img  className="w-20 h-20" src={react} alt="" />
        </div>
      </div>
      <div className="mt-8 w-full">
      <div className="flex flex-col items-center gap-2 mb-8">
       <p className="tracking-wider text-xl">Backend:</p>
    
       </div>
        <div className="flex flex-wrap gap-12 bg-neutral-50 rounded-md justify-center mb-5">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
            alt=""
            className="w-20 h-20"
          />
          <img
            src="https://images.seeklogo.com/logo-png/33/1/express-js-logo-png_seeklogo-339850.png"
            alt=""
            className="w-26 h-20"
          />
          <img
            className="w-20 h-20"
            src="https://download.logo.wine/logo/MySQL/MySQL-Logo.wine.png"
            alt=""
          />
          <img
            className="w-20 h-20"
            src="https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg"
            alt=""
          />
        </div>
        
      </div>
    </motion.div>
  );
}
