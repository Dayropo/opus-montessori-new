import type { Metadata } from "next"
import "@/styles/globals.css"
import { bubblegumSans, montserrat } from "@/styles/fonts"

export const metadata: Metadata = {
  title: {
    template: "%s | Opus Montessori School",
    default: "Opus Montessori School | Educating for Today, Tomorrow and Beyond",
  },
  description:
    "Opus Montessori School provides the right tools, materials, guidance and space for education in Barrington Hills, IL.",
  keywords: [
    "montessori",
    "education",
    "preschool",
    "kindergarten",
    "barrington hills",
    "child development",
  ],
  authors: [{ name: "Opus Montessori School" }],
  creator: "Opus Montessori School",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${bubblegumSans.variable} ${montserrat.variable} font-montserrat antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
