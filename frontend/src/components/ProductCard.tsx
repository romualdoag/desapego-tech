import type { FC } from 'react';
import type { Product } from '../data/products';
import { Camera } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

export const ProductCard: FC<ProductCardProps> = ({ product, onClick }) => {
  const mainImage = product.images.length > 0
    ? `${import.meta.env.BASE_URL}images/${product.folder}/${product.images[0]}`
    : null;

  return (
    <div
      className="group rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 flex flex-col cursor-pointer transition-all duration-300 hover:border-amber-500/30 hover:shadow-xl hover:shadow-amber-950/30"
      onClick={() => onClick(product)}
    >
      <div className="aspect-square overflow-hidden bg-zinc-800 relative">
        {mainImage ? (
          <img
            src={mainImage}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-zinc-700">
            <Camera size={40} strokeWidth={1.5} />
          </div>
        )}
      </div>

      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-display font-bold text-zinc-100 text-sm leading-snug mb-1.5 transition-colors group-hover:text-amber-400">
          {product.name}
        </h3>
        <p className="text-xs text-zinc-600 line-clamp-2 flex-1 leading-relaxed">
          {product.description}
        </p>

        <div className="mt-3 pt-3 border-t border-zinc-800 flex items-center justify-between gap-2">
          <div className="flex flex-col leading-tight">
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-amber-400 text-sm">{product.price}</span>
              {product.originalPrice && (
                <span className="font-display font-bold text-[10px] bg-amber-400 text-zinc-950 px-1.5 py-0.5 rounded">5% OFF</span>
              )}
            </div>
            {product.originalPrice && (
              <span className="text-zinc-700 text-[11px] line-through">{product.originalPrice}</span>
            )}
          </div>
          <span className="text-zinc-700 text-xs group-hover:text-zinc-400 transition-colors shrink-0">
            ver mais →
          </span>
        </div>
      </div>
    </div>
  );
};
