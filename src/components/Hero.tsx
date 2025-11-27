import { Phone, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/sfondo-hero.png')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
      </div>

      <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
        <div className="mb-6 md:mb-8 flex justify-center">
          <img
            src="/images/LOGO-SITO.png"
            alt="Boutique del Mobile Logo"
            className="h-32 sm:h-40 md:h-56 lg:h-80 w-auto object-contain"
          />
        </div>
        <p className="text-xl sm:text-2xl md:text-3xl text-stone-200/70 font-light mb-4 md:mb-6 tracking-wide px-2">
          Eleganza, Artigianalità e Design Italiano
        </p>
        <p className="text-base sm:text-lg md:text-xl text-amber-50 font-light mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto px-2">
          Arreda la tua casa con mobili unici, realizzati con cura e materiali di pregio.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 mb-8 md:mb-12">
          <div className="flex items-center gap-3 text-white">
            <Phone className="w-6 h-6 text-amber-400" strokeWidth={2} />
            <div className="text-left">
              <p className="text-sm font-light text-amber-50">Chiama ora</p>
              <p className="text-xl sm:text-2xl font-semibold tracking-wide">348 955 0024</p>
            </div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-amber-400/30"></div>
          <div className="flex items-center gap-3 text-white">
            <Clock className="w-6 h-6 text-amber-400" strokeWidth={2} />
            <div className="text-left">
              <p className="text-sm font-light text-amber-50">Orari</p>
              <p className="text-base sm:text-lg font-light">Lun – Sab, 8:00 – 18:00</p>
            </div>
          </div>
        </div>

        <a
          href="#collezione"
          className="inline-block bg-amber-700 hover:bg-amber-800 text-white px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-light tracking-wider transition-all duration-300 border border-amber-600 hover:border-amber-500"
        >
          Scopri il Catalogo
        </a>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-stone-950 to-transparent"></div>
    </section>
  );
}
