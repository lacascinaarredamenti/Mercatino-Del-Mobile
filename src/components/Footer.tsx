import { Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-stone-900 text-stone-300 py-12 sm:py-14 md:py-16 overflow-hidden">
      <div
        className="absolute inset-0 opacity-5 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/sfondo-classico.png')",
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-10 md:mb-12">
          <div>
            <div className="mb-4">
              <img
                src="/images/LOGO-SITO.png"
                alt="Boutique del Mobile Logo"
                className="h-24 sm:h-28 md:h-32 w-auto object-contain"
              />
            </div>
            <p className="text-sm sm:text-base font-light leading-relaxed text-stone-400">
              Arredamento artigianale di qualità. Ogni mobile racconta una storia di passione e maestria italiana.
            </p>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-serif text-white mb-4 sm:mb-6">Contatti</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 mt-1 flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="text-sm sm:text-base font-light">348 955 0024</p>
                  <p className="text-xs sm:text-sm text-stone-500">Lun-Sab: 8:00 - 18:00</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 mt-1 flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="text-sm sm:text-base font-light">Italia</p>
                  <p className="text-xs sm:text-sm text-stone-500">Su appuntamento</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-serif text-white mb-4 sm:mb-6">Orari Boutique</h4>
            <div className="space-y-2 sm:space-y-3 text-sm sm:text-base font-light text-stone-400">
              <div className="flex justify-between">
                <span>Lunedì - Sabato</span>
                <span>8:00 - 18:00</span>
              </div>
              <div className="flex justify-between">
                <span>Domenica</span>
                <span>Chiuso</span>
              </div>
            </div>
            <p className="mt-4 sm:mt-6 text-xs sm:text-sm text-stone-500 italic">
              Prenotare un appuntamento per una consulenza personalizzata.
            </p>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-stone-800 text-center">
          <p className="text-stone-500 font-light text-xs sm:text-sm">
            © {new Date().getFullYear()} Boutique del Mobile. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  );
}
