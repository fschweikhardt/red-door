const faqs = [
  {
    question: "How long does a typical branding project take?",
    answer:
      "Most identity projects run 4–6 weeks from kickoff to final files. Websites add 3–5 weeks depending on scope and content readiness.",
  },
  {
    question: "Do you work with businesses outside our area?",
    answer:
      "Yes. We are local-first but collaborate remotely with clients across the country. Video calls, shared boards, and async feedback keep things moving.",
  },
  {
    question: "What do you need from us to get started?",
    answer:
      "A short discovery call, your goals, any existing assets, and examples of brands you admire. We handle the rest from there.",
  },
  {
    question: "Can you work with our existing logo or website?",
    answer:
      "Absolutely. We often refine existing brands or rebuild sites that have outgrown their original design — no need to start from zero.",
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer:
      "We offer monthly retainer packages for print requests, web updates, and seasonal campaigns so you are never without design help.",
  },
]

export function Faq() {
  return (
    <section id="faq" className="py-24 px-4 md:px-8 border-t border-border">
      <div className="max-w-3xl mx-auto">
        <div className="mb-16">
          <span className="text-sm uppercase tracking-widest text-accent">FAQ</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Common questions
          </h2>
        </div>

        <div className="divide-y divide-border">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg md:text-xl font-bold text-foreground marker:content-none [&::-webkit-details-marker]:hidden">
                {faq.question}
                <span className="shrink-0 text-accent transition-transform duration-300 group-open:rotate-45 text-2xl leading-none">
                  +
                </span>
              </summary>
              <p className="mt-4 text-white/90 leading-relaxed pr-8">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
