"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What age groups does Opus Montessori School serve?",
    answer: "Opus Montessori School serves children from 2 to 6 years old, with dedicated programs for different age groups."
  },
  {
    question: "What is the Montessori approach to education?",
    answer: "The Montessori approach is a child-centered educational method based on scientific observations of children. It emphasizes independence, freedom within limits, and respect for a child's natural psychological, physical, and social development."
  },
  {
    question: "What are the school hours?",
    answer: "Our core program runs from 8:30 AM to 3:00 PM, Monday through Friday. We also offer extended care options before and after school for families who need additional flexibility."
  },
  {
    question: "How do I enroll my child at Opus Montessori?",
    answer: "The enrollment process begins with submitting an application form, followed by a school tour and meeting. We encourage families to visit our Admissions page for detailed information and to schedule a tour."
  },
  {
    question: "What qualifications do your teachers have?",
    answer: "All our lead teachers are certified by the American Montessori Society and have extensive classroom experience. Many are also fluent in multiple languages and certified in CPR and First Aid."
  },
  {
    question: "Is financial assistance available?",
    answer: "Yes, we offer the Bright Beginnings Scholarship program for families who qualify. Please contact our admissions office for more information about financial assistance options."
  }
]

export default function FAQ() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bubblegum-sans text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our programs, philosophy, and enrollment process.
          </p>
        </motion.div>

        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
