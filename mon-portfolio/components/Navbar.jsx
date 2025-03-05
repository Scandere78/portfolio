"use client";
import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { name: 'Accueil', path: '/' },
  { name: 'À Propos', path: '/About' },
  { name: 'Projets', path: '/Projets' },
  { name: 'Contact', path: '/contact' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50">
      {/* Fond avec effet glassmorphism */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm border-b border-zinc-800" />
      
      <div className="container mx-auto px-6 py-4 relative">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-sky-300 to-teal-300">
              Scandere TEJ
            </span>
          </Link>

          {/* Navigation Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.path}
                className="text-zinc-400 hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-teal-500/50 to-sky-500/50 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Menu Mobile */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-zinc-400 hover:text-white transition-colors"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Menu Mobile Déroulant */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black/90 border-b border-zinc-800 backdrop-blur-sm">
            <div className="container py-4">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.path}
                  className="block py-3 text-zinc-400 hover:text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}