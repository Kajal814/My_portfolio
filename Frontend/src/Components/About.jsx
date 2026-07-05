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


<h2 className="
text-white
text-4xl
font-bold
">

About Me

</h2>


<p className="
text-gray-400
max-w-xl
">

Developer focused on creating modern web
applications, solving problems and learning
new technologies.

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
md:w-[60%]
relative
border
border-white/10
rounded-2xl
bg-white/5
backdrop-blur-xl
shadow-xl
p-7
text-gray-200
overflow-hidden
"


initial={{x:-60,opacity:0}}

whileInView={{x:0,opacity:1}}

viewport={{once:true}}


whileHover={{scale:1.02}}

>


<div className="
absolute
w-40
h-40
bg-purple-500
rounded-full
blur-3xl
opacity-20
right-0
top-0
">

</div>





<p className="
mt-4
leading-7
">

I'm a technology student passionate about
web development, building scalable applications
and exploring AI based solutions.

I enjoy creating clean UI, writing efficient
backend logic and improving user experience.

</p>





<h3 className="
mt-7
font-bold
text-white
">

Career Goals

</h3>


<p className="mt-2 text-gray-300">

To become a software developer where I can
build impactful products, improve my skills
and work on real world problems.

</p>





<h3 className="
mt-7
font-bold
text-white
">

Education

</h3>


<p className="mt-2 text-gray-300">

Bachelor of Technology — Computer Science

</p>





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
border
border-white/10
rounded-2xl
bg-white/5
backdrop-blur-xl
p-5
text-white
"


initial={{y:40,opacity:0}}

whileInView={{y:0,opacity:1}}

transition={{delay:i*0.15}}

viewport={{once:true}}


whileHover={{
scale:1.05,
backgroundColor:"rgba(59,130,246,0.15)"
}}


>


<div className="
text-blue-400
text-2xl
">

{skill.icon}

</div>



<h3 className="
font-bold
mt-3
">

{skill.title}

</h3>



<p className="
text-gray-400
text-sm
mt-3
">

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