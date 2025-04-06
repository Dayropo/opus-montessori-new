# Opus Montessori School Website Changelog

All notable changes to the Opus Montessori School website project will be documented in this file.

## [Unreleased]

## [0.1.3] - 2025-04-06

### Fixed
- TypeScript error in blog post page
  - Updated generateMetadata function type definition to match Next.js 15 requirements
  - Fixed build error related to dynamic route parameters

## [0.1.2] - 2025-04-06

### Fixed
- ESLint errors related to unescaped entities (quotes and apostrophes)
  - Fixed unescaped entities in multiple components and pages
  - Replaced quotes and apostrophes with proper HTML entities
  - Improved build compatibility for deployment

## [0.1.1] - 2025-04-06

### Changed
- Simplified page titles across the site by removing "| Opus Montessori School" suffix
  - Updated metadata for About, Blog, Contact, Donate, and Admissions pages
  - Updated metadata for individual blog posts
  - Updated metadata for admissions process and scholarship pages

## [0.1.0] - 2025-04-06

### Added
- Blog functionality
  - Individual blog post pages with dynamic routing using slugs
  - YouTube video embedding capability for blog posts
  - Proper paragraph spacing and text formatting in blog content
  - Custom 404 page for blog posts with user-friendly navigation
  - Responsive text sizing for better mobile experience
- Social media integration
  - Updated Facebook and Instagram links with proper icons
  - Email contact link in footer

### Fixed
- Next.js App Router dynamic route parameter handling
- Deprecated social media icons replaced with current versions
- Typography and spacing consistency across the site
- Mobile responsiveness improvements with text size adjustments

## [0.0.4] - 2025-04-05

### Added
- Admissions section
  - Admissions process page with step-by-step guide
  - Scholarship information page
  - Interactive enrollment cards
  - Contact information for admissions inquiries
- Donation section
  - Support options and information
  - Recognition for sponsors and donors
  - Barrington Area Community Foundation scholarship highlight

## [0.0.3] - 2025-04-05

### Added
- Home page
  - Hero section with animated elements
  - School introduction and mission statement
  - Call to action components
- About page
  - School philosophy and guiding principles
  - Team members section
  - School history and mission
  - FAQ section with accordion interface

## [0.0.2] - 2025-04-05

### Added
- UI components integration
- Responsive navigation menu
- Footer with contact information and quick links
- Basic page structure and routing

## [0.0.1] - 2025-04-05

### Added
- Initial project setup
- Next.js 14 framework implementation
- Tailwind CSS configuration
- Basic project structure
- Component architecture foundation

---

## Types of Changes
- `Added` for new features
- `Changed` for changes in existing functionality
- `Deprecated` for soon-to-be removed features
- `Removed` for now removed features
- `Fixed` for any bug fixes
- `Security` in case of vulnerabilities
