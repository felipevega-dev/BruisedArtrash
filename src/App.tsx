import { useState } from 'react';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';

type PageType = 'home' | 'gallery' | 'contact';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  
  // Esta función se pasará al layout para cambiar entre páginas
  const navigateTo = (page: PageType) => {
    setCurrentPage(page);
  };
  
  // Función para renderizar la página actual
  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'gallery':
        return <GalleryPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };
  
  return (
    <MainLayout onNavigate={navigateTo} currentPage={currentPage}>
      {renderCurrentPage()}
    </MainLayout>
  );
}

export default App
