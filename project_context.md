# Portfolio — Project Context

## Project goal

I am building a personal portfolio website to support my search for a software development internship.

The portfolio should present me as a serious, thoughtful junior developer and clearly showcase my strongest projects.

The site itself should not become a large or overly complex project. The main goal is to have a polished, professional version online within approximately four weeks.

---

## Target audience

The primary audience is:

- software development internship recruiters
- developers and technical leads
- small and medium-sized software companies
- potential internship supervisors

The site should make it easy for visitors to understand:

- who I am
- what kind of internship I am looking for
- what I can build
- which technologies I have practical experience with
- how I approach software development
- where they can find my GitHub, LinkedIn and contact details

---

## Design direction

The visual style should be:

- calm
- mature
- professional
- understated
- clean
- editorial
- spacious
- trustworthy

The site should avoid:

- neon colours
- large gradients
- glassmorphism
- flashy animations
- excessive rounded cards
- floating technology logos
- developer clichés
- overly playful visuals

The current Figma Make concept is the main visual reference.

Important visual characteristics:

- warm off-white background
- dark charcoal text
- muted blue accent colour
- serif display typography
- clean sans-serif body typography
- thin borders
- generous whitespace
- large project presentations
- restrained interaction and animation

Whitespace should be generous, but not so large that the site feels unnecessarily long.

---

## Technical stack

The initial stack is:

- React
- Vite
- JavaScript
- plain CSS
- CSS custom properties
- Git
- GitHub

Do not introduce additional frameworks or libraries unless they solve a clear problem.

In particular:

- do not use Tailwind CSS
- do not add a component library
- do not add a backend
- do not add a database
- do not add a CMS for version 1

Prefer native browser and CSS functionality where practical.

---

## CSS approach

The project uses CSS custom properties for design tokens.

Examples:

- colours
- typography
- spacing
- container widths
- borders
- responsive values

Prefer reusable CSS variables over repeatedly hard-coded values.

Keep the variable system small and understandable.

Use:

- CSS Grid
- Flexbox
- responsive units
- `clamp()` where useful
- semantic class names

Avoid unnecessary abstraction.

---

## Content structure

The initial portfolio should contain:

1. Header / navigation
2. Hero
3. Selected Projects
4. About
5. Skills
6. Contact
7. Footer

Separate project detail pages may be added for the strongest projects.

---

## Projects

Projects are the most important part of the portfolio.

Each project should focus on:

1. the problem
2. what I built
3. important technical decisions
4. technologies used
5. what I learned
6. screenshots or other real product visuals
7. live project link where available
8. GitHub link where appropriate

Use screenshots of the actual software rather than generic stock photography.

ThaiNook should be treated as the main featured project.

Other relevant school and personal projects can be added selectively.

Quality is more important than quantity.

---

## Development approach

I want to understand the code in this portfolio.

AI tools may help with implementation, debugging, refactoring and review, but they should not make all architectural decisions automatically.

Preferred workflow:

1. define the problem
2. decide the component or page structure
3. implement a small part
4. test it
5. review and understand the code
6. refactor only when useful
7. move to the next section

Avoid generating the entire website in one large step.

When making a significant implementation decision, explain the reasoning briefly.

---

## Component philosophy

Create components when they:

- are reused
- represent a meaningful UI section
- make the code easier to understand

Do not split every small element into its own component.

Prefer simple and readable component structures over premature abstraction.

---

## Responsive design

The site must work well on:

- desktop
- laptop
- tablet
- mobile

Desktop is the initial design reference, but responsiveness should be considered while building each section rather than added only at the end.

The mobile version should remain calm and readable.

---

## Accessibility

Use basic accessibility good practices throughout development:

- semantic HTML
- correct heading hierarchy
- keyboard-accessible navigation
- visible focus states
- useful alt text
- sufficient colour contrast
- descriptive link text

Accessibility should be built in rather than treated as a final patch.

---

## Performance

Keep the website lightweight.

Prefer:

- optimized screenshots
- appropriate image formats
- minimal dependencies
- simple interactions

Avoid adding libraries for effects that can easily be implemented with CSS.

---

## Version 1 boundaries

Version 1 does not need:

- authentication
- database integration
- admin functionality
- CMS
- blog
- dark mode
- complex animations
- page transition frameworks
- 3D effects
- WebGL
- elaborate filtering
- unnecessary JavaScript interactions

If an idea risks delaying the four-week target, prefer the simpler solution.

---

## Definition of done

Version 1 is ready when:

- the design feels coherent and professional
- the site works on desktop and mobile
- the strongest projects are clearly presented
- all text is final and proofread
- project links work
- GitHub and LinkedIn links work
- contact information is correct
- basic accessibility has been checked
- basic performance has been checked
- the site is deployed and can be used in internship applications

A finished, strong portfolio is more important than a feature-rich portfolio.
