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
    icon: <Heart className="h-8 w-8 text-primary" />,
  },
  {
    title: "Become a Sponsor",
    description: "Partner with us to make a lasting impact on children's education.",
    icon: <Award className="h-8 w-8 text-primary" />,
  },
  {
    title: "Corporate Matching",
    description: "Double your impact through your employer's matching gift program.",
    icon: <Users className="h-8 w-8 text-primary" />,
  },
]

export default function DonateSection() {
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
            Support Opus Montessori School
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Opus Montessori School is a 501(c)(3) organization. Tuition, grants and in-kind donations 
            make our operations possible. We are extremely grateful for the generous support of our 
            organizational sponsors, donors and friends.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {donationOptions.map((option, index) => (
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
                    {option.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
                  <p className="text-muted-foreground">{option.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="bg-muted/30 p-8 rounded-lg max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bubblegum-sans text-primary mb-2">
              Their support makes our mission possible
            </h3>
            <p className="text-muted-foreground">
              Their support makes our mission of educating the whole child possible in addition to 
              helping us build a strong sense of community and community spirit in each student.
            </p>
          </div>
          
          <div className="text-center">
            <p className="mb-4 font-medium">
              Please contact Geoffrey Garner at 630-568-6787, if you are interested in becoming a sponsor or donor.
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="bg-primary/5 p-8 rounded-lg max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3 relative h-40 w-full">
              <Image
                src="/images/dsck.jpg"
                alt="Bright Beginnings Scholarship"
                fill
                className="object-contain"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-semibold mb-2">
                Special thanks to the Barrington Area Community Foundation (BACF)
              </h3>
              <p className="text-muted-foreground mb-4">
                For sponsoring our inaugural scholarship program: <strong>Bright Beginnings: Empowering Futures for Barrington Area's Children</strong>
              </p>
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
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
