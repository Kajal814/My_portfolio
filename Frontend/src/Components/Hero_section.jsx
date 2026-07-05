import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import {
  FolderKanban,
  BriefcaseBusiness,
  Trophy,
  BadgeCheck,
} from "lucide-react";

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaJava,
} from "react-icons/fa";

import { SiJavascript, SiMongodb } from "react-icons/si";

function Hero() {
  const roles = [
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Problem Solver",
  ];

  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < roles[roleIndex].length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + roles[roleIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100);

      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setText("");
        setCharIndex(0);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 1500);

      return () => clearTimeout(timeout);
    }
  }, [charIndex, roleIndex]);

  return (
    <motion.div
      className="flex gap-2 h-screen bg-gradient-to-br from-[#020617] via-[#0b1120] to-[#111827] scroll-smooth"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* LEFT SECTION */}

      <motion.div
        className="w-[50%] flex justify-end items-center mr-6"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="gap-2 flex flex-col">
          <p className="text-blue-500 font-bold">
            FINAL YEAR TECH STUDENT
          </p>

          <motion.h1
            className="text-5xl font-bold font-sans text-white"
            whileHover={{
              scale: 1.05,
              textShadow: "0px 0px 20px #6366f1",
            }}
          >
            Kajal Yadav
          </motion.h1>

          <p className="text-gray-400 text-sm">
            Aspiring Software Developer
          </p>

          <motion.p className="text-blue-300 text-xl font-bold flex items-center">
            {text}
            <span className="animate-pulse text-white ml-1">|</span>
          </motion.p>

          <div className="flex gap-5 mt-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-gradient-to-r from-purple-500/80 via-indigo-500/70 to-blue-400/80 px-6 py-2 rounded text-white"
            >
              Projects
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              className="text-gray-400 px-6 py-2 rounded border border-gray-500 shadow-lg"
            >
              Download Resume
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* RIGHT SECTION */}

      <motion.div
        className="w-[50%] relative flex flex-col justify-center pl-2"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Floating Tech Icons */}

        <motion.div
          className="absolute top-20 left-8 bg-white/10 backdrop-blur-lg p-4 rounded-2xl border border-white/10 text-cyan-400"
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          whileHover={{ scale: 1.15 }}
        >
          <FaReact size={32} />
        </motion.div>

        <motion.div
          className="absolute top-10 right-28 bg-white/10 backdrop-blur-lg p-4 rounded-2xl border border-white/10 text-green-500"
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
          whileHover={{ scale: 1.15 }}
        >
          <FaNodeJs size={30} />
        </motion.div>

        <motion.div
          className="absolute top-56 left-0 bg-white/10 backdrop-blur-lg p-3 rounded-xl border border-white/10 text-yellow-400"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3.5 }}
          whileHover={{ scale: 1.15 }}
        >
          <SiJavascript size={28} />
        </motion.div>

        <motion.div
          className="absolute top-60 right-16 bg-white/10 backdrop-blur-lg p-3 rounded-xl border border-white/10 text-green-400"
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          whileHover={{ scale: 1.15 }}
        >
          <SiMongodb size={28} />
        </motion.div>

        <motion.div
          className="absolute bottom-48 left-12 bg-white/10 backdrop-blur-lg p-3 rounded-xl border border-white/10 text-orange-500"
          animate={{ y: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
          whileHover={{ scale: 1.15 }}
        >
          <FaHtml5 size={28} />
        </motion.div>

        <motion.div
          className="absolute bottom-48 right-32 bg-white/10 backdrop-blur-lg p-3 rounded-xl border border-white/10 text-blue-500"
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          whileHover={{ scale: 1.15 }}
        >
          <FaCss3Alt size={28} />
        </motion.div>

        <motion.div
          className="absolute bottom-20 left-32 bg-white/10 backdrop-blur-lg p-3 rounded-xl border border-white/10 text-red-500"
          animate={{ y: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 3.5 }}
          whileHover={{ scale: 1.15 }}
        >
          <FaGitAlt size={28} />
        </motion.div>

        <motion.div
          className="absolute bottom-20 right-16 bg-white/10 backdrop-blur-lg p-3 rounded-xl border border-white/10 text-orange-400"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          whileHover={{ scale: 1.15 }}
        >
          <FaJava size={28} />
        </motion.div>

        {/* Availability Badge */}

        <motion.div
          className="inline-flex w-fit items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30 text-green-300 mb-5"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <BadgeCheck size={18} />
          Available for Internship
        </motion.div>

        <h2 className="text-white font-bold text-xl">
          Hi — I build performant web apps
        </h2>

        <p className="text-gray-400 text-sm mr-48 mt-3">
          Passionate Full Stack Developer focused on building responsive,
          scalable and user-friendly web applications using modern
          technologies.
        </p>
                <div className="flex gap-4 mt-8">

          <motion.div
            whileHover={{ scale: 1.08 }}
            className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl px-5 py-4 w-40 shadow-xl"
          >
            <FolderKanban className="text-cyan-400 mb-2" size={28} />

            <h3 className="text-white text-xl font-bold">
              12+
            </h3>

            <p className="text-gray-300 text-sm">
              Projects Completed
            </p>

          </motion.div>

          <motion.div
            whileHover={{ scale: 1.08 }}
            className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl px-5 py-4 w-40 shadow-xl"
          >
            <BriefcaseBusiness className="text-green-400 mb-2" size={28} />

            <h3 className="text-white text-xl font-bold">
              2
            </h3>

            <p className="text-gray-300 text-sm">
              Internships
            </p>

          </motion.div>

          <motion.div
            whileHover={{ scale: 1.08 }}
            className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl px-5 py-4 w-40 shadow-xl"
          >
            <Trophy className="text-yellow-400 mb-2" size={28} />

            <h3 className="text-white text-xl font-bold">
              200+
            </h3>

            <p className="text-gray-300 text-sm">
              DSA Problems
            </p>

          </motion.div>

        </div>

      </motion.div>

    </motion.div>
  );
}

export default Hero;