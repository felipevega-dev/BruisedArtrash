import { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import ArtCard from '../components/ArtCard';
import wowImg from '../assets/img/wow.jpg';
import elfenliedImg from '../assets/img/elfenlied.jpg';
import dragImg from '../assets/img/drag.jpg';
import mouseImg from '../assets/img/mouse.jpg';
import shotImg from '../assets/img/shot.jpg';
import { artworks } from '../data/artworks';

// Datos de ejemplo para la sección de obras destacadas con IDs que coinciden con los de artworks.ts
const featuredArtworks = [
  {
    id: 1,
    title: "La Máscara Despojada",
    technique: "Óleo sobre lienzo",
    year: 2023,
    image: elfenliedImg
  },
  {
    id: 2,
    title: "Figura en Naranja",
    technique: "Técnica mixta",
    year: 2022,
    image: dragImg
  },
  {
    id: 3,
    title: "Payaso Trágico",
    technique: "Acrílico y óleo",
    year: 2021,
    image: wowImg
  }
];

// Props de la página para recibir la función de navegación
interface HomePageProps {
  onNavigate?: (page: 'home' | 'gallery' | 'contact') => void;
}

const HomePage = ({ onNavigate }: HomePageProps) => {
  // Efecto para animación al cargar la página
  useEffect(() => {
    // Animación de entrada para las tarjetas de obras
    const artCards = document.querySelectorAll('.art-card');
    artCards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('animate-in');
      }, 300 + (index * 150));
    });

    // Animación para secciones
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    sections.forEach(section => {
      section.classList.add('opacity-0');
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Handler para botones de navegación
  const handleNavigate = (page: 'home' | 'gallery' | 'contact') => () => {
    if (onNavigate) {
      onNavigate(page);
      // Scroll al inicio para mejor experiencia
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Handler para navegar a la galería y mostrar una obra específica
  const handleViewArtworkDetail = (artworkId: number) => () => {
    // Aquí navegamos a la galería
    if (onNavigate) {
      // Almacenar el ID de la obra seleccionada en sessionStorage para recuperarlo en la galería
      sessionStorage.setItem('selectedArtworkId', artworkId.toString());
      onNavigate('gallery');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <HeroSection 
        title="Arte que desgarra los límites"
        subtitle="Explorando lo grotesco y revelando la crudeza a través del expresionismo figurativo contemporáneo. Un viaje visual por las entrañas de la condición humana."
        highlightedText="desgarra"
        onNavigateToGallery={handleNavigate('gallery')}
        onNavigateToContact={handleNavigate('contact')}
      />
      
      {/* Separador gráfico */}
      <div className="h-1 w-full bg-gradient-to-r from-shadow-black via-blood-red to-shadow-black"></div>
      
      {/* Sección de "Destacado" */}
      <section className="py-16 bg-shadow-black relative transition-opacity duration-700">
        <div className="absolute inset-0 bg-texture-noise opacity-30 mix-blend-overlay"></div>
        
        <div className="container-custom relative z-10">
          <h2 className="text-flesh mb-4 text-center">Obra <span className="text-blood-red hand-drawn">Destacada</span></h2>
          <p className="text-gray-blue text-center max-w-2xl mx-auto mb-12">
            Exploraciones viscerales que desafían la percepción convencional y revelan 
            la belleza en la distorsión y el caos.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArtworks.map((artwork, index) => (
              <div 
                key={artwork.id} 
                className="cursor-pointer transform transition-transform hover:scale-[1.02]"
                onClick={handleViewArtworkDetail(artwork.id)}
              >
                <ArtCard
                  title={artwork.title}
                  technique={artwork.technique}
                  year={artwork.year}
                  index={index}
                  image={artwork.image}
                />
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <button 
              className="btn-primary hover:scale-105 transition-transform duration-300"
              onClick={handleNavigate('gallery')}
            >
              Ver toda la galería
            </button>
          </div>
        </div>
      </section>
      
      {/* Separador distorsionado */}
      <div className="h-8 bg-toxic-orange relative overflow-hidden">
        <svg viewBox="0 0 1200 30" preserveAspectRatio="none" className="w-full h-full absolute top-0 left-0">
          <path d="M0,0 C300,30 800,0 1200,20 L1200,30 L0,30 Z" fill="#0D0D0D"></path>
        </svg>
      </div>
      
      {/* Sección "Sobre el Artista" */}
      <section className="py-16 bg-night-blue text-flesh relative transition-opacity duration-700">
        <div className="absolute inset-0 bg-gradient-to-b from-night-blue/80 to-shadow-black/90"></div>
        <div className="texture-overlay"></div>
        <div className="mesh-overlay opacity-10"></div>
        
        <div className="container-custom relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3">
              {/* Placeholder para foto del artista, usando una imagen real */}
              <div className="distorted-image aspect-square bg-shadow-black rounded-none border-2 border-blood-red/50 max-w-xs mx-auto relative overflow-hidden hover:scale-[1.02] transition-transform duration-500">
                <img 
                  src={mouseImg} 
                  alt="El artista BruisedArtrash"
                  className="w-full h-full object-cover opacity-80"
                  style={{ filter: 'contrast(1.3) saturate(0.9)' }}
                />
                <div className="absolute inset-0 bg-night-blue/20 mix-blend-color-burn"></div>
                
                {/* Efecto de líneas tipo máscara */}
                <div className="absolute inset-0 pointer-events-none">
                  <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <line x1="20" y1="0" x2="20" y2="100" stroke="#A93226" strokeWidth="0.5" strokeDasharray="1,3"/>
                    <line x1="40" y1="0" x2="40" y2="100" stroke="#A93226" strokeWidth="0.5" strokeDasharray="1,3"/>
                    <line x1="60" y1="0" x2="60" y2="100" stroke="#A93226" strokeWidth="0.5" strokeDasharray="1,3"/>
                    <line x1="80" y1="0" x2="80" y2="100" stroke="#A93226" strokeWidth="0.5" strokeDasharray="1,3"/>
                  </svg>
                </div>
              </div>
              
              {/* Elementos decorativos similar a las pinturas */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blood-red rounded-full mix-blend-multiply blur-md opacity-50"></div>
            </div>
            
            <div className="md:w-2/3">
              <h2 className="mb-6 text-flesh">Sobre <span className="text-toxic-orange hand-drawn">BruisedArtrash</span></h2>
              <p className="text-gray-blue text-lg mb-4">
                Artista cuya obra emerge desde los márgenes de la conciencia, explorando lo grotesco y lo bello 
                a través de una visión atormentada. Utilizando técnicas expresionistas para revelar la condición 
                humana mediante figuras distorsionadas, máscaras y colores abrasivos.
              </p>
              <p className="text-gray-blue text-lg mb-6">
                Influenciado por Francis Bacon, Lucian Freud y el teatro de lo grotesco, su trabajo destroza 
                los límites entre la belleza convencional y la expresión cruda de emociones reprimidas, creando 
                un lenguaje visual que resulta tan perturbador como hipnótico.
              </p>
              <button 
                className="btn-primary hover:translate-y-[-2px] hover:shadow-lg transition-all duration-300"
                onClick={handleNavigate('contact')}
              >
                Conocer más
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Banner promocional con imagen */}
      <section className="py-10 bg-shadow-black relative transition-opacity duration-700">
        <div className="absolute inset-0 opacity-40">
          <img
            src={shotImg}
            alt="Imagen de fondo"
            className="w-full h-full object-cover"
            style={{ filter: 'grayscale(60%) contrast(1.2)' }}
          />
          <div className="absolute inset-0 bg-shadow-black/70"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-toxic-orange text-2xl font-display mb-4 gross-text">
              "El arte debe incomodar al cómodo y reconfortar al incómodo"
            </h3>
            <p className="text-flesh mb-6">― Expuesta en galería Bruised·Mind, Madrid 2023</p>
            <button 
              className="btn-secondary hover:animate-pulse hover:bg-toxic-orange/10 transition-colors duration-300"
              onClick={handleNavigate('contact')}
            >
              Próximas Exposiciones
            </button>
          </div>
        </div>
      </section>
      
      {/* Separador final */}
      <div className="h-2 bg-gradient-to-r from-blood-red via-toxic-orange to-blood-red"></div>
    </>
  );
};

export default HomePage;