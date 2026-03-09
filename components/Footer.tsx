import { assets } from '@/lib/assets'

const navLinks = [
  ['Produce', 'About Us', 'Recipes', 'Stories', 'Find in Store', 'Contact', 'Sell'],
  ['Join Us', 'Leadership', 'Terms of Services', 'Privacy Policy', 'Support'],
]

const socialIcons = [
  { src: assets.socialWhatsapp, label: 'WhatsApp' },
  { src: assets.socialLinkedin, label: 'LinkedIn' },
  { src: assets.socialTwitter, label: 'Twitter' },
  { src: assets.socialFacebook, label: 'Facebook' },
  { src: assets.socialYoutube, label: 'YouTube' },
  { src: assets.socialInstagram, label: 'Instagram' },
]

export function Footer() {
  return (
    <footer className="bg-primary-500 w-full">
      <div className="flex justify-between px-16 py-[100px]">
        {/* Left: newsletter + social */}
        <div className="flex flex-col gap-6 w-[340px]">
          {/* Logo (white) */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={assets.logo} alt="Lightyears Health" className="h-[51px] w-[160px] object-contain brightness-0 invert" />

          <h4 className="font-serif text-2xl leading-[1.5] text-white">
            Get the latest and tastiest
          </h4>

          {/* Email input */}
          <div className="flex items-center justify-between border border-[rgba(255,255,255,0.15)] rounded-card px-5 py-3.5 h-[60px]">
            <p className="font-sans text-lg text-[rgba(255,255,255,0.4)]">Email Address</p>
            <button className="w-8 h-8 shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={assets.footerEmailArrow} alt="Subscribe" className="w-full h-full" />
            </button>
          </div>

          <p className="font-sans text-sm leading-[1.5] text-white">
            Fresh updates on product launches, farm events, and so much more.
          </p>

          {/* Social icons */}
          <div className="flex gap-4 mt-2">
            {socialIcons.map((icon) => (
              <button key={icon.label} className="w-5 h-5 opacity-80 hover:opacity-100 transition-opacity">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={icon.src} alt={icon.label} className="w-full h-full" />
              </button>
            ))}
          </div>
        </div>

        {/* Center: nav links */}
        <div className="flex gap-16">
          {navLinks.map((col, i) => (
            <div key={i} className="flex flex-col gap-2.5">
              {col.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="font-sans text-xl leading-[1.5] text-white hover:text-primary-100 transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* Right: location */}
        <div className="flex flex-col gap-3">
          <p className="font-sans text-xl leading-[1.5] text-white">Location</p>
          <p className="font-sans text-base leading-[1.5] text-[rgba(255,255,255,0.75)]">
            151 W 26th St
            <br />
            12th Floor, New York
            <br />
            NY 10001
          </p>
          <div className="flex items-center gap-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={assets.locationPin} alt="" className="w-4 h-4" />
            <a href="#" className="font-sans text-base text-white hover:text-primary-100 transition-colors">
              View Location
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-300 flex items-center px-16 py-5">
        <p className="font-sans text-sm leading-[1.5] text-white flex-1">
          © 2024, Elevate Consumer India
        </p>
      </div>
    </footer>
  )
}
