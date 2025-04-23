import ArtCard from '../components/ArtCard';

// Datos simulados para la galería
const artworks = Array.from({ length: 9 }).map((_, index) => ({
  id: index + 1,
  title: `Sin título #${index + 1}`,
  technique: index % 3 === 0 ? 'Acrílico sobre lienzo' : 
             index % 3 === 1 ? 'Técnica mixta' : 'Ilustración digital',
  year: 2020 + Math.floor(index / 3),
}));

const GalleryPage = () => {
  return (
    <div className="py-16 bg-dirty-white">
      <div className="container-custom">
        <h1 className="text-deep-black mb-12 text-center">Galería de <span className="text-coral">Obras</span></h1>
        
        {/* Filtros */}
        <div className="mb-8 flex flex-wrap gap-4 justify-center">
          <button className="px-4 py-2 bg-dark-green text-dirty-white rounded-md hover:bg-deep-blue transition-colors">Todas</button>
          <button className="px-4 py-2 bg-dirty-white text-deep-black border border-deep-black rounded-md hover:bg-gray-blue/20 transition-colors">Pintura</button>
          <button className="px-4 py-2 bg-dirty-white text-deep-black border border-deep-black rounded-md hover:bg-gray-blue/20 transition-colors">Ilustración</button>
          <button className="px-4 py-2 bg-dirty-white text-deep-black border border-deep-black rounded-md hover:bg-gray-blue/20 transition-colors">Digital</button>
        </div>
        
        {/* Grid de obras */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {artworks.map((artwork, index) => (
            <ArtCard
              key={artwork.id}
              title={artwork.title}
              technique={artwork.technique}
              year={artwork.year}
              index={index}
            />
          ))}
        </div>
        
        {/* Paginación */}
        <div className="mt-12 flex justify-center gap-2">
          <button className="w-10 h-10 rounded-md bg-dark-green text-dirty-white flex items-center justify-center hover:bg-deep-blue transition-colors">1</button>
          <button className="w-10 h-10 rounded-md bg-dirty-white text-deep-black border border-deep-black flex items-center justify-center hover:bg-gray-blue/20 transition-colors">2</button>
          <button className="w-10 h-10 rounded-md bg-dirty-white text-deep-black border border-deep-black flex items-center justify-center hover:bg-gray-blue/20 transition-colors">3</button>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage; 