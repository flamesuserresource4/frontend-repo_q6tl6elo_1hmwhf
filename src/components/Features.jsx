import { Shield, Sparkles, CreditCard, Truck } from 'lucide-react'

export default function Features(){
  const items = [
    {
      icon: Sparkles,
      title: 'Pastel-perfect UI',
      text: 'A soft, minimalist design language that feels modern and premium.',
    },
    {
      icon: CreditCard,
      title: 'Card-first shopping',
      text: 'Visa and debit products showcased with delightful motion and clarity.',
    },
    {
      icon: Shield,
      title: 'Bank‑grade security',
      text: 'Protected checkout with encrypted payments and tokenization built-in.',
    },
    {
      icon: Truck,
      title: 'Fast worldwide shipping',
      text: 'Reliable delivery partners with order tracking and insurance.',
    },
  ]

  return (
    <section id="features" className="relative py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Made for fintech e‑commerce</h2>
          <p className="mt-3 text-slate-600">Everything you need to merchandise digital banking products with confidence.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({icon:Icon,title,text}) => (
            <div key={title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg transition-shadow">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-sky-300 to-fuchsia-300 flex items-center justify-center text-slate-900">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
