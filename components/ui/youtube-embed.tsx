"use client"

import { useState, useEffect } from "react"

interface YouTubeEmbedProps {
  videoId: string
  title?: string
}

export function YouTubeEmbed({ videoId, title = "YouTube video player" }: YouTubeEmbedProps) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return (
      <div className="aspect-video w-full bg-muted/30 flex items-center justify-center rounded-md">
        <p className="text-muted-foreground">Loading video...</p>
      </div>
    )
  }

  return (
    <div className="aspect-video w-full mb-6">
      <iframe
        className="w-full h-full rounded-md"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  )
}
