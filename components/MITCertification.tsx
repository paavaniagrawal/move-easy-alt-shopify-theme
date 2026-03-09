import { assets } from '@/lib/assets'

export function MITCertification() {
  return (
    <div className="bg-white rounded-card shadow-[1px_3px_12px_0px_rgba(0,0,0,0.15)] flex items-stretch overflow-hidden w-full h-[246px]">
      {/* Left: MIT logo + tagline */}
      <div className="flex flex-col gap-1 items-start py-5 pl-10 shrink-0 w-[256px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={assets.mitLogo} alt="MIT Legatum" className="h-[71px] w-auto object-contain" />
        <p className="font-sans text-xl leading-[1.2] text-black w-[216px]">
          Incubated at Massachusetts Institute of Technology (MIT).
        </p>
      </div>

      {/* Center: MIT banner */}
      <div className="flex-1 relative bg-[#003279] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={assets.mitBanner}
          alt="MIT campus"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Right: Stats card */}
      <div className="absolute right-[64px] top-1/2 -translate-y-1/2 w-[310px]">
        <div className="bg-[#e5f2ff] rounded-[18px] p-5">
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col gap-1">
              <p className="font-serif font-medium text-2xl text-black">3</p>
              <p className="font-serif text-base text-black leading-[1.2]">
                USFDA Vetted Facilities
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-serif font-medium text-2xl text-black">100+</p>
              <p className="font-serif text-base text-black leading-[1.2]">
                Years of Collective R&amp;D Experience
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-serif font-medium text-2xl text-black">70+</p>
              <p className="font-serif text-base text-black leading-[1.2]">
                Product Iterations &amp; Counting
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
