"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CalendarDays, User } from "lucide-react"

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: "The Benefits of Montessori Education for Early Childhood Development",
    excerpt: "Discover how the Montessori method fosters independence, creativity, and a lifelong love of learning in young children.",
    date: "April 2, 2025",
    author: "Veronica Henderson-Garner",
    image: "/images/montessori-classroom.jpg",
    slug: "benefits-montessori-education"
  },
  {
    id: 2,
    title: "Preparing Your Child for Their First Day at Montessori School",
    excerpt: "Tips and advice for parents to help make the transition to Montessori education smooth and enjoyable for their children.",
    date: "March 15, 2025",
    author: "Kulsoom Razvi",
    image: "/images/independence.jpg",
    slug: "preparing-first-day-montessori"
  },
  {
    id: 3,
    title: "The Importance of Practical Life Activities in Montessori Education",
    excerpt: "Learn how everyday activities help children develop concentration, coordination, independence, and a sense of order.",
    date: "February 28, 2025",
    author: "Jean DiMonte",
    image: "/images/social-responsibility.jpg",
    slug: "practical-life-activities"
  },
  {
    id: 4,
    title: "Montessori at Home: Creating a Child-Friendly Environment",
    excerpt: "Simple ways to incorporate Montessori principles into your home to support your child's development and independence.",
    date: "February 10, 2025",
    author: "Aparna Ayyagari",
    image: "/images/critical-thinking.jpg",
    slug: "montessori-at-home"
  },
  {
    id: 5,
    title: "The Role of the Montessori Guide: More Than Just a Teacher",
    excerpt: "Understanding the unique role of Montessori educators as observers, guides, and facilitators of children's learning.",
    date: "January 25, 2025",
    author: "Yupa Swedlund",
    image: "/images/leadership.jpg",
    slug: "role-montessori-guide"
  },
  {
    id: 6,
    title: "Celebrating Cultural Diversity in the Montessori Classroom",
    excerpt: "How Montessori education promotes global citizenship and cross-cultural understanding from an early age.",
    date: "January 12, 2025",
    author: "Adriana Faria",
    image: "/images/cross-cultural-competence.jpg",
    slug: "cultural-diversity-montessori"
  }
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

export default function BlogPosts() {
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
            Our Blog
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Insights, tips, and stories from our Montessori community to help you
            support your child's development and education.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {blogPosts.map((post) => (
            <motion.div key={post.id} variants={itemVariants}>
              <Card className="h-full overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
                <div className="relative h-48 w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <CalendarDays size={14} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User size={14} />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 line-clamp-2">
                    <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <Link href={`/blog/${post.slug}`}>
                      Read More
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
