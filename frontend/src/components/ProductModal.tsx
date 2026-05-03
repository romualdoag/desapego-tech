import { useEffect, useState, type MouseEvent } from 'react';
import type { Product } from '../data/products';
import { X, ChevronLeft, ChevronRight, CheckCircle2, Info, Camera } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal = ({ product, onClose }: ProductModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (product) {
      setCurrentImageIndex(0);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [product]);

  if (!product) return null;

  const nextImage = (e: MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = (e: MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div 
        className="bg-white dark:bg-zinc-950 w-full max-w-5xl max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Gallery Section */}
        <div className="relative w-full md:w-3/5 bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center group overflow-hidden">
          {product.images.length > 0 ? (
            <>
              <img 
                src={`/images/${product.folder}/${product.images[currentImageIndex]}`} 
                alt={`${product.name} view ${currentImageIndex + 1}`}
                className="w-full h-full object-contain select-none transition-opacity duration-300"
              />
              
              {product.images.length > 1 && (
                <>
                  <button 
                    onClick={prevImage}
                    className="absolute left-4 p-2 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md text-zinc-900 dark:text-white transition-all opacity-0 group-hover:opacity-100"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button 
                    onClick={nextImage}
                    className="absolute right-4 p-2 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md text-zinc-900 dark:text-white transition-all opacity-0 group-hover:opacity-100"
                  >
                    <ChevronRight size={24} />
                  </button>
                  
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 px-3 py-1.5 rounded-full bg-black/20 backdrop-blur-md">
                    {product.images.map((_, i) => (
                      <div 
                        key={i} 
                        className={cn(
                          "w-1.5 h-1.5 rounded-full transition-all",
                          i === currentImageIndex ? "bg-white w-4" : "bg-white/40"
                        )}
                      />
                    ))}
                  </div>
                </>
              )}
            </>
          ) : (
            <div className="text-zinc-400 flex flex-col items-center">
              <Camera size={64} strokeWidth={1} />
              <p className="mt-2 font-medium">Sem fotos disponíveis</p>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="w-full md:w-2/5 p-6 md:p-10 overflow-y-auto flex flex-col border-l border-zinc-200 dark:border-zinc-800">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 leading-tight">
                {product.name}
              </h2>
              <div className="mt-2 inline-block px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold border border-blue-100 dark:border-blue-800/50">
                {product.price}
              </div>
            </div>
            <button 
              onClick={onClose}
              className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          <p className="text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
            {product.description}
          </p>

          <div className="space-y-8">
            <div>
              <h4 className="flex items-center text-sm font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-4">
                <Info size={16} className="mr-2" /> Especificações
              </h4>
              <ul className="grid grid-cols-1 gap-3">
                {product.specs.map((spec, i) => (
                  <li key={i} className="flex items-start text-zinc-700 dark:text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 shrink-0" />
                    <span className="text-sm font-medium">{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="flex items-center text-sm font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-4">
                <CheckCircle2 size={16} className="mr-2" /> O que acompanha
              </h4>
              <ul className="grid grid-cols-1 gap-3">
                {product.includedItems.map((item, i) => (
                  <li key={i} className="flex items-center text-zinc-700 dark:text-zinc-300">
                    <CheckCircle2 size={14} className="text-green-500 mr-3 shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-zinc-100 dark:border-zinc-800">
              <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800">
                <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wide mb-1">Estado</p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 italic">
                  "{product.condition}"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
