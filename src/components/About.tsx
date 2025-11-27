import { Hammer } from 'lucide-react';

export default function About() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Dettaglio artigianale"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 border-2 border-amber-700 -z-10 hidden md:block"></div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <Hammer className="w-6 h-6 sm:w-8 sm:h-8 text-amber-700" strokeWidth={1.5} />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-stone-800">
                Chi Siamo
              </h2>
            </div>

            <div className="w-20 sm:w-24 h-1 bg-amber-700 mb-6 sm:mb-8"></div>

            <div className="space-y-4 sm:space-y-6 text-stone-700 font-light leading-relaxed text-base sm:text-lg">
              <p>
                <span className="font-normal text-amber-800">Da oltre trent'anni</span> realizziamo mobili artigianali su misura,
                unendo la maestria della tradizione italiana con l'attenzione per i dettagli che rende ogni pezzo unico.
              </p>

              <p>
                La nostra passione per il legno e per l'artigianato si riflette in ogni creazione:
                selezioniamo con cura i materiali, lavoriamo con tecniche tramandate di generazione in generazione
                e dedichiamo il tempo necessario per garantire la massima qualità.
              </p>

              <p>
                Che si tratti di un mobile classico o di una soluzione su misura per la vostra casa,
                il nostro obiettivo è sempre lo stesso: <span className="font-normal text-amber-800">creare arredi che durino nel tempo</span> e
                che raccontino una storia di passione e dedizione.
              </p>
            </div>

            <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-stone-300">
              <p className="text-sm sm:text-base text-stone-600 italic font-light">
                "Un mobile fatto a mano non è solo un oggetto, è un pezzo di storia che entra nella vostra casa."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
