'use client'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="w-full py-6 border-t shadow-inner shadow-gray-300 dark:shadow-gray-800 text-gray-400 dark:text-gray-300 text-center mt-12">
            <p className="text-lg">© {new Date().getFullYear()} Taj. All rights reserved.</p>
            <div className="flex justify-center items-center gap-6 mt-4">
                <a href="mailto:taj.brzovic@gmail.com" className="hover:text-gray-700 transition-colors flex items-center gap-1">
                    <FaEnvelope size={20} /> taj.brzovic@gmail.com
                </a>
                <a href="https://github.com/tajciglar" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700 transition-colors flex items-center gap-1">
                    <FaGithub size={20} /> Github
                </a>
                <a href="www.linkedin.com/in/taj-ciglar-385833217" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700 transition-colors flex items-center gap-1">
                    <FaLinkedin size={20} /> Linkedin
                </a>
            </div>
        </footer>
    );
}
