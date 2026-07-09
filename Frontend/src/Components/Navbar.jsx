import React from "react";
import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

function Navbar() {

  const links = [
    
    {name:"About", id:"about"},
    {name:"Skills", id:"skills"},
    {name:"Projects", id:"projects"},
    {name:"Experience", id:"experience"},
    {name:"Certificates", id:"certifications"},
    {name:"Contact", id:"contact"},
  ];


  return (

    <motion.div

    initial={{y:-80}}
    animate={{y:0}}
    transition={{duration:0.6}}

    className="
    fixed
    top-0
    left-0
    w-full
    z-50
    bg-[#020617]/80
    backdrop-blur-xl
    border-b
    border-white/10
    shadow-lg
    "

    >


      <div className="
      flex
      h-20
      text-white
      px-8
      md:px-14
      items-center
      justify-between
      ">


        {/* Logo */}

        <motion.div
        whileHover={{scale:1.08}}
        transition={{duration:0.2}}
        >

       
<div
  className="
    inline-flex
    items-center
    px-4
    py-2
    rounded-xl
    border
    border-cyan-400/20
    backdrop-blur-sm
    transition-all
    duration-500
    hover:border-cyan-400/60
    hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]
    hover:-translate-y-0.5
  "
>
  <h1
    className="
      text-2xl
      font-bold
      bg-gradient-to-r
      from-purple-400
      via-blue-400
      to-cyan-300
      bg-clip-text
      text-transparent
      transition-all
      duration-500
      ease-out
      hover:scale-105
      hover:drop-shadow-[0_0_18px_rgba(59,130,246,0.6)]
      hover:tracking-wide
      cursor-pointer
    "
  >
    Kajal Yadav
  </h1>
</div>

        </motion.div>






        {/* Links */}


        <div className="
        hidden
        md:flex
        gap-5
        ">


        {
          links.map((link,index)=>(

         <motion.a
  key={index}
  href={`#${link.id}`}
  whileHover={{
    y: -3,
    scale: 1.05,
  }}
  transition={{ duration: 0.2 }}
  className="
    relative
    group
    px-3
    py-2
    text-[16px]
    font-semibold
    tracking-wide
    text-gray-300
    hover:text-white
    transition-all
    duration-300
    cursor-pointer
  "
>
  {link.name}

  <span
    className="
      absolute
      left-0
      -bottom-1
      h-[2.5px]
      w-0
      rounded-full
      bg-gradient-to-r
      from-purple-500
      via-blue-500
      to-cyan-400
      group-hover:w-full
      transition-all
      duration-300
    "
  ></span>
</motion.a>

          ))
        }


        </div>



      </div>


    </motion.div>

  );
}

export default Navbar;