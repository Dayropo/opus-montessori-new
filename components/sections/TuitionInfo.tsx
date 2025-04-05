"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Check } from "lucide-react"

const programs = [
  {
    title: "Half Day Program",
    ageGroup: "Ages 2-3",
    schedule: "8:30 AM - 11:30 AM",
    days: "Monday - Friday",
    tuition: "$9,500 per year",
    features: [
      "Montessori curriculum",
      "Low student-teacher ratio",
      "Snack included",
      "Outdoor play time",
    ],
  },
  {
    title: "Full Day Program",
    ageGroup: "Ages 3-6",
    schedule: "8:30 AM - 3:00 PM",
    days: "Monday - Friday",
    tuition: "$12,500 per year",
    features: [
      "Montessori curriculum",
      "Low student-teacher ratio",
      "Lunch and snacks included",
      "Outdoor play time",
      "Afternoon enrichment activities",
      "Rest period for younger children",
    ],
    highlighted: true,
  },
  {
    title: "Extended Day",
    ageGroup: "Ages 3-6",
    schedule: "7:00 AM - 6:00 PM",
    days: "Monday - Friday",
    tuition: "$15,000 per year",
    features: [
      "Full day program benefits",
      "Early morning drop-off",
      "Afternoon enrichment activities",
      "Late pick-up option",
      "Additional snacks provided",
    ],
  },
]

export default function TuitionInfo() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bubblegum-sans text-primary mb-4">
            Tuition & Programs
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer flexible programs to meet the needs of your family and provide 
            a nurturing environment for your child's development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {programs.map((program, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex"
            >
              <Card className={`h-full flex flex-col overflow-hidden ${program.highlighted ? 'border-primary shadow-lg' : 'shadow-md'}`}>
                {program.highlighted && (
                  <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <CardContent className={`p-6 flex-1 flex flex-col ${program.highlighted ? 'pt-4' : 'pt-6'}`}>
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-1">{program.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{program.ageGroup}</p>
                    <p className="text-2xl font-bold text-primary mb-1">{program.tuition}</p>
                    <p className="text-muted-foreground text-sm">
                      {program.schedule} • {program.days}
                    </p>
                  </div>
                  
                  <div className="flex-1">
                    <ul className="space-y-2 mb-6">
                      {program.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check size={18} className="text-primary mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button asChild variant={program.highlighted ? "default" : "outline"} className={program.highlighted ? "bg-primary hover:bg-primary/90" : ""}>
                    <Link href="/contact">
                      Inquire Now
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold mb-2">Bright Beginnings Scholarship</h3>
          <p className="text-muted-foreground mb-4">
            We believe every child deserves access to quality education. Our scholarship program
            provides financial assistance to eligible families. Contact us to learn more about
            the application process.
          </p>
          <Button asChild variant="outline">
            <Link href="/contact">
              Scholarship Information
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
