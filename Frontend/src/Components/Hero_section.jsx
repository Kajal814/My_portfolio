import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaGitAlt,
  FaJava,
  FaDocker,
  FaTerminal,
  FaLaptopCode,
  FaProjectDiagram,
  FaCode,
  FaBriefcase

} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
 
} from "react-icons/si";

function Hero() {
  const roles = [
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Problem Solver",
  ];

  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < roles[roleIndex].length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + roles[roleIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100);

      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setText("");
        setCharIndex(0);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 1500);

      return () => clearTimeout(timeout);
    }
  }, [charIndex, roleIndex]);

  return (
    <motion.div

     className="
relative
flex
flex-col
lg:flex-row
gap-10
min-h-screen
pt-24
px-6
lg:px-16
bg-gradient-to-br
from-[#020617]
via-[#0b1120]
to-[#111827]
overflow-hidden
"

      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}

    >



<div
className="
absolute
top-0
left-0
h-96
w-96
rounded-full
bg-cyan-500/10
blur-[140px]
"
/>

<div
className="
absolute
bottom-0
right-0
h-[450px]
w-[450px]
rounded-full
bg-purple-500/10
blur-[150px]
"
/>


      {/* LEFT SECTION */}

      <motion.div

        className="
w-full
lg:w-1/2
flex
justify-center
lg:justify-end
items-center
"

        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}

      >

        <div className="gap-2 flex flex-col">

          <div
className="
inline-flex
items-center
w-fit
gap-2
rounded-full
border
border-cyan-400/20
bg-cyan-500/10
px-4
py-2
text-sm
font-medium
text-cyan-300
">

<div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></div>

Final Year Tech Student

</div>

          <motion.h1

   className="
text-4xl
sm:text-5xl
lg:text-7xl
leading-tight
tracking-tight
text-white
font-bold
font-sans
transition-all
duration-300
drop-shadow-[0_0_10px_rgba(255,255,255,0.15)]
hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]
"

            whileHover={{
              scale: 1.05,
              textShadow: "0px 0px 20px #6366f1"
            }}

          >

            Kajal Yadav

          </motion.h1>

          <p className="text-gray-400 text-lg max-w-md leading-7">
            Aspiring Software Developer
          </p>

          <motion.p

            className="
            text-blue-300
           text-lg
sm:text-xl
            font-bold
            flex
            items-center
            "

          >

            {text}

            <span
className="
ml-2
inline-block
h-6
w-[3px]
bg-cyan-400
animate-pulse
rounded-full
"
/>

          </motion.p>

         <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">

            <motion.button

              whileHover={{
                scale: 1.1
              }}

              whileTap={{
                scale: 0.9
              }}

              className="
              w-full sm:w-auto
              bg-gradient-to-r
              from-purple-500/80
              via-indigo-500/70
              to-blue-400/80
              px-6
              py-2
              rounded
              text-white
              rounded-xl
font-medium
shadow-lg
hover:shadow-cyan-500/30
transition-all
duration-300
              "

            >

              Projects

            </motion.button>

            <motion.button

              whileHover={{
                scale: 1.1
              }}

              className="
              w-full sm:w-auto
              text-gray-400
              px-6
              py-2
              rounded
              border
              border-gray-500
              shadow-lg
              rounded-xl
border-white/10
bg-white/5
hover:bg-white/10
hover:border-cyan-400/30
              "

            >

              Download Resume

            </motion.button>

          </div>

        </div>

      </motion.div>

      {/* RIGHT SECTION */}

      <motion.div
className="
relative
w-full
lg:w-1/2
flex
flex-col
gap-6
justify-center
items-center
lg:items-start
"

        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}

      >

       
 
      
        {/* floating box */}
<div
className="
absolute
top-24
left-6
h-48
w-48
rounded-full
bg-cyan-500
opacity-20
blur-[90px]
"
/>

<div
className="
absolute
bottom-10
right-24
h-52
w-52
rounded-full
bg-purple-500
opacity-20
blur-[100px]
"
/>
        <motion.div

          className="
          h-40
          w-40
          hover:shadow-cyan-500/20
          rounded-3xl
          bg-gradient-to-br
          from-purple-600/50
          via-blue-600/40
          to-cyan-500/30
          border
          border-white/10
          backdrop-blur-lg
          shadow-xl
          flex
          items-center
          justify-center
          "

          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
            scale: [1, 1.05, 1]
          }}

          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}

        >

          <div className="flex flex-col items-center">

<FaLaptopCode className="text-white text-5xl"/>



</div>

        </motion.div >

        <h2 className="text-white font-bold text-xl sm:text-2xl text-center lg:text-left">
        Transforming Ideas Into Digital Experiences
        </h2>

        <p
className="
max-w-lg
text-center
lg:text-left
text-gray-400
leading-8
text-base
"
>
Full-stack developer passionate about building scalable web applications, solving algorithmic challenges, and exploring AI-powered innovation.

        </p>

        <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-gray-200 font-bold">

          <motion.div
            whileHover={{ scale: 1.08, y: -4 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.4, delay: 0.1 }}
         className="
relative
overflow-hidden
bg-white/5
backdrop-blur-xl
border
border-white/10
rounded-2xl
px-5
py-5
flex
flex-col
items-center
gap-2
min-w-[130px]
hover:border-cyan-400/40
hover:shadow-[0_0_25px_rgba(34,211,238,0.18)]
transition-all
duration-300
"
          >
            <div className="h-9 w-9 rounded-full bg-blue-400/10 border border-blue-400/20 flex items-center justify-center">
              <FaProjectDiagram className="text-blue-400 text-base" />
            </div>
           <span className="text-2xl font-bold text-white">
6+
</span>
            <span className="text-gray-400 text-sm font-medium">
Projects
</span>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.08, y: -4 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.4, delay: 0.2 }}
             className="
relative
overflow-hidden
bg-white/5
backdrop-blur-xl
border
border-white/10
rounded-2xl
px-5
py-5
flex
flex-col
items-center
gap-2
min-w-[130px]
hover:border-cyan-400/40
hover:shadow-[0_0_25px_rgba(34,211,238,0.18)]
transition-all
duration-300
"
          >
          <div className="h-10 w-10 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
  <FaCode className="text-purple-300 text-base" />
</div>

<span className="text-2xl font-bold text-white">
  50+
</span>

<span className="text-gray-400 text-xs uppercase tracking-wider">
  DSA Problems
</span>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.08, y: -4 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.4, delay: 0.3 }}
             className="
relative
overflow-hidden
bg-white/5
backdrop-blur-xl
border
border-white/10
rounded-2xl
px-5
py-5
flex
flex-col
items-center
gap-2
min-w-[130px]
hover:border-cyan-400/40
hover:shadow-[0_0_25px_rgba(34,211,238,0.18)]
transition-all
duration-300
"
          >
 <div className="h-9 w-9 rounded-full bg-blue-400/10 border border-blue-400/20 flex items-center justify-center">
  <FaBriefcase className="text-blue-400 text-base" />
</div>

<span className="text-lg font-bold">2</span>

<span className="text-gray-400 text-xs uppercase tracking-wider">
  Internships
</span>
          </motion.div>

        </div>

      </motion.div>

    </motion.div>
  );
}

export default Hero;