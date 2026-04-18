# KeenKeeper — The Relationship Almanac

A personal relationship tracker built for people, not pipelines. KeenKeeper helps you stay connected with the people who matter most — with a timeline of interactions, contact health tracking, and simple analytics.

---

## What it does

- **Dashboard** — See all your contacts at a glance with color-coded status (on track, almost due, overdue)
- **Profile pages** — Detailed view per contact with interaction history, tags, and contact info
- **Timeline** — Log calls, texts, and video chats. Filter by type. See your history.
- **Stats** — Pie chart breakdown of how you communicate across your relationships
- **Smart reminders** — Each contact has a custom communication goal. The app tells you who needs attention

---

## Tech Stack

| Layer         | Tool                         |
| ------------- | ---------------------------- |
| Framework     | Next.js 16 (App Router)      |
| UI Library    | React 19                     |
| Styling       | Tailwind CSS v4 + DaisyUI v5 |
| Charts        | Recharts                     |
| Animations    | Motion                       |
| Notifications | React Toastify               |
| Icons         | Lucide React + React Icons   |

---

## Getting Started

```bash
# Clone the repo
git clone https://github.com/yourusername/keenkeepernj.git
cd keenkeepernj

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
src/
├── app/
│   ├── page.js              # Home / dashboard
│   ├── layout.js            # Root layout with nav + footer
│   ├── profiles/[id]/       # Dynamic profile detail page
│   ├── timeline/            # Interaction history
│   └── stats/               # Analytics dashboard
├── components/
│   ├── Banner.jsx
│   ├── Profile.jsx
│   └── ...
├── utilities/
│   ├── ProfileCard.jsx
│   ├── TimelineCard.jsx
│   └── ...
└── context/
    └── AllDataProvider.jsx  # Global state for interaction history
```

---

## Design

Dark warm theme with a custom Tailwind palette:

- **Background** — Deep ink `#13110e`
- **Text** — Warm cream `#f3ead9`
- **Accent** — Gold `#d4a24c`
- **Fonts** — Fraunces (headings), Inter Tight (body), JetBrains Mono (metadata)

---

## Status

This is a learning project. Core features are working. Backend/auth and real data persistence are not yet implemented — profile data is currently loaded from a static JSON file.

---

## Author

Built by [Aminul Islam](https://github.com/yourusername) while learning Next.js and modern React patterns.
