import { assets } from '@/lib/assets'
import { ReviewBadge } from './Stars'

export function HeroSection() {
  return (
    <section className="flex items-center gap-16 w-full">
      {/* Hero image */}
      <div className="flex-1 relative rounded-[4px] overflow-hidden min-h-[460px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={assets.heroImage}
          alt="Move Easy joint supplement"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Text content */}
      <div className="flex-1 flex flex-col gap-5 py-10">
        <h1 className="font-serif font-semibold text-5xl leading-[1.1] whitespace-pre-wrap">
          <span className="text-primary-500">6 reasons </span>
          <span className="text-grey-900">why {'\n'}your joints will love </span>
          <span className="text-primary-500">Move Easy</span>
        </h1>

        <p className="font-sans font-medium text-xl leading-[1.2] text-grey-900">
          Stiff knees. Aching after stairs. Waking up and needing a moment. Here&rsquo;s why Move
          Easy is the daily habit that actually helps — not just masks it.
        </p>

        <button className="self-start bg-primary-500 text-white font-sans font-medium text-lg px-6 py-4 rounded-pill hover:bg-primary-700 transition-colors">
          Shop Now
        </button>

        <ReviewBadge />
      </div>
    </section>
  )
}
