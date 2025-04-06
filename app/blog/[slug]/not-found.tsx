import MainLayout from "@/components/layout/MainLayout"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function BlogNotFound() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="font-bubblegum-sans text-primary mb-6 text-4xl md:text-5xl">
          Blog Post Not Found
        </h1>
        <p className="text-muted-foreground mx-auto mb-8 max-w-2xl">
          We couldn&apos;t find the blog post you&apos;re looking for. It may have been moved or
          deleted.
        </p>
        <Button asChild>
          <Link href="/blog">Return to Blog</Link>
        </Button>
      </div>
    </MainLayout>
  )
}
