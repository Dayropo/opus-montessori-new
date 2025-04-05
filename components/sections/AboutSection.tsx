"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bubblegum-sans text-primary mb-6">
              About Opus Montessori School
            </h2>
            <p className="text-muted-foreground mb-4">
              Opus Montessori School is dedicated to providing a nurturing and enriching educational 
              environment based on the Montessori philosophy. We believe in fostering independence, 
              creativity, and a love for learning in each child.
            </p>
            <p className="text-muted-foreground mb-4">
              Our school offers programs for children ages 2-6, with a focus on developing the whole 
              child—intellectually, socially, emotionally, and physically. Through carefully prepared 
              environments and individualized attention, we help children reach their full potential.
            </p>
            <p className="text-muted-foreground mb-6">
              Located in Barrington Hills, our school provides a peaceful setting where children can 
              explore, discover, and grow. Our dedicated team of certified Montessori educators brings 
              years of experience and passion to create a supportive community for learning.
            </p>
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link href="/contact">
                Schedule a Tour
              </Link>
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
