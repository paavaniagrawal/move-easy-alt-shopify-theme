'use client'

import { useState } from 'react'
import { assets } from '@/lib/assets'
import { ReviewBadge } from './Stars'
import { PurchaseOption } from './PurchaseOption'

const thumbs = [
  assets.productThumb1,
  assets.productThumb2,
  assets.productThumb3,
  assets.productThumb4,
  assets.productThumb5,
]

const purchaseOptions = [
  {
    bottles: 1,
    weeks: 4,
    badge: 'Starter Pack',
    badgeVariant: 'blue' as const,
    price: 'Rs. 519',
    originalPrice: 'Rs. 675',
    savingPercent: 'Save 7%',
  },
  {
    bottles: 2,
    weeks: 8,
    badge: 'Starter Pack',
    badgeVariant: 'blue' as const,
    price: 'Rs. 519',
    originalPrice: 'Rs. 675',
    savingPercent: 'Save 7%',
  },
  {
    bottles: 3,
    weeks: 12,
    badge: 'Best Results',
    badgeVariant: 'yellow' as const,
    price: 'Rs. 519',
    originalPrice: 'Rs. 675',
    savingPercent: 'Save 15%',
  },
]

export function ProductSection() {
  const [selectedOption, setSelectedOption] = useState(0)
  const [activeThumb, setActiveThumb] = useState(0)

  const thumbImages = [assets.productMain, ...thumbs]

  return (
    <section className="w-full">
      {/* Centered CTA text */}
      <div className="flex flex-col items-center gap-5 px-[280px] py-10 text-center">
        <h2 className="font-serif font-semibold text-5xl leading-[1.1] text-primary-500">
          Joint support made easy with Move Easy
        </h2>
        <p className="font-sans font-medium text-xl leading-[1.2] text-grey-900">
          Your joints have been patient. Time to return the favour. Move Easy. Advanced joint
          support that actually does what it says — in one daily sachet.
        </p>
        <ReviewBadge />
      </div>

      {/* Product hero */}
      <div className="flex gap-24 items-start w-full">
        {/* Image gallery */}
        <div className="flex flex-col gap-3 shrink-0">
          {/* Main image */}
          <div className="w-[550px] h-[550px] relative rounded-[25px] border border-[rgba(18,18,18,0.15)] shadow-[1.436px_4.307px_8.614px_0px_rgba(0,0,0,0.05)] overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={thumbImages[activeThumb]}
              alt="Move Easy product"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex gap-3">
            {thumbImages.slice(0, 5).map((src, i) => (
              <button
                key={i}
                onClick={() => setActiveThumb(i)}
                className={`w-[90px] h-[90px] rounded-[4px] border overflow-hidden shrink-0 transition-all ${
                  activeThumb === i
                    ? 'border-primary-500 border-2'
                    : 'border-[rgba(18,18,18,0.15)]'
                } shadow-[0.235px_0.705px_1.41px_0px_rgba(0,0,0,0.05)]`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Purchase panel */}
        <div className="flex flex-col gap-2.5 flex-1">
          <h3 className="font-serif font-semibold text-[29px] leading-[1.4] text-[#121212]">
            Move Easy | Advanced Joint Support | Clinically Proven Ingredients
          </h3>

          <div className="flex flex-col gap-6">
            <p className="font-sans font-semibold text-xl text-[#121212]">Choose an Option:</p>

            <div className="flex flex-col gap-6">
              {purchaseOptions.map((option, i) => (
                <PurchaseOption
                  key={i}
                  {...option}
                  selected={selectedOption === i}
                  onClick={() => setSelectedOption(i)}
                />
              ))}
            </div>

            {/* Pricing */}
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1.5">
                <p className="font-sans font-medium text-xl text-[#121212]">Rs. 519</p>
                <p className="font-sans text-base text-[rgba(18,18,18,0.75)] line-through">Rs.620</p>
              </div>
              <p className="font-sans text-sm text-[rgba(18,18,18,0.7)]">
                (Taxes included &amp; free express shipping)
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex gap-3">
              <button className="flex-1 bg-primary-50 text-primary-500 font-sans font-medium text-lg px-6 py-4 rounded-pill flex items-center justify-center gap-1 hover:bg-primary-100 transition-colors">
                Add to Cart
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </button>
              <button className="flex-1 bg-primary-500 text-white font-sans font-medium text-lg px-6 py-4 rounded-pill hover:bg-primary-700 transition-colors">
                Buy Now
              </button>
            </div>

            <button className="w-full bg-beige-500 text-primary-500 font-sans font-medium text-lg px-6 py-4 rounded-pill flex items-center justify-center gap-2 hover:bg-beige-600 transition-colors">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.31h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6 6l1.02-.93a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Book an Expert Call
            </button>

            <p className="font-sans font-light text-sm text-[rgba(18,18,18,0.5)] text-center">
              Cash On Delivery Available.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
