import MainLayout from "@/components/layout/MainLayout"
import CallToAction from "@/components/sections/CallToAction"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, GraduationCap, Calendar } from "lucide-react"
import { AnimatedElement } from "@/components/ui/animated-element"

export const metadata: Metadata = {
  title: "Admissions",
  description: "Learn about our admissions process at Opus Montessori School.",
}

export default function AdmissionsPage() {
  return (
    <MainLayout>
      <div className="bg-muted/30 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-bubblegum-sans text-primary mb-4 text-4xl md:text-5xl">Admissions</h1>
          <p className="text-muted-foreground mx-auto max-w-2xl">
            Join our community of learners and begin your child&apos;s Montessori journey.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <AnimatedElement
              className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2"
              animation="fadeInUp"
            >
              <div className="flex h-full flex-col rounded-lg bg-white p-8 shadow-md">
                <div className="bg-primary/10 mb-4 w-fit rounded-full p-3">
                  <GraduationCap className="text-primary h-8 w-8" />
                </div>
                <h2 className="font-bubblegum-sans text-primary mb-4 text-2xl">
                  Enrollment Process
                </h2>
                <p className="text-muted-foreground mb-6 flex-grow text-sm md:text-base">
                  Learn about our step-by-step enrollment process and how to join our Montessori
                  community.
                </p>
                <Button asChild className="w-full">
                  <Link
                    href="/admissions/admissions-process"
                    className="flex items-center justify-center gap-2"
                  >
                    View Enrollment Steps <ArrowRight size={16} />
                  </Link>
                </Button>
              </div>

              <div className="flex h-full flex-col rounded-lg bg-white p-8 shadow-md">
                <div className="bg-primary/10 mb-4 w-fit rounded-full p-3">
                  <Calendar className="text-primary h-8 w-8" />
                </div>
                <h2 className="font-bubblegum-sans text-primary mb-4 text-2xl">
                  Bright Beginnings Scholarship
                </h2>
                <p className="text-muted-foreground mb-6 flex-grow text-sm md:text-base">
                  Discover our scholarship program co-sponsored by the Barrington Area Community
                  Foundation.
                </p>
                <Button asChild className="w-full">
                  <Link
                    href="/admissions/bright-beginnings-scholarship"
                    className="flex items-center justify-center gap-2"
                  >
                    Learn About Scholarships <ArrowRight size={16} />
                  </Link>
                </Button>
              </div>
            </AnimatedElement>

            <AnimatedElement className="text-center" animation="fadeIn" delay={0.2}>
              <p className="mb-6 text-base md:text-lg">
                Have questions about admissions? We&apos;re here to help!
              </p>
              <Button
                asChild
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10"
              >
                <Link href="/contact">Contact Our Admissions Team</Link>
              </Button>
            </AnimatedElement>
          </div>
        </div>
      </section>

      <CallToAction />
    </MainLayout>
  )
}
