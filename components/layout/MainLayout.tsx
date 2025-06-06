"use client"

import { ReactNode } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { motion } from "framer-motion"

interface MainLayoutProps {
  children: ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Navbar />
      <motion.main
        className="flex-1 pt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  )
}
