import { useState } from 'react';

// Importamos las imágenes
import shotImg from '../assets/img/shot.jpg';
import skyImg from '../assets/img/sky.jpg';
import mouseImg from '../assets/img/mouse.jpg';
import ladyImg from '../assets/img/lady.jpg';
import wowImg from '../assets/img/wow.jpg';
import wow2Img from '../assets/img/wow2.jpg';
import elfenliedImg from '../assets/img/elfenlied.jpg';
import felixImg from '../assets/img/felix.jpg';
import dragImg from '../assets/img/drag.jpg';
import staredImg from '../assets/img/stared.jpg';

// Definición de categorías
type Category = 'all' | 'digital' | 'traditional' | 'mixed';

// Interfaz para las obras de arte
interface Artwork {
  id: number;
  title: string;
  category: Exclude<Category, 'all'>;
  image: string;
  year: number;
  description: string;
  available: boolean;
  dimensions?: string;
  price: number;
}

const GalleryPage = () => {
  // Estado para filtrar por categoría
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  // Estado para la obra ampliada (cuando se hace clic en una)
  const [expandedArtwork, setExpandedArtwork] = useState<Artwork | null>(null);
  
  // Colección de obras
  const artworks: Artwork[] = [
    {
      id: 1,
      title: "Shot Through The Heart",
      category: "digital",
      image: shotImg,
      year: 2023,
      description: "Estudio digital sobre el dolor y la vulnerabilidad emocional. Esta pieza explora los sentimientos de traición y abandono representados a través de la iconografía clásica del corazón.",
      available: true,
      price: 450
    },
    {
      id: 2,
      title: "Sky's Broken Limit",
      category: "mixed",
      image: skyImg,
      year: 2022,
      description: "Un experimento de técnica mixta que combina pintura acrílica tradicional con elementos digitales. Esta obra reflexiona sobre los límites autoimpuestos y la sensación de libertad al superarlos.",
      available: true,
      dimensions: "60x80 cm",
      price: 720
    },
    {
      id: 3,
      title: "Mouse Trap",
      category: "traditional",
      image: mouseImg,
      year: 2023,
      description: "Acrílico sobre lienzo. Una exploración sobre la ansiedad social y la sensación de ser observado constantemente en la era digital.",
      available: false,
      dimensions: "50x70 cm",
      price: 0 // No disponible
    },
    {
      id: 4,
      title: "Lady in Distress",
      category: "digital",
      image: ladyImg,
      year: 2022,
      description: "Retrato digital inspirado en el arte pop y la estética del horror. Esta pieza examina la dualidad entre belleza y decadencia.",
      available: true,
      price: 350
    },
    {
      id: 5,
      title: "Wow Factor",
      category: "digital",
      image: wowImg,
      year: 2021,
      description: "Arte digital creado como parte de la serie 'Emociones Extremas'. Representa el asombro y la sorpresa ante lo inesperado.",
      available: true,
      price: 280
    },
    {
      id: 6,
      title: "Wow Again",
      category: "digital",
      image: wow2Img,
      year: 2021,
      description: "Segunda pieza de la serie 'Emociones Extremas'. Una continuación del estudio sobre el asombro, pero con un enfoque más oscuro.",
      available: true,
      price: 280
    },
    {
      id: 7,
      title: "Elfen Lied Tribute",
      category: "mixed",
      image: elfenliedImg,
      year: 2020,
      description: "Homenaje al anime Elfen Lied. Técnica mixta que combina elementos tradicionales con retoques digitales para capturar la esencia de la serie.",
      available: true,
      dimensions: "40x60 cm",
      price: 550
    },
    {
      id: 8,
      title: "Felix",
      category: "traditional",
      image: felixImg,
      year: 2022,
      description: "Retrato en óleo sobre lienzo. Este trabajo explora temas de identidad y percepción del yo a través de un estilo deliberadamente distorsionado.",
      available: true,
      dimensions: "45x60 cm",
      price: 650
    },
    {
      id: 9,
      title: "Drag Me Down",
      category: "digital",
      image: dragImg,
      year: 2023,
      description: "Arte digital que representa la sensación de ser arrastrado por fuerzas más allá de nuestro control. Parte de la serie 'Gravedad Emocional'.",
      available: true,
      price: 380
    },
    {
      id: 10,
      title: "Stared Into the Void",
      category: "mixed",
      image: staredImg,
      year: 2022,
      description: "Técnica mixta sobre papel. Una meditación visual sobre la famosa cita de Nietzsche: 'Si miras largo tiempo a un abismo, el abismo también mira dentro de ti'.",
      available: true,
      dimensions: "50x50 cm",
      price: 490
    }
  ];
  
  // Filtrar obras según la categoría seleccionada
  const filteredArtworks = activeCategory === 'all' 
    ? artworks 
    : artworks.filter(artwork => artwork.category === activeCategory);
  
  // Manejar la selección de categoría
  const handleCategoryChange = (category: Category) => {
    setActiveCategory(category);
  };
  
  // Manejar el clic en una obra
  const handleArtworkClick = (artwork: Artwork) => {
    setExpandedArtwork(artwork);
    // Desplazar al inicio de la página
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  // Cerrar la obra ampliada
  const closeExpandedView = () => {
    setExpandedArtwork(null);
  };
  
  return (
    <div className="bg-shadow-black min-h-screen pb-20">
      {/* Ruido de fondo y textura */}
      <div className="absolute inset-0 bg-texture-noise opacity-10 mix-blend-overlay pointer-events-none"></div>
      
      {/* Encabezado de la galería */}
      <div className="relative py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-blood-red/10 mix-blend-multiply"></div>
        <div className="container-custom relative z-10">
          <h1 className="text-5xl md:text-6xl font-display text-toxic-orange hand-drawn tracking-wider text-center mb-8">
            Galería
          </h1>
          <p className="text-flesh text-center max-w-3xl mx-auto opacity-90 text-lg mb-8">
            Explora mi trabajo, desde piezas digitales hasta arte tradicional, cada obra refleja mi visión única del mundo y mis experiencias personales.
          </p>
          
          {/* Filtros de categoría */}
          <div className="flex justify-center flex-wrap gap-3">
            <button 
              className={`py-2 px-4 rounded-full transition duration-300 ${activeCategory === 'all' ? 'bg-toxic-orange text-shadow-black font-bold' : 'bg-shadow-black/50 text-flesh hover:bg-blood-red/30'}`}
              onClick={() => handleCategoryChange('all')}
            >
              Todas
            </button>
            <button 
              className={`py-2 px-4 rounded-full transition duration-300 ${activeCategory === 'digital' ? 'bg-toxic-orange text-shadow-black font-bold' : 'bg-shadow-black/50 text-flesh hover:bg-blood-red/30'}`}
              onClick={() => handleCategoryChange('digital')}
            >
              Arte Digital
            </button>
            <button 
              className={`py-2 px-4 rounded-full transition duration-300 ${activeCategory === 'traditional' ? 'bg-toxic-orange text-shadow-black font-bold' : 'bg-shadow-black/50 text-flesh hover:bg-blood-red/30'}`}
              onClick={() => handleCategoryChange('traditional')}
            >
              Arte Tradicional
            </button>
            <button 
              className={`py-2 px-4 rounded-full transition duration-300 ${activeCategory === 'mixed' ? 'bg-toxic-orange text-shadow-black font-bold' : 'bg-shadow-black/50 text-flesh hover:bg-blood-red/30'}`}
              onClick={() => handleCategoryChange('mixed')}
            >
              Técnica Mixta
            </button>
          </div>
        </div>
      </div>
      
      {/* Vista ampliada de la obra */}
      {expandedArtwork && (
        <div className="container-custom my-10">
          <div className="bg-shadow-black border border-toxic-orange/20 rounded-lg shadow-xl overflow-hidden">
            <button 
              onClick={closeExpandedView}
              className="absolute top-4 right-4 z-20 bg-shadow-black/80 text-toxic-orange hover:text-flesh p-2 rounded-full"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative overflow-hidden aspect-square">
                <img 
                  src={expandedArtwork.image} 
                  alt={expandedArtwork.title} 
                  className="w-full h-full object-cover"
                />
                {!expandedArtwork.available && (
                  <div className="absolute top-0 right-0 bg-blood-red text-flesh font-bold py-1 px-4 transform rotate-45 translate-x-1/4 -translate-y-1/4">
                    VENDIDO
                  </div>
                )}
              </div>
              
              <div className="p-8 flex flex-col">
                <h2 className="text-3xl text-toxic-orange mb-2 font-display hand-drawn">{expandedArtwork.title}</h2>
                <p className="text-gray-blue mb-4">{expandedArtwork.year} • {expandedArtwork.category}</p>
                
                {expandedArtwork.dimensions && (
                  <p className="text-flesh mb-2">Dimensiones: {expandedArtwork.dimensions}</p>
                )}
                
                <div className="my-4 border-t border-b border-blood-red/20 py-4">
                  <p className="text-flesh">{expandedArtwork.description}</p>
                </div>
                
                <div className="mt-auto">
                  {expandedArtwork.available ? (
                    <>
                      <div className="text-xl text-toxic-orange mb-4 font-bold">
                        {expandedArtwork.price} €
                      </div>
                      <button className="bg-blood-red text-flesh py-3 px-6 rounded-md shadow-lg hover:bg-toxic-orange transition duration-300 ease-in-out">
                        Consultar adquisición
                      </button>
                    </>
                  ) : (
                    <div className="text-gray-blue">
                      Esta obra ya no está disponible para compra
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Cuadrícula de la galería */}
      <div className="container-custom mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredArtworks.map((artwork) => (
            <div 
              key={artwork.id}
              className="bg-shadow-black border border-toxic-orange/10 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 hover:border-toxic-orange/30 cursor-pointer group"
              onClick={() => handleArtworkClick(artwork)}
            >
              <div className="aspect-square overflow-hidden relative">
                <img 
                  src={artwork.image} 
                  alt={artwork.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {!artwork.available && (
                  <div className="absolute top-0 right-0 bg-blood-red text-flesh font-bold py-1 px-4 transform rotate-45 translate-x-1/4 -translate-y-1/4">
                    VENDIDO
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-shadow-black via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-4">
                <h3 className="text-toxic-orange text-lg font-display hand-drawn">{artwork.title}</h3>
                <p className="text-gray-blue text-sm">{artwork.year} • {artwork.category}</p>
                {artwork.available && (
                  <div className="text-flesh font-bold mt-2">{artwork.price} €</div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {filteredArtworks.length === 0 && (
          <div className="text-center py-20">
            <p className="text-flesh text-lg">No se encontraron obras en esta categoría.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryPage; 