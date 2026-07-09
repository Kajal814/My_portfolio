import React from "react";
import { motion } from "framer-motion";

function Skill() {

  const skills = [
    {
      title: "Frontend",
      items: [
        ["React", "85%"],
        ["JavaScript", "80%"],
        ["Tailwind CSS", "90%"],
      ],
    },

    {
      title: "Backend",
      items: [
        ["Node.js", "75%"],
        ["Express.js", "70%"],
        ["MongoDB", "75%"],
      ],
    },

    {
      title: "Programming",
      items: [
        ["Java", "70%"],
        ["Python", "80%"],
        ["DSA", "65%"],
      ],
    },

    {
      title: "Tools",
      items: [
        ["Git/GitHub", "85%"],
        ["VS Code", "90%"],
        ["REST API", "75%"],
      ],
    },
  ];


  return (
    <div id="skills">

      <div className="
      bg-gradient-to-br
      from-[#020617]
      via-[#0b1120]
      to-[#111827]
      min-h-screen
      p-25
      flex
      flex-col
      gap-5
      scroll-smooth
      ">


        {/* heading */}

        <motion.div

        initial={{opacity:0,y:30}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.6}}

        className="flex flex-col gap-5">
        
<h2
  className="
    text-3xl
    md:text-4xl
    font-bold
    text-white
    inline-block
    relative
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
  Skills
</h2>

<p className="text-gray-400 max-w-2xl text-lg leading-8 mt-2">
  Technologies and tools I use to build modern, scalable and
  high-performance web applications.
</p>


        </motion.div>




        {/* cards */}

        <div className="
grid
grid-cols-1
md:grid-cols-2
gap-5
">


        {skills.map((skill,index)=>(


          <motion.div

          key={index}

          initial={{opacity:0,scale:0.9}}
          whileInView={{opacity:1,scale:1}}
          transition={{
  duration: 1.2,
  ease: "easeOut"
}}
          whileHover={{
  scale: 1.02,
  y: -6,
}}


         className="
group
relative
overflow-hidden
rounded-3xl
border
border-white/10
bg-white/[0.04]
backdrop-blur-2xl
p-6
text-white
shadow-[0_20px_60px_rgba(0,0,0,0.35)]
transition-all
duration-500
hover:border-cyan-400/30
hover:shadow-cyan-500/20
"

          >
            <div
  className="
    absolute
    w-32
    h-32
    bg-purple-500
    rounded-full
    blur-3xl
    opacity-20
    right-0
    top-0
  "
></div>

<h3 className="relative text-xl font-semibold mb-5">
  {skill.title}
</h3>



          {
  skill.items.map((item) => (

<div
  key={item[0]}
  className="mb-5"
>

                <div className="
                flex
                justify-between
                text-sm
                mb-1
                ">

                 <div className="flex items-center gap-2">

<div className="w-2 h-2 rounded-full bg-cyan-400"></div>

<p>{item[0]}</p>

</div>

                  <p className="text-gray-400">
                    {item[1]}
                  </p>

                </div>



                <div className="
                h-2
                bg-gray-700
                rounded-full
                ">


                <motion.div

                initial={{width:0}}

                whileInView={{
                  width:item[1]
                }}

                transition={{
                  duration:1
                }}

               className="
h-2
rounded-full
bg-gradient-to-r
from-purple-500
via-cyan-400
to-blue-500
shadow-[0_0_15px_rgba(34,211,238,0.5)]
"
                />


                </div>



          </div>


            ))
          }



          </motion.div>


        ))}



        </div>



      </div>


    </div>
  );
}

export default Skill;