'use client'
import { motion } from "framer-motion"

function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-6">
      <div className="w-full max-w-7xl mx-auto border-l border-r border-b rounded-lg border-gray-200 p-5">
        <motion.h1
          className="text-6xl md:text-7xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Bringing your ideas to life with code, design, and a touch of innovation.
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-gray-500 mt-6 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <a href="#about" className="text-3xl font-bold ">-Taj Brzovič Ciglar</a>, <br />
          Full Stack / Frontend Developer | Clean UI Enthusiast
        </motion.p>
      </div>
    </section>
  );
}

export default Hero;
