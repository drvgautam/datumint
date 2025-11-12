# Product Requirements Document (PRD)
## DatumInt Consulting Website Redesign

**Version:** 1.0  
**Date:** November 2025  
**Status:** Draft  
**Owner:** DatumInt Consulting

---

## 1. Executive Summary

### 1.1 Purpose
Transform the DatumInt consulting website into a high-converting, professional platform that effectively communicates value proposition, builds trust, and drives client engagement. This PRD outlines requirements for content, layout, UX, and functionality improvements based on industry best practices from leading consulting sites.

### 1.2 Goals
- **Increase Conversion Rate**: Improve visitor-to-lead conversion by 40%
- **Build Trust**: Showcase expertise through case studies, testimonials, and social proof
- **Clarify Value Proposition**: Make services and outcomes immediately clear
- **Improve Engagement**: Increase average session duration by 30%
- **Professional Presentation**: Match or exceed the quality of top-tier consulting sites

### 1.3 Scope
- Homepage redesign with enhanced hero and value proposition
- Services page enhancement with clear engagement models
- Case studies/projects page with detailed storytelling
- Testimonials section with video/rich media support
- Process/workflow visualization
- Social proof elements (client logos, metrics, trust indicators)
- Contact/CTA optimization
- Mobile responsiveness improvements

### 1.4 Out of Scope
- Backend functionality (forms, CMS integration)
- Blog functionality changes (keep existing)
- Complete site rebuild (work within Astro framework)
- Third-party integrations (analytics, CRM) - future phase

---

## 2. Current State Analysis

### 2.1 Strengths
- ✅ Clear technical value proposition
- ✅ Professional, minimal design
- ✅ Good project showcase structure
- ✅ Testimonial component exists
- ✅ Fast, lightweight (Astro)

### 2.2 Weaknesses
- ❌ Hero section lacks impact and visual interest
- ❌ No clear social proof metrics (e.g., "40+ projects delivered")
- ❌ Services page lacks pricing/engagement model clarity
- ❌ Process/workflow not visualized
- ❌ Testimonials are text-only, no video/rich media
- ❌ Limited interactive elements
- ❌ CTA placement and hierarchy could be improved
- ❌ Client logos section exists but underutilized

---

## 3. Target Audience

### 3.1 Primary Personas

**Persona 1: Technical Decision Maker (CTO, VP Engineering)**
- **Needs**: Understand technical approach, see proven results, evaluate team expertise
- **Pain Points**: Need to justify investment, want to see ROI, require technical credibility
- **Goals**: Find reliable partner for complex data engineering projects

**Persona 2: Business Leader (CDO, VP Data)**
- **Needs**: Clear business outcomes, ROI demonstration, process transparency
- **Pain Points**: Need to understand value quickly, want to see similar companies, require trust signals
- **Goals**: Make informed decision about consulting engagement

**Persona 3: Procurement/Finance**
- **Needs**: Clear pricing, engagement models, contract terms
- **Pain Points**: Need to compare options, understand deliverables, budget planning
- **Goals**: Evaluate cost and value proposition

---

## 4. Content Requirements

### 4.1 Homepage Hero Section

**Current State**: Text-heavy, minimal visual interest

**Requirements**:
- **Headline**: Compelling, benefit-focused headline (max 10 words)
  - Example: "Turn Your Data Into a Semantic Knowledge Graph in 8 Weeks"
  - Must include: Outcome + Timeline
- **Subheadline**: Clear value proposition (max 20 words)
  - Current: "DatumInt designs meaning-aware data foundations for AI"
  - Enhanced: "We help enterprises build semantic data platforms that make AI actually work — with traceable sources, not hallucinations."
- **Visual Element**: 
  - Add animated/interactive visual (diagram, process flow, or abstract visualization)
  - Consider: Animated knowledge graph visualization, data flow diagram, or abstract tech illustration
  - Should be lightweight (SVG or CSS animation, no heavy JS)
- **Primary CTA**: "Book a Discovery Call" (prominent, above fold)
- **Secondary CTA**: "See Our Work" or "View Case Studies"
- **Trust Indicators**: Add below hero
  - "Trusted by X+ companies" or "X+ projects delivered"
  - Client count or project count metric

**Content Specifications**:
```
Hero Section Structure:
├── Badge/Pill: "Semantic Data Engineering Experts" (optional)
├── Headline: [Outcome-focused, 8-10 words]
├── Subheadline: [Value prop, 15-20 words]
├── Visual: [Animated diagram/illustration]
├── CTA Row: [Primary + Secondary buttons]
└── Trust Metrics: [X+ projects | X+ clients | X years experience]
```

### 4.2 Social Proof Section

**Requirements**:
- **Client Logos Grid**: 
  - Display 8-12 client/partner logos (if available, use placeholders if not)
  - Add hover states with company name
  - Animated scroll/marquee effect (optional, subtle)
- **Metrics Dashboard**:
  - "40+ Projects Delivered" (or actual number)
  - "X+ Years of Experience"
  - "X% Client Satisfaction" (if available)
  - "X+ Knowledge Graphs Built"
  - Display in card format with icons
- **Testimonial Carousel**:
  - 3-5 featured testimonials
  - Include: Quote, Author Name, Role, Company (if allowed), Photo/Avatar
  - Add video testimonials if available (embedded YouTube/Vimeo)
  - Auto-rotate every 5 seconds (pause on hover)

**Content Specifications**:
```
Social Proof Section:
├── Section Header: "Trusted by Industry Leaders"
├── Client Logos: [Grid of 8-12 logos]
├── Metrics Cards: [4 key metrics in card layout]
└── Testimonial Carousel: [3-5 testimonials with photos]
```

### 4.3 Services/What We Do Section

**Current State**: Text-based, lacks visual hierarchy

**Requirements**:
- **Service Cards**: Convert to card-based layout
  - Each service: Icon/Illustration, Title, Description (2-3 sentences), Key Benefits (3-4 bullet points)
  - Services to highlight:
    1. **Semantic Data Engineering**
       - Knowledge graph design
       - Ontology development
       - Data modeling
    2. **FAIR Data Pipelines**
       - Metadata management
       - Lineage tracking
       - Governance frameworks
    3. **GenAI with Context**
       - RAG implementation
       - Citation systems
       - Knowledge retrieval
- **Engagement Models**: Add clear section
  - Project-based (fixed scope, timeline)
  - Retainer (ongoing support)
  - Advisory (strategic guidance)
  - Include typical duration and investment range (if appropriate)

**Content Specifications**:
```
Services Section:
├── Section Header: "What We Do" / "Our Services"
├── Service Cards (3): [Icon + Title + Description + Benefits]
├── Engagement Models: [3 models with descriptions]
└── CTA: "Discuss Your Project" button
```

### 4.4 Process/Workflow Section

**Current State**: Not present

**Requirements**:
- **Visual Process Flow**: Create step-by-step visualization
  - Step 1: Discovery & Strategy (Week 1)
    - Client consultation
    - Requirements analysis
    - Technical assessment
  - Step 2: Design & Planning (Week 2)
    - Architecture design
    - Ontology development
    - Pipeline specification
  - Step 3: Development & Implementation (Weeks 3-6)
    - Knowledge graph construction
    - Pipeline development
    - Integration work
  - Step 4: Testing & Deployment (Week 7)
    - Quality assurance
    - Performance optimization
    - Deployment
  - Step 5: Handoff & Support (Week 8+)
    - Documentation
    - Training
    - Ongoing support
- **Timeline Visualization**: 
  - Horizontal timeline with milestones
  - Interactive hover states showing details
  - Mobile: Vertical timeline
- **Deliverables at Each Stage**: Clear list per phase

**Content Specifications**:
```
Process Section:
├── Section Header: "How We Work" / "Our Process"
├── Timeline Visualization: [5 steps with icons]
├── Step Details: [Expandable or hover-reveal details]
└── CTA: "Start Your Project" button
```

### 4.5 Case Studies/Projects Section

**Current State**: Basic project cards

**Requirements**:
- **Enhanced Project Cards**:
  - Larger, more visual cards
  - Before/After metrics (if available)
  - Challenge → Solution → Outcome structure
  - Technology stack tags
  - Client testimonial quote (if available)
  - "Read Full Case Study" link
- **Detailed Case Study Pages**:
  - Challenge section (problem statement)
  - Approach section (methodology)
  - Solution section (what was built)
  - Results section (metrics, outcomes)
  - Technologies used
  - Client quote
  - Related projects
- **Filtering/Tagging**: 
  - Filter by industry, technology, service type
  - Tag-based navigation

**Content Specifications**:
```
Projects Section:
├── Section Header: "Case Studies" / "Our Work"
├── Filter Bar: [Industry | Technology | Service Type]
├── Project Grid: [3-6 featured projects in card layout]
└── "View All Projects" link
```

### 4.6 Testimonials Section

**Current State**: Single testimonial component

**Requirements**:
- **Rich Media Testimonials**:
  - Video testimonials (embedded)
  - Photo + quote format
  - Company logo (if allowed)
  - Full attribution (name, role, company)
- **Testimonial Categories**:
  - Technical testimonials (from engineers/CTOs)
  - Business testimonials (from business leaders)
  - ROI/Results testimonials (with metrics)
- **Layout Options**:
  - Carousel/slider
  - Grid layout (3 columns desktop, 1 mobile)
  - Featured testimonial (larger, above others)

**Content Specifications**:
```
Testimonials Section:
├── Section Header: "What Clients Say"
├── Featured Testimonial: [Large, prominent]
├── Testimonial Grid: [3-6 testimonials]
└── Video Testimonials: [Embedded if available]
```

### 4.7 About Section Enhancement

**Current State**: Basic about page

**Requirements**:
- **Team Section**: 
  - Founder/lead profiles
  - Photo, bio, expertise areas
  - LinkedIn links
- **Company Story**:
  - Why DatumInt exists
  - Mission/vision
  - Values
- **Expertise Areas**:
  - Visual representation of skills/domains
  - Years of experience per area
  - Certifications/credentials (if any)

### 4.8 Contact/CTA Optimization

**Requirements**:
- **Multiple CTAs Throughout Site**:
  - Sticky/fixed CTA bar (mobile)
  - Inline CTAs in content sections
  - Footer CTA
- **Contact Form Enhancement**:
  - Clear fields: Name, Email, Company, Project Type, Message
  - Dropdown for project type (Semantic Engineering, FAIR Pipelines, GenAI, Other)
  - Calendar booking integration (Cal.com or similar)
- **Contact Page**:
  - Multiple contact methods
  - Response time expectations
  - FAQ section

---

## 5. Layout & Design Requirements

### 5.1 Design System

**Color Palette** (Maintain current with enhancements):
- Primary: Current accent colors (teal, purple, yellow)
- Add: Neutral grays for better contrast
- Add: Success/error states for forms

**Typography**:
- Headlines: Bold, 2rem - 3rem (responsive)
- Body: 1rem, line-height 1.6
- Improve hierarchy with font weights

**Spacing**:
- Consistent section padding: 4rem desktop, 2rem mobile
- Card spacing: 1.5rem gap
- Content max-width: 1200px

### 5.2 Component Library

**Required Components**:
1. **Hero Component**: Enhanced with visual element
2. **Service Card**: Icon + content card
3. **Process Timeline**: Step-by-step visualization
4. **Project Card**: Enhanced with metrics
5. **Testimonial Card**: Photo + quote + attribution
6. **Metrics Card**: Number + label + icon
7. **CTA Button**: Primary and secondary variants
8. **Client Logo Grid**: Responsive grid with hover states

### 5.3 Page Layouts

**Homepage Structure**:
```
┌─────────────────────────────────────┐
│ Header (sticky)                     │
├─────────────────────────────────────┤
│ Hero Section (full-width)           │
│ - Headline + Visual + CTAs          │
├─────────────────────────────────────┤
│ Social Proof (metrics + logos)      │
├─────────────────────────────────────┤
│ Services Overview (3 cards)         │
├─────────────────────────────────────┤
│ Process/Workflow (timeline)         │
├─────────────────────────────────────┤
│ Featured Projects (3-4 cards)       │
├─────────────────────────────────────┤
│ Testimonials (carousel/grid)        │
├─────────────────────────────────────┤
│ CTA Section (contact form/booking)   │
├─────────────────────────────────────┤
│ Footer                               │
└─────────────────────────────────────┘
```

**Services Page Structure**:
```
┌─────────────────────────────────────┐
│ Header                               │
├─────────────────────────────────────┤
│ Page Hero (title + description)      │
├─────────────────────────────────────┤
│ Service Cards (detailed)             │
├─────────────────────────────────────┤
│ Engagement Models                    │
├─────────────────────────────────────┤
│ FAQ Section                          │
├─────────────────────────────────────┤
│ CTA Section                          │
├─────────────────────────────────────┤
│ Footer                               │
└─────────────────────────────────────┘
```

### 5.4 Responsive Design

**Breakpoints**:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

**Mobile Considerations**:
- Stack all sections vertically
- Reduce font sizes by 20%
- Simplify navigation (hamburger menu)
- Touch-friendly buttons (min 44px height)
- Optimize images (WebP format)

---

## 6. UX/UI Requirements

### 6.1 Navigation

**Requirements**:
- **Sticky Header**: Always visible, transparent on scroll (optional)
- **Mobile Menu**: Hamburger menu with slide-out drawer
- **Active States**: Clear indication of current page
- **Smooth Scrolling**: For anchor links

### 6.2 Interactions

**Required Interactions**:
- **Hover States**: All clickable elements
- **Loading States**: For any async content
- **Micro-animations**: 
  - Fade-in on scroll (intersection observer)
  - Button hover effects
  - Card hover lift effect
- **Transitions**: Smooth page transitions (Astro view transitions)

### 6.3 Accessibility

**Requirements**:
- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader optimization
- Color contrast ratios (4.5:1 minimum)
- Alt text for all images
- ARIA labels where needed

### 6.4 Performance

**Requirements**:
- Lighthouse score: 90+ (Performance, Accessibility, Best Practices, SEO)
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Image optimization (WebP, lazy loading)
- Minimal JavaScript (Astro islands for interactivity)

---

## 7. Technical Requirements

### 7.1 Framework & Tools

**Current Stack** (Maintain):
- Astro (static site generator)
- CSS (current theme.css)
- No heavy JavaScript frameworks

**Additions**:
- Astro View Transitions (for smooth page transitions)
- Intersection Observer API (for scroll animations)
- Lightweight animation library (if needed): Framer Motion or CSS animations

### 7.2 Component Architecture

**Structure**:
```
src/
├── components/
│   ├── Hero.astro (enhanced)
│   ├── ServiceCard.astro (new)
│   ├── ProcessTimeline.astro (new)
│   ├── ProjectCard.astro (enhanced)
│   ├── TestimonialCard.astro (enhanced)
│   ├── MetricsCard.astro (new)
│   ├── ClientLogoGrid.astro (enhanced)
│   └── CTA.astro (new)
├── layouts/
│   └── BaseLayout.astro (enhanced)
└── pages/
    ├── index.astro (redesigned)
    ├── services.astro (enhanced)
    ├── projects.astro (enhanced)
    └── [case-study].astro (new dynamic route)
```

### 7.3 Content Management

**Approach**:
- Static content in Astro components/pages
- Case studies as markdown files (frontmatter for metadata)
- Testimonials as JSON or frontmatter
- Future: Consider headless CMS (Contentful, Sanity) for Phase 2

### 7.4 SEO Requirements

**Requirements**:
- Meta tags for all pages
- Open Graph tags
- Structured data (JSON-LD) for:
  - Organization
  - Service
  - Review/Rating (testimonials)
- Sitemap.xml
- robots.txt optimization

---

## 8. Content Specifications

### 8.1 Copy Guidelines

**Tone of Voice**:
- Professional but approachable
- Technical accuracy without jargon overload
- Benefit-focused (outcomes over features)
- Confident but not boastful

**Writing Style**:
- Short paragraphs (2-3 sentences max)
- Bullet points for lists
- Active voice
- Clear, concise language

### 8.2 Required Content

**Homepage**:
- [ ] Hero headline (8-10 words)
- [ ] Hero subheadline (15-20 words)
- [ ] 3 service descriptions (2-3 sentences each)
- [ ] Process description (5 steps)
- [ ] 3-4 featured project summaries
- [ ] 3-5 testimonials
- [ ] Trust metrics (numbers)

**Services Page**:
- [ ] Detailed service descriptions
- [ ] Engagement model descriptions
- [ ] FAQ (5-8 questions)

**Case Studies**:
- [ ] 3-5 detailed case studies
- [ ] Each with: Challenge, Approach, Solution, Results

**About Page**:
- [ ] Company story (300-500 words)
- [ ] Team member bios
- [ ] Mission/vision statement

---

## 9. Success Metrics

### 9.1 Key Performance Indicators (KPIs)

**Primary Metrics**:
- **Conversion Rate**: % of visitors who contact/book a call
  - Current baseline: [To be measured]
  - Target: 40% increase
- **Engagement Rate**: Average session duration
  - Target: 30% increase
- **Bounce Rate**: 
  - Target: < 50%

**Secondary Metrics**:
- Pages per session
- Time on page (homepage, services, projects)
- CTA click-through rate
- Form submission rate

### 9.2 Measurement Tools

**Required**:
- Google Analytics 4 (or similar)
- Heat mapping tool (Hotjar, Microsoft Clarity)
- Form analytics (if using form service)

---

## 10. Implementation Phases

### Phase 1: Foundation (Weeks 1-2)
- [ ] Design system documentation
- [ ] Component library setup
- [ ] Homepage hero redesign
- [ ] Social proof section
- [ ] Basic animations/interactions

### Phase 2: Content Enhancement (Weeks 3-4)
- [ ] Services page redesign
- [ ] Process/workflow visualization
- [ ] Enhanced project cards
- [ ] Testimonials section upgrade
- [ ] Case study pages

### Phase 3: Optimization (Weeks 5-6)
- [ ] Mobile responsiveness audit
- [ ] Performance optimization
- [ ] SEO implementation
- [ ] Accessibility audit
- [ ] Content refinement

### Phase 4: Launch & Iterate (Week 7+)
- [ ] Final QA
- [ ] Analytics setup
- [ ] Launch
- [ ] Monitor metrics
- [ ] Iterate based on data

---

## 11. Dependencies & Constraints

### 11.1 Dependencies
- Content creation (copywriting, case studies)
- Client testimonials (permissions, quotes)
- Client logos (permissions, high-res assets)
- Photography/illustrations (if custom visuals needed)

### 11.2 Constraints
- Must work within Astro framework
- Maintain current hosting setup
- No backend changes required
- Budget considerations (use free/open-source tools where possible)

### 11.3 Assumptions
- Content can be provided/created
- Client permissions for testimonials/logos available
- No major technical blockers
- Astro view transitions supported in target browsers

---

## 12. Future Enhancements (Out of Scope)

**Phase 2 Considerations**:
- Blog integration improvements
- Client portal/login
- Interactive project calculator
- Live chat integration
- Advanced analytics dashboard
- A/B testing framework
- Multi-language support

---

## 13. Approval & Sign-off

**Stakeholders**:
- [ ] Product Owner
- [ ] Design Lead
- [ ] Development Lead
- [ ] Content/Marketing Lead

**Next Steps**:
1. Review and approve PRD
2. Create detailed design mockups
3. Begin content creation
4. Start Phase 1 implementation

---

## Appendix A: Reference Sites Analysis

### DreamLaunch Studio (https://www.dreamlaunch.studio/)
**Key Learnings**:
- Strong hero with clear value prop + timeline
- Social proof prominently displayed (40+ startups)
- Process visualization (4-step workflow)
- Pricing transparency
- Video testimonials
- Interactive elements (workflow cards)

### IgnytLabs (https://www.ignytlabs.com/)
**Key Learnings**:
- Clean, professional design
- Clear service offerings
- Strong visual hierarchy
- Smooth animations
- Professional presentation

---

**Document Status**: Draft for Review  
**Last Updated**: November 2025  
**Next Review**: [To be scheduled]

