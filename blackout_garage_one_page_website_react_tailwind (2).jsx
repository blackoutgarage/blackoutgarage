import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  ShieldCheck,
  SunDim,
  Moon,
  ImageDown,
  UploadCloud,
  Car,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

/**
 * Blackout Garage – Automotive Window Tinting
 * Single‑file React component you can deploy as your landing page.
 * Styling: Tailwind + shadcn/ui. Replace placeholders in CONTACT block and drop in your logo.
 */
export default function BlackoutGarageSite() {
  const [dark, setDark] = useState(true);
  const [images, setImages] = useState<string[]>([]);

  const onUpload = (files: FileList | null) => {
    if (!files) return;
    const readers = Array.from(files).slice(0, 24).map(
      (file) =>
        new Promise<string>((resolve) => {
          const r = new FileReader();
          r.onload = () => resolve(String(r.result));
          r.readAsDataURL(file);
        })
    );
    Promise.all(readers).then((urls) => setImages((prev) => [...urls, ...prev]));
  };

  const testimonials = [
    { name: "Alex P.", car: "2022 Tesla Model 3", quote: "Flawless install. Heat rejection is night and day, and there’s zero dust or bubbles.", stars: 5 },
    { name: "Briana S.", car: "2019 BMW M4", quote: "Booked online, in and out on time. The ceramic tint keeps my leather cool even at noon.", stars: 5 },
    { name: "Marcus V.", car: "2021 Ford F-150", quote: "Professional, clean shop, lifetime warranty actually printed on my receipt.", stars: 5 },
  ];

  const starRow = (n: number) => (
    <div className="flex gap-0.5 text-yellow-400" aria-label={`${n} star rating`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`h-4 w-4 ${i < n ? "fill-yellow-400" : "opacity-25"}`} />
      ))}
    </div>
  );

  const Section = ({ id, children, className = "" }: any) => (
    <section id={id} className={`scroll-mt-24 ${className}`}>{children}</section>
  );

  const HeaderLink = ({ href, label }: { href: string; label: string }) => (
    <a href={href} className="text-sm font-medium text-gray-200 hover:text-white transition-colors">
      {label}
    </a>
  );

  return (
    <div className={`${dark ? "dark" : ""}`}>
      <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-black to-zinc-950 text-white selection:bg-sky-500/30">
        {/* NAVBAR */}
        <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
          <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
            <a href="#top" className="flex items-center gap-3">
              <img src="/logo-blackout-garage.png" alt="Blackout Garage Logo" className="h-10 w-auto object-contain drop-shadow-[0_6px_20px_rgba(0,173,239,0.45)]" />
              <div className="leading-tight hidden sm:block">
                <p className="font-extrabold tracking-tight text-xl">BLACKOUT GARAGE</p>
                <p className="text-xs text-sky-400 -mt-0.5">Automotive Window Tinting</p>
              </div>
            </a>
            <nav className="hidden md:flex items-center gap-6">
              <HeaderLink href="#services" label="Services" />
              <HeaderLink href="#gallery" label="Gallery" />
              <HeaderLink href="#testimonials" label="Testimonials" />
              <HeaderLink href="#pricing" label="Packages" />
              <HeaderLink href="#faq" label="FAQ" />
              <HeaderLink href="#contact" label="Contact" />
            </nav>
            <div className="flex items-center gap-2">
              <Button variant="outline" className="hidden sm:inline-flex border-sky-500 text-sky-400 hover:bg-sky-500 hover:text-white" asChild>
                <a href="#contact">Get a Quote</a>
              </Button>
              <Button variant="ghost" size="icon" onClick={() => setDark((d) => !d)} aria-label="Toggle theme">
                {dark ? <SunDim className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </header>

        {/* MODERN HERO */}
        <section id="top" className="relative overflow-hidden">
          {/* animated gradient mesh */}
          <div className="pointer-events-none absolute -inset-40 opacity-40 [mask-image:radial-gradient(closest-side,black,transparent)]">
            <div className="absolute -top-40 left-1/4 h-[40rem] w-[40rem] bg-sky-500/40 blur-3xl rounded-full mix-blend-screen animate-pulse" />
            <div className="absolute top-20 right-1/3 h-[36rem] w-[36rem] bg-cyan-400/30 blur-3xl rounded-full mix-blend-screen animate-[pulse_5s_ease-in-out_infinite]" />
          </div>
          {/* subtle grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:24px_24px]" />

          <div className="relative mx-auto max-w-7xl px-4 pt-14 pb-24">
            <div className="flex flex-col items-center text-center">
              {/* Centered logo as focal banner */}
              <img src="/logo-blackout-garage.png" alt="Blackout Garage" className="w-full max-w-3xl object-contain drop-shadow-[0_15px_60px_rgba(0,173,239,0.35)]" />

              {/* Contact pill blended under logo */}
              <div className="mt-6 w-full max-w-3xl rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 md:p-5 text-sm">
                  <p className="flex items-center justify-center gap-2"><Phone className="h-4 w-4 text-sky-400"/> <a href="tel:5551234567" className="hover:underline">(555) 123-4567</a></p>
                  <p className="flex items-center justify-center gap-2"><Mail className="h-4 w-4 text-sky-400"/> <a href="mailto:hello@blackoutgarage.com" className="hover:underline">hello@blackoutgarage.com</a></p>
                  <p className="flex items-center justify-center gap-2"><MapPin className="h-4 w-4 text-sky-400"/> 1234 Shade Ln, Your City</p>
                  <p className="flex items-center justify-center gap-2"><Clock className="h-4 w-4 text-sky-400"/> Mon–Sat: 9am–6pm</p>
                </div>
              </div>

              <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mt-8 text-4xl md:text-6xl font-extrabold tracking-tight">
                Drive Cooler. Look Sharper. <span className="text-sky-400">Tint Smarter.</span>
              </motion.h1>
              <p className="mt-4 text-gray-300 max-w-2xl">
                Premium ceramic & carbon films • Computer‑cut patterns • Lifetime warranty
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button size="lg" className="bg-sky-600 hover:bg-sky-500 shadow-lg shadow-sky-600/30" asChild>
                  <a href="#contact" className="flex items-center">Book Now <ArrowRight className="ml-2 h-5 w-5"/></a>
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                  <a href="#pricing">See Packages</a>
                </Button>
              </div>

              {/* trust badges */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Badge className="bg-white/10"><ShieldCheck className="h-4 w-4 mr-1"/>Lifetime Warranty</Badge>
                <Badge className="bg-white/10"><Sparkles className="h-4 w-4 mr-1"/>Computer‑Cut</Badge>
                <Badge className="bg-white/10"><Car className="h-4 w-4 mr-1"/>Same‑Day Service</Badge>
              </div>
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <main className="mx-auto max-w-7xl px-4">
          {/* SERVICES with modern hovers */}
          <Section id="services" className="py-16">
            <h2 className="text-3xl font-bold mb-6">Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Ceramic Tint", desc: "Maximum heat rejection & UV protection.", icon: <ShieldCheck className="h-6 w-6 text-sky-400"/> },
                { title: "Carbon Tint", desc: "Deep, non‑reflective look without signal interference.", icon: <Car className="h-6 w-6 text-sky-400"/> },
                { title: "Windshield & Sunstrips", desc: "Legal‑limit films & precision visor strips.", icon: <SunDim className="h-6 w-6 text-sky-400"/> },
              ].map((s) => (
                <Card key={s.title} className="group bg-zinc-900/60 border-white/10 overflow-hidden">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-sky-500/10 to-transparent" />
                  <CardHeader>
                    <div className="flex items-center gap-3">{s.icon}<CardTitle className="text-xl">{s.title}</CardTitle></div>
                  </CardHeader>
                  <CardContent className="text-gray-300">{s.desc}</CardContent>
                </Card>
              ))}
            </div>
          </Section>

          {/* PACKAGES */}
          <Section id="pricing" className="py-10">
            <h2 className="text-3xl font-bold mb-6">Packages</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Carbon", price: "From $199", features: ["Deep black finish", "99% UV block", "Rear 5 windows"] },
                { name: "Ceramic", price: "From $329", features: ["Up to 88% heat rejection", "Lifetime warranty", "All side & rear"], featured: true },
                { name: "Elite Ceramic+", price: "From $449", features: ["IR nano‑ceramic", "Best clarity & comfort", "Full vehicle incl. windshield strip"] },
              ].map((p) => (
                <Card key={p.name} className={`relative bg-zinc-900/60 border-white/10 ${p.featured ? "ring-2 ring-sky-500" : ""}`}>
                  {p.featured && (<Badge className="absolute -top-2 -right-2 bg-sky-600">Popular</Badge>)}
                  <CardHeader>
                    <CardTitle className="text-2xl">{p.name}</CardTitle>
                    <p className="text-sky-400 font-semibold">{p.price}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-300">
                      {p.features.map((f) => (<li key={f} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-sky-400"/> {f}</li>))}
                    </ul>
                    <Button className="mt-6 w-full bg-sky-600 hover:bg-sky-500" asChild>
                      <a href="#contact">Book This Package</a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="mt-4 text-xs text-gray-400">Prices vary by vehicle. Windshield and front‑window legal limits depend on state law.</p>
          </Section>

          {/* GALLERY – masonry-like grid */}
          <Section id="gallery" className="py-16">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-3xl font-bold">Recent Work</h2>
              <label className="inline-flex items-center gap-2 cursor-pointer">
                <Input type="file" accept="image/*" multiple onChange={(e) => onUpload(e.target.files)} className="hidden" />
                <span className="px-3 py-2 rounded-xl border border-white/15 bg-white/5 text-sm hover:bg-white/10"><UploadCloud className="inline h-4 w-4 mr-1"/> Upload photos</span>
              </label>
            </div>
            {images.length === 0 ? (
              <div className="border border-dashed border-white/15 rounded-2xl p-10 text-center text-gray-400">
                <ImageDown className="mx-auto h-10 w-10 text-sky-400 mb-2"/>
                <p>Drop in your best before/after shots and completed installs. They’ll appear here.</p>
              </div>
            ) : (
              <div className="columns-2 md:columns-3 gap-3 [column-fill:_balance]"><div className="grid gap-3">
                {images.map((src, i) => (
                  <img key={i} src={src} alt={`Gallery ${i + 1}`} className="w-full rounded-xl border border-white/10 break-inside-avoid"/>
                ))}
              </div></div>
            )}
          </Section>

          {/* TESTIMONIALS */}
          <Section id="testimonials" className="py-10">
            <h2 className="text-3xl font-bold mb-6">What Drivers Say</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <Card key={t.name} className="bg-zinc-900/60 border-white/10">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{t.name}</CardTitle>
                    <p className="text-xs text-gray-400">{t.car}</p>
                  </CardHeader>
                  <CardContent className="text-gray-200">
                    {starRow(t.stars)}
                    <p className="mt-3 text-sm">“{t.quote}”</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Section>

          {/* PROCESS / WHY US */}
          <Section id="why" className="py-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold">Our Process</h2>
                <ol className="mt-4 space-y-4 text-gray-300">
                  <li className="flex gap-3"><span className="text-sky-400">01</span> Vehicle is inspected and glass cleaned with filtered water and lint‑free prep.</li>
                  <li className="flex gap-3"><span className="text-sky-400">02</span> Patterns are laser‑cut to your exact year/make/model. No blades near your glass.</li>
                  <li className="flex gap-3"><span className="text-sky-400">03</span> Films installed in a climate‑controlled bay to keep dust out and clarity in.</li>
                  <li className="flex gap-3"><span className="text-sky-400">04</span> Final inspection, care instructions, and warranty registration.</li>
                </ol>
              </div>
              <div className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-600/20 via-transparent to-transparent rounded-3xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold mb-3">Benefits You’ll Feel</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-300">
                  <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-sky-400"/> UV & skin protection</li>
                  <li className="flex items-center gap-2"><SunDim className="h-4 w-4 text-sky-400"/> Cooler cabin temps</li>
                  <li className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-sky-400"/> Glare reduction</li>
                  <li className="flex items-center gap-2"><Car className="h-4 w-4 text-sky-400"/> Enhanced privacy</li>
                  <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-sky-400"/> Shatter resistance</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-sky-400"/> Factory‑like finish</li>
                </ul>
              </div>
            </div>
          </Section>

          {/* FAQ */}
          <Section id="faq" className="py-10">
            <h2 className="text-3xl font-bold mb-6">FAQ</h2>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-300">
              <Card className="bg-zinc-900/60 border-white/10"><CardHeader><CardTitle>How long does tint take?</CardTitle></CardHeader><CardContent>Most full cars are completed within 2–3 hours depending on size and film.</CardContent></Card>
              <Card className="bg-zinc-900/60 border-white/10"><CardHeader><CardTitle>Is it legal?</CardTitle></CardHeader><CardContent>We’ll guide you on state legal limits and offer options that stay compliant.</CardContent></Card>
              <Card className="bg-zinc-900/60 border-white/10"><CardHeader><CardTitle>How do I care for new tint?</CardTitle></CardHeader><CardContent>Don’t roll windows for 2–3 days. Clean with ammonia‑free glass cleaner and soft towels.</CardContent></Card>
              <Card className="bg-zinc-900/60 border-white/10"><CardHeader><CardTitle>What is the warranty?</CardTitle></CardHeader><CardContent>Lifetime coverage against bubbling, peeling, fading, or color change for original owner.</CardContent></Card>
            </div>
          </Section>

          {/* CONTACT */}
          <Section id="contact" className="py-16">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold">Ready to blackout your ride?</h2>
                <p className="text-gray-300 mt-2">Call, message, or swing by the shop. We’ll recommend the perfect shade for your vehicle and budget.</p>
                <div className="mt-6 space-y-3 text-sm">
                  <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-sky-400"/> <a href="tel:5551234567" className="hover:underline">(555) 123-4567</a></p>
                  <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-sky-400"/> <a className="hover:underline" href="mailto:hello@blackoutgarage.com">hello@blackoutgarage.com</a></p>
                  <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-sky-400"/> 1234 Shade Ln, Suite A, Your City, ST</p>
                </div>
                <div className="mt-6 flex gap-3">
                  <Badge className="bg-white/10">Insured</Badge>
                  <Badge className="bg-white/10">Certified Installers</Badge>
                  <Badge className="bg-white/10">Clean Room Bay</Badge>
                </div>
                <div className="mt-6 flex gap-3">
                  <a href="#" aria-label="Instagram" className="text-white/70 hover:text-white"><Instagram className="h-5 w-5"/></a>
                  <a href="#" aria-label="Facebook" className="text-white/70 hover:text-white"><Facebook className="h-5 w-5"/></a>
                  <a href="#" aria-label="YouTube" className="text-white/70 hover:text-white"><Youtube className="h-5 w-5"/></a>
                </div>
              </div>
              <Card className="bg-zinc-900/60 border-white/10">
                <CardHeader>
                  <CardTitle>Send us a message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-1 gap-3">
                    <Input placeholder="Name" className="bg-black/30 border-white/10" required />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <Input placeholder="Email" type="email" className="bg-black/30 border-white/10" required />
                      <Input placeholder="Phone" className="bg-black/30 border-white/10" />
                    </div>
                    <Input placeholder="Vehicle (Year / Make / Model)" className="bg-black/30 border-white/10" />
                    <Textarea rows={4} placeholder="How can we help?" className="bg-black/30 border-white/10" />
                    <Button type="submit" className="bg-sky-600 hover:bg-sky-500">Send Message</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </Section>
        </main>

        {/* FOOTER */}
        <footer className="border-t border-white/10 mt-10">
          <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-gray-400 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img src="/logo-blackout-garage.png" alt="Blackout Garage Logo" className="h-8 w-auto object-contain opacity-90"/>
              <p>© {new Date().getFullYear()} Blackout Garage. All rights reserved.</p>
            </div>
            <div className="flex gap-6">
              <a href="#services" className="hover:text-white">Services</a>
              <a href="#pricing" className="hover:text-white">Packages</a>
              <a href="#faq" className="hover:text-white">FAQ</a>
              <a href="#contact" className="hover:text-white">Contact</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

/*
  HOW TO USE
  - Keep /logo-blackout-garage.png as your uploaded logo path.
  - Updated hero uses animated gradient mesh + glass contact bar for a modern, eye‑catching look.
  - Gallery supports uploads; wire to storage for persistence.
*/
