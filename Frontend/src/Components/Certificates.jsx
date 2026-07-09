import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaRobot,
 FaCogs 
} from "react-icons/fa";



function Certificates() {


const certificates = [

 {
    title: "MERN Stack Development",
    issuer: "Professional Training",
    year: "2026",
    icon: <FaReact />,
  },
  {
    title: "Generative AI",
    issuer: "Internship Program",
    year: "2026",
    icon: <FaRobot />,
  },

{
title:" Machine Learning",
issuer:"SimpliLearn",
year:"2025",
icon:<FaCogs />
},


];



return (

<div 
id="certifications"
className="
scroll-smooth
"
>


<div className="
bg-gradient-to-br
from-[#020617]
via-[#0b1120]
to-[#111827]
min-h-screen
p-10 md:p-25
flex
flex-col
gap-6
">







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
Certificates
</h2>

<p className="mt-2 max-w-2xl text-lg leading-8 text-gray-400">
  Certifications that reflect my commitment to continuous learning,
  technical excellence, and professional development.
</p>



</motion.div>










<div className="
grid
md:grid-cols-3
gap-5
">







{
certificates.map((certificate,index)=>(


<motion.div


key={index}


initial={{
opacity:0,
y:50
}}


whileInView={{
opacity:1,
y:0
}}


transition={{
duration:0.5,
delay:index*0.2
}}


viewport={{once:true}}



whileHover={{
scale:1.05,
y:-8
}}

className="
group
relative
overflow-hidden
border
border-white/10
rounded-3xl
bg-white/[0.04]
backdrop-blur-2xl
p-6
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
h-16
w-16
rounded-full
border
border-cyan-400/20
bg-cyan-500/10
backdrop-blur-xl
flex
items-center
justify-center
text-cyan-300
text-3xl
transition-all
duration-300
group-hover:rotate-12
group-hover:scale-110
"
>
  {certificate.icon}
</div>







<h3 className="

text-white
font-semibold
text-xl
">


{certificate.title}


</h3>





<div className="flex flex-wrap gap-2 mt-2">

  <span className="
  px-3
  py-1
  rounded-full
  bg-cyan-500/10
  border
  border-cyan-400/20
  text-cyan-300
  text-xs
  ">
    {certificate.issuer}
  </span>

  <span className="
  px-3
  py-1
  rounded-full
  bg-white/5
  border
  border-white/10
  text-gray-300
  text-xs
  ">
    {certificate.year}
  </span>

</div>







<button className="
mt-3
w-fit
px-5
py-2
rounded-lg
bg-gradient-to-r
from-purple-500
to-blue-500
text-sm
hover:shadow-lg
transition
">


View Certificate


</button>








</motion.div>



))

}




</div>







</div>



</div>


)


}


export default Certificates;