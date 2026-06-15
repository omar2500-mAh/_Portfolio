# Omar Faruque — Personal Portfolio

A premium, fully dynamic, responsive portfolio for an Electrical & Electronic Engineering researcher. Built with **React + Vite + Tailwind CSS + Framer Motion**. Every piece of content is driven by a single file (or a browser-based admin panel) — you never touch the design to update content.

---

## 1. Run it

You need [Node.js](https://nodejs.org) (v18+).

```bash
npm install      # install dependencies (first time only)
npm run dev      # start the dev server → http://localhost:5173
```

To build for production / deploy:

```bash
npm run build    # output goes to /dist
npm run preview  # preview the production build locally
```

Deploy the `dist/` folder to **Netlify, Vercel, GitHub Pages**, or any static host.
(On Netlify/Vercel add a redirect so `/admin` and refreshes work — see section 6.)

---

## 2. The most important file: `src/data/portfolioData.js`

**Everything on the site comes from this one file.** Open it and you'll see clearly labelled sections:

```
heroData            → name, title, tagline, profile photo, buttons, stats
aboutData           → intro paragraphs + quick-fact cards
highlightSections   → the alternating image + text feature blocks
galleryItems        → gallery images (+ galleryCategories for the filters)
researchProjects    → research / thesis / project / prototype cards
awardsCertificates  → honours, awards, certificates, workshops
skills              → categorised skills with levels
education           → education timeline
experience          → experience timeline
publications        → papers (section auto-hides if empty)
contactInfo         → location, phone, email, form recipient
socialLinks         → Facebook / LinkedIn / GitHub / Instagram / Scholar / ResearchGate
navLinks            → the navbar links + order
siteMeta            → brand name, footer tagline, copyright
```

### Three rules to remember
1. **Empty array = hidden section.** Set anything to `[]` and its whole section disappears (and its navbar link too).
2. **External links open in a new tab automatically.** Leave a link `""` (empty) and its button hides itself.
3. **Broken / missing images** show a clean placeholder instead of breaking the layout.

---

## 3. How to add / edit / delete content

### General pattern
- **ADD** → copy an existing `{ ... }` block, paste it right after, change the values. Give it a new unique `id`.
- **EDIT** → change the text between the quotes.
- **DELETE** → remove the whole `{ ... }` block including its trailing comma.

### Add a gallery image
In `galleryItems`, add:
```js
{
  id: "g-7",                       // must be unique
  title: "My New Photo",
  description: "Short caption.",
  category: "Research",            // must match one in galleryCategories
  date: "2025",
  image: "/assets/images/my-photo.jpg",
  link: "",                        // optional; empty hides the button
},
```

### Add a project / thesis / research entry
In `researchProjects`, add a block. Key fields:
```js
{
  id: "rp-4",
  title: "...",
  category: "Research",            // Research | Thesis | Project | Publication | Prototype
  status: "Ongoing",              // Ongoing | Completed | Published | Prototype
  summary: "One-line summary.",
  description: "Longer description.",
  problem: "...", objective: "...", methodology: "...", results: "...",
  tools: ["MATLAB", "Arduino"],
  image: "/assets/images/my-project.jpg",
  tags: ["Li-ion", "IoT"],
  links: [
    { label: "GitHub", url: "https://github.com/..." },
    { label: "Report", url: "https://..." },
  ],
},
```

### Add an award / certificate
In `awardsCertificates`:
```js
{
  id: "aw-4",
  title: "Certificate Name",
  organization: "Issuing Body",
  date: "2025",
  category: "Certificate",         // Award | Certificate | Workshop | Internship | Competition | Volunteerism
  description: "Short description.",
  image: "/assets/images/cert.jpg",
  link: "https://...",             // empty "" → no button shown
},
```

### Edit contact info
Change the values in `contactInfo` (location, phone, email). The contact form sends to `formRecipient`.

### Edit links / socials
In `socialLinks`, paste your real profile URLs. Set a `url` to `""` to hide that icon everywhere.

---

## 4. Adding your images

Put image files in **`public/assets/images/`** and reference them as `/assets/images/filename.jpg`.

Recommended files to add (referenced in the sample data):
```
profile.jpg            hero portrait
about.jpg              about-section photo
highlight-battery.jpg, highlight-solar.jpg
gallery-1.jpg … gallery-6.jpg
research-batio3.jpg, research-lantern.jpg, research-solpe.jpg
award-1.jpg, award-2.jpg, award-3.jpg
```
You can also use any web URL (e.g. `"https://..."`) instead of a local file. Until you add an image, a neat placeholder appears — nothing breaks.

---

## 5. The Admin panel (`/admin`) — edit without code

Go to **`http://localhost:5173/admin`** (or `yoursite.com/admin`).

- Pick any section in the left sidebar.
- Edit the content, **Add item**, or delete items (trash icon), then **Save Section**.
- Changes save to your browser (localStorage) and appear on the site **instantly**.
- **Export** downloads a JSON backup of all your content; **Import** loads one back.
- **Reset** reverts everything to `portfolioData.js`.

> The admin panel is great for quick edits and previewing. To make changes **permanent for everyone** (and visible on first load with no localStorage), either paste the exported values into `portfolioData.js`, or keep using Export/Import as your backup. There is no password by default — see below.

### Optional: protect /admin
The panel has no login. For a personal site this is usually fine (it only edits your own browser's copy). If you want to hide it, the simplest option is to not link to it publicly. For real protection, deploy behind your host's password protection (Netlify/Vercel both offer this) or remove the `/admin` route from `src/App.jsx`.

---

## 6. Deploy notes (single-page app routing)

Because the site uses React Router, configure your host to send all routes to `index.html`:

- **Netlify** — create `public/_redirects` containing:
  ```
  /*  /index.html  200
  ```
- **Vercel** — add `vercel.json`:
  ```json
  { "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
  ```
- **GitHub Pages** — use a hash router or a 404.html fallback.

---

## 7. Project structure

```
src/
  components/
    Navbar.jsx           sticky nav, scroll spy, mobile drawer
    Hero.jsx             hero with animated circuit backdrop
    About.jsx            intro + info cards
    DynamicHighlights.jsx alternating feature blocks
    Gallery.jsx          filterable masonry + lightbox
    ResearchProjects.jsx research cards + read-more + detail modal
    Awards.jsx           awards/certificates with filters
    Skills.jsx           categorised skill bars
    Timeline.jsx         education + experience timelines
    Publications.jsx     papers (auto-hides if empty)
    Contact.jsx          contact info + mailto form
    Footer.jsx           footer + back-to-top
    Modal.jsx            reusable lightbox/modal
    SmartImage.jsx       lazy image with fallback placeholder
    SectionHeading.jsx   consistent section titles
    SocialIcons.jsx      social icon row
    Admin.jsx            /admin content manager
  context/
    DataContext.jsx      merges portfolioData.js with admin edits
  hooks/
    useScrollSpy.js      active-section detection
  data/
    portfolioData.js     ← ALL YOUR CONTENT
  App.jsx                routes + section visibility
  main.jsx               entry point
  index.css              Tailwind + base styles
public/
  assets/images/         ← put your images here
  favicon.svg
```

---

## 8. Switching the contact form to EmailJS (optional)

By default the form opens the visitor's email app (`mailto:`), which needs no backend. To send directly via [EmailJS](https://www.emailjs.com):

1. `npm install @emailjs/browser`
2. In `src/components/Contact.jsx`, replace the `handleSubmit` body with an `emailjs.send(SERVICE_ID, TEMPLATE_ID, {...}, PUBLIC_KEY)` call using your EmailJS credentials.

---

Built to be edited in minutes, not hours. Update `portfolioData.js`, drop in your images, and you're live.
