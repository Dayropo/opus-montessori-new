import MainLayout from "@/components/layout/MainLayout"
import DonateSection from "@/components/sections/DonateSection"
import CallToAction from "@/components/sections/CallToAction"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Donors, Sponsors & Grants | Opus Montessori School",
  description:
    "Support Opus Montessori School through donations, sponsorships, and grants. Your contribution helps us provide quality education.",
}

export default function DonatePage() {
  return (
    <MainLayout>
      <div className="pt-4">
        <div className="bg-muted/30 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bubblegum-sans text-primary mb-4">
              Donors, Sponsors & Grants
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Your support helps us continue our mission of providing quality Montessori education.
            </p>
          </div>
        </div>

        <DonateSection />
        <CallToAction />
      </div>
    </MainLayout>
  )
}
