"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const techStack = [
  { name: "React.js", src: "https://cdn.simpleicons.org/react/61DAFB", description: "It is the tech I use the most, mainly with Next.js." },
  { name: "JavaScript", src: "https://cdn.simpleicons.org/javascript/F7DF1E", description: "The foundation of all frontend development." },
  { name: "TypeScript", src: "https://cdn.simpleicons.org/typescript/3178C6", description: "Enhances JavaScript with strong typing." },
  { name: "Vue.js", src: "https://cdn.simpleicons.org/vue.js/4FC08D", description: "A lightweight frontend framework I enjoy using." },
  
];

const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="h-full min-w-full p-5">
        <motion.div
            className="max-h-screen relative w-full h-full  rounded-xl shadow-lg cursor-pointer overflow-y-auto"
            initial={false}
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.6 }}
            style={{ transformStyle: "preserve-3d" }}
            onClick={() => setIsFlipped(!isFlipped)}
        >
            {/* Front Side */}
            <div
            className="absolute w-full overflow-y-auto bg-white dark:bg-gray-800 text-gray-900 dark:text-white flex flex-col justify-center rounded-xl border border-gray-300 dark:border-gray-600 p-5"
            style={{ backfaceVisibility: "hidden" }}
            >
            <h1 className="text-xl font-semibold mb-4 text-center">Frontend</h1>
            <div className="w-full flex flex-col gap-5 md:grid md:grid-cols-2 lg:grid-cols-3">
                {techStack.map((tech) => (
                <div
                    key={tech.name}
                    className="border border-gray-300 dark:border-gray-600 p-4 rounded-lg flex flex-col justify-center items-center"
                >
                    <Image src={tech.src} alt={tech.name} width={60} height={60} />
                    <h2 className="font-semibold mt-2">{tech.name}</h2>
                    <p className="text-sm text-center">{tech.description}</p>
                </div>
                ))}
            </div>
            </div>

            {/* Back Side */}
            <div
            className="absolute w-full h-full bg-gray-900 text-white flex items-center justify-center rounded-xl border border-gray-300 dark:border-gray-600"
            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
            >
            <h1 className="text-xl font-semibold text-center">
                Backend Info Coming Soon!
            </h1>
            </div>
        </motion.div>
        </div>
  );
};

export default FlipCard;