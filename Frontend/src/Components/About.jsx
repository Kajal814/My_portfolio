import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaDatabase, FaBrain, FaLaptopCode } from "react-icons/fa";


function About() {


const skills = [
  {
    title:"Problem Solving",
    icon:<FaCode/>,
    text:"Strong DSA fundamentals with logical thinking and coding practice."
  },

  {
    title:"Full Stack",
    icon:<FaLaptopCode/>,
    text:"Building responsive frontend and scalable backend applications."
  },

  {
    title:"AI & ML",
    icon:<FaBrain/>,
    text:"Exploring AI tools, models and intelligent applications."
  },

  {
    title:"Database",
    icon:<FaDatabase/>,
    text:"Working with MongoDB, SQL and data management."
  }
];



return (

 <div

id="about"

className="
bg-gradient-to-br
from-[#020617]
via-[#0b1120]
to-[#111827]
min-h-screen
p-10 md:p-25
scroll-smooth
"

>



<motion.div

className="flex flex-col gap-4 mb-8"

initial={{opacity:0,y:40}}

whileInView={{opacity:1,y:0}}

viewport={{once:true}}

>


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
  About Me
</h2>

<p className="text-gray-400 max-w-2xl text-lg leading-8 mt-2">
  Passionate about crafting modern web experiences, solving complex
  problems, and building scalable applications with clean, efficient code.
</p>

</motion.div>






<div className="
flex
gap-5
flex-col
md:flex-row
">




<motion.div
className="
relative
w-full
md:w-[70%]
overflow-hidden
rounded-3xl
border
border-white/10
bg-white/5
backdrop-blur-2xl
p-8
shadow-xl
transition-all
duration-500
hover:border-cyan-400/30
hover:shadow-cyan-500/20
"
  initial={{ x: -60, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  viewport={{ once: true }}
  whileHover={{
    scale: 1.02,
    y: -6,
  }}
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


 

  <p className="mt-4 text-white text-sm leading-6 relative">
    I'm a technology student passionate about web development,
    building scalable applications and exploring AI-based solutions.
  </p>


  <p className="mt-3 text-white text-sm leading-6 relative">
    I enjoy creating clean UI, writing efficient backend logic,
    and improving user experience.
  </p>

<div className="mt-6 relative rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-5">

<h3 className="text-lg font-semibold text-cyan-300">
Career Vision
</h3>

<p className="mt-3 text-white text-sm leading-7">
To build innovative software that creates real impact while
continuously growing as a software engineer.
</p>

</div>


  <div className="mt-6 relative rounded-xl border border-white/10 bg-white/5 p-4">

<h4 className="text-cyan-400 font-semibold">
Education
</h4>

<p className="mt-2 text-white text-sm leading-6">
Bachelor of Technology (B.Tech) in Information Technology
</p>

</div>

</motion.div>







<div className="
md:w-[40%]
grid
grid-cols-2
gap-4


">



{
skills.map((skill,i)=>(


<motion.div


key={i}


className="
group
relative
overflow-hidden
rounded-3xl
border
border-white/10
bg-white/[0.04]
backdrop-blur-2xl
p-5
text-white
shadow-[0_20px_60px_rgba(0,0,0,0.35)]
transition-all
duration-500
hover:border-cyan-400/30
hover:shadow-cyan-500/10
"
initial={{y:40,opacity:0}}

whileInView={{y:0,opacity:1}}

transition={{delay:i*0.15}}

viewport={{once:true}}

whileHover={{
  scale: 1.02,
  y: -6,
}}

>




  {/* Background Glow */}
<div
  className="
    absolute
    w-24
    h-24
    bg-purple-500
    rounded-full
    blur-3xl
    opacity-20
    right-0
    top-0
  "
></div>

{/* Icon */}
<div
  className="
    relative
    text-3xl
    text-cyan-400
    transition-all
    duration-300
    group-hover:scale-125
    group-hover:rotate-6
  "
>
  {skill.icon}
</div>


<h3 className="relative font-bold mt-3">
  {skill.title}
</h3>



<p className="relative text-gray-400 text-sm mt-3">
  {skill.text}
</p>


</motion.div>



))
}



</div>





</div>






</div> 

)

}


export default About;