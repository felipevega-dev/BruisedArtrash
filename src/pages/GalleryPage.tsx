import { useState, useEffect, useRef } from 'react';
import ArtCard from '../components/ArtCard';
import { artworks, categories } from '../data/artworks';

// Define the artwork type to match our data structure
interface Artwork {
  id: number;
  title: string;
  description: string;
  category: string;
  technique: string;
  year: number;
  dimensions: string;
  imageUrl: string;
}

interface GalleryPageProps {
  onNavigate?: (page: string) => void;
}

const GalleryPage = ({ onNavigate }: GalleryPageProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadedImagesCount, setLoadedImagesCount] = useState(0);
  const galleryRef = useRef<HTMLDivElement>(null);
  
  // Contador de imágenes cargadas
  const handleImageLoaded = () => {
    setLoadedImagesCount(prev => {
      const newCount = prev + 1;
      // Cuando todas las imágenes visibles estén cargadas, activar la animación
      if (newCount >= filteredArtworks.length) {
        setImagesLoaded(true);
      }
      return newCount;
    });
  };
  
  // Animar elementos al cargar y verificar si hay una obra seleccionada en sessionStorage
  useEffect(() => {
    setAnimateIn(true);
    
    // Verificar si hay un ID de obra seleccionada en sessionStorage
    const selectedArtworkId = sessionStorage.getItem('selectedArtworkId');
    if (selectedArtworkId) {
      // Buscar la obra correspondiente
      const artwork = artworks.find(a => a.id === parseInt(selectedArtworkId));
      if (artwork) {
        // Abrir el modal con la obra seleccionada
        setSelectedArtwork(artwork);
        setIsModalOpen(true);
        // Limpiar el sessionStorage después de usarlo
        sessionStorage.removeItem('selectedArtworkId');
      }
    }
    
    // Configurar animación para elementos que aparecen en el viewport
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => {
      observer.observe(el);
    });
    
    return () => observer.disconnect();
  }, []);
  
  // Restablecer el conteo de imágenes cargadas cuando cambia el filtro
  useEffect(() => {
    setImagesLoaded(false);
    setLoadedImagesCount(0);
  }, [selectedCategory]);
  
  // Ocultar el desplazamiento cuando el modal está abierto
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);
  
  // Filtrar obras de arte según la categoría seleccionada
  const filteredArtworks = selectedCategory
    ? artworks.filter(artwork => artwork.category === selectedCategory)
    : artworks;
  
  // Abrir modal con la obra seleccionada
  const openModal = (artwork: Artwork) => {
    setSelectedArtwork(artwork);
    setIsModalOpen(true);
    
    // Desplazar la página al principio para ver mejor el modal
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  // Cerrar modal
  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  // Consultar adquisición
  const handleInquiry = () => {
    if (onNavigate) {
      onNavigate('contact');
    }
  };
  
  return (
    <div className="bg-shadow-black min-h-screen">
      {/* Textura de fondo */}
      <div className="absolute inset-0 bg-texture-noise opacity-20 mix-blend-overlay pointer-events-none"></div>
      
      {/* Banner decorativo */}
      <div className="relative">
        <div className="absolute left-0 right-0 h-1 bg-blood-red/30"></div>
        <div className="absolute left-1/4 right-1/4 top-4 h-1 bg-toxic-orange/20"></div>
      </div>
      
      <div className="container-custom pt-20 pb-24 relative z-10">
        <div className={`transition-all duration-1000 ease-out transform ${animateIn ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h1 className="text-flesh text-center mb-6">
            <span className="text-toxic-orange hand-drawn">Galería</span>
          </h1>
          
          <p className="text-gray-blue text-center max-w-2xl mx-auto mb-12 animate-in">
            Explora mi colección de arte digital, fusionando el surrealismo con la estética grotesca y elementos de horror cósmico.
          </p>
        </div>
        
        {/* Filtros de categoría */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-200 transform ${animateIn ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <button
            className={`px-4 py-2 rounded-full text-sm border border-toxic-orange/40 transition-all duration-300 hover:shadow-glow-sm hover:scale-105 ${
              selectedCategory === null ? 'bg-toxic-orange/20 text-toxic-orange' : 'bg-transparent text-flesh hover:bg-toxic-orange/10'
            }`}
            onClick={() => setSelectedCategory(null)}
          >
            Todas
          </button>
          
          {categories.map((category: string) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm border border-toxic-orange/40 transition-all duration-300 hover:shadow-glow-sm hover:scale-105 ${
                selectedCategory === category ? 'bg-toxic-orange/20 text-toxic-orange' : 'bg-transparent text-flesh hover:bg-toxic-orange/10'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Grid de artworks */}
        <div 
          ref={galleryRef}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 transition-opacity duration-500 ${imagesLoaded ? 'opacity-100' : 'opacity-40'}`}
        >
          {filteredArtworks.map((artwork: Artwork, index: number) => (
            <div 
              key={artwork.id}
              className={`animate-custom-fade-in opacity-0 transition-all duration-500 ease-out`}
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => openModal(artwork)}
            >
              <ArtCard 
                title={artwork.title}
                technique={artwork.technique}
                year={artwork.year}
                index={index}
                image={artwork.imageUrl}
                onImageLoad={handleImageLoaded}
              />
            </div>
          ))}
        </div>
        
        {/* Modal para vista detallada */}
        {isModalOpen && selectedArtwork && (
          <div className="fixed inset-0 bg-shadow-black/90 flex items-center justify-center z-50 p-4 animate-custom-fade-in">
            <div 
              className="max-w-6xl w-full bg-shadow-black border border-toxic-orange/30 rounded-lg overflow-hidden shadow-2xl relative animate-fade-in"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 text-toxic-orange bg-shadow-black/80 rounded-full w-10 h-10 flex items-center justify-center z-10 hover:bg-blood-red/20 transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative">
                  <div className="absolute inset-0 bg-texture-noise opacity-30 mix-blend-overlay pointer-events-none"></div>
                  <img 
                    src={selectedArtwork.imageUrl} 
                    alt={selectedArtwork.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-8 flex flex-col">
                  <div className="animate-in delay-100">
                    <h2 className="text-toxic-orange text-3xl mb-2 hand-drawn">{selectedArtwork.title}</h2>
                    <p className="text-gray-blue mb-6">{selectedArtwork.category}</p>
                  </div>
                  
                  <div className="animate-in delay-200">
                    <div className="mb-6">
                      <h3 className="text-flesh text-xl mb-2">Descripción</h3>
                      <p className="text-gray-blue">{selectedArtwork.description}</p>
                    </div>
                  </div>
                  
                  <div className="animate-in delay-300">
                    <div className="mb-8">
                      <h3 className="text-flesh text-xl mb-2">Detalles</h3>
                      <ul className="text-gray-blue space-y-2">
                        <li><span className="text-flesh">Técnica:</span> {selectedArtwork.technique}</li>
                        <li><span className="text-flesh">Año:</span> {selectedArtwork.year}</li>
                        <li><span className="text-flesh">Dimensiones:</span> {selectedArtwork.dimensions}</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-auto animate-in delay-400">
                    <button 
                      className="bg-blood-red text-flesh px-6 py-3 rounded hover:bg-toxic-orange transition-colors duration-300 hover:shadow-lg transform hover:scale-[1.02] active:scale-[0.98]"
                      onClick={handleInquiry}
                    >
                      Consultar adquisición
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryPage; 