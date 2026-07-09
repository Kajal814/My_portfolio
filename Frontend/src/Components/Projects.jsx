import React from "react";
import { motion } from "framer-motion";

function Projects() {

 const projects = [
  {
    title: "Interactive Portfolio",
    desc: "A responsive MERN portfolio showcasing my skills, projects, and experience with smooth animations.",
    tech: "React • Tailwind • Node.js • Express • MongoDB",
  },

  {
    title: "AI Chat Assistant",
    desc: "An AI-powered chatbot that delivers intelligent responses through a clean and interactive interface.",
    tech: "React • Node.js • OpenAI API • MongoDB",
  },

  {
    title: "TrackMindz",
    desc: "A student learning tracker to manage goals, monitor progress, and organize study activities.",
    tech: "Python • Django • MySQL • Chart.js",
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

         <h2
className="
text-3xl
md:text-4xl
font-bold
text-white
relative
inline-block
pb-2
after:absolute
after:left-0
after:bottom-0
after:h-[3px]
after:w-14
after:rounded-full
after:bg-gradient-to-r
after:from-purple-500
after:to-cyan-400
"
>
Projects
</h2>


        <p className="mt-2 max-w-2xl text-lg leading-8 text-gray-400">
  Turning ideas into scalable digital experiences through full-stack
  development, intelligent applications, and modern design principles.
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
          group
relative
overflow-hidden
rounded-3xl
bg-white/[0.04]
          border
          border-white/10
          backdrop-blur-xl
          shadow-xl
          p-5
          flex
          gap-5
          transition-all
duration-500
hover:border-cyan-400/30
hover:shadow-cyan-500/10
          "


          >




          {/* image box */}


         <motion.div
animate={{ y: [0, -6, 0] }}
transition={{
  duration: 3,
  repeat: Infinity,
}}
className="
h-40
w-40
rounded-2xl
bg-gradient-to-br
from-slate-900
via-[#0f172a]
to-[#111827]
border
border-white/10
overflow-hidden
shadow-lg
"
>

  {/* Browser Header */}
  <div className="flex items-center gap-1 px-3 py-2 border-b border-white/10">
    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
  </div>

  {/* Preview */}
  <div className="flex flex-col justify-center items-center h-full">
      <div className="w-16 h-2 rounded-full bg-cyan-400 mb-3"></div>

      <div className="space-y-2">
          <div className="w-20 h-2 rounded-full bg-white/20"></div>
          <div className="w-14 h-2 rounded-full bg-white/10"></div>
          <div className="w-24 h-2 rounded-full bg-white/20"></div>
      </div>
  </div>

</motion.div>





          {/* content */}


          <div className="
          flex
          flex-col
          gap-3
          ">


         <h3 className="
text-2xl
font-semibold
text-white
">

          {project.title}

          </h3>




         <p className="
text-gray-400
leading-7
text-[15px]
">

          {project.desc}

          </p>





         <div className="
inline-flex
w-fit
rounded-full
border
border-cyan-400/20
bg-cyan-500/10
px-3
py-1
text-xs
font-medium
text-cyan-300
">
          {project.tech}

          </div>






          <div className="flex gap-3">



          <motion.a
href="#"
target="_blank"
whileHover={{
scale:1.05
}}
className="
inline-flex
items-center
justify-center
gap-2
px-4
py-2
rounded-xl
border
border-white/10
bg-white/5
text-white
font-medium
transition-all
duration-300
hover:border-cyan-400/30
hover:bg-cyan-500/10
"
>
GitHub →
</motion.a>




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