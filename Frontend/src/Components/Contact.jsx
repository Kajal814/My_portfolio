import React from "react";
import { motion } from "framer-motion";
import { TiSocialLinkedin } from "react-icons/ti";
import { SlSocialGithub } from "react-icons/sl";
import { FaEnvelope } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";

function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      toast.error("Please fill in all fields.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/api/contacts", {
        name,
        email,
        message,
      });

      toast.success(response.data.message);

      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      toast.error("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      id="contact"
      className="
      bg-gradient-to-br
      from-[#020617]
      via-[#0b1120]
      to-[#111827]
      min-h-screen
      p-10 md:p-25
      flex
      flex-col
      gap-8
      scroll-smooth
      "
    >
      {/* Heading */}

      <motion.div
        className="flex flex-col gap-5"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
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
          Contact Me
        </h2>
        <p className="mt-2 max-w-2xl text-lg leading-8 text-gray-400">
          Let's collaborate on innovative ideas, exciting projects, or
          opportunities. I'm always open to meaningful conversations and new
          challenges.
        </p>
      </motion.div>

      <div
        className="
      w-full
      flex
      gap-5
      flex-col
      md:flex-row
      "
      >
        {/* FORM CARD */}

        <motion.div
          className="
      md:w-[75%]
     relative
overflow-hidden
rounded-3xl
border
border-white/10
bg-white/[0.04]
backdrop-blur-2xl
shadow-[0_20px_60px_rgba(0,0,0,0.35)]
transition-all
duration-500
p-8
hover:border-cyan-400/30
hover:shadow-cyan-500/10
      "
          initial={{ x: -70, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          whileHover={{
            scale: 1.01,
          }}
        >
          <div
            className="
absolute
right-0
top-0
h-40
w-40
rounded-full
bg-purple-500
opacity-20
blur-3xl
"
          />
          <div className="relative z-10 mb-8">
    <h3 className="text-2xl font-semibold text-white">
        Send a Message
    </h3>
<div className="border-t border-white/10 my-6"></div>
    <p className="mt-2 text-gray-400">
        Fill out the form below and I'll get back to you as soon as possible.
    </p>
</div>
          <form
            onSubmit={handleSubmit}
            className="
      w-full
      flex
      flex-col
      gap-4
      "
          >
            <div>
              <label className="block mb-2 text-sm font-medium tracking-wide text-gray-200 uppercase">Name</label>

              <input
                type="text"
                placeholder="Enter your full name"
                className="
      mt-1
      px-3
      py-2
      w-full
      bg-transparent
      border
     rounded-xl
border
border-white/10
bg-white/5
px-4
py-3
text-white
placeholder:text-gray-500
transition-all
duration-300
focus:border-cyan-400/40
focus:bg-white/10
      text-gray-200
      outline-none
      "
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium tracking-wide text-gray-200 uppercase">Email</label>

              <input
                type="email"
                placeholder="Enter your email address"
                className="
      mt-1
      px-3
      py-2
      w-full
      bg-transparent
      border
     rounded-xl
border
border-white/10
bg-white/5
px-4
py-3
text-white
placeholder:text-gray-500
transition-all
duration-300
focus:border-cyan-400/40
focus:bg-white/10
      text-gray-200
      outline-none
      "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium tracking-wide text-gray-200 uppercase">Message</label>

              <textarea
                rows={5}
                placeholder="Enter your message..."
                className="
     mt-1
      px-3
      py-2
      w-full
      bg-transparent
      border
     rounded-xl
border
border-white/10
bg-white/5
px-4
py-3
text-white
placeholder:text-gray-500
transition-all
duration-300
focus:border-cyan-400/40
focus:bg-white/10
      text-gray-200
      outline-none
      "
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                disabled={loading}
                className="
px-6
py-3
rounded-xl
bg-gradient-to-r
from-purple-500
to-cyan-500
font-medium
transition-all
duration-300
hover:scale-105
hover:shadow-lg
hover:shadow-cyan-500/20
disabled:opacity-50
"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              <button
                type="button"
                onClick={() => {
                  setName("");
                  setEmail("");
                  setMessage("");
                  toast("Form cleared");
                }}
                className="
px-6
py-3
rounded-xl
border
border-white/10
bg-white/5
text-white
transition-all
duration-300
hover:bg-white/10
hover:border-cyan-400/30
"
              >
                Reset
              </button>
            </div>
          </form>
        </motion.div>

        {/* CONNECT CARD */}

                                       <motion.div
          className="
      md:w-[25%]
      border
      border-white/10
      text-white
      p-6
      relative
overflow-hidden
rounded-3xl
      bg-white/5
      backdrop-blur-lg
     shadow-[0_20px_60px_rgba(0,0,0,0.35)]
transition-all
duration-500
hover:border-cyan-400/30
hover:shadow-cyan-500/10
      flex
      flex-col
      gap-4
      "
          initial={{ x: 70, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          whileHover={{
            scale: 1.03,
          }}
        >
          <div
  className="
  absolute
  -top-16
  -right-16
  h-48
  w-48
  rounded-full
  bg-cyan-500
  opacity-20
  blur-3xl
  "
></div>

<div
  className="
  absolute
  -bottom-16
  -left-16
  h-44
  w-44
  rounded-full
  bg-purple-500
  opacity-15
  blur-3xl
  "
></div>
          <h2
            className="
      text-xl
      font-bold
      "
          >
            Let's connect
          </h2>

          <p
            className="
      text-gray-400
      text-sm
      "
          >
            You can find me on these platforms.
          </p>

          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/kajalydv/"
              target="_blank"
              rel="noopener noreferrer"
              className="
group
h-12
w-12
rounded-xl
border
border-white/10
bg-white/5
flex
items-center
justify-center
transition-all
duration-300
hover:border-cyan-400/30
hover:bg-cyan-500/10
hover:-translate-y-1
"
            >
              <TiSocialLinkedin
                size={26}
                className="group-hover:text-cyan-300 transition"
              />
            </a>

            <a
              href="https://github.com/Kajal814"
              target="_blank"
              rel="noopener noreferrer"
              className="
group
h-12
w-12
rounded-xl
border
border-white/10
bg-white/5
flex
items-center
justify-center
transition-all
duration-300
hover:border-cyan-400/30
hover:bg-cyan-500/10
hover:-translate-y-1
"
            >
              <SlSocialGithub
                size={26}
                className="group-hover:text-cyan-300 transition"
              />
            </a>
            <a
              href="mailto:ky7246204@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="
group
h-12
w-12
rounded-xl
border
border-white/10
bg-white/5
flex
items-center
justify-center
transition-all
duration-300
hover:border-cyan-400/30
hover:bg-cyan-500/10
hover:-translate-y-1
"
            >
              <FaEnvelope
                size={26}
                className="group-hover:text-cyan-300 transition"
              />
            </a>
          </div>

         <hr className="border-white/10 my-2" />

<div>
  <p className="text-sm text-gray-400">Email</p>
  <p className="text-cyan-300 font-medium break-all">
    ky7246204@gmail.com
  </p>
</div>

{/* Availability Card */}

<div className="mt-auto pt-4 border-t border-white/10">

  <p className="text-sm text-gray-400 mb-3">
    Current Status
  </p>

  <div
    className="
    inline-flex
    items-center
    gap-2
    rounded-full
    border
    border-cyan-400/20
    bg-cyan-500/10
    px-4
    py-2
    "
  >
    <span className="h-2.5 w-2.5 rounded-full bg-cyan-400 animate-pulse"></span>

    <span className="text-sm font-medium text-cyan-300">
      Open to Opportunities
    </span>

  </div>

</div>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
