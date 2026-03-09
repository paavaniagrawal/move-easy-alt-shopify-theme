'use client'

import { useState } from 'react'
import { assets } from '@/lib/assets'

const faqs = [
  {
    question: 'How is this different from regular multivitamins?',
    answer:
      'Move Easy is a targeted joint support formula, not a general multivitamin. It combines Aflapin® Boswellia (a clinically proven anti-inflammatory), Calcium + D3 + K2-7 for bone density, and Magnesium for muscle recovery — working as a complete joint system rather than a broad-spectrum supplement.',
  },
  {
    question: 'When should I expect results?',
    answer:
      'Clinical studies show statistically significant reductions in joint pain and stiffness within 7 days. Meaningful reductions in pain scores occur within 1 month, with measurable improvements in joint structure continuing at 6 months of consistent use.',
  },
  {
    question: 'Can I take this with other supplements?',
    answer:
      'Yes, Move Easy is formulated to be taken alongside other supplements. However, if you are on prescription medications — particularly blood thinners or corticosteroids — consult your doctor before starting.',
  },
  {
    question: 'When should I consume it?',
    answer:
      'Take 1–2 sachets daily after a meal or light snack. Pour the mouth-melting powder directly on your tongue and let it dissolve. No water required.',
  },
  {
    question: 'Is it safe for long-term use?',
    answer:
      'Yes. Move Easy uses clinically studied ingredients at validated doses. It is zero sugar, zero artificial sweeteners, and free from common allergens — making it safe for long-term daily use, including for diabetics.',
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-blue-light w-full px-16 py-[100px]">
      <div className="flex gap-[120px] items-start max-w-[1312px] mx-auto">
        {/* Left: headline */}
        <div className="flex flex-col gap-3 shrink-0">
          <h2 className="font-serif font-semibold text-[40px] leading-[1.2] text-[#121212] whitespace-pre">
            {`We're Serious About \nFacts. Ask Away.`}
          </h2>
          <p className="font-sans text-lg leading-[1.5] text-[#121212]">
            Can&rsquo;t find an answer to your question?
          </p>
          <button className="font-sans text-base text-[#121212] underline uppercase text-left hover:text-primary-500 transition-colors">
            Get In Touch
          </button>
        </div>

        {/* Right: accordion */}
        <div className="flex flex-col flex-1">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border-b border-grey-200"
            >
              <button
                className="w-full flex items-center justify-between py-5 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <p className="font-serif font-semibold text-xl leading-[1.5] text-[#121212] flex-1 pr-4">
                  {faq.question}
                </p>
                <div className="w-8 h-8 shrink-0 flex items-center justify-center">
                  {openIndex === i ? (
                    // Minus icon
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1b61bb" strokeWidth="2">
                      <path d="M5 12h14" />
                    </svg>
                  ) : (
                    // Plus icon from Figma
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={assets.accordionPlus} alt="" className="w-full h-full" />
                  )}
                </div>
              </button>

              {openIndex === i && (
                <div className="pb-5">
                  <p className="font-sans text-base leading-[1.5] text-[#121212]">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
