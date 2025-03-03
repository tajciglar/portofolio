'use client'
import { motion } from "framer-motion"

function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col sm:flex-row justify-center items-center text-center px-4 sm:px-6 py-12 m-4 sm:m-10 border border-gray-300 shadow-lg rounded-lg bg-gradient-to-br from-white via-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 dark:border-gray-700 dark:shadow-gray-800 gap-6 sm:gap-8">
      <div className="w-full max-w-7xl mx-auto border-l border-r border-b rounded-lg border-gray-200 p-5">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4 leading-tight md:leading-snug"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Bringing your ideas to life with code, design, and a touch of innovation.
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-gray-400 mt-6 max-w-xl mx-auto"
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
