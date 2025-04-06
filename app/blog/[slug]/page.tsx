import MainLayout from "@/components/layout/MainLayout"
import { Button } from "@/components/ui/button"
import { CalendarDays, User, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import { YouTubeEmbed } from "@/components/ui/youtube-embed"

// Sample blog posts data - this would typically come from a CMS or API
const blogPosts = [
  {
    id: 1,
    title: "Learning to Love Education",
    excerpt: "Learning To Love To Learn",
    content: `
<p>The goal of the Pre-primary years is to help each child fall in love with learning. Activities in practical life, language development, mathematics, geography, history, music, art and religion are offered.</p>
<p>Each child is shown how to use the Montessori materials, and the self-correcting quality of the work chosen enables each student to participate as his or her own "teacher". Meanwhile guided repetition helps each child focus and gain confidence in his abilities.</p>
    `,
    date: "December 4 2019",
    author: "Geoffrey Garner",
    slug: "learning-to-love-education",
  },
  {
    id: 2,
    title: "Stephen Curry NBA MVP & Montessori",
    excerpt: "Stephen Curry loves Montessori education!",
    content: `
<p>Montessori classrooms have a bit more flexibility in terms of daily scheduling than most schools. One critical element that must remain is the three-hour work cycle in the morning. Beyond that, our teachers are able to schedule class meetings regularly, or any time conflict arises. We teach our students skills they need to navigate all sorts of interpersonal situations, including how to advocate for themselves and others.</p>
<p>Another interesting aspect of a Montessori classroom is that even young children have frequent opportunities to present their work and ideas to their classmates. Being able to stand up and speak in front of a group of people seems to have a profoundly powerful effect on how we are able to convey, with confidence, our ideas and feelings.</p>
<p>Did you know that there are a number of well-known figures who attribute their Montessori education at least partially to their success? People like Larry Page and Sergey Brin the creators of Goggle and Jeff Bezos the creator of Amazon. In this video, NBA MVP Stephen Curry shares how his own Montessori education gave him the confidence necessary to become the successful adult he is today.</p>
    `,
    date: "December 4 2019",
    author: "Geoffrey Garner",
    slug: "stephen-curry-montessori",
    videoId: "Pb8kUvKcVTw",
  },
]

// Helper function to get post by slug
async function getPostBySlug(slug: string) {
  // In a real app, this would be an API or database call
  return blogPosts.find(post => post.slug === slug)
}

export async function generateStaticParams() {
  return blogPosts.map(post => ({
    slug: post.slug,
  }))
}

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> => {
  const { slug } = params

  const post = await getPostBySlug(slug)

  if (!post) {
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found.",
    }
  }

  return {
    title: `${post.title}`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <MainLayout>
      <div className="pt-4">
        <article className="container mx-auto max-w-4xl px-4 py-12">
          <Button variant="ghost" size="sm" className="mb-6" asChild>
            <Link href="/blog" className="flex items-center gap-2">
              <ArrowLeft size={16} />
              Back to all posts
            </Link>
          </Button>

          <div className="mb-8">
            <h1 className="font-bubblegum-sans text-primary mb-4 text-3xl md:text-4xl">
              {post.title}
            </h1>

            <div className="text-muted-foreground mb-6 flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <CalendarDays size={14} />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <User size={14} />
                <span>{post.author}</span>
              </div>
            </div>
          </div>

          <div
            className="prose prose-slate max-w-none text-sm md:text-base [&>p]:mb-6 [&>p:not(:last-child)]:mb-8"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {post.videoId && (
            <div className="mt-6">
              <YouTubeEmbed videoId={post.videoId} title={`Video for ${post.title}`} />
            </div>
          )}
        </article>
      </div>
    </MainLayout>
  )
}
