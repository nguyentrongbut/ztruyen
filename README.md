# Ztruyen v1.0.0

<div align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js">
  <img src="https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=radix-ui&logoColor=white" alt="shadcn/ui">
</div>

## 🚀 Introduction

We are excited to announce the **first official release (v1.0.0)** of **zTruyen**, now available
at [ztruyen.io.vn](https://ztruyen.io.vn).  
The project was created to provide a smooth, simple, and enjoyable online manga reading experience.

- **Data Source**: powered by [OTruyen API](https://docs.otruyenapi.com/).
- **UI Design**: the initial interface takes inspiration from **BilibiliManga** to quickly validate and optimize the
  reading flow.

---

## 🚀 Tech Stack

- [Next.js 15](https://nextjs.org/) – React framework with SSR/SSG support.
- [shadcn/ui](https://ui.shadcn.com/) – UI component library (Radix + TailwindCSS).
- [TailwindCSS](https://tailwindcss.com/) – Utility-first CSS framework.
- [TypeScript](https://www.typescriptlang.org/) – Static typing.
- [React Hook Form](https://react-hook-form.com/) – Efficient form handling.
- [Zod](https://zod.dev/) – Schema validation.
- RESTful API integration with backend services.

---

## 📂 Project Structure

```bash
src
├── app                        # Next.js App Router pages
│   ├── danh-sach
│   ├── doc-truyen
│   ├── lich-su
│   ├── the-loai
│   ├── tim-kiem
│   ├── truyen-tranh
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── providers.tsx          # PostHog Provider
│   ├── robots.txt
│   ├── sitemap.ts
│   └── not-found.tsx
│
├── components
│   ├── common
│   ├── typography
│   └── ui                     # Shadcn UI components (shared UI elements)
│
├── configs
│   ├── api.ts                 # API endpoint configuration
│   └── layout.tsx             # Layout configuration (header, footer, etc.)
│
├── hooks                      # Custom React hooks
│
├── layouts                    # Global layouts (DefaultLayout, Header, Footer, etc.)
│   ├── DefaultLayout.tsx
│   └── components
│       ├── Footer.tsx
│       ├── Header
│       │   ├── Header.tsx
│       │   ├── NavHeader.tsx
│       │   └── NavHeaderMobile.tsx
│       └── Search.tsx
│
├── lib
│   ├── actions                # API service calls (server-side)
│   └── utils.ts
│
├── modules                    # Page-specific components (feature modules)
│   ├── doc-truyen
│   ├── home
│   ├── lich-su
│   ├── the-loai
│   └── truyen-tranh
│
├── skeleton                   # Skeleton loaders for UI states
│   ├── DynamicPageStatusSkeleton.tsx
│   ├── home
│   ├── the-loai
│   ├── tim-kiem
│   └── truyen-tranh
│
├── theme
│   └── ThemeProvider.tsx
│
├── types
│   ├── backend.d.ts           # Backend types
│   └── types.d.ts             # Shared component types
│
└── utils                      # Utility functions
```

---

## ✨ Features

- Online manga reading powered by OTruyen API.
- Clean, user-friendly interface inspired by BilibiliManga.
- Story detail pages, complete chapter lists, and chapter image viewer.
- Basic search functionality and category browsing.
- Automatically saves the manga and chapters you’ve read.
    - Added ability to **bulk delete reading history** for easier management.

---

## 🔍 SEO Improvements

- Optimized SEO with the **top keyword "ztruyen", "truyen echhi", etc, ...** to improve visibility on Google.
- Updated meta tags and heading structure for better search engine indexing.

---

## ⚙️ Installation & Setup

### Requirements

- Node.js >= 18
- pnpm/ npm / yarn

### Installation

```bash
# Clone repository
git clone https://github.com/nguyentrongbut/ztruyen.git
cd ztruyen

# Install dependencies
npm install
```

### Run Development

```bash
npm run dev
```

App will be available at: http://localhost:3000

### Build for Production

```bash
npm run build
npm start
```

## 🔧 Environment Variables

Create a .env.local file in the root directory based on the template below:

```env
# API
NEXT_PUBLIC_API_URL_CHAPTER_OUT_SIDE=https://sv1.otruyencdn.com/v1/api/chapter
NEXT_PUBLIC_API_URL_OUT_SIDE=https://otruyenapi.com/v1/api
NEXT_PUBLIC_URL_IMG=https://img.otruyenapi.com/uploads/comics

# POSTHOG
NEXT_PUBLIC_POSTHOG_KEY=YOUR_POSTHOG_KEY
NEXT_PUBLIC_POSTHOG_HOST=YOUR_POSTHOG_HOST

# GOOGLE SEARCH CONSOLE
NEXT_PUBLIC_VERIFICATION_GOOGLE=YOUR_VERIFICATION_GOOGLE
```

---

## 📌 Notes

- This is the **foundation release**: advanced features such as user accounts, real-time comments, performance
  optimizations and more will be added in future updates.
- All manga data is fetched directly from the OTruyen API.

---

## 🙌 Credits

- **OTruyen API** — primary data provider.
- **BilibiliManga** — inspiration for the first version of the UI/UX.

---

🌐 Official website: [ztruyen.io.vn](https://ztruyen.io.vn)
