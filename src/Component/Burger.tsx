import { useState } from 'react'
import { ArrowDownRight, ArrowRight, Flame, Menu, ShoppingBag, X } from 'lucide-react'
import heroImage from '../assets/ultimate-bacon.jpg'
import ProductGrid from './ProductGrid'
import CartModal from './CartModal'
import type { Product } from '../data/products'
import type { CartItem } from '../data/cart'

function Burger() {
  const [cart, setCart] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const addToCart = (product: Product, quantity: number) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.product.id === product.id)

      if (existingItem) {
        return prevCart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }

      return [...prevCart, { product, quantity }]
    })
  }

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0)

  return (
    <div id="top" className="min-h-svh overflow-hidden bg-[#f8f5ec] text-[#18342d]">
      <header className="sticky top-0 z-40 border-b border-[#18342d]/10 bg-[#f8f5ec]/95 backdrop-blur">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
          <a href="#top" className="flex items-center gap-2.5" aria-label="Tasty Burger home">
            <span className="grid size-10 place-items-center rounded-full bg-[#ef5948] text-white">
              <Flame size={21} strokeWidth={2.3} />
            </span>
            <span className="leading-none">
              <span className="block text-[11px] font-extrabold tracking-[0.16em]">TASTY</span>
              <span className="mt-1 block text-[11px] font-extrabold tracking-[0.16em]">BURGER</span>
            </span>
          </a>

          <nav className="hidden items-center gap-9 md:flex" aria-label="Main navigation">
            <a className="text-sm font-semibold text-[#18342d]/70 transition hover:text-[#ef5948]" href="#menu">Our menu</a>
            <a className="text-sm font-semibold text-[#18342d]/70 transition hover:text-[#ef5948]" href="#about">Our story</a>
            <a className="text-sm font-semibold text-[#18342d]/70 transition hover:text-[#ef5948]" href="#contact">Find us</a>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              className="relative grid size-11 place-items-center rounded-full border border-[#18342d]/15 transition hover:border-[#18342d] hover:bg-white"
              aria-label={`Open cart, ${cartCount} ${cartCount === 1 ? 'item' : 'items'}`}
            >
              <ShoppingBag size={19} strokeWidth={1.8} />
              <span className="absolute -right-1 -top-1 grid min-w-5 place-items-center rounded-full bg-[#ef5948] px-1 text-[10px] font-bold leading-5 text-white">
                {cartCount}
              </span>
            </button>
            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              className="grid size-11 place-items-center rounded-full border border-[#18342d]/15 md:hidden"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <nav className="grid gap-1 border-t border-[#18342d]/10 px-5 py-3 md:hidden" aria-label="Mobile navigation">
            <a onClick={() => setIsMenuOpen(false)} className="rounded px-2 py-3 text-sm font-semibold" href="#menu">Our menu</a>
            <a onClick={() => setIsMenuOpen(false)} className="rounded px-2 py-3 text-sm font-semibold" href="#about">Our story</a>
            <a onClick={() => setIsMenuOpen(false)} className="rounded px-2 py-3 text-sm font-semibold" href="#contact">Find us</a>
          </nav>
        )}
      </header>

      <main>
        <section className="mx-auto grid max-w-7xl items-center gap-9 px-5 pb-12 pt-10 sm:px-8 sm:pb-16 sm:pt-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:px-12 lg:py-16">
          <div className="animate-[rise-in_700ms_ease-out_both]">
            <p className="mb-5 flex items-center gap-2 text-[11px] font-extrabold tracking-[0.2em] text-[#e05240] sm:text-xs">
              <span className="h-px w-7 bg-[#e05240]" /> BIG FLAVOR, NO SMALL BITES
            </p>
            <h1 className="max-w-[620px] font-display text-[clamp(3.2rem,7vw,6.4rem)] leading-[0.94] tracking-[-0.04em] text-[#18342d]">
              Burgers with <span className="italic text-[#e05240]">main-character</span> energy.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-[#18342d]/70 sm:text-lg sm:leading-8">
              Juicy patties, bold toppings, and sauces worth the extra napkin. Find your favorite in the lineup.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#menu" className="inline-flex min-h-12 items-center gap-3 rounded-[4px] bg-[#18342d] px-5 text-sm font-bold text-white transition hover:bg-[#294b40]">
                Explore the menu <ArrowRight size={17} />
              </a>
              <a href="#about" className="inline-flex min-h-12 items-center gap-2 px-2 text-sm font-bold text-[#18342d] transition hover:text-[#e05240]">
                What makes us tasty <ArrowDownRight size={17} />
              </a>
            </div>
            <div className="mt-10 flex items-center gap-3 border-t border-[#18342d]/15 pt-5">
              <div className="flex -space-x-2" aria-hidden="true">
                <span className="size-8 rounded-full border-2 border-[#f8f5ec] bg-[#e7a347]" />
                <span className="size-8 rounded-full border-2 border-[#f8f5ec] bg-[#78a184]" />
                <span className="size-8 rounded-full border-2 border-[#f8f5ec] bg-[#e36f58]" />
              </div>
              <p className="text-xs font-semibold text-[#18342d]/65">Four signature burgers. One tough choice.</p>
            </div>
          </div>

          <div className="relative animate-[rise-in_800ms_120ms_ease-out_both]">
            <div className="absolute -left-3 top-7 z-10 hidden -rotate-6 bg-[#f2bd4d] px-4 py-3 text-[10px] font-black tracking-[0.15em] text-[#18342d] sm:block">
              STACKED WITH JOY
            </div>
            <div className="overflow-hidden rounded-[4px] bg-[#080b12] shadow-[0_24px_60px_-30px_rgba(24,52,45,0.6)]">
              <img src={heroImage} alt="A towering burger layered with cheddar and bacon" className="aspect-[1.28] w-full object-cover" />
            </div>
            <div className="absolute -bottom-4 right-4 flex items-center gap-2 bg-[#f8f5ec] px-4 py-2 text-xs font-bold text-[#18342d] shadow-lg sm:right-7">
              <span className="size-2 rounded-full bg-[#e05240]" /> Fresh cravings start here
            </div>
          </div>
        </section>

        <div className="border-y border-[#18342d]/10 bg-[#e9eee4]">
          <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-[#18342d]/10 px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-8 lg:px-12">
            <div className="flex items-center gap-3 py-4 sm:py-5 sm:pr-6">
              <span className="font-display text-2xl italic text-[#e05240]">01</span>
              <span className="text-xs font-bold uppercase tracking-[0.12em]">Pick your craving</span>
            </div>
            <div className="flex items-center gap-3 py-4 sm:justify-center sm:py-5">
              <span className="font-display text-2xl italic text-[#e05240]">02</span>
              <span className="text-xs font-bold uppercase tracking-[0.12em]">Make it your own</span>
            </div>
            <div className="flex items-center gap-3 py-4 sm:justify-end sm:py-5 sm:pl-6">
              <span className="font-display text-2xl italic text-[#e05240]">03</span>
              <span className="text-xs font-bold uppercase tracking-[0.12em]">Dig right in</span>
            </div>
          </div>
        </div>

        <ProductGrid onAddToCart={addToCart} />

        <section id="about" className="scroll-mt-24 bg-[#18342d] text-[#f8f5ec]">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-16 lg:px-12">
            <div>
              <p className="mb-4 text-[11px] font-extrabold tracking-[0.2em] text-[#f2bd4d]">OUR KIND OF COMFORT FOOD</p>
              <h2 className="max-w-md font-display text-4xl leading-[1.04] tracking-[-0.03em] sm:text-5xl">The good stuff belongs between buns.</h2>
            </div>
            <div className="max-w-2xl border-l border-white/20 pl-5 sm:pl-8">
              <p className="text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
                We pile juicy patties, bold toppings, and irresistible sauces onto perfectly toasted buns. Cheesy, extra meaty, or something a little different: there is a burger for the mood.
              </p>
              <a href="#menu" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#f2bd4d] transition hover:text-white">
                Find your favorite <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="scroll-mt-24 bg-[#f8f5ec]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <a href="#top" className="flex items-center gap-2 text-xs font-extrabold tracking-[0.16em]">
            <Flame size={17} className="text-[#e05240]" /> TASTY BURGER
          </a>
          <p className="text-xs text-[#18342d]/55">Big flavor. No small bites.</p>
          <a href="#menu" className="text-xs font-bold text-[#18342d] transition hover:text-[#e05240]">Back to the menu ↑</a>
        </div>
      </footer>
      {isCartOpen && (
        <CartModal cart={cart} onClose={() => setIsCartOpen(false)} />
      )}
    </div>
  )
}

export default Burger