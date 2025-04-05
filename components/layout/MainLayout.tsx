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
    <div className="flex flex-col min-h-[100dvh]">
      <Navbar />
      <motion.main 
        className="flex-1 pt-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  )
}
