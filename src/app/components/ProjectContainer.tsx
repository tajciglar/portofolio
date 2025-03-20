'use client'
import { useState } from "react";
import ProjectSlider from "./ProjectSlider";

export default function ProjectContainer() {
    

    const projects = [
        {
            title: "Odin-Book",
            description: "A social media application inspired by Facebook, featuring user profiles, posts, likes, and comments.",
            techStack: ["Vue.js", "TypeScript", "Node.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
            github: "https://github.com/tajciglar/odin-book",
            liveDemo: "Under development",
            images: [
               
            ],
        },
        {
            title: "Messaging App",
            description: "A web application facilitating user-to-user messaging with profile customization.",
            techStack: ["React.js", "TypeScript", "Node.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
            github: "https://github.com/tajciglar/messaging-app",
            liveDemo: "https://tajs-messaging-app.netlify.app/"
        },
        {
            title: "Blog Application",
            description: "A RESTful API backend for a blogging platform, enabling content management and user interactions.",
            techStack: ["React.js", "Node.js", "Prisma", "PostgreSQL"],
            github: "https://github.com/tajciglar/blog-app",
            liveDemo: "https://tajsblogapp.netlify.app/",
            images: [
            "/blog-app/Blog-Login.png",
            "/blog-app/Blog-Home.png",
            "/blog-app/Blog-New-Post.png",
            "/blog-app/Admin-View.png",
            "/blog-app/Admin-Post-Page.png",
        ],
        },
        {
            title: "Nail Salon App",
            description: "A RESTful API backend for a nail salon management system, facilitating client scheduling, service tracking, and secure client access.",
            techStack: ["Next.js", "Express.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
            github: "https://github.com/tajciglar/unique-beauty-corner",
            liveDemo: "Backend in progress"
        } 
    ];

    const [project, setProject] = useState(projects[0].title);

    return (
        <div className="grid grid-cols-3 h-screen border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg w-full">
            <div className="bg-gray-900 text-white rounded-md p-5 w-2/3">
                <ul className="space-y-2">
                    {projects.map((p) => (
                        <li key={p.title}>
                            <button
                                onClick={() => setProject(p.title)}
                                className={`w-full text-xl text-left px-3 py-2 rounded-md transition ${
                                    project === p.title ? "bg-blue-500" : "hover:bg-gray-700"
                                }`}
                            >
                                {p.title}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="col-span-2 flex flex-col items-center justify-center p-10">
                <h1 className="text-3xl font-bold">{project}</h1>
                <p className="text-gray-600 mt-4 text-xl dark:text-gray-300 p-4 text-center">
                    {projects.find((p) => p.title === project)?.description}
                </p>
                <ProjectSlider images={projects.find((p) => p.title === project)?.images || []} />
            </div>
        </div>
    );
}