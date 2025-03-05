"use client";
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaHandshake, FaLightbulb } from 'react-icons/fa';

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/Scandere78',
    icon: FaGithub,
    color: 'hover:text-white',
    description: 'Explorez mes projets et contributions'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/scandere-tej-a43630297/',
    icon: FaLinkedin,
    color: 'hover:text-sky-400',
    description: 'Mon parcours professionnel détaillé'
  }
];

const highlights = [
  {
    icon: FaCode,
    title: 'Expertise Technique',
    description: 'Maîtrise des technologies modernes du web : React, Next.js, Node.js'
  },
  {
    icon: FaHandshake,
    title: 'Collaboration',
    description: 'Expérience en équipe et excellentes compétences en communication'
  },
  {
    icon: FaLightbulb,
    title: 'Innovation',
    description: 'Passionné par la création de solutions créatives et performantes'
  }
];

export default function Contact() {
  return (
    <main className="min-h-screen bg-black overflow-hidden pt-20">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(94,234,212,0.08),rgba(0,0,0,0.5))]" />
      <div className="fixed inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.8),transparent,rgba(0,0,0,0.8))]" />

      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* En-tête amélioré */}
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-sky-300 to-teal-300">
                Collaborons Ensemble
              </span>
            </h1>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Développeur passionné à la recherche de nouveaux défis. 
              Je suis ouvert aux opportunités qui me permettront d'apporter de la valeur à votre équipe.
            </p>
          </div>

          {/* Points forts */}
          <div className="grid md:grid-cols-3 gap-6 animate-fade-in-up">
            {highlights.map((item, index) => (
              <div key={index} className="group p-6 bg-zinc-900/30 rounded-xl border border-zinc-800 hover:border-zinc-700 transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <item.icon className="text-3xl text-teal-300 mb-4" />
                  <h3 className="text-lg text-sky-300 mb-2">{item.title}</h3>
                  <p className="text-zinc-400 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact direct */}
          <div className="group p-8 bg-zinc-900/30 rounded-xl border border-zinc-800 hover:border-zinc-700 transition-all duration-300 text-center animate-fade-in-up">
            <h2 className="text-2xl text-teal-300 mb-4">Contact Direct</h2>
            <a 
              href="mailto:scanderetejpro@gmail.com"
              className="inline-flex items-center text-xl text-zinc-400 hover:text-white transition-colors group-hover:scale-105 transform duration-300"
            >
              <FaEnvelope className="mr-3" />
              scanderetejpro@gmail.com
            </a>
            <p className="mt-4 text-zinc-400">Disponible pour discuter de vos projets et opportunités</p>
          </div>

          {/* Réseaux professionnels */}
          <div className="flex justify-center gap-6 animate-fade-in-up">
            {socialLinks.map((social, index) => (
              <div 
                key={index}
                className="group p-6 bg-zinc-900/30 rounded-xl border border-zinc-800 hover:border-zinc-700 transition-all duration-300 w-48"
              >
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center"
                >
                  <social.icon className={`text-4xl mx-auto mb-4 text-zinc-400 ${social.color} transition-colors`} />
                  <h3 className="text-xl text-sky-300 mb-2">{social.name}</h3>
                  <p className="text-zinc-400 text-sm">{social.description}</p>
                </a>
              </div>
            ))}
          </div>

          {/* Engagement */}
          <div className="text-center animate-fade-in-up">
            <div className="inline-block p-4 bg-zinc-900/30 rounded-xl border border-zinc-800">
              <p className="text-zinc-400">
                <span className="text-teal-300">Réponse garantie sous 24h</span> • Toujours prêt à échanger
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}