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

          <h2 className="
          text-white
          font-bold
          text-2xl
          ">
            Skills
          </h2>


          <p className="text-gray-400 text-sm">
            Technologies and tools I use to build modern web applications.
          </p>


        </motion.div>




        {/* cards */}

        <div className="
        grid
        grid-cols-2
        gap-5
        ">


        {skills.map((skill,index)=>(


          <motion.div

          key={index}

          initial={{opacity:0,scale:0.9}}
          whileInView={{opacity:1,scale:1}}
          transition={{
            duration:0.5,
            delay:index*0.2
          }}

          whileHover={{
            y:-8
          }}


          className="
          border
          border-white/10
          text-white
          p-6
          rounded-xl
          bg-white/5
          backdrop-blur-lg
          shadow-xl
          "

          >


          <h3 className="
          text-xl
          font-semibold
          mb-5
          ">
            {skill.title}
          </h3>



          {
            skill.items.map((item,i)=>(


              <div key={i} className="mb-4">


                <div className="
                flex
                justify-between
                text-sm
                mb-1
                ">

                  <p>{item[0]}</p>

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
                via-indigo-500
                to-blue-400
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