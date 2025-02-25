'use client'
import { motion } from 'framer-motion';
import { FaLaptopCode, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

export default function About() {
    return (
        <section id='about' className="h-screen flex flex-col md:flex-row justify-center items-center text-center px-6 py-12 m-10 border border-gray-300 shadow-lg rounded-lg bg-gradient-to-br from-white via-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 dark:border-gray-700 dark:shadow-gray-800">    
            <motion.div 
                className="flex flex-col justify-center items-center md:items-start text-center md:text-left w-full md:w-[25%] border-b md:border-r border-gray-300 dark:border-gray-600 pb-8 md:pb-0"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <motion.h1
                    className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-gray-200 to-gray-600 text-transparent bg-clip-text"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    About Me
                </motion.h1>

                <motion.ul 
                    className="text-lg md:text-xl mt-4 p-4 flex flex-col justify-start items-start gap-4 text-gray-700 dark:text-gray-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    <li className="flex items-center gap-2 group">
                        <FaLaptopCode className="text-blue-500 group-hover:scale-110 transition-transform" />
                        <a href="#tech-stack" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            Tech Stack
                        </a>
                    </li>
                    <li className="flex items-center gap-2 group">
                        <FaProjectDiagram className="text-green-500 group-hover:scale-110 transition-transform" />
                        <a href="#projects" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">
                            Projects
                        </a>
                    </li>
                    <li className="flex items-center gap-2 group">
                        <FaEnvelope className="text-red-500 group-hover:scale-110 transition-transform" />
                        <a href="#contact" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">
                            Contact
                        </a>
                    </li>
                </motion.ul>
            </motion.div>

            {/* Right Section (Bio) */}
            <motion.div 
                className="md:w-[75%] max-w-4xl mx-auto text-left"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
            >
                <motion.p 
                    className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed"
                >
                    Hello! I&apos;m <span className="font-bold text-blue-500 dark:text-blue-400">Taj</span>,<br />
                    a <span className="font-semibold text-indigo-500 dark:text-indigo-400">self-taught Full Stack Developer</span> with over two years of experience building modern web applications. 
                    My journey into tech started early with a <span className="font-semibold text-blue-500 dark:text-blue-400">high school diploma in computer technology</span>. 
                    Though I initially pursued a degree in <span className="font-semibold text-green-500 dark:text-green-400">physiotherapy</span> driven by my passion for sports, my love for technology never faded. 
                    During my studies, I rediscovered programming and decided to transition into tech.<br /><br />
                    To solidify my skills, I completed the <span className="font-semibold text-yellow-500 dark:text-yellow-400">CS50 course from Harvard University</span> and <span className="font-semibold text-purple-500 dark:text-purple-400">The Odin Project</span>, 
                    diving deep into <span className="font-semibold text-blue-500 dark:text-blue-400">JavaScript, HTML, CSS, React, Node.js, and Git</span>. 
                    I’m currently enhancing my knowledge in <span className="font-semibold text-green-500 dark:text-green-400">Vue.js and TypeScript</span> to stay on top of the latest trends and technologies.
                </motion.p>
            </motion.div>

        </section>
    )
}
