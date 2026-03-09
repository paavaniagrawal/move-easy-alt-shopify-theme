import { stars } from '@/lib/assets'

export function Stars({ size = 20 }: { size?: number }) {
  return (
    <div className="flex items-center" style={{ gap: 1 }}>
      {stars.map((src, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img key={i} src={src} alt="" width={size} height={size} />
      ))}
    </div>
  )
}

export function ReviewBadge() {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <div className="flex items-center gap-1.5">
        <Stars />
        <p className="font-sans font-medium text-base text-[#121212]">
          <span className="text-primary-500">4.5</span> stars
        </p>
      </div>
      <span className="font-sans font-medium text-base text-[#121212]">•</span>
      <p className="font-sans font-medium text-base text-[#121212]">
        <span className="text-primary-500">51</span> reviews
      </p>
      <span className="font-sans font-medium text-base text-[#121212]">•</span>
      <p className="font-sans font-medium text-base text-[#121212]">
        <span className="text-primary-500">50,000+</span> customers
      </p>
    </div>
  )
}
