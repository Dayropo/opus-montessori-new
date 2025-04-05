"use client"

import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

interface TeamMember {
  name: string
  title: string
  qualifications: string[]
  image?: string
}

const teamMembers: TeamMember[] = [
  {
    name: "Veronica Henderson-Garner",
    title: "Director and Founder",
    qualifications: [
      "Over 25 years of classroom experience",
      "B.S. Degree Marketing",
      "American Montessori Society certified 0-3 year old",
      "American Montessori Society certified 3-6 year old",
      "CPR and First Aid - Trained and Certified",
    ],
    image: "/images/veronica_henderson-garner.webp",
  },
  {
    name: "Kulsoom Razvi",
    title: "Head Teacher (3-6-year-old class)",
    qualifications: [
      "B.S. Degree Management",
      "Over 20 years of classroom experience",
      "American Montessori Society certified 3-6 year old",
      "CPR and First Aid - Trained and Certified",
      "Opus employee since 2019",
    ],
    image: "/images/kulsoom_razvi.webp",
  },
  {
    name: "Aparna Ayyagari",
    title: "Head Teacher (3-6 year-old class)",
    qualifications: [
      "B.S. Mechanical Engineering",
      "American Montessori Society certified 3-6 year old",
      "6 years of Montessori experience",
      "Fluent in Telugu and Hindi",
      "CPR and First Aid - Trained and certified",
      "Opus employee since 2022",
    ],
    image: "/images/aparna_ayyagari.webp",
  },
  {
    name: 'Yupa "Tucky" Swedlund',
    title: "Head Teacher (3-6 year-old class)",
    qualifications: [
      "B.S. Degree English",
      "American Montessori Society trained 3-6 year old",
      "7 years of Montessori experience",
      "Fluent in Thai",
      "Anaphylaxis and Epinephrine Administrator",
      "Opus employed since 2021",
    ],
    image: "/images/yupa_swedlund.webp",
  },
  {
    name: "Jean DiMonte",
    title: "Head Teacher (3-6 year old class)",
    qualifications: [
      "American Montessori Society Certified 3-6 year old",
      "Montessorian for over 40 years",
      "Opus employee since 2023",
    ],
    image: "/images/jean_dimonte.webp",
  },
  {
    name: "Adriana Faria",
    title: "Head Teacher (2-3 year old class)",
    qualifications: [
      "Opus Spanish Teacher",
      "11 Years of classroom experience",
      "American Montessori Society Trained 0-3 year old",
      "Oakton Community College",
      "CPR and First Aid trained and Certified",
      "Opus employee since 2022",
    ],
    image: "/images/adriana_faria.webp",
  },
  {
    name: "Janet Handy",
    title: "Assistant to Ms. Adriana (2-3 year-old class)",
    qualifications: [
      "Fluent in Spanish",
      "CPR and First Aid - Trained and certified",
      "11 years of classroom experience",
      "Opus employee since 2021",
    ],
    image: "/images/janet_handy.webp",
  },
  {
    name: "Laura Lyons",
    title: "Assistant to Ms. Adriana (2-3 year old class)",
    qualifications: [
      "Waubonsee Community College",
      "7 years childcare experience",
      "Opus Employee since 2024",
    ],
    image: "/images/laura_lyons.webp",
  },
  {
    name: "Beige Garza",
    title: "Assistant to Ms. Tucky (3-6 year old class)",
    qualifications: [
      "5 years of Montessori classroom experience",
      "Anaphylaxis and Epinephrine Administrator",
      "Certified Food Protection Manager",
      "Opus Employee since 2023",
    ],
    image: "/images/beige_garza.webp",
  },
  {
    name: "Sarah Serrato",
    title: "Assistant to Ms. Razvi (3-6 year old class)",
    qualifications: [
      "11 years of Montessori experience",
      "Licensed Business Practitioner of Neuro-Linguistic Programming",
      "Waubonsee Community College",
      "Harper College",
      "Western Illinois University",
      "Fluent in Spanish",
      "Opus Employee since 2024",
    ],
    image: "/images/sarah_serrato.webp",
  },
  {
    name: "Hannah Isa",
    title: "Floater",
    qualifications: [
      "Early Childhood student at Elgin Community College",
      "Certificate in Nursing",
      "Fluent in Igbo, Yoruba and Agbor",
      "Nap room helper / Meal Service Attendant",
      "Opus Employee since 2022",
    ],
    image: "/images/hannah_isa.webp",
  },
  {
    name: "Lesley Calvert",
    title: "Music and Movement Teacher",
    qualifications: [
      "Bachelor of Arts, Music",
      "Opus Joyful Voices Choir Director",
      "10 years of Montessori experience",
      "Substitute Teacher",
      "Opus Employee since 2022",
    ],
    image: "/images/lesley_calvert.webp",
  },
  {
    name: 'Min Jeong "M.J." Chang',
    title: "Piano Teacher",
    qualifications: ["Fluent in Korean", "Opus employee since 2022"],
    image: "/images/min_jeong_chang.webp",
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
    transition: { duration: 0.5 },
  },
}

export default function TeamMembers() {
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
            Meet Our Team
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our dedicated staff brings years of experience, passion, and expertise to create a
            nurturing environment for your child's growth and development.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {teamMembers.map((member, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Avatar className="h-24 w-24 mb-4">
                    {member.image ? (
                      <AvatarImage src={member.image} alt={member.name} className="object-cover object-center" />
                    ) : null}
                    <AvatarFallback className="bg-primary/10 text-primary text-xl">
                      {member.name
                        .split(" ")
                        .map(n => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-semibold mb-1">Ms. {member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.title}</p>
                  <ul className="text-sm text-muted-foreground space-y-1 mt-auto">
                    {member.qualifications.map((qualification, i) => (
                      <li key={i} className="list-disc list-inside text-left">
                        {qualification}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
