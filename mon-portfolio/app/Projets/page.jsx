"use client";
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: "Portfolio Personnel",
    description: "Portfolio moderne développé avec Next.js et TailwindCSS, mettant en valeur mes compétences et projets.",
    image: "/projects/portfolio.png",
    technologies: ["Next.js", "React", "TailwindCSS"],
    github: "https://github.com/Scandere78/portfolio",
    live: "https://votre-portfolio.vercel.app",
  },
  // Ajoutez vos autres projets ici
];

export default function Projects() {
  return (
    <main className="min-h-screen bg-black overflow-hidden pt-20">
      {/* Effets de fond */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(94,234,212,0.08),rgba(0,0,0,0.5))]" />
      <div className="fixed inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.8),transparent,rgba(0,0,0,0.8))]" />

      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto">
          {/* En-tête */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-sky-300 to-teal-300">
                Mes Projets
              </span>
            </h1>
            <p className="text-zinc-400 text-lg">
              Découvrez mes réalisations les plus récentes
            </p>
          </div>

          {/* Grille de projets */}
          <div className="grid gap-8 animate-fade-in-up">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group relative bg-zinc-900/30 rounded-xl border border-zinc-800 hover:border-zinc-700 overflow-hidden transition-all duration-300"
              >
                {/* Image du projet avec overlay au hover */}
                <div className="relative aspect-video">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {project.github && (
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-zinc-900/80 rounded-full text-zinc-400 hover:text-teal-300 transition-colors"
                      >
                        <FaGithub className="w-6 h-6" />
                      </a>
                    )}
                    {project.live && (
                      <a 
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-zinc-900/80 rounded-full text-zinc-400 hover:text-sky-300 transition-colors"
                      >
                        <FaExternalLinkAlt className="w-6 h-6" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Informations du projet */}
                <div className="p-6">
                  <h3 className="text-2xl text-white font-medium mb-2">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-zinc-800/50 rounded-full text-sm text-zinc-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}