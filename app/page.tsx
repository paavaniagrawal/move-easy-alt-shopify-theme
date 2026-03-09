import { Navbar } from '@/components/Navbar'
import { HeroSection } from '@/components/HeroSection'
import { BenefitSection } from '@/components/BenefitSection'
import { ClinicalStats } from '@/components/ClinicalStats'
import { MITCertification } from '@/components/MITCertification'
import { ProductSection } from '@/components/ProductSection'
import { FAQSection } from '@/components/FAQSection'
import { Footer } from '@/components/Footer'
import { assets } from '@/lib/assets'

export default function Home() {
  return (
    <div className="bg-beige-50 flex flex-col items-start w-full">
      <Navbar />

      {/* Main content */}
      <main className="flex flex-col gap-[100px] items-center w-full pt-[100px] px-16 pb-0 bg-beige-50 overflow-clip">
        {/* Alt Hero */}
        <HeroSection />

        {/* Benefit 1: Triple Action Mechanism */}
        <BenefitSection
          number={1}
          tag="TRIPLE ACTION MECHANISM"
          title="Not just one mechanism, but three"
          body={
            <>
              <p className="mb-4">
                Most joint supplements pick one lane: inflammation or bones or muscles. Move Easy
                targets all three simultaneously.
              </p>
              <p>
                Aflapin® Boswellia tackles the inflammation driving your discomfort. Calcium,
                vitamin D, and K2-7 work together to maintain bone strength. Magnesium supports
                muscle recovery and function around the joint. One sachet. One complete system.
              </p>
            </>
          }
          image={assets.benefit1Image}
        />

        {/* Benefit 2: Ayurveda-backed */}
        <BenefitSection
          number={2}
          tag="AYURVEDA-BACKED"
          title="Backed by Ayurvedic wisdom"
          body={
            <>
              <p className="mb-4">
                Boswellia serrata isn&rsquo;t a trend, it&rsquo;s been a cornerstone of Ayurvedic
                joint care for centuries. Ayurvedic practitioners have long relied on it to reduce
                inflammation and restore mobility. We sustainably source ours from select forests in
                India, harvesting only what the ecosystem can naturally replenish.
              </p>
              <p>
                Move Easy takes this time-tested botanical and standardises it into Aflapin®, its
                most bioavailable, clinically studied form. Ancient wisdom, modern delivery.
              </p>
            </>
          }
          image={assets.benefit2Image}
          imageLeft
        />

        {/* Benefit 3: Clinically proven + Clinical Stats */}
        <div className="flex flex-col gap-[60px] items-start w-full">
          <BenefitSection
            number={3}
            tag="CLINICALLY-PROVEN INGREDIENTS"
            title="4 human clinical trials say it works"
            body={
              <>
                <p className="mb-4">
                  Aflapin®, Move Easy&rsquo;s hero ingredient, is proven across 4 published human
                  clinical trials – not just promising, but validated. As a patented Boswellia
                  extract, it&rsquo;s formulated to deliver 52% greater bioavailability than
                  conventional Boswellia, so more of what matters actually reaches your joints.
                </p>
                <p>
                  Before any batch reaches you, it undergoes independent third-party testing at
                  NSF-certified, GMP-compliant facilities verified for heavy metals, contaminants,
                  and label accuracy.
                </p>
              </>
            }
            image={assets.benefit3Image}
            minImageHeight={500}
          />
          <ClinicalStats />
        </div>

        {/* Benefit 4: Consumer-backed */}
        <BenefitSection
          number={4}
          tag="CONSUMER-BACKED"
          title="Trusted by 50,000+ customers"
          body={
            <>
              <p className="mb-4">
                Move Easy isn&rsquo;t just popular with consumers — it&rsquo;s recommended by
                healthcare professionals and physiotherapists who see joint recovery up close.
              </p>
              <p>
                Over <strong>50,000</strong> people across India have made it part of their daily
                routine. Not because of clever marketing, but because of consistent results they can
                feel.
              </p>
            </>
          }
          image={[assets.benefit4ImageA, assets.benefit4ImageB]}
          imageLeft
        />

        {/* Benefit 5: Easy to use */}
        <BenefitSection
          number={5}
          tag="EASY TO USE"
          title="One sachet. That's it. (Seriously.)"
          body={
            <p>
              No pills. No mixing. No complicated routines. Just tear the sachet, pour the
              mouth-melting powder onto your tongue, and let it dissolve. Take it once or twice
              daily after a meal or light snack, and you&rsquo;ve got your joints covered for the
              day. The easiest health habit you&rsquo;ll ever build.
            </p>
          }
          image={assets.benefit5Image}
        />

        {/* Benefit 6: Clean ingredients */}
        <BenefitSection
          number={6}
          tag="CLEAN INGREDIENTS"
          title="Zero sugar. No nasties. Just clean, functional ingredients."
          body={
            <>
              <p className="mb-4">
                Move Easy is zero sugar, zero artificial sweeteners, and zero artificial flavours,
                making it safe for diabetics and anyone who&rsquo;s careful about what goes in.
              </p>
              <p>
                The natural sweetness comes from chicory root fibre (inulin), which does double
                duty: it tastes good and supports nutrient absorption so your body actually uses
                what you&rsquo;re taking.
              </p>
            </>
          }
          image={assets.benefit6Image}
          imageLeft
        />

        {/* Benefit 7: Clinically tested + MIT */}
        <BenefitSection
          number={7}
          tag="CLINICALLY TESTED"
          title={`Clinically tested.\nMIT incubated.`}
          body={
            <>
              <p className="mb-4">
                Move Easy was developed by an IIT Delhi-trained scientist and incubated at MIT.
              </p>
              <p>Every ingredient, every dose, every formulation decision is grounded in evidence.</p>
            </>
          }
          image={[assets.benefit7ImageA, assets.benefit7ImageB]}
        />

        {/* MIT Certification card */}
        <div className="relative w-full">
          <MITCertification />
        </div>

        {/* Product purchase section */}
        <ProductSection />
      </main>

      {/* Reviews screenshot (full width) */}
      <div className="w-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={assets.reviewsScreenshot}
          alt="Customer reviews"
          className="w-full object-cover"
        />
      </div>

      {/* FAQ */}
      <FAQSection />

      {/* Footer */}
      <Footer />
    </div>
  )
}
