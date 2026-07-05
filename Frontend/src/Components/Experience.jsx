import React from "react";
import { motion } from "framer-motion";


function Experience() {


const experiences = [
  {
    role:"Full Stack Developer Intern",
    company:"Tech Internship",
    time:"2025",
    desc:"Worked on frontend development, backend APIs and building responsive web applications using modern technologies."
  },


  {
    role:"Frontend Developer",
    company:"Personal Projects",
    time:"2024 - Present",
    desc:"Created interactive UI components, portfolio websites and improved skills in React, Tailwind CSS and JavaScript."
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


<h2 className="
text-white
font-bold
text-3xl
">

Experience

</h2>



<p className="
text-gray-400
text-sm
max-w-xl
">

My journey of learning, building projects and
gaining practical development experience.

</p>


</motion.div>








{/* Timeline */}


<div className="
flex
flex-col
gap-6
relative
">



<div className="
absolute
left-[7px]
top-3
h-full
w-[2px]
bg-gradient-to-b
from-purple-500
to-blue-500
">

</div>







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
scale:1.02
}}


className="
border
border-white/10
w-full
text-white
p-6
rounded-2xl
bg-white/5
backdrop-blur-lg
shadow-xl
flex
flex-col
gap-3
"


>



<div className="
flex
justify-between
flex-wrap
">


<h3 className="
text-xl
font-bold
text-blue-300
">

{exp.role}

</h3>


<span className="
text-gray-400
text-sm
">

{exp.time}

</span>


</div>




<p className="
text-white
font-semibold
">

{exp.company}

</p>




<p className="
text-gray-400
text-sm
leading-6
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