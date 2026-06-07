import { useEffect, useState, type MouseEvent } from 'react';
import type { Product } from '../data/products';
import { X, ChevronLeft, ChevronRight, CheckCircle2, Info, Camera, MessageCircle, ExternalLink } from 'lucide-react';
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

  // Encoded phone number to avoid simple scraping
  // +5527998114153 -> Base64
  const encodedPhone = "NTUyNzk5ODExNDE1Mw==";

  const handleWhatsAppContact = () => {
    if (!product) return;
    const phone = atob(encodedPhone);
    const message = encodeURIComponent(`Olá! Tenho interesse no ${product.name} do seu catálogo.`);
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-zinc-950 w-full max-w-5xl max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row animate-in zoom-in-95 duration-200 border border-zinc-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Gallery */}
        <div className="relative w-full md:w-3/5 bg-zinc-900 flex items-center justify-center group overflow-hidden min-h-64 md:min-h-0">
          {product.images.length > 0 ? (
            <>
              <img
                src={`${import.meta.env.BASE_URL}images/${product.folder}/${product.images[currentImageIndex]}`}
                alt={`${product.name} — foto ${currentImageIndex + 1}`}
                className="w-full h-full object-contain select-none transition-opacity duration-200"
              />

              {product.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-3 p-2 rounded-full bg-black/30 hover:bg-black/60 backdrop-blur text-white transition-all opacity-0 group-hover:opacity-100"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-3 p-2 rounded-full bg-black/30 hover:bg-black/60 backdrop-blur text-white transition-all opacity-0 group-hover:opacity-100"
                  >
                    <ChevronRight size={20} />
                  </button>

                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 px-3 py-1.5 rounded-full bg-black/30 backdrop-blur">
                    {product.images.map((_, i) => (
                      <div
                        key={i}
                        className={cn(
                          'h-1.5 rounded-full transition-all duration-300',
                          i === currentImageIndex ? 'bg-amber-400 w-4' : 'bg-zinc-600 w-1.5'
                        )}
                      />
                    ))}
                  </div>
                </>
              )}
            </>
          ) : (
            <div className="text-zinc-700 flex flex-col items-center gap-2">
              <Camera size={56} strokeWidth={1} />
              <p className="text-sm">Sem fotos</p>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="w-full md:w-2/5 p-7 md:p-10 overflow-y-auto flex flex-col border-l border-zinc-800">
          <div className="flex justify-between items-start mb-5">
            <div className="flex-1 pr-4">
              <h2 className="font-display text-2xl font-bold text-zinc-50 leading-tight">
                {product.name}
              </h2>
              <div className="mt-2 flex items-center gap-3">
                <span className="font-display font-bold text-amber-400 text-xl">{product.price}</span>
                {product.originalPrice && (
                  <>
                    <span className="text-zinc-600 text-sm line-through">{product.originalPrice}</span>
                    <span className="font-display font-bold text-xs bg-amber-400 text-zinc-950 px-2 py-0.5 rounded">5% OFF</span>
                  </>
                )}
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-zinc-800 text-zinc-600 hover:text-zinc-300 transition-colors shrink-0"
            >
              <X size={18} />
            </button>
          </div>

          <p className="text-zinc-500 text-sm mb-8 leading-relaxed">
            {product.description}
          </p>

          <div className="space-y-7 flex-1">
            <div>
              <h4 className="flex items-center gap-2 text-xs font-display font-bold uppercase tracking-widest text-zinc-600 mb-3">
                <Info size={11} /> Especificações
              </h4>
              <ul className="space-y-2">
                {product.specs.map((spec, i) => (
                  <li key={i} className="flex items-start text-zinc-300">
                    <span className="w-1 h-1 rounded-full bg-amber-400 mt-[7px] mr-3 shrink-0" />
                    <span className="text-sm leading-snug">{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="flex items-center gap-2 text-xs font-display font-bold uppercase tracking-widest text-zinc-600 mb-3">
                <CheckCircle2 size={11} /> O que acompanha
              </h4>
              <ul className="space-y-2">
                {product.includedItems.map((item, i) => (
                  <li key={i} className="flex items-center text-zinc-300">
                    <CheckCircle2 size={13} className="text-green-500 mr-3 shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800">
              <p className="text-xs font-display font-bold text-zinc-600 uppercase tracking-wider mb-1.5">Estado</p>
              <p className="text-sm text-zinc-400 italic leading-relaxed">"{product.condition}"</p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-zinc-800 flex flex-col gap-3">
            <button
              onClick={handleWhatsAppContact}
              className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-display font-bold py-4 px-6 rounded-2xl transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg"
            >
              <MessageCircle size={18} />
              Tenho Interesse via WhatsApp
            </button>
            {product.mercadoLivreUrl && (
              <a
                href={product.mercadoLivreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-amber-500/40 text-zinc-300 hover:text-amber-400 font-display font-bold py-3.5 px-6 rounded-2xl transition-all text-sm"
              >
                <ExternalLink size={15} />
                Ver anúncio no Mercado Livre
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
