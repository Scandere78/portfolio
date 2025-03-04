export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900 text-white px-6">
      <div className="text-center">
        {/* Nom et Titre */}
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fade-in">
          Bienvenue sur mon Portfolio
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-6 animate-fade-in delay-200">
          Développeur Web | Passionné de Code & de Design
        </p>

        {/* Call-To-Action */}
        <div className="flex justify-center gap-4 animate-fade-in delay-400">
          <a 
            href="/projects" 
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 transition rounded-lg text-lg font-semibold shadow-lg"
          >
            Voir mes Projets
          </a>
          <a 
            href="/contact" 
            className="px-6 py-3 border border-white hover:bg-white hover:text-gray-900 transition rounded-lg text-lg font-semibold"
          >
            Me Contacter
          </a>
        </div>
      </div>
    </div>
  );
}
