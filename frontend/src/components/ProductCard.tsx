import type { FC } from 'react';
import type { Product } from '../data/products';
import { Camera, ExternalLink } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

export const ProductCard: FC<ProductCardProps> = ({ product, onClick }) => {
  const mainImage = product.images.length > 0 
    ? `/images/${product.folder}/${product.images[0]}`
    : null;

  return (
    <div 
      className="group bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
      onClick={() => onClick(product)}
    >
      <div className="aspect-square overflow-hidden bg-zinc-100 dark:bg-zinc-800 relative">
        {mainImage ? (
          <img 
            src={mainImage} 
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-zinc-400">
            <Camera size={48} />
          </div>
        )}
        <div className="absolute top-4 right-4">
          <span className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium shadow-sm border border-zinc-200 dark:border-zinc-700">
            {product.price}
          </span>
        </div>
      </div>
      
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 line-clamp-2 mb-4">
          {product.description}
        </p>
        
        <div className="mt-auto flex items-center text-sm font-medium text-blue-600 dark:text-blue-400">
          Ver detalhes
          <ExternalLink size={14} className="ml-1.5 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-0.5" />
        </div>
      </div>
    </div>
  );
};
