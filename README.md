# Setlinn – Migration Support Community Platform

**Setlinn** is the world's largest migration support community platform dedicated to helping migrants settle into their new lives in Germany and beyond. We connect global migrants through shared experiences, verified resources, and ongoing support — from residence permits to housing, jobs, language learning, and community.

Live Demo: https://setlinn-krw2.vercel.app/

---

### Features

- **Onboarding Flow** – Personalized journey based on user type (Student, Worker, Family, Retired)
- **Verified Resources** – Curated guides for residence permits, housing, healthcare, jobs, and more
- **Community Hub** – Connect with migrants in your city
- **Success Stories** – Real testimonials from community members
- **Virtual Campus Tours** – Explore universities before arriving
- **Journey Tracker** – Track your migration milestones
- **Responsive Design** – Works beautifully on mobile and desktop
- **Multilingual Ready** – Built with scalability and inclusivity in mind

---

### Tech Stack

- **Frontend**: React.js + Vite
- **Routing**: React Router v6
- **Styling**: Tailwind CSS (scalable & maintainable)
- **Deployment**: Vercel (instant previews & global CDN)
- **State Management**: React Hooks (Context API ready for future scaling)
- **Future-Ready**: Supabase integration in progress (authentication, database, storage)

---
---

### Project Structure
src/
├── components/         # Reusable UI components (Navbar, Footer, Cards, etc.)
├── pages/              # All page components (Home, Community, Resources, Onboarding, etc.)
├── layout/             # Layout wrappers (HomeLayout, DashboardLayout)
├── routes/             # Router configuration
├── assets/             # Images, icons, and static media
├── styles/             # Global styles and variables
├── App.jsx             # Main app wrapper
├── main.jsx            # Entry point with React Router
└── index.html          # HTML template with favicon
text---

### Quick Start (Local Development)

1. **Clone the repository**
   ```bash
   git clone https://github.com/nchiwar/setlinn.git
   cd setlinn

Install dependenciesBashnpm install
Start the development serverBashnpm run devOpen http://localhost:5173
Build for productionBashnpm run build
Preview production build locallyBashnpm run preview


Deployment
This project is fully configured for Vercel (recommended):

Push to GitHub
Go to vercel.com
Import your setlinn repository
Deploy — Vercel auto-detects Vite + React

No extra config needed!
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist

Environment Variables (Future)
When integrating Supabase or APIs:
envVITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-anon-key
These will be added securely via Vercel Dashboard → Settings → Environment Variables

Contributing
We welcome contributions! Whether you're fixing a typo, improving UI, or adding new resources for migrants — your help matters.

Fork the repo
Create your feature branch (git checkout -b feature/amazing-feature)
Commit your changes (git commit -m 'Add amazing feature')
Push to the branch (git push origin feature/amazing-feature)
Open a Pull Request



License
This project is open-source and available under the MIT License.

Made with love for migrants, by people who care.
Welcome home.
