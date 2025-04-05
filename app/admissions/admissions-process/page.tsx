import type { Metadata } from "next"
import AdmissionsProcess from "@/components/sections/AdmissionsProcess"
import MainLayout from "@/components/layout/MainLayout"

export const metadata: Metadata = {
  title: "Admissions Process | Opus Montessori",
  description:
    "Learn about the admissions process at Opus Montessori School and how to enroll your child.",
}

export default function AdmissionsProcessPage() {
  return (
    <MainLayout>
      <div className="pt-4">
        <div className="bg-muted/30 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bubblegum-sans text-primary mb-4">
              Admissions Process
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Learn how to enroll your child at Opus Montessori School
            </p>
          </div>
        </div>
        <AdmissionsProcess />
      </div>
    </MainLayout>
  )
}
