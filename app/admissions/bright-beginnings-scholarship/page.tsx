import type { Metadata } from "next"
import ScholarshipSection from "@/components/sections/ScholarshipSection"
import MainLayout from "@/components/layout/MainLayout"

export const metadata: Metadata = {
  title: "Bright Beginnings Scholarship | Opus Montessori",
  description:
    "Learn about our Bright Beginnings Scholarship program co-sponsored by the Barrington Area Community Foundation.",
}

export default function ScholarshipPage() {
  return (
    <MainLayout>
      <div className="pt-4">
        <ScholarshipSection />
      </div>
    </MainLayout>
  )
}
