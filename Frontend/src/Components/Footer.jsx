import React from "react";
import { motion } from "framer-motion";
import { SlSocialGithub } from "react-icons/sl";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaEnvelope } from "react-icons/fa";

function Footer() {
  return (

    <motion.div

    initial={{opacity:0, y:30}}
    whileInView={{opacity:1, y:0}}
    transition={{duration:0.6}}

    id="footer"

    className="
    bg-gradient-to-br
    from-[#020617]
    via-[#0b1120]
    to-[#111827]
    border-t
    border-white/10
    backdrop-blur-lg
    px-10
    py-6
    scroll-smooth
    "

    >


      <div className="
      flex
      flex-col
      md:flex-row
      items-center
      justify-between
      gap-4
      ">


        <p className="
        text-sm
        text-gray-300
        text-center
        ">

        © 2026 
        <span className="
        text-blue-400
        font-bold
        ">
        Kajal Yadav
        </span>

        — Final Year Technology Student. All rights reserved.

        </p>





        <div className="
        flex
        gap-5
        ">


        <motion.a
        whileHover={{scale:1.2}}
        href="#"
        className="text-blue-400"
        >

        <TiSocialLinkedin size={25}/>

        </motion.a>



        <motion.a
        whileHover={{scale:1.2}}
        href="#"
        className="text-blue-400"
        >

        <SlSocialGithub size={22}/>

        </motion.a>




        <motion.a
        whileHover={{scale:1.2}}
        href="#"
        className="text-blue-400"
        >

        <FaEnvelope size={22}/>

        </motion.a>


        </div>



      </div>


    </motion.div>

  );
}

export default Footer;