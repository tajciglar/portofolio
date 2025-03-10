'use client'

import FlipCard from "./FlipCard";

export default function Stack () {
    return (
        <section id="stack" className="min-h-[90vh] flex flex-row sm:flex-col justify-center items-center text-center sm:text-left px-4 sm:px-6 py-12 m-4 sm:m-10 border border-gray-300 shadow-lg rounded-lg bg-gradient-to-br from-white via-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 dark:border-gray-700 dark:shadow-gray-800 gap-6 sm:gap-8 overflow-hidden">    
            <div className="w-full min-h-[80vh] grid grid-cols-1 grid-rows-[100px_1fr] lg:grid-cols-[2fr_1fr] lg:grid-rows-1 gap-4 justify-center items-center">
                <FlipCard></FlipCard>
                <div className="h-full flex justify-center sm:justify-center lg:items-center  order-first lg:order-last">
                    <h1 className="text-3xl md:text-6xl font-extrabold bg-gradient-to-r from-gray-200 to-gray-600 dark:text-transparent bg-clip-text p-2 sm:p-4 sm:border-b sm:border-l sm:rounded-sm border-gray-300 dark:border-gray-600 justify-center"> 
                        Tech Stack
                    </h1>
                </div>
            </div>
        </section>
    )
}