import { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de envío del formulario
    console.log('Formulario enviado:', formData);
    // Resetear formulario o mostrar mensaje de éxito
  };
  
  return (
    <div className="bg-dirty-white py-16">
      <div className="container-custom">
        <h1 className="text-deep-black mb-8 text-center">
          <span className="text-coral">Contacta</span> con el artista
        </h1>
        
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-dark-green p-8 text-dirty-white relative">
              <div className="texture-overlay"></div>
              <div className="relative z-10">
                <h2 className="font-display text-2xl mb-6">Información de contacto</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <svg className="w-6 h-6 text-coral flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <h3 className="font-bold text-coral">Email</h3>
                      <p>contacto@bruisedartrash.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <svg className="w-6 h-6 text-coral flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <h3 className="font-bold text-coral">Ubicación</h3>
                      <p>Estudio de Arte, Barcelona, España</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <svg className="w-6 h-6 text-coral flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h3 className="font-bold text-coral">Horario</h3>
                      <p>Lunes a Viernes: 10:00 - 18:00</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h3 className="font-bold mb-4">Sígueme en redes sociales</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="text-dirty-white hover:text-coral">
                      <span className="sr-only">Instagram</span>
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                    <a href="#" className="text-dirty-white hover:text-coral">
                      <span className="sr-only">Twitter</span>
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="font-display text-2xl mb-6 text-deep-black">Envíame un mensaje</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-deep-black mb-1">Nombre</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-blue rounded-md focus:outline-none focus:ring-2 focus:ring-coral"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-deep-black mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-blue rounded-md focus:outline-none focus:ring-2 focus:ring-coral"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-deep-black mb-1">Asunto</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-blue rounded-md focus:outline-none focus:ring-2 focus:ring-coral"
                    required
                  >
                    <option value="">Selecciona un asunto</option>
                    <option value="compra">Compra de obra</option>
                    <option value="exposicion">Propuesta de exposición</option>
                    <option value="colaboracion">Colaboración</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-deep-black mb-1">Mensaje</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-blue rounded-md focus:outline-none focus:ring-2 focus:ring-coral"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="btn-primary w-full"
                >
                  Enviar mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage; 