import dragImg from '../assets/img/drag.jpg';
import elfenliedImg from '../assets/img/elfenlied.jpg';
import staredImg from '../assets/img/stared.jpg';
import wowImg from '../assets/img/wow.jpg';
import ladyImg from '../assets/img/lady.jpg';

interface ArtCardProps {
  title: string;
  technique: string;
  year?: number | string;
  color?: string;
  index?: number;
  image?: string;
}

const ArtCard = ({ 
  title, 
  technique, 
  year, 
  color, 
  index = 0,
  image
}: ArtCardProps) => {
  // Colores en base a las pinturas subidas
  const cardColors = [
    'bg-blood-red', // Rojo de la segunda pintura
    'bg-toxic-orange', // Naranja de la tercera pintura
    'bg-night-blue', // Azul de la cuarta pintura
    'bg-bruise-purple', // Morado oscuro
    'bg-rust-red' // Rojo oxidado
  ];

  // Array de imágenes disponibles
  const artImages = [
    dragImg,
    elfenliedImg,
    staredImg,
    wowImg,
    ladyImg
  ];
  
  // Seleccionar un color e imagen basado en el índice
  const bgColorClass = cardColors[index % cardColors.length];
  const selectedImage = image || artImages[index % artImages.length];
  
  return (
    <div className="art-card group relative">
      <div className="absolute inset-0 shadow-inner-glow opacity-30"></div>
      <div 
        className={`distorted-image aspect-square relative overflow-hidden ${bgColorClass}`}
      >
        {/* Imagen de la obra */}
        <img 
          src={selectedImage} 
          alt={title}
          className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-multiply"
          style={{ filter: 'contrast(1.2) saturate(1.1)' }}
        />
        
        {/* Efecto de textura y ruido */}
        <div className="absolute inset-0 bg-texture-noise opacity-40 mix-blend-overlay"></div>
        
        {/* Interior oscuro */}
        <div className="absolute inset-[15%] bg-shadow-black/70"></div>
        
        {/* Contenido principal */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative flex flex-col items-center justify-center">
            {/* Elemento inspirado en alguna de las pinturas - depende del índice */}
            {index % 5 === 0 && (
              // Inspirado en la imagen del payaso
              <div className="w-24 h-24 rounded-full bg-clown-white flex items-center justify-center mb-2">
                <div className="w-16 h-16 rounded-full border-4 border-blood-red"></div>
              </div>
            )}
            
            {index % 5 === 1 && (
              // Inspirado en la imagen con máscara de red
              <div className="w-20 h-28 bg-flesh/80 relative mb-2">
                <div className="absolute inset-0 mesh-overlay opacity-70"></div>
              </div>
            )}
            
            {index % 5 === 2 && (
              // Inspirado en la figura con fondo naranja
              <div className="w-20 h-28 bg-toxic-orange relative mb-2">
                <div className="absolute inset-[15%] bg-flesh/80"></div>
              </div>
            )}
            
            {index % 5 === 3 && (
              // Inspirado en la figura con máscara azul
              <div className="w-20 h-20 rounded-full bg-flesh/70 relative mb-2">
                <div className="absolute top-0 left-0 right-0 h-1/2 bg-night-blue/80 rounded-t-full"></div>
              </div>
            )}
            
            {index % 5 === 4 && (
              // Inspirado en la figura con manos
              <div className="w-24 h-16 bg-flesh/70 relative mb-2">
                <div className="absolute -bottom-4 -right-2 w-8 h-12 bg-flesh/90 rotate-45 rounded-md"></div>
                <div className="absolute -bottom-4 -left-2 w-8 h-12 bg-flesh/90 -rotate-45 rounded-md"></div>
              </div>
            )}
            
            <span className="text-flesh font-display text-2xl z-10 gross-text">
              {title.split(' ')[0]}
            </span>
          </div>
        </div>
        
        {/* Overlay al hacer hover */}
        <div className="absolute inset-0 bg-shadow-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="p-4 border border-blood-red transform -rotate-3">
            <span className="text-blood-red font-bold">Ver detalles</span>
          </div>
        </div>
      </div>
      
      <div className="p-4 bg-shadow-black border-t border-toxic-orange/30">
        <h3 className="font-display text-xl text-flesh hand-drawn">{title}</h3>
        <p className="text-gray-blue/80 mt-2">{technique}</p>
        {year && (
          <p className="text-toxic-orange/60 text-sm mt-1">{year}</p>
        )}
      </div>
      
      {/* Líneas de rayado aleatorias */}
      <div className="absolute top-1 right-1 w-12 h-12 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="10" x2="50" y2="5" stroke="#FF5E0E" strokeWidth="0.5" strokeDasharray="1,2" />
          <line x1="5" y1="40" x2="45" y2="10" stroke="#A93226" strokeWidth="0.5" strokeDasharray="1,3" />
        </svg>
      </div>
    </div>
  );
};

export default ArtCard; 