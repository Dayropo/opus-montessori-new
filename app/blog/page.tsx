import MainLayout from "@/components/layout/MainLayout"
import BlogPosts from "@/components/sections/BlogPosts"
import CallToAction from "@/components/sections/CallToAction"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read articles, tips, and insights about Montessori education and child development from Opus Montessori School.",
}

export default function BlogPage() {
  return (
    <MainLayout>
      <div className="pt-4">
        <div className="bg-muted/30 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-bubblegum-sans text-primary mb-4 text-4xl md:text-5xl">
              Opus Blog
            </h1>
            <p className="text-muted-foreground mx-auto max-w-2xl text-sm md:text-base">
              Educational insights, school updates, and Montessori resources for parents and
              educators.
            </p>
          </div>
        </div>

        <BlogPosts />
        <CallToAction />
      </div>
    </MainLayout>
  )
}
