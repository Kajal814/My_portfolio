import React from "react";
import { motion } from "framer-motion";

function Projects() {

  const projects = [
    {
      title: "AI Chat Assistant",
      desc: "A conversational AI assistant with smart responses and modern UI experience.",
      tech: "React • Node • OpenAI • MongoDB",
    },

    {
      title: "Portfolio Website",
      desc: "A responsive developer portfolio website with animations and clean design.",
      tech: "React • Tailwind • Framer Motion",
    },

    {
      title: "Algorithm Visualizer",
      desc: "Interactive visualization tool for learning sorting algorithms.",
      tech: "JavaScript • React • CSS",
    },

    {
      title: "MERN Dashboard",
      desc: "Full stack dashboard application with authentication and CRUD features.",
      tech: "MongoDB • Express • React • Node",
    },
  ];


  return (

    <div id="projects">

      <div className="
      bg-gradient-to-br
      from-[#020617]
      via-[#0b1120]
      to-[#111827]
      min-h-screen 
      p-25 
      flex 
      flex-col 
      gap-8
      scroll-smooth
      ">


        {/* heading */}

        <motion.div

        initial={{
          opacity:0,
          y:30
        }}

        whileInView={{
          opacity:1,
          y:0
        }}

        transition={{
          duration:0.6
        }}

        className="flex flex-col gap-3">

          <h2 className="
          text-white 
          font-bold 
          text-3xl
          ">
            Projects
          </h2>


          <p className="text-gray-400">
            Selected projects — hover for details and quick links.
          </p>

        </motion.div>





        {/* cards */}


        <div className="
        grid 
        grid-cols-1 
        md:grid-cols-2 
        gap-5
        ">



        {
          projects.map((project,index)=>(


          <motion.div

          key={index}


          initial={{
            opacity:0,
            y:40
          }}


          whileInView={{
            opacity:1,
            y:0
          }}


          transition={{
            duration:0.5,
            delay:index*0.2
          }}


          whileHover={{
            scale:1.03,
            y:-5
          }}



          className="
          rounded-2xl
          bg-white/5
          border
          border-white/10
          backdrop-blur-xl
          shadow-xl
          p-5
          flex
          gap-5
          "


          >




          {/* image box */}


          <motion.div

          animate={{
            y:[0,-8,0]
          }}

          transition={{
            duration:3,
            repeat:Infinity
          }}

          className="
          h-40
          w-40
          rounded-xl
          bg-gradient-to-b
          from-indigo-700/50
          via-blue-900/70
          to-black
          flex
          items-center
          justify-center
          text-white
          text-4xl
          font-bold
          shadow-lg
          "

          >


          {project.title[0]}


          </motion.div>





          {/* content */}


          <div className="
          flex
          flex-col
          gap-3
          ">


          <h3 className="
          text-white
          text-xl
          font-bold
          ">

          {project.title}

          </h3>




          <p className="
          text-gray-400
          text-sm
          ">

          {project.desc}

          </p>





          <p className="
          text-blue-300
          text-sm
          ">

          {project.tech}

          </p>






          <div className="flex gap-3">



          <motion.button

          whileHover={{
            scale:1.08
          }}

          className="
          px-4
          py-2
          rounded-lg
          bg-gradient-to-r
          from-purple-500
          to-blue-500
          text-white
          text-sm
          ">

          Live Demo

          </motion.button>





          <motion.button

          whileHover={{
            scale:1.08
          }}

          className="
          px-4
          py-2
          rounded-lg
          border
          border-white/20
          text-gray-300
          text-sm
          ">

          GitHub

          </motion.button>




          </div>



          </div>





          </motion.div>


          ))
        }




        </div>



      </div>

    </div>

  );
}


export default Projects;