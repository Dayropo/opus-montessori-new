"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CallToAction() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bubblegum-sans mb-6">
            Begin Your Child's Montessori Journey Today
          </h2>
          <p className="text-base md:text-lg mb-8 text-primary-foreground/90">
            Schedule a tour, learn about our enrollment process, or contact us with any questions.
            We're excited to welcome your family to the Opus Montessori community.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90 border-none">
              <Link href="/admissions">
                Enroll Now
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="bg-primary-foreground/10 hover:bg-primary-foreground/20 border border-primary-foreground/30">
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
