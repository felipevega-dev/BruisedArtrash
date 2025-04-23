import { useState } from 'react';
import clownImg from '../assets/img/clown.jpg';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subject: 'consulta'
  });
  
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('submitting');
    
    // Simulación de envío (en producción, aquí iría la llamada a un API)
    setTimeout(() => {
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        message: '',
        subject: 'consulta'
      });
      
      // Reset after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 1500);
  };
  
  return (
    <div className="bg-shadow-black min-h-screen">
      {/* Ruido de fondo y textura */}
      <div className="absolute inset-0 bg-texture-noise opacity-10 mix-blend-overlay pointer-events-none"></div>
      
      {/* Banner superior decorativo */}
      <div className="w-full h-24 sm:h-32 md:h-48 relative overflow-hidden">
        <img 
          src={clownImg} 
          alt="Arte de BruisedArtrash" 
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-shadow-black/10 to-shadow-black"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-display text-toxic-orange hand-drawn tracking-wider z-10 transform -rotate-1">
            Contacto
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-shadow-black to-transparent"></div>
      </div>
      
      {/* Contenido principal */}
      <div className="container-custom py-12 relative">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <p className="text-flesh opacity-90 text-lg mb-4">¿Interesado en adquirir una obra o tienes alguna pregunta?</p>
            <p className="text-gray-blue mb-2">Contacta conmigo a través de este formulario o en mis redes sociales.</p>
            <div className="flex justify-center space-x-4 mt-4">
              <a href="#" className="text-toxic-orange hover:text-blood-red">
                <span className="sr-only">Instagram</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="#" className="text-toxic-orange hover:text-blood-red">
                <span className="sr-only">Twitter</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="bg-shadow-black border border-toxic-orange/20 rounded-lg shadow-lg p-6 md:p-8 relative">
            <div className="absolute inset-0 bg-texture-noise opacity-20 mix-blend-overlay pointer-events-none rounded-lg"></div>
            
            {submitStatus === 'success' ? (
              <div className="text-center py-10">
                <div className="text-toxic-orange text-5xl mb-4">¡Gracias!</div>
                <p className="text-flesh text-lg mb-4">Tu mensaje ha sido enviado correctamente.</p>
                <p className="text-gray-blue">Me pondré en contacto contigo lo antes posible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-toxic-orange mb-2">Nombre</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-shadow-black border border-blood-red/30 rounded-md py-3 px-4 text-flesh focus:outline-none focus:ring-2 focus:ring-toxic-orange focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-toxic-orange mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-shadow-black border border-blood-red/30 rounded-md py-3 px-4 text-flesh focus:outline-none focus:ring-2 focus:ring-toxic-orange focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-toxic-orange mb-2">Asunto</label>
                  <select 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-shadow-black border border-blood-red/30 rounded-md py-3 px-4 text-flesh focus:outline-none focus:ring-2 focus:ring-toxic-orange focus:border-transparent"
                  >
                    <option value="consulta">Consulta general</option>
                    <option value="compra">Compra de obra</option>
                    <option value="exposicion">Exposiciones</option>
                    <option value="colaboracion">Colaboración</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-toxic-orange mb-2">Mensaje</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-shadow-black border border-blood-red/30 rounded-md py-3 px-4 text-flesh focus:outline-none focus:ring-2 focus:ring-toxic-orange focus:border-transparent"
                  ></textarea>
                </div>
                
                <div className="text-center">
                  <button 
                    type="submit" 
                    disabled={submitStatus === 'submitting'}
                    className="bg-blood-red text-flesh border-2 border-flesh/10 py-3 px-8 rounded-md shadow-lg hover:bg-toxic-orange transition duration-300 ease-in-out inline-flex items-center space-x-2 hand-drawn"
                  >
                    {submitStatus === 'submitting' ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-flesh" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <span>Enviar Mensaje</span>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
          
          {/* Información adicional */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-shadow-black border border-toxic-orange/20 rounded-lg p-6 relative">
              <div className="absolute inset-0 bg-texture-noise opacity-20 mix-blend-overlay pointer-events-none rounded-lg"></div>
              <h3 className="text-toxic-orange text-xl mb-4 hand-drawn">Ubicación</h3>
              <p className="text-flesh mb-2">Estudio en Barcelona, España</p>
              <p className="text-gray-blue">Visitas al estudio con cita previa</p>
            </div>
            
            <div className="bg-shadow-black border border-toxic-orange/20 rounded-lg p-6 relative">
              <div className="absolute inset-0 bg-texture-noise opacity-20 mix-blend-overlay pointer-events-none rounded-lg"></div>
              <h3 className="text-toxic-orange text-xl mb-4 hand-drawn">Horario</h3>
              <p className="text-flesh mb-2">Respuesta en 24-48h hábiles</p>
              <p className="text-gray-blue">Consultas para adquisición de obras disponibles 24/7</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage; 