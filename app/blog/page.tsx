import MainLayout from "@/components/layout/MainLayout"
import BlogPosts from "@/components/sections/BlogPosts"
import CallToAction from "@/components/sections/CallToAction"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog | Opus Montessori School",
  description: "Read articles, tips, and insights about Montessori education and child development from Opus Montessori School.",
}

export default function BlogPage() {
  return (
    <MainLayout>
      <div className="pt-16">
        <div className="bg-muted/30 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bubblegum-sans text-primary mb-4">
              Opus Blog
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Educational insights, school updates, and Montessori resources for parents and educators.
            </p>
          </div>
        </div>
        
        <BlogPosts />
        <CallToAction />
      </div>
    </MainLayout>
  )
}
