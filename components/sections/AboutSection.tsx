"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutSection() {
  return (
    <section className="py-20 text-sm md:text-base">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bubblegum-sans text-primary mb-6">
              Our Mission
            </h2>
            <p className="text-muted-foreground mb-6">
              Our mission is to provide an authentic Montessori preschool experience for children
              between the ages of 2 - 5 years old. Our approach to education is child-centered,
              focusing on developing every child&apos;s mind, body and spirit to the fullest extent
              of that child&apos;s capabilities.
            </p>

            <h2 className="text-3xl md:text-4xl font-bubblegum-sans text-primary mb-6">
              Our Vision
            </h2>
            <p className="text-muted-foreground mb-6">
              Opus Montessori will provide an activity based learning environment of mixed age
              groups, that places an emphasis on cognitive, social and physical development that is
              individualized for each child.
            </p>

            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link href="/contact">Schedule a Tour</Link>
            </Button>
          </motion.div>

          <motion.div
            className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image
              src="/images/montessori-classroom.jpg"
              alt="Montessori Classroom"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
