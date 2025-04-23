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
  // Replace the highlighted text with a span that has text-coral class
  const formattedTitle = title.replace(highlightedText, `<span class="text-coral">${highlightedText}</span>`);
  
  return (
    <section className="hero-section flex-grow bg-dark-green py-16 md:py-24 relative">
      <div className="texture-overlay"></div>
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 
              className="text-dirty-white mb-6 font-display leading-tight"
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
              {/* Placeholder para artwork */}
              <div className="aspect-square max-w-md mx-auto bg-bright-orange rounded-lg overflow-hidden shadow-xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-deep-black opacity-40"></div>
                <div className="h-full w-full bg-ochre/20 flex items-center justify-center">
                  <span className="text-deep-black font-display text-4xl">ARTE</span>
                </div>
              </div>
              
              {/* Elemento decorativo */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-coral rounded-full mix-blend-multiply blur-sm"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-deep-blue rounded-full mix-blend-multiply blur-sm"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 