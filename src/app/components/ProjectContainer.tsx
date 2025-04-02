"use client";
import { useState } from "react";
import Image from "next/image";
import { FaGithub, FaGlobe } from "react-icons/fa";

export default function ProjectContainer() {
    const projects = [
        {
            title: "Odin-Book",
            description: "A social media application inspired by Facebook, featuring user profiles, posts, likes, and comments.",
            techStack: ["Vue.js", "TypeScript", "Node.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
            github: "https://github.com/tajciglar/odin-book",
            images: [
                "/odin-book/OdinBook.png",
            ],
        },
        {
            title: "Messaging App",
            description: "A web application facilitating user-to-user messaging with profile customization.",
            techStack: ["React.js", "TypeScript", "Node.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
            github: "https://github.com/tajciglar/messaging-app",
            liveDemo: "https://tajs-messaging-app.netlify.app/",
            images: [
                "/messaging-app/MessagingApp.png",
            ],
        },
        {
            title: "Blog Application",
            description: "A RESTful API backend for a blogging platform, enabling content management and user interactions.",
            techStack: ["React.js", "Node.js", "Prisma", "PostgreSQL"],
            github: "https://github.com/tajciglar/blog-app",
            liveDemo: "https://tajsblogapp.netlify.app/",
            image: [
                "/blog-app/Blog-Login.png",
            ],
        },
        {
            title: "Nail Salon App",
            description: "A RESTful API backend for a nail salon management system, facilitating client scheduling, service tracking, and secure client access.",
            techStack: ["Next.js", "Express.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
            github: "https://github.com/tajciglar/unique-beauty-corner",
            images: [], 
        },
    ];

    const [selectedProject, setSelectedProject] = useState(projects[0]);

    const openProject = (demoUrl: string) => {
        if (demoUrl) {
            window.open(demoUrl, "_blank");
        } else {
            alert("This project is still under development.");
        }
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] h-auto md:h-screen border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg">
           
            <div className="bg-gray-900 text-white rounded-md p-5">
                <ul className="space-y-2">
                    {projects.map((p) => (
                        <li key={p.title}>
                            <button
                                onClick={() => setSelectedProject(p)}
                                className={`w-full text-xl text-left px-3 py-2 rounded-md transition ${
                                    selectedProject.title === p.title ? "bg-gray-400" : "hover:bg-gray-700"
                                }`}
                            >
                                {p.title}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Right Side: Project Details */}
            <div className="flex flex-col items-center justify-center p-10 max-w-3xl w-full">
                <h1 className="text-3xl font-bold">{selectedProject.title}</h1>
                <p className="text-gray-600 mt-4 text-xl dark:text-gray-300 p-4 text-center">
                    {selectedProject.description}
                </p>
                {selectedProject.image && selectedProject.image.length > 0 && (
                    <Image src={selectedProject.image[0]} alt={selectedProject.title} width={600} height={500} className="rounded-lg" onClick={() => openProject(selectedProject.liveDemo)}/>
                )}
                <div className="flex gap-4 mt-4 items-center justify-center">
                    {selectedProject.liveDemo ? (
                        <>
                            <button
                                onClick={() => openProject(selectedProject.github)}
                                className="hover:underline text-lg lg:text-xl flex gap-4"
                            >
                                <FaGithub className="text-2xl" />
                                View on GitHub
                            </button>
                            <button
                                onClick={() => openProject(selectedProject.liveDemo)}
                                className="hover:underline text-lg lg:text-xl flex gap-4"
                            >
                                <FaGlobe className="text-2xl" />
                                Live Demo
                            </button>
                        </>
                    ) : (
                        <p>
                            This project is still under development.
                        </p>
                    )}
                </div>
                
            </div>
        </div>
    );
}