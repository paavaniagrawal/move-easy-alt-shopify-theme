interface PurchaseOptionProps {
  bottles: number
  weeks: number
  badge: string
  badgeVariant: 'blue' | 'yellow'
  price: string
  originalPrice: string
  savingPercent: string
  selected?: boolean
  onClick?: () => void
}

export function PurchaseOption({
  bottles,
  weeks,
  badge,
  badgeVariant,
  price,
  originalPrice,
  savingPercent,
  selected = false,
  onClick,
}: PurchaseOptionProps) {
  return (
    <div
      onClick={onClick}
      className={`relative border-[1.5px] rounded-card px-5 py-3.5 flex flex-col gap-2.5 cursor-pointer transition-colors w-full ${
        selected ? 'border-primary-500 bg-primary-50' : 'border-primary-100 bg-white'
      } shadow-[0.914px_2.741px_5.481px_0px_rgba(0,0,0,0.05)]`}
    >
      {/* Save badge (top right) */}
      <div className="absolute -top-4 right-4 bg-brand-green text-white font-sans font-medium text-sm px-4 py-1.5 rounded-pill">
        {savingPercent}
      </div>

      <div className="flex items-start justify-between h-full">
        {/* Left: product info */}
        <div className="flex flex-col gap-1">
          <p className="font-sans font-bold text-xl text-grey-900">{bottles} Bottle{bottles > 1 ? 's' : ''}</p>
          <p className="font-sans text-sm text-grey-900">{weeks} Week Pack</p>

          {/* Type badge */}
          <div
            className={`inline-flex items-center justify-center px-3 py-1 rounded-pill border text-sm font-sans font-medium ${
              badgeVariant === 'yellow'
                ? 'bg-brand-yellow border-brand-yellow-dark text-grey-900'
                : 'bg-primary-500 border-primary-700 text-white'
            }`}
          >
            {badge}
          </div>
        </div>

        {/* Right: pricing */}
        <div className="flex flex-col items-end justify-center gap-1">
          <p className="font-sans text-base leading-[1.2] text-grey-900">{price}</p>
          <p className="font-sans text-xs text-grey-700 line-through">{originalPrice}</p>
        </div>
      </div>
    </div>
  )
}
