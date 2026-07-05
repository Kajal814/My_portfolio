import React from "react";
import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";


function Certificates() {


const certificates = [

{
title:"Full Stack Development",
issuer:"Online Platform",
year:"2025"
},

{
title:"AI & Machine Learning",
issuer:"Online Platform",
year:"2025"
},

{
title:"Java Programming",
issuer:"Online Platform",
year:"2024"
}


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


<h2 className="
text-white
font-bold
text-3xl
">

Certificates

</h2>



<p className="
text-gray-400
text-sm
max-w-xl
">

Certifications that represent my learning
and technical growth.

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
border
border-white/10
text-white
p-6
rounded-2xl
bg-white/5
backdrop-blur-xl
shadow-xl
flex
flex-col
gap-4
hover:border-blue-500/40
transition
"

>







<div className="
h-14
w-14
rounded-full
bg-gradient-to-r
from-purple-500
to-blue-500
flex
items-center
justify-center
text-white
text-xl
">


<FaCertificate/>


</div>







<h3 className="
text-xl
font-bold
text-blue-300
">


{certificate.title}


</h3>







<p className="
text-gray-400
text-sm
">


Issued by: {certificate.issuer}


</p>





<p className="
text-gray-500
text-sm
">


Year: {certificate.year}


</p>







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