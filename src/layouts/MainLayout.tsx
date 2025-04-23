import { useState, ReactNode } from 'react'
import { Outlet, NavLink, useNavigate } from 'react-router-dom'

type PageType = 'home' | 'gallery' | 'contact' | 'about';

interface MainLayoutProps {
  children: ReactNode;
  onNavigate: (page: PageType) => void;
  currentPage: PageType;
}

const MainLayout = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Cerrar menú al navegar
  const handleNavigation = (path: string) => () => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-shadow-black">
      {/* Navbar */}
      <nav className="bg-shadow-black text-flesh border-b border-blood-red/30 py-5 relative">
        <div className="absolute inset-0 bg-texture-noise opacity-20 mix-blend-overlay pointer-events-none"></div>
        
        <div className="container-custom flex justify-between items-center">
          <div className="text-2xl font-display font-bold tracking-wider clown-text relative">
            <span className="relative z-10">BRUISED</span>
            <span className="text-toxic-orange">ARTRASH</span>
            <div className="absolute -top-1 -left-1 w-full h-full text-blood-red opacity-50">BRUISED</div>
          </div>
          
          {/* Mobile menu button */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)} 
            className="md:hidden focus:outline-none relative z-10"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          
          {/* Desktop navigation */}
          <ul className="hidden md:flex space-x-8 text-lg">
            <li>
              <NavLink 
                to="/" 
                onClick={handleNavigation('/')} 
                className={({isActive}) => 
                  `text-flesh hover:text-toxic-orange ${isActive ? 'text-toxic-orange' : ''}`}
              >
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/gallery" 
                onClick={handleNavigation('/gallery')} 
                className={({isActive}) => 
                  `text-flesh hover:text-toxic-orange ${isActive ? 'text-toxic-orange' : ''}`}
              >
                Galería
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about" 
                onClick={handleNavigation('/about')} 
                className={({isActive}) => 
                  `text-flesh hover:text-toxic-orange ${isActive ? 'text-toxic-orange' : ''}`}
              >
                Sobre el Artista
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact" 
                onClick={handleNavigation('/contact')} 
                className={({isActive}) => 
                  `text-flesh hover:text-toxic-orange ${isActive ? 'text-toxic-orange' : ''}`}
              >
                Contacto
              </NavLink>
            </li>
          </ul>
        </div>
        
        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden mt-2 bg-shadow-black border-t border-blood-red/20 absolute left-0 right-0 z-50">
            <div className="absolute inset-0 bg-texture-noise opacity-20 mix-blend-overlay pointer-events-none"></div>
            <ul className="flex flex-col space-y-4 p-4">
              <li>
                <NavLink 
                  to="/" 
                  onClick={handleNavigation('/')} 
                  className={({isActive}) => 
                    `text-flesh hover:text-toxic-orange block py-2 ${isActive ? 'text-toxic-orange' : ''}`}
                >
                  Inicio
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/gallery" 
                  onClick={handleNavigation('/gallery')} 
                  className={({isActive}) => 
                    `text-flesh hover:text-toxic-orange block py-2 ${isActive ? 'text-toxic-orange' : ''}`}
                >
                  Galería
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/about" 
                  onClick={handleNavigation('/about')} 
                  className={({isActive}) => 
                    `text-flesh hover:text-toxic-orange block py-2 ${isActive ? 'text-toxic-orange' : ''}`}
                >
                  Sobre el Artista
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/contact" 
                  onClick={handleNavigation('/contact')} 
                  className={({isActive}) => 
                    `text-flesh hover:text-toxic-orange block py-2 ${isActive ? 'text-toxic-orange' : ''}`}
                >
                  Contacto
                </NavLink>
              </li>
            </ul>
          </div>
        )}
        
        {/* Líneas decorativas diagonales */}
        <div className="absolute bottom-0 left-0 w-full h-1 overflow-hidden">
          <div className="w-full h-full relative">
            <div className="absolute inset-0 bg-blood-red opacity-60"></div>
            <svg className="w-full h-8" viewBox="0 0 1000 8" preserveAspectRatio="none">
              <path d="M0,0 L1000,8 L1000,0 Z" fill="#FF5E0E" opacity="0.3"></path>
            </svg>
          </div>
        </div>
      </nav>
      
      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>
      
      {/* Footer */}
      <footer className="bg-shadow-black text-flesh py-8 border-t border-toxic-orange/30 relative">
        <div className="absolute inset-0 bg-texture-noise opacity-20 mix-blend-overlay pointer-events-none"></div>
        
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-toxic-orange font-display text-xl mb-4 hand-drawn">Navegación</h3>
              <ul className="space-y-2">
                <li><NavLink to="/" className={({isActive}) => 
                  `text-gray-blue hover:text-toxic-orange ${isActive ? 'text-toxic-orange' : ''}`}>Inicio</NavLink></li>
                <li><NavLink to="/gallery" className={({isActive}) => 
                  `text-gray-blue hover:text-toxic-orange ${isActive ? 'text-toxic-orange' : ''}`}>Galería</NavLink></li>
                <li><NavLink to="/about" className={({isActive}) => 
                  `text-gray-blue hover:text-toxic-orange ${isActive ? 'text-toxic-orange' : ''}`}>Sobre el Artista</NavLink></li>
                <li><NavLink to="/contact" className={({isActive}) => 
                  `text-gray-blue hover:text-toxic-orange ${isActive ? 'text-toxic-orange' : ''}`}>Contacto</NavLink></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-toxic-orange font-display text-xl mb-4 hand-drawn">Contacto</h3>
              <p className="text-gray-blue mb-2">contacto@bruisedartrash.com</p>
              <p className="text-gray-blue">Estudio: Barcelona, España</p>
            </div>
            
            <div>
              <h3 className="text-toxic-orange font-display text-xl mb-4 hand-drawn">Redes Sociales</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-blue hover:text-toxic-orange">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-blue hover:text-toxic-orange">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-toxic-orange/20 text-center">
            <p className="text-gray-blue opacity-70">&copy; {new Date().getFullYear()} BruisedArtrash. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default MainLayout 