import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 pt-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/60 backdrop-blur px-3 py-1 text-xs font-semibold text-slate-800 ring-1 ring-black/5">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              Modern fintech commerce
            </div>
            <h1 className="mt-5 text-4xl sm:text-6xl font-bold tracking-tight text-slate-900 drop-shadow-[0_4px_30px_rgba(255,255,255,0.65)]">
              Fluid, pastel e‑commerce for digital banking brands
            </h1>
            <p className="mt-4 text-lg text-slate-700 max-w-xl">
              Showcase cards, wallets, and premium financial products in a minimalist store that feels effortless. Built for speed, clarity, and conversion.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#products" className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-white font-medium shadow-xl shadow-slate-900/20 hover:shadow-slate-900/30 transition">Shop the Collection</a>
              <a href="#features" className="inline-flex items-center justify-center rounded-xl bg-white/80 backdrop-blur px-5 py-3 text-slate-900 font-medium ring-1 ring-black/10 hover:bg-white transition">Explore Features</a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white" />
    </section>
  );
}
