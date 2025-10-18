import React from 'react'
import { motion } from 'framer-motion'
import { Music, PlayCircle, Ticket, Mail, ExternalLink, Spotify, Youtube, Instagram, Facebook, Apple } from 'lucide-react'

const SocialLink = ({ href, label, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl shadow-sm hover:shadow-md transition border border-zinc-200 hover:border-zinc-300 bg-white"
  >
    {children}
    <span className="text-sm font-medium">{label}</span>
  </a>
)

const Card = ({ children, className = '' }) => (
  <div className={`rounded-2xl border border-zinc-200 bg-white shadow-sm ${className}`}>{children}</div>
)

export default function App() {
  const shows = [
    { date: 'Nov 15, 2025', city: 'Milwaukee, WI', venue: 'Turner Hall Ballroom', link: '#' },
    { date: 'Dec 6, 2025', city: 'Madison, WI', venue: 'The Sylvee (Lounge)', link: '#' },
    { date: 'Jan 24, 2026', city: 'Chicago, IL', venue: 'Schubas', link: '#' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white text-zinc-800">
      {/* Nav */}
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
            <a href="#shows" className="hover:opacity-70">Shows</a>
            <a href="#press" className="hover:opacity-70">EPK</a>
            <a href="#contact" className="hover:opacity-70">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
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
              <SocialLink href="#spotify" label="Spotify">
                <PlayCircle className="h-5 w-5" />
              </SocialLink>
              <SocialLink href="#apple" label="Apple Music">
                <Music className="h-5 w-5" />
              </SocialLink>
              <SocialLink href="#youtube" label="YouTube">
                <ExternalLink className="h-5 w-5" />
              </SocialLink>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <Card className="p-3">
              <div className="aspect-[4/3] w-full rounded-xl bg-[url('https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center" />
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Music */}
      <section id="music" className="max-w-6xl mx-auto px-4 py-14">
        <div className="mb-6 flex items-center gap-3">
          <Music className="h-6 w-6" />
          <h2 className="text-2xl sm:text-3xl font-bold">Latest Release</h2>
        </div>
        <Card className="p-4">
          <div className="w-full rounded-xl overflow-hidden">
            <iframe
              title="Spotify Embed"
              style={{ borderRadius: 12 }}
              src="https://open.spotify.com/embed/album/5ZmrKAzZpWlXYm9P44qkHX?utm_source=generator"
              width="100%"
              height="352"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
        </Card>
      </section>

      {/* Video */}
      <section id="video" className="max-w-6xl mx-auto px-4 py-14">
        <div className="mb-6 flex items-center gap-3">
          <PlayCircle className="h-6 w-6" />
          <h2 className="text-2xl sm:text-3xl font-bold">Watch</h2>
        </div>
        <Card className="p-4">
          <div className="aspect-video w-full rounded-xl overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </Card>
      </section>

      {/* Shows */}
      <section id="shows" className="max-w-6xl mx-auto px-4 py-14">
        <div className="mb-6 flex items-center gap-3">
          <Ticket className="h-6 w-6" />
          <h2 className="text-2xl sm:text-3xl font-bold">Upcoming Shows</h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          {shows.map((s, i) => (
            <Card key={i} className="p-5">
              <div className="text-sm text-zinc-500">{s.date}</div>
              <div className="mt-1 font-semibold">{s.venue}</div>
              <div className="text-zinc-600">{s.city}</div>
              <a href={s.link} className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-zinc-900 hover:opacity-80">
                Get Tickets <ExternalLink className="h-4 w-4" />
              </a>
            </Card>
          ))}
        </div>
      </section>

      {/* Press / EPK */}
      <section id="press" className="max-w-6xl mx-auto px-4 py-14">
        <Card className="p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold">EPK & Press</h2>
          <p className="mt-3 text-zinc-600 max-w-3xl">
            Download the one‑sheet, high‑res photos, stage plot, input list, and contact info.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href="#" className="px-5 py-2 rounded-2xl border bg-white hover:shadow-md transition font-medium">Download EPK (PDF)</a>
            <a href="#" className="px-5 py-2 rounded-2xl border bg-white hover:shadow-md transition font-medium">Photos (ZIP)</a>
          </div>
        </Card>
      </section>

      {/* Contact / Newsletter */}
      <section id="contact" className="max-w-6xl mx-auto px-4 py-14">
        <Card className="p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold">Stay in the loop</h2>
        <p className="mt-2 text-zinc-600">Join the mailing list for new releases and show announcements.</p>
          <form
            className="mt-5 grid sm:grid-cols-[1fr_auto] gap-3"
            action="https://formspree.io/f/your-id"
            method="POST"
          >
            <input
              type="email"
              name="email"
              required
              placeholder="you@jarsrising.com"
              className="px-4 py-3 rounded-2xl border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-zinc-400"
            />
            <button type="submit" className="px-6 py-3 rounded-2xl bg-zinc-900 text-white font-semibold hover:opacity-90">Subscribe</button>
          </form>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 mt-12">
        <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-zinc-500">© {new Date().getFullYear()} JARS Rising</div>
          <div className="flex flex-wrap gap-3">
            <SocialLink href="#spotify" label="Spotify"><Spotify className="h-4 w-4" /></SocialLink>
            <SocialLink href="#apple" label="Apple Music"><Apple className="h-4 w-4" /></SocialLink>
            <SocialLink href="#youtube" label="YouTube"><Youtube className="h-4 w-4" /></SocialLink>
            <SocialLink href="#instagram" label="Instagram"><Instagram className="h-4 w-4" /></SocialLink>
            <SocialLink href="#facebook" label="Facebook"><Facebook className="h-4 w-4" /></SocialLink>
          </div>
        </div>
      </footer>
    </div>
  )
}
