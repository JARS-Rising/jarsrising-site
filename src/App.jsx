import React from 'react'
import { motion } from 'framer-motion'
import content from './content.json'


const Icon = ({className=""}) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
    <path d="M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2Zm1 6v8a3 3 0 1 1-2-2.83V8h2Z" />
  </svg>
)

const SocialLink = ({ href, label }) => (
  <a href={href} target="_blank" rel="noreferrer"
     className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl shadow-sm hover:shadow-md transition border border-zinc-200 hover:border-zinc-300 bg-white">
    <Icon className="h-5 w-5 fill-current" />
    <span className="text-sm font-medium">{label}</span>
  </a>
)

const Card = ({ children, className = '' }) => (
  <div className={`rounded-2xl border border-zinc-200 bg-white shadow-sm ${className}`}>{children}</div>
)

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white text-zinc-800">
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-zinc-900 text-white grid place-items-center">
              <span className="font-black tracking-wider">JR</span>
            </div>
            <span className="font-bold tracking-wide">JARS Rising</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#music" className="hover:opacity-70">Music</a>
            <a href="#video" className="hover:opacity-70">Video</a>
            <a href="#press" className="hover:opacity-70">EPK</a>
            <a href="#contact" className="hover:opacity-70">Contact</a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-16 sm:py-24 grid sm:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight">
              JARS <span className="text-zinc-500">Rising</span>
            </h1>
            <p className="mt-4 text-lg text-zinc-600">
              Indie rock • country glow • midwest stories. New single out now—stream it everywhere.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
             <SocialLink href={content.spotify} label="Spotify" />
<SocialLink href={content.apple} label="Apple Music" />
<SocialLink href={content.youtube} label="YouTube" />

            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="rounded-2xl border border-zinc-200 bg-white shadow-sm p-3">
              <div className="aspect-[4/3] w-full rounded-xl bg-[url('https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center" />
            </div>
          </motion.div>
        </div>
      </section>

      <section id="music" className="max-w-6xl mx-auto px-4 py-14">
        <div className="mb-6 flex items-center gap-3">
          <Icon className="h-6 w-6 fill-current" />
          <h2 className="text-2xl sm:text-3xl font-bold">Latest Release</h2>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white shadow-sm p-4">
          <div className="w-full rounded-xl overflow-hidden">
           <iframe
  data-testid="embed-iframe"
  style="border-radius:12px"
  src="https://open.spotify.com/embed/artist/1UUPR8xdBGlduxNDM7cedg?utm_source=generator"
  width="100%"
  height="352"
  frameBorder="0"
  allowfullscreen=""
  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
  loading="lazy">
</iframe>

          </div>
        </div>
      </section>

      <section id="video" className="max-w-6xl mx-auto px-4 py-14">
        <div className="mb-6 flex items-center gap-3"><Icon className="h-6 w-6 fill-current" /><h2 className="text-2xl sm:text-3xl font-bold">Watch</h2></div>
        <div className="rounded-2xl border border-zinc-200 bg-white shadow-sm p-4">
          <div className="aspect-video w-full rounded-xl overflow-hidden">
            <iframe className="w-full h-full" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player"
              frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen />
          </div>
        </div>
      </section>

      <section id="press" className="max-w-6xl mx-auto px-4 py-14">
        <div className="rounded-2xl border border-zinc-200 bg-white shadow-sm p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold">EPK & Press</h2>
          <p className="mt-3 text-zinc-600 max-w-3xl">Download the one‑sheet, high‑res photos, stage plot, input list, and contact info.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href="#" className="px-5 py-2 rounded-2xl border bg-white hover:shadow-md transition font-medium">Download EPK (PDF)</a>
            <a href="#" className="px-5 py-2 rounded-2xl border bg-white hover:shadow-md transition font-medium">Photos (ZIP)</a>
          </div>
        </div>
      </section>

      <section id="contact" className="max-w-6xl mx-auto px-4 py-14">
        <div className="rounded-2xl border border-zinc-200 bg-white shadow-sm p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold">Stay in the loop</h2>
          <p className="mt-2 text-zinc-700">
  Booking / press:{" "}
  <a href="mailto:team@jarsrising.com" className="font-medium underline">
    team@jarsrising.com
  </a>
</p>
          <SocialLink href="mailto:team@jarsrising.com" label="Email" />


          <p className="mt-2 text-zinc-600">Join the mailing list for new releases and show announcements.</p>
          <form className="mt-5 grid sm:grid-cols-[1fr_auto] gap-3" action="https://formspree.io/f/your-id" method="POST">
            <input type="email" name="email" required placeholder="you@jarsrising.com"
              className="px-4 py-3 rounded-2xl border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-zinc-400" />
            <button type="submit" className="px-6 py-3 rounded-2xl bg-zinc-900 text-white font-semibold hover:opacity-90">Subscribe</button>
          </form>
        </div>
      </section>

      <footer className="border-t border-zinc-200 mt-12">
        <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-zinc-500">© {new Date().getFullYear()} JARS Rising</div>
          <div className="flex flex-wrap gap-3">
            <SocialLink href="#spotify" label="Spotify" />
            <SocialLink href="#apple" label="Apple Music" />
            <SocialLink href="#youtube" label="YouTube" />
            <SocialLink href="#instagram" label="Instagram" />
            <SocialLink href="#facebook" label="Facebook" />
          </div>
        </div>
      </footer>
    </div>
  )
}
