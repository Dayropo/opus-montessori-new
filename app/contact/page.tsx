import MainLayout from "@/components/layout/MainLayout"
import ContactForm from "@/components/sections/ContactForm"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Opus Montessori School. We're here to answer your questions about admissions, programs, and more.",
}

export default function ContactPage() {
  return (
    <MainLayout>
      <div className="bg-muted/30 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bubblegum-sans text-primary mb-4">Contact Us</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            We&apos;re here to answer your questions and help you learn more about our school.
          </p>
        </div>
      </div>

      <ContactForm />
    </MainLayout>
  )
}
