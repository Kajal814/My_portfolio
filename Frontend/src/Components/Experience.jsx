import React from "react";
import { motion } from "framer-motion";


function Experience() {


const experiences = [
   {
    role: "Generative AI Intern",
    company: "EI Systems Technologies",
    time: "June 2026 - Present",
    desc: "Worked on AI-driven projects using Large Language Models (LLMs), prompt engineering, and modern AI tools to develop intelligent applications and automate real-world tasks."
  },

  {
    role: "MERN Stack Trainee",
    company: "Substring Technologies",
    time: "March 2026 - May 2026",
    desc: "Completed hands-on training in the MERN stack by building responsive full-stack web applications using MongoDB, Express.js, React, and Node.js while strengthening API development and database management."
  }
];



return (

<div id="experience">


<div className="
bg-gradient-to-br
from-[#020617]
via-[#0b1120]
to-[#111827]
min-h-screen
p-10 md:p-25
flex
flex-col
gap-5
scroll-smooth
">





{/* Heading */}


<motion.div

initial={{opacity:0,y:40}}

whileInView={{opacity:1,y:0}}

viewport={{once:true}}

className="flex flex-col gap-5"


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
  Experience
</h2>



<p className="text-gray-400 max-w-2xl text-lg leading-8 mt-2">
  My journey of gaining practical experience through internships,
  professional training, and hands-on development projects.
</p>


</motion.div>








{/* Timeline */}



<div className="flex flex-col gap-6 mt-8">


{
experiences.map((exp,index)=>(


<div 
key={index}
className="flex gap-4"
>



<motion.div

initial={{scale:0}}

whileInView={{scale:1}}

transition={{delay:index*0.2}}

className="
h-4
w-4
mt-6
rounded-full
bg-gradient-to-r
from-purple-500
via-indigo-500
to-blue-400
z-10
"

/>







<motion.div


initial={{
x:50,
opacity:0
}}

whileInView={{
x:0,
opacity:1
}}

transition={{
duration:0.6
}}

viewport={{once:true}}


whileHover={{
  scale:1.02,
  y:-6
}}


className="
group
relative
overflow-hidden
w-full
rounded-3xl
border
border-white/10
bg-white/[0.04]
backdrop-blur-2xl
p-7
text-white
shadow-[0_20px_60px_rgba(0,0,0,0.35)]
transition-all
duration-500
hover:-translate-y-2
hover:border-cyan-400/30
hover:shadow-cyan-500/10
flex
flex-col
gap-4
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

<div className="
flex
justify-between
flex-wrap
">

<h3 className="
text-2xl
font-semibold
text-white
">

{exp.role}

</h3>


<span className="
rounded-full
border
border-white/10
bg-white/5
px-3
py-1
text-xs
text-gray-300
">

{exp.time}

</span>


</div>



<div className="
inline-flex
w-fit
rounded-full
border
border-cyan-400/20
bg-cyan-500/10
px-3
py-1
text-sm
font-medium
text-cyan-300
">
    {exp.company}
</div>




<p className="
text-[15px]
leading-7
">

{exp.desc}

</p>



</motion.div>





</div>



))
}

</div>












</div>

</div>

)

}


export default Experience;