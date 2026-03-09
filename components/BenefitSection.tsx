import React from 'react'

interface BenefitSectionProps {
  number: number
  tag: string
  title: string
  body: React.ReactNode
  image: string | [string, string]
  imageLeft?: boolean
  minImageHeight?: number
}

export function BenefitSection({
  number,
  tag,
  title,
  body,
  image,
  imageLeft = false,
  minImageHeight = 400,
}: BenefitSectionProps) {
  const textBlock = (
    <div className="flex flex-col gap-6 py-10 shrink-0 w-[480px]">
      {/* Tag row */}
      <div className="flex items-center gap-2.5 pb-2.5 border-b-[1.5px] border-primary-500 font-sans font-medium text-lg text-primary-500 leading-[1.2]">
        <span className="shrink-0">{number}</span>
        <span className="flex-1">{tag}</span>
      </div>

      {/* Title + body */}
      <div className="flex flex-col gap-5">
        <h2 className="font-serif font-semibold text-[40px] leading-[1.1] text-primary-500 w-[446px]">
          {title}
        </h2>
        <div className="font-sans font-medium text-lg leading-[1.2] text-grey-900">{body}</div>
      </div>
    </div>
  )

  const imageBlock =
    typeof image === 'string' ? (
      <div className="flex-1 relative rounded-[4px] overflow-hidden" style={{ minHeight: minImageHeight }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover" />
      </div>
    ) : (
      <div className="flex-1 flex gap-2.5" style={{ minHeight: minImageHeight }}>
        <div className="flex-1 relative rounded-[4px] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image[0]} alt="" className="absolute inset-0 w-full h-full object-cover" />
        </div>
        <div className="flex-1 relative rounded-[4px] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image[1]} alt="" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>
    )

  return (
    <section className="flex items-center gap-16 w-full">
      {imageLeft ? (
        <>
          {imageBlock}
          {textBlock}
        </>
      ) : (
        <>
          {textBlock}
          {imageBlock}
        </>
      )}
    </section>
  )
}
