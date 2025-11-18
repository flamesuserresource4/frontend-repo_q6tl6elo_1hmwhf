import { useEffect, useState } from 'react'
import { Star } from 'lucide-react'

const demoProducts = [
  {
    id: 'card-pro',
    title: 'Visa Card Pro',
    price: 129,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1633265486064-086b219458ec?q=80&w=1200&auto=format&fit=crop',
    badge: 'Bestseller',
  },
  {
    id: 'wallet-air',
    title: 'Wallet Air',
    price: 89,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?q=80&w=1200&auto=format&fit=crop',
    badge: 'New',
  },
  {
    id: 'vault-mini',
    title: 'Vault Mini Safe',
    price: 59,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1663851681021-f951c715a9bc?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxWYXVsdCUyME1pbmklMjBTYWZlfGVufDB8MHx8fDE3NjM0ODQwMTJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    badge: 'Trending',
  },
]

export default function Products(){
  const [items, setItems] = useState([])

  useEffect(() => {
    // In a full build, replace this with a backend call
    setItems(demoProducts)
  }, [])

  return (
    <section id="products" className="relative py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Featured products</h2>
            <p className="mt-2 text-slate-600">Curated picks to elevate your digital lifestyle</p>
          </div>
          <a href="#" className="text-slate-900 font-medium hover:opacity-80">View all</a>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(p => (
            <article key={p.id} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-shadow">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                {p.badge && (
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-900 shadow ring-1 ring-black/10">{p.badge}</span>
                )}
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star className="h-4 w-4 fill-amber-400" />
                    <span className="text-sm font-medium text-slate-700">{p.rating}</span>
                  </div>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <p className="text-xl font-bold">${'{'}p.price{'}'}</p>
                  <button className="rounded-xl bg-slate-900 px-4 py-2 text-white text-sm font-medium shadow hover:opacity-90">Add to cart</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
