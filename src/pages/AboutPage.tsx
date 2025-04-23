import { useState, useEffect } from 'react';
import mouseImg from '../assets/img/mouse.jpg';
import ladyImg from '../assets/img/lady.jpg';
import dragImg from '../assets/img/drag.jpg';
import clownImg from '../assets/img/clown.jpg';

const AboutPage = () => {
  const [animateElements, setAnimateElements] = useState(false);
  
  // Efecto para animaciones de entrada
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateElements(true);
    }, 100);
    
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
    
    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);
  
  return (
    <div className="bg-shadow-black min-h-screen pb-20 relative">
      {/* Textura de fondo */}
      <div className="absolute inset-0 bg-texture-noise opacity-20 mix-blend-overlay pointer-events-none"></div>
      
      {/* Imagen de fondo con efecto */}
      <div className="absolute top-0 left-0 w-full h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-shadow-black/90 via-shadow-black to-shadow-black"></div>
        <img 
          src={dragImg} 
          alt="Background" 
          className="w-full h-full object-cover opacity-10 mix-blend-overlay"
          style={{ filter: 'blur(2px) contrast(1.2)' }}
        />
      </div>
      
      {/* Banner decorativo */}
      <div className="relative">
        <div className="absolute left-0 right-0 h-1 bg-blood-red/30"></div>
        <div className="absolute left-1/4 right-1/4 top-4 h-1 bg-toxic-orange/20"></div>
      </div>
      
      <div className="container-custom pt-24 relative z-10">
        <div className={`transition-all duration-1000 transform ${animateElements ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h1 className="text-flesh text-center mb-6">
            <span className="text-toxic-orange hand-drawn">Sobre el Artista</span>
          </h1>
          
          <p className="text-gray-blue text-center max-w-2xl mx-auto mb-12">
            Conoce al artista detrás de BruisedArtrash, su historia, influencias y proceso creativo que da vida a un mundo visual perturbador y fascinante.
          </p>
        </div>
        
        {/* Sección Bio + Foto */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-20">
          <div className={`transition-all duration-1000 delay-300 transform ${animateElements ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
            <div className="animate-on-scroll opacity-0">
              <h2 className="text-toxic-orange font-display text-2xl mb-6 hand-drawn">Biografía</h2>
              
              <div className="space-y-4 text-gray-blue">
                <p>
                  Nacido en Barcelona en 1988, Marco Arterial (conocido artísticamente como BruisedArtrash) comenzó su trayectoria artística explorando los límites entre lo grotesco y lo sublime. Licenciado en Bellas Artes por la Universidad de Barcelona, completó posteriormente estudios de postgrado en arte contemporáneo en Londres.
                </p>
                
                <p>
                  Su obra se caracteriza por una mezcla de expresionismo figurativo y elementos de arte outsider, con una paleta cromática intensa dominada por rojos, naranjas y azules profundos que evocan tanto la carne como la muerte. Las distorsiones anatómicas y rostros deformados son recurrentes en su trabajo, creando un lenguaje visual único que desafía las convenciones estéticas tradicionales.
                </p>
                
                <p>
                  Tras un periodo marcado por crisis personales y luchas internas, desarrolló su estilo distintivo que utiliza la deformación como metáfora de los estados emocionales extremos y la fragilidad psicológica. Sus influencias abarcan desde Francis Bacon y Lucian Freud hasta el arte marginal y la estética del horror contemporáneo.
                </p>
              </div>
            </div>
          </div>
          
          <div className={`transition-all duration-1000 delay-500 transform ${animateElements ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
            <div className="animate-on-scroll opacity-0">
              <div className="distorted-image aspect-square bg-shadow-black rounded-none border-2 border-blood-red/50 max-w-md mx-auto relative overflow-hidden">
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
              
              {/* Firma de artista */}
              <div className="mt-4 text-center">
                <p className="text-toxic-orange font-display italic">Marco Arterial - BruisedArtrash</p>
                <p className="text-gray-blue text-sm">Barcelona, España</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Manifesto Artístico */}
        <div className="mb-20 animate-on-scroll opacity-0">
          <div className="bg-shadow-black/70 backdrop-blur-sm border border-toxic-orange/20 p-8 rounded-lg shadow-lg relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blood-red via-toxic-orange to-blood-red"></div>
            
            <h2 className="text-toxic-orange font-display text-2xl mb-6 hand-drawn text-center">Manifiesto Artístico</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <blockquote className="text-flesh italic border-l-4 border-blood-red pl-4">
                "El arte que no incomoda no es arte, es decoración. Busco arrancar emociones desde las entrañas, revelar lo que se oculta bajo la piel social, desgarrar las máscaras y mostrar la belleza terrorífica que subyace en el caos interior."
              </blockquote>
              
              <div className="space-y-4 text-gray-blue">
                <p>
                  Mi trabajo es un acto de violencia contra la complacencia visual y el vacío estético contemporáneo. Cada obra es una incisión en la realidad, un intento de alcanzar la verdad visceral que se esconde tras las apariencias.
                </p>
                <p>
                  La deformación no es un recurso estilístico, sino una revelación: así es como realmente nos vemos cuando caen las máscaras sociales, cuando la carne revela su verdad cruda y vulnerable.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Técnicas e Influencias */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {/* Técnicas y medios */}
          <div className="animate-on-scroll opacity-0">
            <div className="bg-shadow-black/70 backdrop-blur-sm border border-toxic-orange/20 p-8 rounded-lg shadow-lg h-full">
              <h2 className="text-toxic-orange font-display text-2xl mb-6 hand-drawn">Técnicas & Proceso</h2>
              
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="bg-blood-red/20 p-3 rounded-full h-min">
                    <svg className="w-6 h-6 text-toxic-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-flesh font-bold">Técnica Mixta</h3>
                    <p className="text-gray-blue">Combinación de óleo, acrílico y elementos de collage para crear texturas orgánicas y abruptas que evocan la carnalidad.</p>
                  </div>
                </li>
                
                <li className="flex gap-4">
                  <div className="bg-blood-red/20 p-3 rounded-full h-min">
                    <svg className="w-6 h-6 text-toxic-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-flesh font-bold">Distorsión Figurativa</h3>
                    <p className="text-gray-blue">Deformación controlada de la anatomía humana y manipulación de proporciones para comunicar estados psicológicos extremos.</p>
                  </div>
                </li>
                
                <li className="flex gap-4">
                  <div className="bg-blood-red/20 p-3 rounded-full h-min">
                    <svg className="w-6 h-6 text-toxic-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-flesh font-bold">Paleta Visceral</h3>
                    <p className="text-gray-blue">Uso predominante de rojos, naranjas y azules intensos para evocar reacciones físicas y emocionales inmediatas en el espectador.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Influencias */}
          <div className="animate-on-scroll opacity-0">
            <div className="bg-shadow-black/70 backdrop-blur-sm border border-toxic-orange/20 p-8 rounded-lg shadow-lg h-full">
              <h2 className="text-toxic-orange font-display text-2xl mb-6 hand-drawn">Influencias Artísticas</h2>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h3 className="text-flesh font-bold">Expresionismo</h3>
                  <ul className="text-gray-blue text-sm space-y-1">
                    <li>• Francis Bacon</li>
                    <li>• Lucian Freud</li>
                    <li>• Egon Schiele</li>
                  </ul>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-flesh font-bold">Arte Marginal</h3>
                  <ul className="text-gray-blue text-sm space-y-1">
                    <li>• Henry Darger</li>
                    <li>• Adolf Wölfli</li>
                    <li>• Jean-Michel Basquiat</li>
                  </ul>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-flesh font-bold">Literatura</h3>
                  <ul className="text-gray-blue text-sm space-y-1">
                    <li>• William S. Burroughs</li>
                    <li>• Georges Bataille</li>
                    <li>• Antonin Artaud</li>
                  </ul>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-flesh font-bold">Estéticas</h3>
                  <ul className="text-gray-blue text-sm space-y-1">
                    <li>• Horror cósmico</li>
                    <li>• Surrealismo visceral</li>
                    <li>• Body Horror</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 flex items-center justify-center">
                <img 
                  src={ladyImg} 
                  alt="Obra inspiracional"
                  className="w-3/4 h-auto object-cover opacity-70 mix-blend-luminosity hover:mix-blend-normal transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Cronología */}
        <div className="mb-20 animate-on-scroll opacity-0">
          <h2 className="text-toxic-orange font-display text-2xl mb-6 hand-drawn text-center">Cronología Artística</h2>
          
          <div className="relative">
            {/* Línea de tiempo vertical */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-toxic-orange/30 transform -translate-x-1/2"></div>
            
            <div className="space-y-12 relative z-10">
              {/* 2010-2013 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                <div className="md:text-right md:pr-10">
                  <h3 className="text-flesh text-xl">Formación Inicial</h3>
                  <p className="text-toxic-orange font-bold">2010 - 2013</p>
                  <p className="text-gray-blue mt-2">Estudios de Bellas Artes en Barcelona. Experimentación con técnicas tradicionales y primeros acercamientos al expresionismo figurativo.</p>
                </div>
                
                <div className="hidden md:block"></div>
                
                {/* Marcador */}
                <div className="absolute left-1/2 top-0 w-4 h-4 bg-blood-red rounded-full transform -translate-x-1/2 border-2 border-flesh"></div>
              </div>
              
              {/* 2014-2016 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                <div className="hidden md:block"></div>
                
                <div className="md:pl-10">
                  <h3 className="text-flesh text-xl">Crisis y Transformación</h3>
                  <p className="text-toxic-orange font-bold">2014 - 2016</p>
                  <p className="text-gray-blue mt-2">Periodo de crisis personal que revoluciona su enfoque artístico. Inicia experimentación con la deformación anatómica y paletas cromáticas perturbadoras.</p>
                </div>
                
                {/* Marcador */}
                <div className="absolute left-1/2 top-0 w-4 h-4 bg-blood-red rounded-full transform -translate-x-1/2 border-2 border-flesh"></div>
              </div>
              
              {/* 2017-2019 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                <div className="md:text-right md:pr-10">
                  <h3 className="text-flesh text-xl">Primeras Exposiciones</h3>
                  <p className="text-toxic-orange font-bold">2017 - 2019</p>
                  <p className="text-gray-blue mt-2">Primera exhibición individual "Máscaras Despojadas" en galería underground de Barcelona. Reconocimiento en circuitos alternativos de arte contemporáneo.</p>
                </div>
                
                <div className="hidden md:block"></div>
                
                {/* Marcador */}
                <div className="absolute left-1/2 top-0 w-4 h-4 bg-blood-red rounded-full transform -translate-x-1/2 border-2 border-flesh"></div>
              </div>
              
              {/* 2020-2022 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                <div className="hidden md:block"></div>
                
                <div className="md:pl-10">
                  <h3 className="text-flesh text-xl">Consolidación</h3>
                  <p className="text-toxic-orange font-bold">2020 - 2022</p>
                  <p className="text-gray-blue mt-2">Desarrollo de la serie "Anatomías Interiores". Participación en ferias internacionales. Colaboración con artistas del ámbito del body horror cinematográfico.</p>
                </div>
                
                {/* Marcador */}
                <div className="absolute left-1/2 top-0 w-4 h-4 bg-blood-red rounded-full transform -translate-x-1/2 border-2 border-flesh"></div>
              </div>
              
              {/* 2023-Presente */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                <div className="md:text-right md:pr-10">
                  <h3 className="text-flesh text-xl">Actualidad</h3>
                  <p className="text-toxic-orange font-bold">2023 - Presente</p>
                  <p className="text-gray-blue mt-2">Trabajo en la serie "Grotescos Sublimes". Exposiciones en Madrid, Barcelona y preparación para exhibición internacional. Exploración de nuevos medios digitales.</p>
                </div>
                
                <div className="hidden md:block"></div>
                
                {/* Marcador */}
                <div className="absolute left-1/2 top-0 w-4 h-4 bg-blood-red rounded-full transform -translate-x-1/2 border-2 border-flesh"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Cita final */}
        <div className="relative py-12 animate-on-scroll opacity-0">
          <div className="absolute inset-0 opacity-30">
            <img
              src={clownImg}
              alt="Imagen de fondo"
              className="w-full h-full object-cover"
              style={{ filter: 'grayscale(80%) contrast(1.2)' }}
            />
            <div className="absolute inset-0 bg-shadow-black/80"></div>
          </div>
          
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-toxic-orange text-2xl font-display mb-4 gross-text">
                "El arte debe ser como una herida abierta: honesto, crudo y completamente vivo."
              </h3>
              <p className="text-flesh mb-6">― Marco Arterial (BruisedArtrash)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage; 