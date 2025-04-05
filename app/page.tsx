import MainLayout from "@/components/layout/MainLayout"
import Hero from "@/components/sections/Hero"
import GuidingPrinciples from "@/components/sections/GuidingPrinciples"
import FAQ from "@/components/sections/FAQ"
import CallToAction from "@/components/sections/CallToAction"

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <GuidingPrinciples />
      <FAQ />
      <CallToAction />
    </MainLayout>
  )
}
