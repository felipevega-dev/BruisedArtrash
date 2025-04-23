// Importar imágenes de obras
import dragImg from '../assets/img/drag.jpg';
import elfenliedImg from '../assets/img/elfenlied.jpg';
import staredImg from '../assets/img/stared.jpg';
import wowImg from '../assets/img/wow.jpg';
import ladyImg from '../assets/img/lady.jpg';
import mouseImg from '../assets/img/mouse.jpg';
import shotImg from '../assets/img/shot.jpg';

// Categorías disponibles
export const categories = ['Grotesco', 'Expresionismo', 'Abstracto', 'Figurativo', 'Mixto'];

// Array de obras con datos completos
export const artworks = [
  {
    id: 1,
    title: 'La Máscara Despojada',
    description: 'Una exploración del concepto de identidad a través de la figuración distorsionada. La obra juega con la percepción del rostro humano, descomponiéndolo en elementos expresivos que revelan la fragilidad de nuestras fachadas sociales.',
    category: 'Expresionismo',
    technique: 'Óleo sobre lienzo',
    year: 2023,
    dimensions: '100 x 80 cm',
    imageUrl: elfenliedImg
  },
  {
    id: 2,
    title: 'Figura en Naranja',
    description: 'Una composición que explora la relación entre el cuerpo humano y el espacio que ocupa. El intenso fondo naranja crea un contraste violento con la figura, generando una tensión visual que desafía la percepción convencional.',
    category: 'Figurativo',
    technique: 'Técnica mixta',
    year: 2022,
    dimensions: '120 x 90 cm',
    imageUrl: dragImg
  },
  {
    id: 3,
    title: 'Payaso Trágico',
    description: 'Un retrato perturbador que juega con los arquetipos del payaso y lo siniestro. La obra explora la dualidad entre lo cómico y lo terrorífico, entre la superficie alegre y las profundidades de la angustia humana.',
    category: 'Grotesco',
    technique: 'Acrílico y óleo',
    year: 2021,
    dimensions: '90 x 90 cm',
    imageUrl: wowImg
  },
  {
    id: 4,
    title: 'Mirada Interior',
    description: 'Esta obra explora la introspección y los paisajes mentales a través de una figura que parece disolverse entre realidad y abstracción. Las capas superpuestas de color crean profundidad emocional y psicológica.',
    category: 'Expresionismo',
    technique: 'Óleo y collage',
    year: 2022,
    dimensions: '100 x 120 cm',
    imageUrl: staredImg
  },
  {
    id: 5,
    title: 'Vacío Contenido',
    description: 'Una exploración de la forma humana reducida a sus elementos más esenciales. La obra juega con espacios negativos y positivos, creando una tensión entre presencia y ausencia.',
    category: 'Abstracto',
    technique: 'Acrílico sobre lienzo',
    year: 2020,
    dimensions: '150 x 100 cm',
    imageUrl: mouseImg
  },
  {
    id: 6,
    title: 'Fragmentos de Identidad',
    description: 'Una obra que disecciona la construcción de la identidad a través de fragmentos visuales superpuestos. Las texturas rugosas y los cortes abruptos reflejan la naturaleza fragmentada de la experiencia humana.',
    category: 'Mixto',
    technique: 'Técnica mixta sobre madera',
    year: 2023,
    dimensions: '80 x 100 cm',
    imageUrl: shotImg
  },
  {
    id: 7,
    title: 'Silueta Grotesca',
    description: 'Un estudio sobre la deformación y reconfiguración del cuerpo humano. La obra desafía las nociones convencionales de belleza y forma, presentando una visión alternativa de la anatomía.',
    category: 'Grotesco',
    technique: 'Óleo y carboncillo',
    year: 2021,
    dimensions: '120 x 80 cm',
    imageUrl: ladyImg
  }
]; 