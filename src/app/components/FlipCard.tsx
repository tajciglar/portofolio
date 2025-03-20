"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const frontend = [
  { name: "React.js", src: "https://cdn.simpleicons.org/react/61DAFB", description: "Framework that I used the most for now, also started learning it with The Odin Project." },
  { name: "Next.js", src: "https://cdn.simpleicons.org/next.js/000000", description: "A powerful React framework for server-side rendering and static generation." },
  { name: "JavaScript", src: "https://cdn.simpleicons.org/javascript/F7DF1E", description: "The foundation of all frontend development." },
  { name: "TypeScript", src: "https://cdn.simpleicons.org/typescript/3178C6", description: "Enhances JavaScript with strong typing.." },
  { name: "Vue.js", src: "https://cdn.simpleicons.org/vue.js/4FC08D", description: "Learned basics and completed one project with it. I like it a lot. Will learn Nuxt next." },
  { name: "Vite", src: "https://cdn.simpleicons.org/vite/646CFF", description: "A lightning-fast frontend tooling for modern web development." },
  { name: "Tailwind CSS", src: "https://cdn.simpleicons.org/tailwindcss/06B6D4", description: "My preferred utility-first CSS framework for styling." },
];

const backend = [
  { name: "Node.js", src: "https://cdn.simpleicons.org/node.js/339933", description: "My go-to runtime for backend development." },
  { name: "Express.js", src: "https://cdn.simpleicons.org/express/000000", description: "A minimalist and fast Node.js web framework." },
  { name: "Prisma ORM", src: "https://cdn.simpleicons.org/prisma/2D3748", description: "A powerful ORM for Node.js and TypeScript." },
  { name: "PostgreSQL", src: "https://cdn.simpleicons.org/postgresql/4169E1", description: "A reliable and powerful relational database." },
  { name: "MongoDB", src: "https://cdn.simpleicons.org/mongodb/47A248", description: "A flexible and scalable NoSQL database." },
];

const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="relative w-full flex justify-center items-center" >
      <motion.div
        className="relative w-full max-w-5xl h-[60vh] md:h-[70vh] rounded-xl shadow-lg cursor-pointer"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: "preserve-3d" }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front Side */}
        <div className="absolute w-full h-full bg-gradient-to-b from-gray-100 via-gray-00 to-gray-300 dark:from-slate-700 dark:to-slate-800 dark:bg-gray-800 text-gray-900 dark:text-white flex flex-col justify-center items-center rounded-xl border border-gray-300 dark:border-gray-600 p-6 overflow-auto" style={{ backfaceVisibility: "hidden" }}>
          <h1 className="text-xl font-semibold mb-4 text-center">Frontend</h1>
          <div className="w-full flex overflow-x-auto gap-5 md:grid md:grid-cols-2 lg:grid-cols-3">
            {frontend.map((tech) => (
              <div key={tech.name} className="border border-gray-300 dark:border-gray-600 p-4 rounded-lg flex flex-col justify-center items-center min-w-[200px]">
                <Image src={tech.src} alt={tech.name} width={60} height={60} className="hidden lg:block" />
                <h2 className="font-semibold mt-2 text-xl">{tech.name}</h2>
                <p className="text-lg text-center">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 dark:from-slate-800 dark:to-slate-700 dark:bg-gray-800 text-gray-900 dark:text-white flex flex-col justify-center items-center rounded-xl border border-gray-300 dark:border-gray-600 p-6 overflow-auto" style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>
          <h1 className="text-xl font-semibold mb-4 text-center">Backend</h1>
          <div className="w-full flex overflow-x-auto gap-5 md:grid md:grid-cols-2 lg:grid-cols-3">
            {backend.map((tech) => (
              <div key={tech.name} className="border border-gray-300 dark:border-gray-600 p-4 rounded-lg flex flex-col justify-center items-center min-w-[200px]">
                <Image src={tech.src} alt={tech.name} width={60} height={60} className="hidden lg:block" />
                <h2 className="text-xl font-semibold mt-2">{tech.name}</h2>
                <p className="text-lg text-center">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FlipCard;
