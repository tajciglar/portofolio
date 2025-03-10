'use client'

import ProjectContainer from "./ProjectContainer"

export default function Projects () {
    return (
        <section id="stack" className="min-h-[90vh] flex flex-row sm:flex-col justify-center items-center text-center sm:text-left px-4 sm:px-6 py-12 m-4 sm:m-10 border border-gray-300 shadow-lg rounded-lg bg-gradient-to-br from-white via-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 dark:border-gray-700 dark:shadow-gray-800 gap-6 sm:gap-8 overflow-hidden">    
            <div className="w-full m-4 flex flex-row gap-5">
                <h1 className="text-3xl md:text-6xl self-center font-extrabold bg-gradient-to-r from-gray-200 to-gray-600 dark:text-transparent bg-clip-text p-2 sm:p-4 sm:border-b sm:border-l sm:rounded-sm border-gray-300 dark:border-gray-600 justify-center m-3"> 
                    Projects
                </h1>
                <ProjectContainer></ProjectContainer>
            </div>
        </section>
    )
}
