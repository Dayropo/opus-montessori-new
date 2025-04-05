"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"

interface AnimatedElementProps {
  children: ReactNode
  className?: string
  animation?: "fadeIn" | "fadeInUp" | "fadeInDown" | "fadeInLeft" | "fadeInRight"
  delay?: number
  duration?: number
  once?: boolean
}

const animations = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  fadeInUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  },
  fadeInDown: {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 }
  }
}

export function AnimatedElement({
  children,
  className = "",
  animation = "fadeIn",
  delay = 0,
  duration = 0.5,
  once = true
}: AnimatedElementProps) {
  const selectedAnimation = animations[animation]

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      variants={selectedAnimation}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  )
}
