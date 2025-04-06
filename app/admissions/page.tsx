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
          <h1 className="text-4xl md:text-5xl font-bubblegum-sans text-primary mb-4">Admissions</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join our community of learners and begin your child&apos;s Montessori journey.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedElement
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
              animation="fadeInUp"
            >
              <div className="bg-white rounded-lg shadow-md p-8 flex flex-col h-full">
                <div className="mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-2xl font-bubblegum-sans text-primary mb-4">
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

              <div className="bg-white rounded-lg shadow-md p-8 flex flex-col h-full">
                <div className="mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-2xl font-bubblegum-sans text-primary mb-4">
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
              <p className="text-base md:text-lg mb-6">Have questions about admissions? We&apos;re here to help!</p>
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
