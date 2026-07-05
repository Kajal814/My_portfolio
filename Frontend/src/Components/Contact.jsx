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
    const response = await axios.post(
      "http://localhost:5000/api/contacts",
      { name, email, message }
    );

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
      text-white
      font-sans
      font-bold
      text-3xl
      "
        >
          Contact
        </h2>

        <p
          className="
      text-gray-400
      text-sm
      max-w-2xl
      "
        >
          Have a project idea or want to connect? Feel free to reach out.
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
      border
      border-white/10
      text-white
      p-6
      rounded-2xl
      bg-white/5
      backdrop-blur-lg
      shadow-xl
      "
          initial={{ x: -70, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          whileHover={{
            scale: 1.01,
          }}
        >
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
              <label className="text-sm text-gray-300">Name</label>

              <input
                type="text"
                placeholder="Your Name"
                className="
      mt-1
      px-3
      py-2
      w-full
      bg-transparent
      border
      border-gray-600
      rounded-lg
      text-gray-200
      outline-none
      "
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label className="text-sm text-gray-300">Email</label>

              <input
                type="email"
                placeholder="Your Email"
                className="
      mt-1
      px-3
      py-2
      w-full
      bg-transparent
      border
      border-gray-600
      rounded-lg
      text-gray-200
      outline-none
      "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="text-sm text-gray-300">Message</label>

              <textarea
                rows={5}
                placeholder="Your Message"
                className="
      mt-1
      px-3
      py-2
      w-full
      bg-transparent
      border
      border-gray-600
      rounded-lg
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
  py-2
  rounded-lg
  text-white
  bg-gradient-to-r
  from-purple-500
  to-blue-500
  disabled:opacity-50
  disabled:cursor-not-allowed
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
  py-2
  rounded-lg
  border
  border-gray-500
  text-gray-300
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
      rounded-2xl
      bg-white/5
      backdrop-blur-lg
      shadow-xl
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
>
  <TiSocialLinkedin size={32} />
</a>

            <a
  href="https://github.com/Kajal814"
  target="_blank"
  rel="noopener noreferrer"
>
  <SlSocialGithub size={30} className="text-blue-400 hover:scale-125 transition" />
</a>

            <a
  href="mailto:ky7246204@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaEnvelope size={30} className="text-blue-400 hover:scale-125 transition" />
</a>
          </div>

          <hr className="border-white/20" />

          <p className="text-gray-300 text-sm">
            Prefer email?
            <span className="text-blue-400"> ky7246204@gmail.com</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
