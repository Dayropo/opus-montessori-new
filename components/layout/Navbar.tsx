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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
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
            <span className="text-sm text-muted-foreground">Montessori School</span>
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
                      <NavigationMenuTrigger className="bg-transparent hover:bg-accent/50 focus:bg-accent/50 data-[state=open]:bg-accent/50">
                        {link.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4">
                          {link.children.map(child => (
                            <li key={child.href}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={child.href}
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                >
                                  <div className="text-sm font-medium leading-none">
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
                        "bg-transparent hover:bg-accent/50 focus:bg-accent/50"
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
            <SheetContent side="right" className="w-[300px] sm:w-[400px] p-6">
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
                      <span className="text-xs text-muted-foreground">Montessori School</span>
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
                            <div className="flex flex-col space-y-1 pl-4 border-l-2 border-primary/20">
                              {link.children.map(child => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  className="py-2 px-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent/50"
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
                        className="block py-3 text-foreground hover:text-primary transition-colors text-sm font-medium"
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
