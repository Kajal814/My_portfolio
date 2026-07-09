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
     
<div
  className="
  flex
  flex-col
  md:flex-row
  items-center
  justify-between
  gap-5
  "
>

  {/* Left Content */}

  <p
    className="
    text-sm
    text-gray-300
    text-center
    md:text-left
    "
  >
    © 2026{" "}
    <span className="font-semibold text-white">
      Kajal Yadav
    </span>

    {" "}• Designed & Developed with React, Tailwind CSS & Framer Motion.
  </p>

  {/* Right Icons */}

  <div className="flex items-center gap-5">

    <motion.a
      whileHover={{ scale: 1.2 }}
      href="https://www.linkedin.com/in/kajalydv/"
      target="_blank"
      rel="noopener noreferrer"
      className="
      group
      h-11
      w-11
      rounded-xl
      border
      border-white/10
      bg-white/5
      flex
      items-center
      justify-center
      text-cyan-300
      transition-all
      duration-300
      hover:-translate-y-1
      hover:border-cyan-400/30
      hover:bg-cyan-500/10
      hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]
      "
    >
      <TiSocialLinkedin size={25} />
    </motion.a>

    <motion.a
      whileHover={{ scale: 1.2 }}
      href="https://github.com/Kajal814"
      target="_blank"
      rel="noopener noreferrer"
      className="
      group
      h-11
      w-11
      rounded-xl
      border
      border-white/10
      bg-white/5
      flex
      items-center
      justify-center
      text-cyan-300
      transition-all
      duration-300
      hover:-translate-y-1
      hover:border-cyan-400/30
      hover:bg-cyan-500/10
      hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]
      "
    >
      <SlSocialGithub size={22} />
    </motion.a>

    <motion.a
      whileHover={{ scale: 1.2 }}
      href="mailto:ky7246204@gmail.com"
      className="
      group
      h-11
      w-11
      rounded-xl
      border
      border-white/10
      bg-white/5
      flex
      items-center
      justify-center
      text-cyan-300
      transition-all
      duration-300
      hover:-translate-y-1
      hover:border-cyan-400/30
      hover:bg-cyan-500/10
      hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]
      "
    >
      <FaEnvelope size={22} />
    </motion.a>

  </div>

</div>



      

    </motion.div>

  );
}

export default Footer;