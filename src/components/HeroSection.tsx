import { useState } from 'react';
import clownImage from '../assets/img/clown.jpg';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  highlightedText?: string;
}

const HeroSection = ({ 
  title = "Arte que desafía los límites", 
  subtitle = "Explorando lo grotesco y bello a través del expresionismo figurativo contemporáneo.",
  highlightedText = "desafía" 
}: HeroSectionProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  // Replace the highlighted text with a span that has text-blood-red class
  const formattedTitle = title.replace(highlightedText, `<span class="text-blood-red">${highlightedText}</span>`);
  
  return (
    <section className="hero-section bg-shadow-black py-16 md:py-24 relative">
      {/* Overlay de imagen con efecto */}
      <div className="absolute inset-0 overflow-hidden opacity-30 mix-blend-overlay">
        <img 
          src={clownImage} 
          alt="Fondo artístico BruisedArtrash"
          className={`w-full h-full object-cover transition-opacity duration-1000 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ filter: 'contrast(1.2) saturate(0.8) blur(1px)' }}
          onLoad={() => setImageLoaded(true)}
        />
      </div>
      
      <div className="absolute inset-0 bg-night-blue/40 mix-blend-overlay"></div>
      <div className="texture-overlay"></div>
      <div className="mesh-overlay opacity-10"></div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 
              className="text-flesh mb-6 font-display leading-tight hand-drawn"
              dangerouslySetInnerHTML={{ __html: formattedTitle }}
            />
            <p className="text-gray-blue text-lg md:text-xl mb-8 max-w-xl">
              {subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary">Explorar Galería</button>
              <button className="btn-secondary">Contactar</button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              {/* Placeholder para artwork con estilo de las pinturas */}
              <div className="distorted-image brushed-border aspect-square max-w-md mx-auto bg-toxic-orange rounded-none overflow-hidden shadow-brutal transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-shadow-black opacity-60"></div>
                <div className="h-full w-full flex items-center justify-center relative">
                  {/* Círculo tipo máscara inspirado en la primera imagen */}
                  <div className="w-3/4 h-3/4 rounded-full bg-shadow-black/50 absolute"></div>
                  <div className="w-2/3 h-2/3 rounded-full border-8 border-flesh/80 flex items-center justify-center relative z-10">
                    <span className="clown-text text-flesh font-display text-4xl">BRUISED</span>
                  </div>
                </div>
              </div>
              
              {/* Elementos decorativos */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blood-red rounded-full mix-blend-multiply blur-md animate-pulse-slow"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-night-blue rounded-full mix-blend-multiply blur-md"></div>
              
              {/* Líneas de estilo atormentado/rayado */}
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <line x1="0" y1="20" x2="100" y2="30" stroke="#C41E3A" strokeWidth="0.5" strokeDasharray="1,3" />
                  <line x1="10" y1="90" x2="90" y2="40" stroke="#FF5E0E" strokeWidth="0.5" strokeDasharray="1,2" />
                  <line x1="0" y1="80" x2="100" y2="60" stroke="#673147" strokeWidth="0.4" strokeDasharray="2,2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 