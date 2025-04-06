"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Award, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const donationOptions = [
  {
    title: "One-Time Donation",
    description: "Support our mission with a one-time contribution of any amount.",
    icon: <Heart className="text-primary h-8 w-8" />,
  },
  {
    title: "Become a Sponsor",
    description: "Partner with us to make a lasting impact on children's education.",
    icon: <Award className="text-primary h-8 w-8" />,
  },
  {
    title: "Corporate Matching",
    description: "Double your impact through your employer's matching gift program.",
    icon: <Users className="text-primary h-8 w-8" />,
  },
]

export default function DonateSection() {
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
            Support Opus Montessori School
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-sm md:text-base">
            Opus Montessori School is a 501(c)(3) organization. Tuition, grants and in-kind
            donations make our operations possible. We are extremely grateful for the generous
            support of our organizational sponsors, donors and friends.
          </p>
        </motion.div>

        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {donationOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-md transition-shadow hover:shadow-lg">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="bg-primary/10 mb-4 rounded-full p-3">{option.icon}</div>
                  <h3 className="mb-2 text-xl font-semibold">{option.title}</h3>
                  <p className="text-muted-foreground text-sm md:text-base">{option.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-muted/30 mx-auto mb-16 max-w-4xl rounded-lg p-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="mb-6 text-center">
            <h3 className="font-bubblegum-sans text-primary mb-2 text-2xl">
              Their support makes our mission possible
            </h3>
            <p className="text-muted-foreground text-sm md:text-base">
              Their support makes our mission of educating the whole child possible in addition to
              helping us build a strong sense of community and community spirit in each student.
            </p>
          </div>

          <div className="text-center">
            <p className="mb-4 text-sm font-medium md:text-base">
              Please contact Geoffrey Garner at 630-568-6787, if you are interested in becoming a
              sponsor or donor.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="bg-primary/5 mx-auto max-w-4xl rounded-lg p-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="flex flex-col items-center gap-8 md:flex-row">
            <div className="relative h-40 w-full md:w-1/3">
              <Image
                src="/images/BACF.webp"
                alt="Barrington Area Community Foundation"
                fill
                className="object-contain"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="mb-2 text-xl font-semibold">
                Special thanks to the Barrington Area Community Foundation (BACF)
              </h3>
              <p className="text-muted-foreground mb-4 text-sm md:text-base">
                For sponsoring our inaugural scholarship program:{" "}
                <strong>
                  Bright Beginnings: Empowering Futures for Barrington Area&apos;s Children
                </strong>
              </p>
              <Button
                asChild
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10"
              >
                <Link href="/admissions/bright-beginnings-scholarship">
                  Learn More About Our Scholarship
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
