"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const principles = [
  {
    title: "Critical Thinking and Problem Solving",
    description: "Children are encouraged to learn by trial and error, which causes them to naturally innovate.",
    image: "/images/critical-thinking.jpg",
  },
  {
    title: "Creativity and Curiosity",
    description: "Our program is designed to allow time and space for creativity and curiosity.",
    image: "/images/creativity.jpg",
  },
  {
    title: "Independence and Executive Function",
    description: "A carefully prepared environment allows children to have freedom, within limits, to discover, form an understanding, and thrive as independent learners.",
    image: "/images/independence.jpg",
  },
  {
    title: "Leadership",
    description: "Interaction between younger and older peers, allows children to assume roles as both leaders and followers.",
    image: "/images/leadership.jpg",
  },
  {
    title: "Cross Cultural Competence",
    description: "Children must see themselves as connected to others within and across cultures.",
    image: "/images/cross-cultural-competence.jpg",
  },
  {
    title: "Social Responsibility",
    description: "Through articulated practical life, grace, courtesy, and a service learning curricula, children learn to care for themselves, others and their environment.",
    image: "/images/social-responsibility.jpg",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  },
}

export default function GuidingPrinciples() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bubblegum-sans text-primary mb-4">
            Our Guiding Principles
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            At Opus Montessori, we believe in nurturing the whole child through these core principles
            that guide our educational approach.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {principles.map((principle, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
                <div className="relative h-48 w-full">
                  <Image
                    src={principle.image}
                    alt={principle.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-primary">
                    {principle.title}
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base">
                    {principle.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
