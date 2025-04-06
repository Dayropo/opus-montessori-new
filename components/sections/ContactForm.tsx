"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Send } from "lucide-react"

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    submitted: false,
    loading: false,
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target
    setFormState(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormState(prev => ({ ...prev, loading: true }))

    // Simulate form submission
    setTimeout(() => {
      setFormState(prev => ({
        ...prev,
        submitted: true,
        loading: false,
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      }))
    }, 1000)
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-bubblegum-sans text-primary mb-4 text-3xl md:text-4xl">
            Get in Touch
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl">
            We&apos;d love to hear from you! Fill out the form below and we&apos;ll get back to you
            as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="overflow-hidden border-none shadow-lg">
              <CardContent className="p-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2966.9168169792235!2d-88.1339!3d41.9676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880f1c1f1e2e0001%3A0x8a0c5e1c3c3c3c3c!2s180%20Hawthorne%20Rd%2C%20Barrington%20Hills%2C%20IL%2060010!5e0!3m2!1sen!2sus!4v1617123456789!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Opus Montessori School Location"
                />
                <div className="p-6 text-sm md:text-base">
                  <h3 className="mb-4 text-xl font-semibold">Contact Information</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium">Address:</p>
                      <p className="text-muted-foreground">
                        180 Hawthorne Road
                        <br />
                        Barrington Hills, IL 60010
                      </p>
                    </div>
                    <div>
                      <p className="font-medium">Phone:</p>
                      <p className="text-muted-foreground">630-568-6787 (OPUS)</p>
                    </div>
                    <div>
                      <p className="font-medium">Email:</p>
                      <p className="text-muted-foreground">info@opusmontessori.org</p>
                    </div>
                    <div>
                      <p className="font-medium">Hours:</p>
                      <p className="text-muted-foreground">
                        Monday - Friday: 7:00 AM - 6:00 PM
                        <br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                {formState.submitted ? (
                  <div className="py-12 text-center">
                    <div className="bg-primary/10 text-primary mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full">
                      <Send size={32} />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold">Thank You!</h3>
                    <p className="text-muted-foreground mb-6">
                      Your message has been sent successfully. We&apos;ll get back to you shortly.
                    </p>
                    <Button
                      onClick={() => setFormState(prev => ({ ...prev, submitted: false }))}
                      className="bg-primary hover:bg-primary/90"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="mb-1 block text-sm font-medium">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          className="border-input focus:ring-primary/50 w-full rounded-md border px-3 py-2 focus:ring-2 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="mb-1 block text-sm font-medium">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className="border-input focus:ring-primary/50 w-full rounded-md border px-3 py-2 focus:ring-2 focus:outline-none"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="phone" className="mb-1 block text-sm font-medium">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        className="border-input focus:ring-primary/50 w-full rounded-md border px-3 py-2 focus:ring-2 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="mb-1 block text-sm font-medium">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        required
                        className="border-input focus:ring-primary/50 w-full rounded-md border px-3 py-2 focus:ring-2 focus:outline-none"
                      >
                        <option value="">Select a subject</option>
                        <option value="Admissions Inquiry">Admissions Inquiry</option>
                        <option value="Tour Request">Tour Request</option>
                        <option value="Program Information">Program Information</option>
                        <option value="Employment">Employment</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="mb-1 block text-sm font-medium">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="border-input focus:ring-primary/50 w-full rounded-md border px-3 py-2 focus:ring-2 focus:outline-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="bg-primary hover:bg-primary/90 w-full"
                      disabled={formState.loading}
                    >
                      {formState.loading ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
