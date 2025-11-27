import { MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Ciao! Sono ${formData.name}.\n\nEmail: ${formData.email}\nTelefono: ${formData.phone}\n\nMessaggio:\n${formData.message}`;
    const whatsappLink = `https://wa.me/393489550024?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-amber-100 mb-4 px-2">
            Contattaci via WhatsApp
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-base sm:text-lg text-stone-300 font-light max-w-2xl mx-auto leading-relaxed px-4">
            Per un preventivo gratuito e una consulenza personalizzata
          </p>
        </div>

        <div className="max-w-2xl mx-auto">

          <form onSubmit={handleSubmit} className="bg-stone-950 p-4 sm:p-6 md:p-8 border border-stone-800">
            <div className="mb-4 sm:mb-6">
              <label htmlFor="name" className="block text-xs sm:text-sm font-light text-stone-300 mb-2">
                Nome Completo
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-stone-900 border border-stone-700 text-sm sm:text-base text-stone-100 focus:outline-none focus:border-amber-600 transition-colors font-light placeholder:text-stone-600"
                placeholder="Il tuo nome"
              />
            </div>

            <div className="mb-4 sm:mb-6">
              <label htmlFor="email" className="block text-xs sm:text-sm font-light text-stone-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-stone-900 border border-stone-700 text-sm sm:text-base text-stone-100 focus:outline-none focus:border-amber-600 transition-colors font-light placeholder:text-stone-600"
                placeholder="tuo.email@example.com"
              />
            </div>

            <div className="mb-4 sm:mb-6">
              <label htmlFor="phone" className="block text-xs sm:text-sm font-light text-stone-300 mb-2">
                Telefono
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-stone-900 border border-stone-700 text-sm sm:text-base text-stone-100 focus:outline-none focus:border-amber-600 transition-colors font-light placeholder:text-stone-600"
                placeholder="+39 348 955 0024"
              />
            </div>

            <div className="mb-6 sm:mb-8">
              <label htmlFor="message" className="block text-xs sm:text-sm font-light text-stone-300 mb-2">
                Messaggio
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-stone-900 border border-stone-700 text-sm sm:text-base text-stone-100 focus:outline-none focus:border-amber-600 transition-colors font-light resize-none placeholder:text-stone-600"
                placeholder="Descrivi i tuoi desideri e il tuo stile di arredamento..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-amber-700 hover:bg-amber-800 text-white py-3 sm:py-4 text-sm sm:text-base font-light tracking-wider transition-all duration-300 border border-amber-600 hover:border-amber-500"
            >
              <span className="flex items-center justify-center gap-2">
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                Invia Messaggio WhatsApp
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
