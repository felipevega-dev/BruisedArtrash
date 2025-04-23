import HeroSection from '../components/HeroSection';

const HomePage = () => {
  return (
    <>
      <HeroSection 
        title="Arte que desafía los límites"
        subtitle="Explorando lo grotesco y bello a través del expresionismo figurativo contemporáneo. Un viaje visual por las entrañas de la condición humana."
        highlightedText="desafía"
      />
      
      {/* Sección de "Destacado" */}
      <section className="py-16 bg-dirty-white">
        <div className="container-custom">
          <h2 className="text-deep-black mb-12 text-center">Obra <span className="text-coral">Destacada</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tarjetas de obras - Placeholders */}
            {[1, 2, 3].map((item) => (
              <div key={item} className="art-card group">
                <div className="aspect-square bg-ochre/20 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-deep-black font-display text-2xl">OBRA {item}</span>
                  </div>
                  {/* Overlay al hacer hover */}
                  <div className="absolute inset-0 bg-coral/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-dirty-white font-bold">Ver detalles</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-display text-xl text-deep-black">Título de obra {item}</h3>
                  <p className="text-deep-black/70 mt-2">Técnica mixta sobre lienzo</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <button className="btn-primary">Ver toda la galería</button>
          </div>
        </div>
      </section>
      
      {/* Sección "Sobre el Artista" */}
      <section className="py-16 bg-dark-green text-dirty-white relative">
        <div className="texture-overlay"></div>
        <div className="container-custom relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3">
              {/* Placeholder para foto del artista */}
              <div className="aspect-square bg-toast-brown/60 rounded-lg max-w-xs mx-auto">
                <div className="h-full w-full flex items-center justify-center">
                  <span className="text-dirty-white font-display text-2xl">ARTISTA</span>
                </div>
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="mb-6">Sobre <span className="text-coral">BruisedArtrash</span></h2>
              <p className="text-gray-blue text-lg mb-4">
                Artista plástico cuya obra se sitúa en la intersección entre lo grotesco y lo bello, utilizando técnicas expresionistas para explorar la condición humana a través de figuras distorsionadas y colores intensos.
              </p>
              <p className="text-gray-blue text-lg mb-6">
                Influenciado por Francis Bacon, Lucian Freud y el arte contemporáneo urbano, su trabajo cuestiona los límites entre la belleza convencional y la expresión cruda de emociones.
              </p>
              <button className="btn-primary">Conocer más</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;