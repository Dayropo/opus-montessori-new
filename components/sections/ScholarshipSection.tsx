"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, MapPin, DollarSign, ClipboardCheck, School } from "lucide-react"
import Image from "next/image"

const requirements = [
  {
    title: "Residency",
    description: "You must reside in School District 220.",
    icon: <MapPin className="text-primary h-6 w-6" />,
  },
  {
    title: "Income",
    description: "Income may not exceed $40,000 annually.",
    icon: <DollarSign className="text-primary h-6 w-6" />,
  },
  {
    title: "Verification",
    description: "Verification for income and residency must be provided.",
    icon: <ClipboardCheck className="text-primary h-6 w-6" />,
  },
  {
    title: "Compliance",
    description: "Once accepted, you must adhere to Opus rules and policies.",
    icon: <School className="text-primary h-6 w-6" />,
  },
]

export default function ScholarshipSection() {
  return (
    <>
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="font-bubblegum-sans text-primary mb-6 text-4xl md:text-5xl">
              Bright Beginnings Scholarship
            </h1>
            <p className="text-muted-foreground text-lg">
              Expanding access to Montessori education for all children
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-bubblegum-sans text-primary mb-6 text-3xl md:text-4xl">
                About the Scholarship
              </h2>
              <p className="text-muted-foreground mb-6">
                Opus Montessori School is proud to announce the creation of the Bright Beginnings
                Scholarship program which is co-sponsored by the Barrington Area Community
                Foundation. The goal of the scholarship is to empower scholastic achievement by
                expanding access to a Montessori Education experience.
              </p>
              <p className="mb-6 text-lg font-medium">
                The scholarship offers a full year of tuition for our Half-Day Program.
              </p>
            </motion.div>

            <motion.div
              className="relative h-[300px] overflow-hidden rounded-lg shadow-xl"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Image
                src="/images/0ac68f298fc8e3a473d5cd1d864815026f0ab5a4-960x720.webp"
                alt="Bright Beginnings Scholarship"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-bubblegum-sans text-primary mb-6 text-center text-2xl">
              To qualify for the scholarship you must meet certain criteria
            </h3>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {requirements.map((req, index) => (
                <Card key={index} className="border-none shadow-md">
                  <CardContent className="flex flex-col items-center p-6 text-center">
                    <div className="bg-primary/10 mb-4 rounded-full p-3">{req.icon}</div>
                    <h4 className="mb-2 text-lg font-semibold">{req.title}</h4>
                    <p className="text-muted-foreground">{req.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="bg-muted/30 mx-auto max-w-3xl rounded-lg p-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="mb-6">
              Recipients will be chosen by lottery and all decisions are final. All applications
              must be received by August 30th, 2024. To apply, please download the application, save
              it, and return by postal mail or drop off at:
            </p>

            <div className="mb-6 font-medium">
              <p>Opus Montessori</p>
              <p>Attn: Bright Beginnings</p>
              <p>180 Hawthorn Road</p>
              <p>Barrington Hills, Illinois 60010</p>
            </div>

            <Button className="bg-primary hover:bg-primary/90 flex items-center gap-2">
              <Download size={16} />
              Download Application
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}
