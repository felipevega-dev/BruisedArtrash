interface ArtCardProps {
  title: string;
  technique: string;
  year?: number | string;
  color?: string;
  index?: number;
}

const ArtCard = ({ 
  title, 
  technique, 
  year, 
  color, 
  index = 0 
}: ArtCardProps) => {
  // Si no se proporciona un color, usaremos colores basados en el índice
  const bgColor = color || (
    index % 3 === 0 ? '#E7503B' : 
    index % 3 === 1 ? '#6E9033' : 
    '#22437D'
  );
  
  return (
    <div className="art-card group">
      <div 
        className="aspect-square relative overflow-hidden"
        style={{ backgroundColor: bgColor, opacity: 0.8 }}
      >
        {/* Placeholder central */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-dirty-white font-display text-2xl">
            {title.split(' ')[0]}
          </span>
        </div>
        
        {/* Overlay al hacer hover */}
        <div className="absolute inset-0 bg-deep-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-dirty-white font-bold">Ver detalles</span>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-display text-xl text-deep-black">{title}</h3>
        <p className="text-deep-black/70 mt-2">{technique}</p>
        {year && (
          <p className="text-deep-black/50 text-sm mt-1">{year}</p>
        )}
      </div>
    </div>
  );
};

export default ArtCard; 