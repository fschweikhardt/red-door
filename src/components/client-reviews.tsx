import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const reviews = [
  {
    text: "Red Door has been such a safe haven for me as I’ve reconstructed a sense of faith over the past year and a half. I’ve truly never been to a church where I feel so free to ask questions and be accepted as I am. I would wholeheartedly recommend Red Door to anyone looking for a community of curious and down-to-earth people who value the teachings of Jesus and a good potluck!",
    name: "Laney",
  },
  {
    text: "A real church, but a church for people who don't really like church.",
    name: "Frank",
  },
  {
    text: "Our kids love coming on Sundays. The youth ministry is warm, creative, and rooted in faith that meets them where they are.",
    name: "Priya Shah",
    role: "Parent & volunteer",
  },
  {
    text: "Red Door has become our home church. The potlucks, the prayer, the openness — it is the real deal.",
    name: "Tom Bradley",
    role: "Member since 2024",
  },
]

export function ClientReviews() {
  return (
    <section id="reviews" className="py-24 px-4 md:px-8 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="text-sm uppercase tracking-widest text-accent">Client Reviews</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-card-foreground">
              What people are saying
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm leading-relaxed text-sm">
            Voices from our community — shared with permission.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {reviews.map((review) => (
                <CarouselItem key={review.name}>
                  <figure className="relative pt-6 px-2 md:px-6">
                    <span
                      className="absolute top-0 left-2 md:left-6 text-[5rem] md:text-[6rem] leading-none font-bold text-accent/15 select-none pointer-events-none"
                      aria-hidden
                    >
                      &ldquo;
                    </span>
                    <blockquote className="relative text-xl md:text-2xl font-bold text-card-foreground leading-snug min-h-[8rem] md:min-h-[7rem]">
                      {review.text}
                    </blockquote>
                    <figcaption className="mt-8 flex items-center gap-4">
                      <div className="w-8 h-px bg-accent" />
                      <div>
                        <div className="text-sm font-bold text-foreground">{review.name}</div>
                        <div className="text-sm text-muted-foreground">{review.role}</div>
                      </div>
                    </figcaption>
                  </figure>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-8 flex items-center justify-center gap-4">
              <CarouselPrevious className="static top-auto left-auto right-auto size-10 translate-x-0 translate-y-0 border-border bg-background/80 hover:bg-background" />
              <CarouselNext className="static top-auto left-auto right-auto size-10 translate-x-0 translate-y-0 border-border bg-background/80 hover:bg-background" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  )
}
