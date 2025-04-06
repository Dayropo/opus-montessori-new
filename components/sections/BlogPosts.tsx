"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CalendarDays, User } from "lucide-react"

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: "Learning to Love Education",
    excerpt: "Learning To Love To Learn",
    date: "December 4 2019",
    author: "Geoffrey Garner",
    slug: "learning-to-love-education",
  },
  {
    id: 2,
    title: "Stephen Curry NBA MVP & Montessori",
    excerpt: "Stephen Curry loves Montessori education!",
    date: "December 4 2019",
    author: "Geoffrey Garner",
    slug: "stephen-curry-montessori",
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

export default function BlogPosts() {
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
          <h2 className="font-bubblegum-sans text-primary mb-4 text-3xl md:text-4xl">Our Blog</h2>
          <p className="text-muted-foreground mx-auto max-w-2xl">
            Insights, tips, and stories from our Montessori community to help you support your
            child&apos;s development and education.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {blogPosts.map(post => (
            <motion.div key={post.id} variants={itemVariants}>
              <Card className="h-full overflow-hidden border-none shadow-md transition-shadow hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="text-muted-foreground mb-3 flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <CalendarDays size={14} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User size={14} />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <h3 className="mb-2 line-clamp-2 text-xl font-semibold">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-primary transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                  <Button asChild variant="outline" size="sm">
                    <Link href={`/blog/${post.slug}`}>Read More</Link>
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
