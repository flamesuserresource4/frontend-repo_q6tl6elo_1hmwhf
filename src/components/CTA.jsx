export default function CTA(){
  return (
    <section className="relative py-20 bg-gradient-to-br from-sky-50 via-fuchsia-50 to-purple-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white/70 backdrop-blur p-8 sm:p-12 text-center shadow-[0_10px_40px_rgba(2,6,23,0.08)]">
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">Join 50k+ shoppers building their perfect wallet</h3>
          <p className="mt-3 text-slate-600">Get early access to drops, rewards, and member-only pricing.</p>
          <form className="mt-6 flex max-w-lg mx-auto gap-3">
            <input className="flex-1 rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10" placeholder="Enter your email" />
            <button className="rounded-xl bg-slate-900 px-5 py-3 text-white font-medium hover:opacity-90">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  )
}
