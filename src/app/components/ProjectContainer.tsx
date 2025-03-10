'use client'
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { BsBoxArrowUpRight } from "react-icons/bs";
import Image from "next/image";

export default function ProjectContainer() {
    const [project, setProject] = useState("Odin-Book");

    const projects = [
        {
            title: "Odin-Book",
            description: "A social media application inspired by Facebook, featuring user profiles, posts, likes, and comments.",
            techStack: ["Vue.js", "TypeScript", "Node.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
            github: "https://github.com/tajciglar/odin-book",
            liveDemo: "Under development",
            image: "/images/odin-book.png"
        },
        {
            title: "Messaging App",
            description: "A web application facilitating user-to-user messaging with profile customization.",
            techStack: ["React.js", "TypeScript", "Node.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
            github: "https://github.com/tajciglar/messaging-app",
            liveDemo: "https://tajs-messaging-app.netlify.app/",
            image: "/images/messaging-app.png"
        },
        {
            title: "Blog Application",
            description: "A RESTful API backend for a blogging platform, enabling content management and user interactions.",
            techStack: ["React.js", "Node.js", "Prisma", "PostgreSQL"],
            github: "https://github.com/tajciglar/blog-app",
            liveDemo: "https://tajsblogapp.netlify.app/",
            image: "/images/blog-app.png"
        },
        {
            title: "Nail Salon App",
            description: "A RESTful API backend for a nail salon management system, facilitating client scheduling, service tracking, and secure client access.",
            techStack: ["Next.js", "Express.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
            github: "https://github.com/tajciglar/unique-beauty-corner",
            liveDemo: "Backend in progress",
            image: "/images/nail-salon-app.png"
        }   
    ];

    const projectData = projects.find((p) => p.title === project);

    return (
        <div className="h-full grid grid-cols-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg w-full">
            {/* Sidebar */}
            <div className="bg-gradient-to-b from-gray-400 to-gray-450 dark:bg-gradient-to-t dark:from-gray-900 dark:via-gray-850 dark:to-gray-800 text-white rounded-md p-5">
                <ul className="space-y-2">
                    {projects.map((p) => (
                        <li key={p.title}>
                            <button
                                onClick={() => setProject(p.title)}
                                className={`w-full text-lg text-left px-3 py-2 rounded-md transition ${
                                    project === p.title ? "bg-gray-500" : "hover:bg-gray-700"
                                }`}
                            >
                                {p.title}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Project Details */}
            <div className="col-span-2 flex flex-col items-center justify-center p-10 max-w-4xl mx-auto">
                {/* Project Screenshot */}
                {projectData?.image && (
                    <div className="mb-8 w-full">
                        <Image
                            src={projectData.image}
                            alt={`${projectData.title} Screenshot`}
                            width={800}
                            height={400}
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                )}

                {/* Project Title */}
                <h1 className="text-4xl font-extrabold text-center">{projectData?.title}</h1>

                {/* Description */}
                <div className="mt-6 text-lg text-gray-400 text-center">
                    <h3 className="text-xl font-bold mb-2">Description</h3>
                    <p className="leading-relaxed">{projectData?.description}</p>
                </div>

                {/* Tech Stack */}
                <div className="mt-6 text-lg text-gray-400 text-center">
                    <h3 className="text-xl font-bold mb-2">Tech Stack</h3>
                    <div className="flex flex-wrap justify-center gap-4 mt-2">
                        {projectData?.techStack.map((tech) => (
                            <span
                                key={tech}
                                className="px-4 py-2 bg-gray-200 rounded-lg text-gray-800 font-semibold text-base"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Links */}
                <div className="mt-8 flex gap-6">
                    {projectData?.github && (
                        <a
                            href={projectData.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-lg font-bold text-gray-600 dark:text-gray-200 hover:text-blue-500"
                        >
                            <FaGithub className="text-2xl" />
                            GitHub
                        </a>
                    )}
                    {projectData?.liveDemo && projectData.liveDemo !== "Backend in progress" && (
                        <a
                            href={projectData.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-lg font-bold text-gray-600 dark:text-gray-200  hover:text-green-500"
                        >
                            <BsBoxArrowUpRight className="text-2xl" />
                            Live Demo
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
