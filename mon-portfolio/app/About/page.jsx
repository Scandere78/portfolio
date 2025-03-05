"use client";

import Image from 'next/image';

export default function About() {
  return (
    <main className="min-h-screen bg-black overflow-hidden pt-24">
      {/* Effets de fond */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(94,234,212,0.08),rgba(0,0,0,0.5))]" />
      <div className="fixed inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.8),transparent,rgba(0,0,0,0.8))]" />

      <div className="container mx-auto px-6 relative">
        <div className="max-w-5xl mx-auto">
          {/* En-tête avec photo */}
          <div className="flex flex-col items-center mb-16 animate-fade-in">
            <div className="relative w-32 h-32 mb-8">
              <div className="absolute -inset-2 bg-gradient-to-r from-teal-500/50 to-sky-500/50 rounded-full blur-md" />
              <Image
                src="/moi.jpg"
                alt="Profile"
                fill
                className="rounded-full object-cover border-2 border-zinc-800 relative"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-sky-300 to-teal-300">
                À Propos de Moi
              </span>
            </h1>
          </div>

          {/* Contenu principal */}
          <div className="grid md:grid-cols-2 gap-12 animate-fade-in-up delay-200">
            {/* Section Présentation */}
            <div className="space-y-6">
              <div className="group p-6 bg-zinc-900/30 rounded-xl border border-zinc-800 hover:border-zinc-700 transition-all duration-300">
                <h2 className="text-2xl font-semibold text-teal-300 mb-4">Qui suis-je?</h2>
                <p className="text-zinc-400 leading-relaxed">
                  Développeur passionné spécialisé dans la création d'expériences web innovantes. 
                  J'aime relever des défis techniques et transformer des idées en solutions digitales élégantes.
                </p>
              </div>

              {/* Compétences */}
              <div className="group p-6 bg-zinc-900/30 rounded-xl border border-zinc-800 hover:border-zinc-700 transition-all duration-300">
                <h2 className="text-2xl font-semibold text-sky-300 mb-4">Compétences</h2>
                <ul className="grid grid-cols-2 gap-4 text-zinc-400">
                  <li className="flex items-center space-x-2">
                    <span className="text-teal-300">▹</span>
                    <span>React.js</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-teal-300">▹</span>
                    <span>Next.js</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-teal-300">▹</span>
                    <span>Node.js</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-teal-300">▹</span>
                    <span>TailwindCSS</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section Parcours */}
            <div className="space-y-6">
              <div className="group p-6 bg-zinc-900/30 rounded-xl border border-zinc-800 hover:border-zinc-700 transition-all duration-300">
                <h2 className="text-2xl font-semibold text-teal-300 mb-4">Parcours</h2>
                <div className="space-y-4 text-zinc-400">
                  <div>
                    <h3 className="text-white font-medium">Développeur Full Stack</h3>
                    <p className="text-sm text-zinc-500">2020 - Présent</p>
                    <p className="mt-2">Création d'applications web modernes et performantes.</p>
                  </div>
                </div>
              </div>

              {/* Contact rapide */}
              <div className="group p-6 bg-zinc-900/30 rounded-xl border border-zinc-800 hover:border-zinc-700 transition-all duration-300">
                <h2 className="text-2xl font-semibold text-sky-300 mb-4">Contact</h2>
                <p className="text-zinc-400 mb-4">
                  Intéressé par une collaboration ? N'hésitez pas à me contacter.
                </p>
                <a 
                  href="/contact"
                  className="inline-flex items-center space-x-2 text-teal-300 hover:text-teal-200 transition-colors"
                >
                  <span>Me contacter</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}