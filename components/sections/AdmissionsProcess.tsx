"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, CalendarDays, ClipboardCheck, FileText, School } from "lucide-react"

const steps = [
  {
    title: "Submit Application",
    description: "Complete our online application form to begin the admissions process.",
    icon: <FileText className="h-8 w-8 text-primary" />,
  },
  {
    title: "Schedule a Tour",
    description: "Visit our campus to see our classrooms and meet our educators.",
    icon: <CalendarDays className="h-8 w-8 text-primary" />,
  },
  {
    title: "Child Assessment",
    description: "We'll schedule a time for your child to visit and interact with our environment.",
    icon: <ClipboardCheck className="h-8 w-8 text-primary" />,
  },
  {
    title: "Enrollment",
    description: "Upon acceptance, complete enrollment forms and secure your child's place.",
    icon: <School className="h-8 w-8 text-primary" />,
  },
]

export default function AdmissionsProcess() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bubblegum-sans text-primary mb-4">
            Our Admissions Process
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We've designed a simple and thoughtful process to help you and your child
            join our Montessori community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-primary/10 rounded-full">
                    {step.icon}
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{step.description}</p>
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
              Start Your Application <ArrowRight size={16} />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
