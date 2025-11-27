import { ChefHat, TreePine, Sparkles, Heart } from 'lucide-react';

const stats = [
  {
    icon: ChefHat,
    value: '500+',
    label: 'Mobili venduti in tutta Italia',
  },
  {
    icon: TreePine,
    value: '100%',
    label: 'Legno massello e artigianale',
  },
  {
    icon: Sparkles,
    value: 'Decennale',
    label: 'Esperienza nel design d\'interni',
  },
  {
    icon: Heart,
    value: 'Ovunque',
    label: 'Clienti soddisfatti in ogni regione',
  },
];

export default function Stats() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-stone-900 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/sfondo-statistiche.png')",
        }}
      ></div>
 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-3 sm:mb-4">
                  <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-amber-600" strokeWidth={1.5} />
                </div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-serif text-amber-100 mb-2">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm md:text-base text-stone-300 font-light tracking-wide">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
