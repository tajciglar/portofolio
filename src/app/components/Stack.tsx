'use client'

import Image from "next/image";

export default function Stack () {
    return (
        <section id="stack" className="h-screen flex flex-col md:flex-row justify-center items-center text-center px-6 py-12 m-10 border border-gray-300 shadow-lg rounded-lg bg-gradient-to-br from-gray-200  via-gray-100 to-white dark:from-gray-800 dark:to-gray-900  dark:border-gray-700 dark:shadow-gray-800">    
            <div className="flex gap-6">
                <div>
                    <Image src="https://cdn.simpleicons.org/react/61DAFB" alt="React" width={40} height={40} />
                </div>
                <div>
                    <Image src="https://cdn.simpleicons.org/node.js/339933" alt="Node.js" width={40} height={40} />
                    </div>
                <div>
                    <Image src="https://cdn.simpleicons.org/typescript/3178C6" alt="TypeScript" width={40} height={40} />
                </div>
                <div></div>
                <div></div>
                <div></div>
                
                
            </div>
            <div>
                <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-gray-600 to-gray-200 text-transparent bg-clip-text">
                    Tech Stack
                </h1>
                <p></p>
            </div>
        </section>
    )
}
