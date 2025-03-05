import Image from 'next/image';
import { FaReact, FaNodeJs, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';

const technologies = [
  { name: 'React', icon: FaReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Tailwind', icon: SiTailwindcss },
];

const stats = [
  { value: '5+', label: "Années d'expérience" },
  { value: '50+', label: 'Projets Complétés' },
  { value: '20+', label: 'Clients Satisfaits' },
  { value: '100%', label: 'Taux de Satisfaction' },
];

const socialLinks = [
  { href: 'https://github.com/yourusername', icon: FaGithub },
  { href: 'https://linkedin.com/in/yourusername', icon: FaLinkedin },
  { href: 'https://twitter.com/yourusername', icon: FaTwitter },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-hidden">
      {/* Effets de fond dynamiques - tons doux */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(94,234,212,0.08),rgba(0,0,0,0.5))]" />
      <div className="fixed inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.8),transparent,rgba(0,0,0,0.8))]" />

      <div className="container mx-auto px-6 py-20 relative">
        <div className="flex flex-col items-center justify-center min-h-[80vh] space-y-16 relative">
          {/* Titre avec dégradés doux */}
          <div className="text-center space-y-8 max-w-4xl">
            <h1 className="text-7xl md:text-9xl font-bold tracking-tight animate-fade-in">
              <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-sky-300 to-teal-300 hover:from-sky-300 hover:via-teal-300 hover:to-sky-300 transition-all duration-700">
                Scandere TEJ
              </span>
            </h1>
            <p className="text-2xl md:text-3xl font-light text-zinc-400 tracking-wide animate-fade-in-up">
              Je transforme des 
              <span className="text-teal-300 font-normal mx-2">idées</span> 
              en 
              <span className="text-sky-300 font-normal mx-2">expériences numériques</span>
            </p>
          </div>

          {/* Technologies avec style élégant */}
          <div className="flex flex-wrap justify-center gap-6 max-w-3xl animate-fade-in-up delay-300">
            {technologies.map((tech, index) => (
              <div 
                key={index} 
                className="group relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-500/50 to-sky-500/50 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-md" />
                <div className="relative flex items-center gap-3 bg-black/80 px-6 py-3 rounded-xl border border-zinc-800 hover:border-zinc-700 transition-all duration-500">
                  <tech.icon className="w-6 h-6 text-zinc-500 group-hover:text-teal-300 transition-colors duration-500" />
                  <span className="text-zinc-400 group-hover:text-white transition-colors duration-500">{tech.name}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Bouton avec gradient doux */}
          <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up delay-500">
            <a 
              href="/projects" 
              className="group relative inline-flex items-center"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-500/50 to-sky-500/50 rounded-full opacity-70 blur group-hover:opacity-100 transition-all duration-500" />
              <div className="relative flex items-center bg-black px-8 py-4 rounded-full border border-zinc-800 hover:border-zinc-700">
                <span className="text-lg text-white font-medium pr-2">Explorer mon univers</span>
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </a>
          </div>

          {/* Indicateur avec gradient doux */}
          <div className="absolute bottom-10 animate-bounce">
            <div className="w-1 h-12 rounded-full bg-gradient-to-b from-teal-400/50 to-sky-400/50 opacity-50" />
          </div>
        </div>
      </div>
    </main>
  );
}