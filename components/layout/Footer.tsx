import Link from "next/link"
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bubblegum-sans mb-4">Opus Montessori School</h3>
            <address className="not-italic flex flex-col gap-2">
              <div className="flex items-start gap-2">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>
                  180 Hawthorne Road<br />
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
            <h3 className="text-xl font-bubblegum-sans mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="hover:underline">Home</Link>
              <Link href="/about" className="hover:underline">About Us</Link>
              <Link href="/admissions" className="hover:underline">Admissions</Link>
              <Link href="/blog" className="hover:underline">Blog</Link>
              <Link href="/contact" className="hover:underline">Contact Us</Link>
            </nav>
          </div>
          
          <div>
            <h3 className="text-xl font-bubblegum-sans mb-4">Connect With Us</h3>
            <div className="flex gap-4 mb-6">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary-foreground/20 hover:bg-primary-foreground/30 p-2 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary-foreground/20 hover:bg-primary-foreground/30 p-2 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="mailto:info@opusmontessori.org" 
                className="bg-primary-foreground/20 hover:bg-primary-foreground/30 p-2 rounded-full transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="text-sm">
              Subscribe to our newsletter for updates on events, enrollment, and educational insights.
            </p>
          </div>
        </div>
        
        <Separator className="bg-primary-foreground/20 my-6" />
        
        <div className="text-center text-sm text-primary-foreground/70">
          <p>© {currentYear} Opus Montessori School. All rights reserved.</p>
          <p className="mt-2">
            "Educating for Today, Tomorrow and Beyond"
          </p>
        </div>
      </div>
    </footer>
  )
}
