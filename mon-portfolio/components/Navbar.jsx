"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gray-900 text-white shadow-lg p-4 fixed w-full z-50">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <h1 className="text-2xl font-bold">Mon Portfolio</h1>

                {/* Menu Desktop */}
                <ul className="hidden md:flex space-x-6 text-lg">
                    <li className="hover:text-gray-400 transition"><Link href="/">Accueil</Link></li>
                    <li className="hover:text-gray-400 transition"><Link href="/about">À Propos</Link></li>
                    <li className="hover:text-gray-400 transition"><Link href="/projects">Projets</Link></li>
                    <li className="hover:text-gray-400 transition"><Link href="/contact">Contact</Link></li>
                </ul>

                {/* Bouton Menu Mobile */}
                <div className="md:hidden">
                    <button 
                        onClick={() => setIsOpen(!isOpen)} 
                        className="text-white focus:outline-none transition-transform duration-300"
                    >
                        {isOpen ? "✖" : "☰"}
                    </button>
                </div>
            </div>

            {/* Menu Mobile Animé */}
            <div className={`absolute top-16 left-0 w-full bg-gray-900 transition-transform duration-300 ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"} md:hidden`}>
                <ul className="flex flex-col space-y-4 text-center py-4">
                    <li className="hover:text-gray-400 transition"><Link href="/">Accueil</Link></li>
                    <li className="hover:text-gray-400 transition"><Link href="/about">À Propos</Link></li>
                    <li className="hover:text-gray-400 transition"><Link href="/projects">Projets</Link></li>
                    <li className="hover:text-gray-400 transition"><Link href="/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
}
