import MainLayout from "@/components/layout/MainLayout"
import AdmissionsProcess from "@/components/sections/AdmissionsProcess"
import TuitionInfo from "@/components/sections/TuitionInfo"
import CallToAction from "@/components/sections/CallToAction"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Admissions | Opus Montessori School",
  description: "Learn about our admissions process, tuition, and programs at Opus Montessori School.",
}

export default function AdmissionsPage() {
  return (
    <MainLayout>
      <div className="pt-16">
        <div className="bg-muted/30 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bubblegum-sans text-primary mb-4">
              Admissions
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join our community of learners and begin your child's Montessori journey.
            </p>
          </div>
        </div>
        
        <AdmissionsProcess />
        <TuitionInfo />
        <CallToAction />
      </div>
    </MainLayout>
  )
}
