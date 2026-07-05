import React from "react";
import { motion } from "framer-motion";

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

        <h1 className="
        text-2xl
        font-bold
        bg-gradient-to-r
        from-purple-400
        via-blue-400
        to-cyan-300
        bg-clip-text
        text-transparent
        ">

        Kajal Yadav

        </h1>

        </motion.div>






        {/* Links */}


        <div className="
        hidden
        md:flex
        gap-7
        ">


        {
          links.map((link,index)=>(

          <motion.a

          key={index}

          href={`#${link.id}`}

          whileHover={{
            y:-3
          }}

          className="
          text-gray-300
          hover:text-white
          transition
          duration-300
          relative
          group
          text-sm
          font-medium
          "

          >


          {link.name}




          <span className="
          absolute
          left-0
          -bottom-2
          h-[2px]
          w-0
          rounded-full
          bg-gradient-to-r
          from-purple-500
          to-blue-400
          group-hover:w-full
          transition-all
          duration-300
          ">


          </span>


          </motion.a>

          ))
        }


        </div>



      </div>


    </motion.div>

  );
}

export default Navbar;