import type { CartItem } from '../data/cart'
import { ArrowRight, ShoppingBag, X } from 'lucide-react'

interface CartModalProps {
  cart: CartItem[]
  onClose: () => void
}

function CartModal({ cart, onClose }: CartModalProps) {
  const grandTotal = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  )

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-[#10231f]/75 p-4 backdrop-blur-sm" onClick={onClose}>
      <section role="dialog" aria-modal="true" aria-labelledby="cart-title" className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[4px] bg-[#f8f5ec] p-5 shadow-2xl sm:p-8" onClick={(event) => event.stopPropagation()}>
        <button type="button" className="absolute right-4 top-4 grid size-10 place-items-center rounded-full border border-[#18342d]/15 transition hover:bg-[#18342d] hover:text-white" onClick={onClose} aria-label="Close cart">
          <X size={18} />
        </button>
        <div className="mb-7 flex items-end justify-between border-b border-[#18342d]/15 pb-5 pr-12">
          <div>
            <p className="mb-2 text-[10px] font-extrabold tracking-[0.18em] text-[#e05240]">YOUR ORDER</p>
            <h2 id="cart-title" className="font-display text-4xl leading-none tracking-[-0.03em] text-[#18342d]">The good stuff.</h2>
          </div>
          <ShoppingBag className="mb-1 text-[#18342d]/40" size={24} />
        </div>

        {cart.length === 0 ? (
          <div className="grid justify-items-center py-10 text-center">
            <span className="mb-4 grid size-16 place-items-center rounded-full bg-[#e9eee4] text-[#18342d]">
              <ShoppingBag size={25} />
            </span>
            <p className="font-display text-2xl text-[#18342d]">Your cart is taking a breather.</p>
            <p className="mt-2 text-sm text-[#18342d]/60">Give it something delicious to carry.</p>
            <button type="button" onClick={onClose} className="mt-6 inline-flex items-center gap-2 rounded-[4px] bg-[#18342d] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#ef5948]">
              Browse the menu <ArrowRight size={16} />
            </button>
          </div>
        ) : (
          <>
            <div className="divide-y divide-[#18342d]/10">
              {cart.map((item) => (
                <div key={item.product.id} className="flex items-center gap-3 py-4 sm:gap-5">
                  <img src={item.product.image} alt="" className="size-16 shrink-0 rounded-[3px] object-cover sm:size-20" />
                  <div className="min-w-0 flex-1">
                    <h3 className="truncate font-display text-xl text-[#18342d]">{item.product.name}</h3>
                    <p className="mt-1 text-xs text-[#18342d]/55">৳{item.product.price.toFixed(2)} each · Qty {item.quantity}</p>
                  </div>
                  <p className="shrink-0 text-sm font-extrabold tabular-nums text-[#18342d]">৳{(item.product.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 flex items-end justify-between border-t border-[#18342d]/15 pt-5">
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#18342d]/60">Total</span>
              <span className="font-display text-3xl font-bold tabular-nums text-[#18342d]">৳{grandTotal.toFixed(2)}</span>
            </div>
            <button type="button" onClick={onClose} className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[4px] bg-[#18342d] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#ef5948]">
              Keep browsing <ArrowRight size={16} />
            </button>
          </>
        )}
      </section>
    </div>
  )
}

export default CartModal