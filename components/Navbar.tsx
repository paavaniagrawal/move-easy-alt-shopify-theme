import { assets } from '@/lib/assets'
import { ReviewBadge } from './Stars'

export function Navbar() {
  return (
    <header className="bg-beige-500 h-20 flex items-center justify-between px-16 sticky top-0 z-50 w-full">
      {/* Logo */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={assets.logo} alt="Lightyears Health" className="h-11 w-auto object-contain" />

      {/* Social proof */}
      <ReviewBadge />

      {/* CTA */}
      <button className="bg-primary-500 text-white font-sans font-medium text-base px-5 py-3 rounded-pill hover:bg-primary-700 transition-colors">
        Shop Now
      </button>
    </header>
  )
}
