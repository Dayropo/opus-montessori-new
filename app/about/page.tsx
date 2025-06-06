import MainLayout from "@/components/layout/MainLayout"
import AboutSection from "@/components/sections/AboutSection"
import TeamMembers from "@/components/sections/TeamMembers"
import CallToAction from "@/components/sections/CallToAction"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Opus Montessori School's philosophy, mission, and meet our dedicated team of educators.",
}

export default function AboutPage() {
  return (
    <MainLayout>
      <div className="bg-muted/30 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-bubblegum-sans text-primary mb-4 text-4xl md:text-5xl">About Us</h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-sm md:text-base">
            Discover our philosophy, mission, and the dedicated team behind Opus Montessori School.
          </p>
        </div>
      </div>

      <AboutSection />
      <TeamMembers />
      <CallToAction />
    </MainLayout>
  )
}
