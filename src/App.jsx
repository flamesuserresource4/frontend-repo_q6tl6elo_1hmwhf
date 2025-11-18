import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Products from './components/Products'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Features />
        <CTA />
        <footer id="contact" className="bg-white border-t border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-slate-600 text-sm">© {new Date().getFullYear()} PastelPay. All rights reserved.</p>
              <nav className="flex items-center gap-6 text-slate-700 text-sm">
                <a href="#" className="hover:opacity-80">Privacy</a>
                <a href="#" className="hover:opacity-80">Terms</a>
                <a href="#" className="hover:opacity-80">Support</a>
              </nav>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
