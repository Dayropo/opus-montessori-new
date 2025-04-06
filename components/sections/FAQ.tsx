"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is a Montessori education?",
    answer:
      "Dr. Montessori felt, the goal of early childhood education should not be to fill the child with facts from a pre-selected course of studies, but rather to cultivate the child's own natural desire to learn.",
  },
  {
    question: "What methods are utilized?",
    answer:
      "Two methods are used. First, each child is allowed to experience the excitement of learning by his or her own choice of activities. Second, to help the child perfect their own natural tools for learning through the use of materials that will absorb the child's attention as they explore.",
  },
  {
    question: "How do you measure progress?",
    answer:
      "The role of a Montessori teacher is very different from the role of a traditional educator. They are more of a director, showing the proper use of materials and ensuring that the child is progressing based on their learning ability.",
  },
]

export default function FAQ() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-bubblegum-sans text-primary mb-4 text-3xl md:text-4xl">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <motion.div
          className="mx-auto max-w-3xl"
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
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
