import Image from 'next/image';
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';

const technologies = [
  { name: 'React', icon: FaReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Tailwind', icon: SiTailwindcss },
  { name: 'Python', icon: FaPython },
  { name: 'HTML5', icon: FaHtml5 },
  { name: 'CSS3', icon: FaCss3Alt },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-900 overflow-hidden">
      {/* Fond animé amélioré avec plus de profondeur */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(94,234,212,0.12),rgba(20,20,20,0.9))] animate-pulse-slower" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(20,20,20,0.9),transparent,rgba(20,20,20,0.9))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.12),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(94,234,212,0.08),transparent)]" />
      </div>

      <div className="container mx-auto px-6 py-20 relative">
        <div className="flex flex-col items-center justify-center min-h-[80vh] space-y-16 relative">
          {/* En-tête avec effets améliorés */}
          <div className="text-center space-y-8 max-w-4xl">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-500/20 via-sky-500/20 to-teal-500/20 blur-3xl opacity-50 animate-pulse-slow" />
              <h1 className="relative text-7xl md:text-9xl font-bold tracking-tight animate-fade-in">
                <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-sky-300 to-teal-300 hover:from-sky-300 hover:via-teal-300 hover:to-sky-300 transition-all duration-700 cursor-default">
                  Scandere TEJ
                </span>
              </h1>
            </div>
            <p className="text-2xl md:text-3xl font-light text-zinc-300 tracking-wide animate-fade-in-up">
              Créateur de
              <span className="relative inline-block group">
                <span className="absolute -inset-1 bg-gradient-to-r from-teal-500/50 to-teal-500/50 blur opacity-0 group-hover:opacity-100 transition-all duration-500"></span>
                <span className="relative text-teal-300 font-normal mx-2">solutions digitales</span>
              </span>
              qui
              <span className="relative inline-block group">
                <span className="absolute -inset-1 bg-gradient-to-r from-sky-500/50 to-sky-500/50 blur opacity-0 group-hover:opacity-100 transition-all duration-500"></span>
                <span className="relative text-sky-300 font-normal mx-2">inspirent et innovent</span>
              </span>
            </p>
          </div>

          {/* Technologies avec effet amélioré */}
          <div className="flex flex-wrap justify-center gap-6 max-w-3xl animate-fade-in-up delay-300">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-500/50 to-sky-500/50 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-md" />
                <div className="relative flex items-center gap-3 bg-zinc-900/90 px-6 py-3 rounded-xl border border-zinc-800 hover:border-zinc-700 transition-all duration-500">
                  <tech.icon className="w-6 h-6 text-zinc-400 group-hover:text-teal-300 transition-colors duration-500" />
                  <span className="text-zinc-300 group-hover:text-white transition-colors duration-500">{tech.name}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Bouton avec effet amélioré */}
          <div className="flex justify-center animate-fade-in-up delay-500">
            <a
              href="/projets"
              className="group relative inline-flex items-center"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-500/50 to-sky-500/50 rounded-full opacity-70 blur-md group-hover:opacity-100 transition-all duration-500" />
              <div className="relative flex items-center bg-zinc-900/90 px-8 py-4 rounded-full border border-zinc-800 hover:border-zinc-700 transition-all duration-500">
                <span className="text-lg text-white font-medium pr-2">Découvrir mes projets</span>
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}