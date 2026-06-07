import { useState } from 'react';
import { products, type Product } from './data/products';
import { ProductCard } from './components/ProductCard';
import { ProductModal } from './components/ProductModal';
import { Search, Sparkles, Info } from 'lucide-react';

function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(product =>
    !product.sold && (
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-zinc-950/90 backdrop-blur-xl border-b border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <span className="font-display text-amber-400 text-lg select-none leading-none">✦</span>
              <h1 className="font-display text-[15px] font-bold tracking-tight text-zinc-100">
                Desapego Tech
                <span className="text-zinc-600 font-normal ml-2 text-sm">— do Mumu</span>
              </h1>
            </div>

            <div className="relative hidden sm:block w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-600" size={14} />
              <input
                type="text"
                placeholder="Buscar produtos..."
                className="w-full pl-9 pr-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full text-sm text-zinc-200 placeholder-zinc-600 outline-none focus:border-amber-500/40 transition-colors"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-5 sm:px-8 py-14">
        {/* Info Banner */}
        <div className="mb-14 rounded-2xl p-5 bg-zinc-900 border border-zinc-800/80 flex gap-4">
          <div className="shrink-0 text-amber-400 mt-0.5">
            <Info size={17} />
          </div>
          <div className="text-sm text-zinc-500 leading-relaxed space-y-1.5">
            <p>
              <strong className="text-zinc-300 font-medium">Parcelamento no cartão:</strong>{' '}
              Parcela mínima de <strong className="text-zinc-300 font-medium">R$ 1.000</strong>. Acréscimo de aprox.{' '}
              <strong className="text-zinc-300 font-medium">14%</strong> (12x) ou{' '}
              <strong className="text-zinc-300 font-medium">3,5%</strong> (crédito à vista).
            </p>
            <p>
              <strong className="text-zinc-300 font-medium">Envio:</strong>{' '}
              Pelo{' '}
              <a
                href="https://melhorenvio.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300 hover:underline transition-colors"
              >
                Melhor Envio
              </a>
              . CEP de origem: <strong className="text-zinc-300 font-medium">29060974</strong>.
            </p>
          </div>
        </div>

        {/* Hero */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-display font-bold uppercase tracking-widest mb-7">
            <Sparkles size={11} />
            Curadoria exclusiva
          </div>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[0.92] tracking-tighter text-zinc-50 mb-5">
            Desapegos<br />
            <span className="text-amber-400">do Mumu</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-500 max-w-lg leading-relaxed">
            Eletrônicos de alto padrão com procedência garantida.
            Adquiridos novos, extremamente bem cuidados.
          </p>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={setSelectedProduct}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <p className="text-zinc-600 text-base">Nenhum produto encontrado.</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800/50 py-12 mt-4">
        <div className="max-w-7xl mx-auto px-5 text-center">
          <span className="font-display text-amber-400 text-base select-none">✦</span>
          <p className="mt-2 text-zinc-700 text-sm">
            © {new Date().getFullYear()} Desapego Tech · Todos os itens são de uso pessoal, adquiridos novos.
          </p>
        </div>
      </footer>

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}

export default App;
