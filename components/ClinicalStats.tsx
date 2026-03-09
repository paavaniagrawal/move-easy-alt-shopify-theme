const stats = [
  {
    value: '7 days',
    description: 'Statistically significant reduction in joint pain and stiffness within 7 days of use',
  },
  {
    value: '56%',
    description: 'Reduction in pain scores after 1 month of consistent daily use',
  },
  {
    value: '70%',
    description:
      'Measurable improvements in joint space width and cartilage thickness with continued use at 6 months',
  },
]

export function ClinicalStats() {
  return (
    <div className="flex flex-col gap-5 items-center w-full">
      <div className="flex flex-col gap-2.5 items-center text-center">
        <h3 className="font-serif font-semibold text-[34px] leading-[1.1] text-primary-500">
          Real users, real trials
        </h3>
        <p className="font-sans font-medium text-lg leading-[1.2] text-grey-900 max-w-2xl">
          All results below are from clinical studies on Aflapin® at 100 mg — the dose in 2 daily
          sachets of Move Easy.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6 w-full">
        {stats.map((stat) => (
          <div
            key={stat.value}
            className="bg-beige-500 border border-beige-600 rounded-[4px] p-10 flex flex-col gap-5"
          >
            <p className="font-serif font-semibold text-[50px] leading-[1.1] text-primary-500">
              {stat.value}
            </p>
            <p className="font-sans font-medium text-lg leading-[1.2] text-grey-900">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
