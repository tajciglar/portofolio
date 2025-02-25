'use client'
import { motion } from 'framer-motion';

export default function About () {
    return (
        <section className="h-screen flex flex-col md:flex-row justify-center items-center text-center px-6 py-12 m-10 border border-gray-200 rounded-sm">    
            <motion.div 
                className="flex flex-col justify-center items-center md:items-start text-center md:text-left mb-8 md:mb-0 w-full md:w-[20%] border-b md:border-r md:border-gray-200 rounded-sm pb-8 md:pb-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <motion.h1
                    id='about'
                    className="text-6xl md:text-7xl font-bold mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    About me
                </motion.h1>
                <motion.ul 
                    className="text-lg md:text-2xl mt-4 p-4 flex flex-col justify-start items-start gap-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    <li><a href="#tech-stack" className="hover:text-blue-500">Tech stack</a></li>
                    <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
                    <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
                </motion.ul>
            </motion.div>
            <motion.div 
                className="md:w-[80%] max-w-4xl mx-auto text-left"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
            >
                <motion.p 
                    className="text-xl md:text-2xl text-gray-500 mt-8"
                >
                    Hello! I&apos;m Taj,<br />
                    a self-taught Full Stack Developer with over two years of experience building modern web applications. 
                    My journey into tech started early with a high school diploma in computer technology. 
                    Though I initially pursued a degree in physiotherapy driven by my passion for sports, my love for technology never faded. 
                    During my studies, I rediscovered programming and decided to transition into tech.<br />
                    To solidify my skills, I completed the CS50 course from Harvard University and The Odin Project, 
                    diving deep into JavaScript, HTML, CSS, React, Node.js, and Git. 
                    I’m currently enhancing my knowledge in Vue.js and TypeScript to stay on top of the latest trends and technologies.
                </motion.p>
            </motion.div>
        </section>
    )
}
