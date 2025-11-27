import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

interface ProductModalProps {
  product: {
    name: string;
    description: string;
    gallery?: string[];
    image: string;
    price?: string;
    specifications?: {
      quantita?: string;
      altezza?: string;
      larghezza?: string;
      profondita?: string;
      materiale?: string;
      colore?: string;
    };
  };
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = product.gallery && product.gallery.length > 0
    ? product.gallery
    : [product.image];

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-2 sm:p-4" onClick={onClose}>
      <div className="relative max-w-6xl w-full bg-stone-900 rounded-lg overflow-hidden max-h-[95vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 p-2 bg-stone-800/80 hover:bg-stone-700 rounded-full transition-colors duration-200"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6 text-amber-100" />
        </button>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 p-4 sm:p-6 md:p-8">
          <div className="relative">
            <div className="aspect-square bg-stone-950 rounded-lg overflow-hidden border border-stone-800">
              <img
                src={images[currentImageIndex]}
                alt={`${product.name} - ${currentImageIndex + 1}`}
                className="w-full h-full object-contain"
              />
            </div>

            {images.length > 1 && (
              <>
                <button
                  onClick={previousImage}
                  className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 bg-stone-800/80 hover:bg-stone-700 rounded-full transition-colors duration-200"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-amber-100" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 bg-stone-800/80 hover:bg-stone-700 rounded-full transition-colors duration-200"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-amber-100" />
                </button>

                <div className="flex gap-2 mt-3 sm:mt-4 justify-center overflow-x-auto pb-2">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                        idx === currentImageIndex
                          ? 'border-amber-600 opacity-100'
                          : 'border-stone-700 opacity-50 hover:opacity-75'
                      }`}
                    >
                      <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-amber-100 mb-3 sm:mb-4">
              {product.name}
            </h2>
            <div className="w-12 sm:w-16 h-1 bg-amber-600 mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg text-stone-300 font-light leading-relaxed mb-4 sm:mb-6">
              {product.description}
            </p>

            {product.specifications && (
              <div className="bg-stone-950 border border-stone-800 rounded-lg p-4 sm:p-6 mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-serif text-amber-100 mb-3 sm:mb-4">Specifiche Tecniche</h3>
                <div className="space-y-3">
                  {product.specifications.quantita && (
                    <div className="flex justify-between border-b border-stone-800 pb-2">
                      <span className="text-sm sm:text-base text-stone-400">Quantità:</span>
                      <span className="text-sm sm:text-base text-amber-100">{product.specifications.quantita}</span>
                    </div>
                  )}
                  {product.specifications.altezza && (
                    <div className="flex justify-between border-b border-stone-800 pb-2">
                      <span className="text-sm sm:text-base text-stone-400">Altezza:</span>
                      <span className="text-sm sm:text-base text-amber-100">{product.specifications.altezza}</span>
                    </div>
                  )}
                  {product.specifications.larghezza && (
                    <div className="flex justify-between border-b border-stone-800 pb-2">
                      <span className="text-sm sm:text-base text-stone-400">Larghezza:</span>
                      <span className="text-sm sm:text-base text-amber-100">{product.specifications.larghezza}</span>
                    </div>
                  )}
                  {product.specifications.profondita && (
                    <div className="flex justify-between border-b border-stone-800 pb-2">
                      <span className="text-sm sm:text-base text-stone-400">Profondità:</span>
                      <span className="text-sm sm:text-base text-amber-100">{product.specifications.profondita}</span>
                    </div>
                  )}
                  {product.specifications.materiale && (
                    <div className="flex justify-between border-b border-stone-800 pb-2">
                      <span className="text-sm sm:text-base text-stone-400">Materiale:</span>
                      <span className="text-sm sm:text-base text-amber-100">{product.specifications.materiale}</span>
                    </div>
                  )}
                  {product.specifications.colore && (
                    <div className="flex justify-between pb-2">
                      <span className="text-sm sm:text-base text-stone-400">Colore:</span>
                      <span className="text-sm sm:text-base text-amber-100">{product.specifications.colore}</span>
                    </div>
                  )}
                </div>
                {product.price && (
                  <div className="mt-4 pt-4 border-t border-stone-800">
                    <div className="flex justify-between items-center">
                      <span className="text-base sm:text-lg text-stone-400">Prezzo:</span>
                      <span className="text-xl sm:text-2xl font-semibold text-amber-600">{product.price}</span>
                    </div>
                  </div>
                )}
              </div>
            )}

            <div className="text-stone-400 text-sm">
              <p className="mb-2">Per informazioni e disponibilità:</p>
              <p className="text-amber-100">Contattaci tramite il form sottostante</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
