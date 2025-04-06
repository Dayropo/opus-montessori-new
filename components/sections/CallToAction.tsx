"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CallToAction() {
  return (
    <section className="bg-primary text-primary-foreground py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-bubblegum-sans mb-6 text-3xl md:text-4xl">
            Begin Your Child&apos;s Montessori Journey Today
          </h2>
          <p className="text-primary-foreground/90 mb-8 text-base md:text-lg">
            Schedule a tour, learn about our enrollment process, or contact us with any questions.
            We&apos;re excited to welcome your family to the Opus Montessori community.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-primary border-none bg-white hover:bg-white/90"
            >
              <Link href="/admissions">Enroll Now</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-primary-foreground/10 hover:bg-primary-foreground/20 border-primary-foreground/30 border"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
