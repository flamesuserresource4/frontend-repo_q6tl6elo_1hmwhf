import { ShoppingCart, Search, Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl shadow-[0_10px_40px_rgba(2,6,23,0.25)]">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-3">
              <button
                className="inline-flex lg:hidden items-center justify-center rounded-lg p-2 text-white/90 hover:text-white hover:bg-white/10 transition"
                onClick={() => setOpen(!open)}
                aria-label="Toggle menu"
              >
                <Menu className="h-6 w-6" />
              </button>
              <a href="/" className="inline-flex items-center gap-2">
                <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-[#7dd3fc] via-[#c4b5fd] to-[#fbcfe8] shadow-inner shadow-white/30" />
                <span className="text-xl font-semibold tracking-tight text-white">
                  PastelPay
                </span>
              </a>
            </div>

            <div className="hidden lg:flex items-center gap-8 text-white/80">
              <a href="#products" className="hover:text-white transition">Products</a>
              <a href="#features" className="hover:text-white transition">Features</a>
              <a href="#about" className="hover:text-white transition">About</a>
              <a href="#contact" className="hover:text-white transition">Contact</a>
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 text-white/80 ring-1 ring-white/15">
                <Search className="h-4 w-4" />
                <input
                  placeholder="Search cards, wallets..."
                  className="bg-transparent placeholder:text-white/60 text-sm focus:outline-none w-48"
                />
              </div>
              <button className="relative inline-flex items-center justify-center rounded-xl bg-white text-slate-900 px-3 py-2 font-medium shadow-lg shadow-black/10 hover:shadow-black/20 transition">
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">Cart</span>
                <span className="absolute -top-1 -right-1 h-5 min-w-[1.25rem] rounded-full bg-gradient-to-tr from-fuchsia-400 to-sky-300 text-[10px] font-bold text-slate-900 flex items-center justify-center px-1 border border-white">
                  2
                </span>
              </button>
            </div>
          </div>

          {open && (
            <div className="lg:hidden px-4 pb-4 text-white/80">
              <nav className="grid gap-2">
                <a href="#products" className="rounded-lg px-3 py-2 hover:bg-white/10">Products</a>
                <a href="#features" className="rounded-lg px-3 py-2 hover:bg-white/10">Features</a>
                <a href="#about" className="rounded-lg px-3 py-2 hover:bg-white/10">About</a>
                <a href="#contact" className="rounded-lg px-3 py-2 hover:bg-white/10">Contact</a>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
