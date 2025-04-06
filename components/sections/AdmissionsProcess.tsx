"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, CalendarDays, ClipboardCheck, FileText, School } from "lucide-react"

const steps = [
  {
    title: "Step 1",
    description:
      "Schedule a parent(s) visit to the school. To schedule a visit please contact us at (630) 568-6787.",
    icon: <CalendarDays className="text-primary h-8 w-8" />,
  },
  {
    title: "Step 2",
    description:
      "After your visit and if you would like to become a part of our community, submit an application with a non-refundable application fee of $75.00.",
    icon: <FileText className="text-primary h-8 w-8" />,
  },
  {
    title: "Step 3",
    description:
      "Upon acceptance, return your signed contract with the registration fee and initial installment. This will reserve a place for your child.",
    icon: <ClipboardCheck className="text-primary h-8 w-8" />,
  },
  {
    title: "Step 4",
    description:
      "Prior to your child's first day, submit your child's physical and immunization records. Also, bring an original birth certificate. It will be copied for his/her file and returned.",
    icon: <School className="text-primary h-8 w-8" />,
  },
]

export default function AdmissionsProcess() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-bubblegum-sans text-primary mb-4 text-3xl md:text-4xl">
            Our Admissions Process
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-sm md:text-base">
            We&apos;ve designed a simple and thoughtful process to help you and your child join our
            Montessori community.
          </p>
        </motion.div>

        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-md transition-shadow hover:shadow-lg">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="bg-primary/10 mb-4 rounded-full p-3">{step.icon}</div>
                  <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground text-sm md:text-base">{step.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="/contact" className="flex items-center gap-2">
              Contact Us <ArrowRight size={16} />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
