"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const navLinks = [
  { href: "/about", label: "About Us" },
  {
    href: "/admissions",
    label: "Admissions",
    children: [
      { href: "/admissions/admissions-process", label: "Admissions Process" },
      { href: "/admissions/bright-beginnings-scholarship", label: "Bright Beginnings Scholarship" },
    ],
  },
  { href: "/blog", label: "Blog" },
  { href: "/donate", label: "Support Opus" },
  { href: "/contact", label: "Contact Us" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/90 shadow-sm backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.jpg"
            alt="Opus Montessori School"
            width={50}
            height={50}
            className="rounded-md"
          />
          <div className="flex flex-col">
            <span className="text-primary font-bubblegum-sans text-xl">Opus</span>
            <span className="font-bubblegum-sans text-muted-foreground text-sm">
              Montessori School
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              {navLinks.map(link => (
                <NavigationMenuItem key={link.href}>
                  {link.children ? (
                    <>
                      <NavigationMenuTrigger className="hover:bg-accent/50 focus:bg-accent/50 data-[state=open]:bg-accent/50 bg-transparent">
                        {link.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4">
                          {link.children.map(child => (
                            <li key={child.href}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={child.href}
                                  className="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none"
                                >
                                  <div className="text-sm leading-none font-medium">
                                    {child.label}
                                  </div>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "hover:bg-accent/50 focus:bg-accent/50 bg-transparent",
                      )}
                    >
                      {link.label}
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button className="text-foreground p-2" aria-label="Open menu">
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] p-6 sm:w-[400px]">
              <SheetHeader className="mb-6">
                <SheetTitle className="text-left">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/logo.jpg"
                      alt="Opus Montessori School"
                      width={40}
                      height={40}
                      className="rounded-md"
                    />
                    <div className="flex flex-col">
                      <span className="text-primary font-bubblegum-sans text-lg">Opus</span>
                      <span className="font-bubblegum-sans text-muted-foreground text-xs">
                        Montessori School
                      </span>
                    </div>
                  </div>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-2">
                {navLinks.map(link => (
                  <div key={link.href} className="py-1">
                    {link.children ? (
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value={link.href} className="border-b-0">
                          <AccordionTrigger className="py-3 font-medium hover:no-underline">
                            {link.label}
                          </AccordionTrigger>
                          <AccordionContent className="pb-2">
                            <div className="border-primary/20 flex flex-col space-y-1 border-l-2 pl-4">
                              {link.children.map(child => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  className="text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-md px-3 py-2 text-sm font-medium transition-colors"
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-foreground hover:text-primary block py-3 text-sm font-medium transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
