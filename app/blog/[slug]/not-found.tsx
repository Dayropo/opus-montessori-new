import MainLayout from "@/components/layout/MainLayout"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function BlogNotFound() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bubblegum-sans text-primary mb-6">
          Blog Post Not Found
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          We couldn't find the blog post you're looking for. It may have been moved or deleted.
        </p>
        <Button asChild>
          <Link href="/blog">Return to Blog</Link>
        </Button>
      </div>
    </MainLayout>
  )
}
