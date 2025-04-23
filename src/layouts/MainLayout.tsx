import { useState, ReactNode } from 'react'

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-deep-black text-dirty-white py-4">
        <div className="container-custom flex justify-between items-center">
          <div className="text-2xl font-display font-bold tracking-wider text-coral">
            BRUISED<span className="text-dirty-white">ARTRASH</span>
          </div>
          
          {/* Mobile menu button */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)} 
            className="md:hidden focus:outline-none"
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
            <li><a href="#" className="text-dirty-white hover:text-coral">Inicio</a></li>
            <li><a href="#" className="text-dirty-white hover:text-coral">Galería</a></li>
            <li><a href="#" className="text-dirty-white hover:text-coral">Sobre el Artista</a></li>
            <li><a href="#" className="text-dirty-white hover:text-coral">Contacto</a></li>
          </ul>
        </div>
        
        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden mt-2 bg-deep-black">
            <ul className="flex flex-col space-y-4 p-4">
              <li><a href="#" className="text-dirty-white hover:text-coral block py-2">Inicio</a></li>
              <li><a href="#" className="text-dirty-white hover:text-coral block py-2">Galería</a></li>
              <li><a href="#" className="text-dirty-white hover:text-coral block py-2">Sobre el Artista</a></li>
              <li><a href="#" className="text-dirty-white hover:text-coral block py-2">Contacto</a></li>
            </ul>
          </div>
        )}
      </nav>
      
      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>
      
      {/* Footer */}
      <footer className="bg-deep-black text-dirty-white py-6">
        <div className="container-custom">
          <div className="text-center">
            <p className="opacity-70">&copy; {new Date().getFullYear()} BruisedArtrash. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default MainLayout 