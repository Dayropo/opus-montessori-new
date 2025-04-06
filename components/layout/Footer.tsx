import Link from "next/link"
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8 text-sm md:text-base">
      <div className="container mx-auto px-4">
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-bubblegum-sans mb-4 text-xl">Opus Montessori School</h3>
            <address className="flex flex-col gap-2 not-italic">
              <div className="flex items-start gap-2">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>
                  180 Hawthorne Road
                  <br />
                  Barrington Hills, IL 60010
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} />
                <span>630-568-6787 (OPUS)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} />
                <a href="mailto:info@opusmontessori.org" className="hover:underline">
                  info@opusmontessori.org
                </a>
              </div>
            </address>
          </div>

          <div>
            <h3 className="font-bubblegum-sans mb-4 text-xl">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <Link href="/about" className="hover:underline">
                About Us
              </Link>
              <Link href="/admissions" className="hover:underline">
                Admissions
              </Link>
              <Link href="/blog" className="hover:underline">
                Blog
              </Link>
              <Link href="/contact" className="hover:underline">
                Contact Us
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="font-bubblegum-sans mb-4 text-xl">Connect With Us</h3>
            <div className="mb-6 flex gap-4">
              <a
                href="https://facebook.com/opusmontessori"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-foreground/20 hover:bg-primary-foreground/30 rounded-full p-2 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com/opusmontessorischool"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-foreground/20 hover:bg-primary-foreground/30 rounded-full p-2 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:info@opusmontessori.org"
                className="bg-primary-foreground/20 hover:bg-primary-foreground/30 rounded-full p-2 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="text-sm">
              Subscribe to our newsletter for updates on events, enrollment, and educational
              insights.
            </p>
          </div>
        </div>

        <Separator className="bg-primary-foreground/20 my-6" />

        <div className="text-primary-foreground/70 text-center text-sm">
          <p>© {currentYear} Opus Montessori School. All rights reserved.</p>
          <p className="mt-2">&quot;Educating for Today, Tomorrow and Beyond&quot;</p>
        </div>
      </div>
    </footer>
  )
}
