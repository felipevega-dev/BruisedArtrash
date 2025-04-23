import { useState, useEffect } from 'react';
import clownImg from '../assets/img/clown.jpg';

const ContactPage = () => {
  // Estado para gestionar el formulario
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
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
  
  // Handler para cambios en los inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Limpiar errores cuando el usuario escribe
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
  };
  
  // Validar formulario
  const validateForm = () => {
    const errors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      errors.name = 'El nombre es obligatorio';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'El email es obligatorio';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Introduce un email válido';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'El mensaje es obligatorio';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  // Handler para enviar el formulario
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulación de API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        
        // Resetear formulario después de un tiempo
        setTimeout(() => {
          setSubmitSuccess(false);
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
          });
        }, 5000);
      }, 1500);
    }
  };
  
  return (
    <div className="bg-shadow-black min-h-screen pb-20 relative">
      {/* Textura de fondo */}
      <div className="absolute inset-0 bg-texture-noise opacity-20 mix-blend-overlay pointer-events-none"></div>
      
      {/* Imagen de fondo con efecto */}
      <div className="absolute top-0 left-0 w-full h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-shadow-black/90 via-shadow-black to-shadow-black"></div>
        <img 
          src={clownImg} 
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
            <span className="text-toxic-orange hand-drawn">Contacto</span>
          </h1>
          
          <p className="text-gray-blue text-center max-w-2xl mx-auto mb-12">
            ¿Interesado en adquirir una obra, colaborar en un proyecto o simplemente compartir impresiones sobre mi trabajo? No dudes en contactarme.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Columna del formulario */}
          <div className={`transition-all duration-1000 delay-300 transform ${animateElements ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
            <div className="bg-shadow-black/70 backdrop-blur-sm border border-toxic-orange/20 p-8 rounded-lg shadow-lg relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blood-red via-toxic-orange to-blood-red"></div>
              
              {submitSuccess ? (
                <div className="text-center py-10 animate-custom-fade-in">
                  <div className="text-5xl mb-6">✓</div>
                  <h3 className="text-toxic-orange text-2xl mb-4 font-display">¡Mensaje Enviado!</h3>
                  <p className="text-flesh">Gracias por contactarme. Te responderé lo antes posible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-flesh text-sm">Nombre</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full bg-shadow-black border ${formErrors.name ? 'border-blood-red' : 'border-toxic-orange/30'} focus:border-toxic-orange focus:ring-1 focus:ring-toxic-orange/50 rounded px-4 py-2 text-flesh transition-colors duration-300`}
                      placeholder="Tu nombre"
                    />
                    {formErrors.name && (
                      <p className="text-blood-red text-xs mt-1 animate-fadeIn">{formErrors.name}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-flesh text-sm">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full bg-shadow-black border ${formErrors.email ? 'border-blood-red' : 'border-toxic-orange/30'} focus:border-toxic-orange focus:ring-1 focus:ring-toxic-orange/50 rounded px-4 py-2 text-flesh transition-colors duration-300`}
                      placeholder="tu@email.com"
                    />
                    {formErrors.email && (
                      <p className="text-blood-red text-xs mt-1 animate-fadeIn">{formErrors.email}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="block text-flesh text-sm">Asunto</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-shadow-black border border-toxic-orange/30 focus:border-toxic-orange focus:ring-1 focus:ring-toxic-orange/50 rounded px-4 py-2 text-flesh transition-colors duration-300"
                      placeholder="Motivo de contacto"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-flesh text-sm">Mensaje</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className={`w-full bg-shadow-black border ${formErrors.message ? 'border-blood-red' : 'border-toxic-orange/30'} focus:border-toxic-orange focus:ring-1 focus:ring-toxic-orange/50 rounded px-4 py-2 text-flesh resize-none transition-colors duration-300`}
                      placeholder="Tu mensaje..."
                    ></textarea>
                    {formErrors.message && (
                      <p className="text-blood-red text-xs mt-1 animate-fadeIn">{formErrors.message}</p>
                    )}
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blood-red text-flesh py-3 font-bold rounded hover:bg-toxic-orange transition-colors duration-300 relative overflow-hidden hover:shadow-lg transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-flesh" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Enviando...
                      </span>
                    ) : "Enviar Mensaje"}
                  </button>
                </form>
              )}
            </div>
          </div>
          
          {/* Columna de info de contacto */}
          <div className={`transition-all duration-1000 delay-500 transform ${animateElements ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
            <div className="space-y-10">
              {/* Información de contacto */}
              <div className="animate-on-scroll opacity-0 bg-shadow-black/70 backdrop-blur-sm border border-toxic-orange/20 p-8 rounded-lg shadow-lg">
                <h3 className="text-toxic-orange font-display text-2xl mb-6 hand-drawn">Información de Contacto</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blood-red/20 p-3 rounded-full">
                      <svg className="w-6 h-6 text-toxic-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-flesh font-bold">Email</h4>
                      <p className="text-gray-blue">contacto@bruisedartrash.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-blood-red/20 p-3 rounded-full">
                      <svg className="w-6 h-6 text-toxic-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-flesh font-bold">Estudio</h4>
                      <p className="text-gray-blue">Barcelona, España</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-blood-red/20 p-3 rounded-full">
                      <svg className="w-6 h-6 text-toxic-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-flesh font-bold">Horario</h4>
                      <p className="text-gray-blue">Lunes a Viernes: 10am - 7pm</p>
                      <p className="text-gray-blue">Fines de semana: Solo con cita previa</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Redes sociales */}
              <div className="animate-on-scroll opacity-0 bg-shadow-black/70 backdrop-blur-sm border border-toxic-orange/20 p-8 rounded-lg shadow-lg">
                <h3 className="text-toxic-orange font-display text-2xl mb-6 hand-drawn">Sígueme</h3>
                
                <div className="flex space-x-4">
                  <a href="#" className="bg-shadow-black border border-blood-red/30 p-3 rounded-full text-toxic-orange hover:bg-blood-red/10 transition-colors duration-300 hover:scale-110 transform">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  
                  <a href="#" className="bg-shadow-black border border-blood-red/30 p-3 rounded-full text-toxic-orange hover:bg-blood-red/10 transition-colors duration-300 hover:scale-110 transform">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  
                  <a href="#" className="bg-shadow-black border border-blood-red/30 p-3 rounded-full text-toxic-orange hover:bg-blood-red/10 transition-colors duration-300 hover:scale-110 transform">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                    </svg>
                  </a>
                  
                  <a href="#" className="bg-shadow-black border border-blood-red/30 p-3 rounded-full text-toxic-orange hover:bg-blood-red/10 transition-colors duration-300 hover:scale-110 transform">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage; 