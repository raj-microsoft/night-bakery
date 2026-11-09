// Adapted from Méschac Irung's Tailark components listed on 21st.dev.
// MIT Copyright (c) 2025 Irung. See vendor/tailark/license.txt and THIRD_PARTY.md.
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Check, Moon } from 'lucide-react';

export function Reveal({ children, className = '', delay = 0, as = 'div', ...props }) {
  const reduce = useReducedMotion();
  const Component = as === 'article' ? motion.article : motion.div;
  return <Component className={className} initial={reduce ? false : { opacity: .9, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .12 }} transition={{ duration: reduce ? 0 : .35, delay: reduce ? 0 : delay, ease: [.16, 1, .3, 1] }} {...props}>{children}</Component>;
}
export function BakeryLink({ children, className = '', ...props }) {
  const reduce = useReducedMotion();
  const button = className.includes('button');
  return <motion.a className={className} whileHover={button ? { backgroundColor: 'var(--primary-hover)' } : { color: 'var(--primary)' }} whileTap={reduce ? undefined : { scale: .98 }} transition={{ duration: reduce ? 0 : .2 }} {...props}>{children}</motion.a>;
}

// Hero Section 1: copy/action group alongside image; retain bakery aperture and copy.
export function BakeryHero() {
  return <section className="hero shell" aria-labelledby="hero-title">
    <div className="masthead"><span>Good bread. At any hour.</span><span className="open-note"><span className="status-dot"/> Always open · 24/7</span></div>
    <div className="oven-window">
      <img src={`${import.meta.env.BASE_URL}oven-still-life.webp`} className="oven-image" alt="Synthetic artwork of two flour-dusted loaves in a warmly lit stone oven" width="1800" height="1150" fetchPriority="high" decoding="async"/>
      <div className="oven-shade"/>
      <div className="hero-copy"><div><h1 id="hero-title">While the city sleeps,<br/><em>we bake.</em></h1><p>For the last ones home.<br/>And the first ones out.</p><div className="hero-actions"><BakeryLink className="button" href="#oven">See what’s baking <ArrowDown size={18}/></BakeryLink></div></div></div>
      <div className="hero-bottom"><span>A warm window on the canal.</span><span>From dusk. Until dusk.</span></div>
    </div><div className="art-caption"><span>Nachtbakkerij · An imagined bakery in an imagined canal city</span><span>Original synthetic artwork</span></div>
  </section>;
}

// Features 8: the source's full-width media card followed by three responsive cards.
// The existing hero owns the full-width artwork; keep the three-card content row here.
const features = [
  ['A slow-fermented loaf.', 'Flour. Water. Time. A few things we’ll never rush.', 'Canal sourdough'],
  ['Butter, folded into dawn.', 'A shattering shell. A soft butter heart.', 'Daybreak croissant'],
  ['For the long way home.', 'A small, warm cup for the hours in between.', 'Night filter'],
];
export function BakeryFeatures() {
  return <section className="features-section shell" aria-labelledby="features-title"><Reveal><h2 id="features-title">A few good reasons<br/>to stay awake.</h2></Reveal><div className="feature-grid grid grid-cols-1 md:grid-cols-3">{features.map(([title,copy,item],i)=><Reveal as="article" className="feature-card" delay={i*.08} key={title}><h3>{title}</h3><p>{copy}</p><BakeryLink href="#menu">{item}<ArrowUpRight size={16}/></BakeryLink></Reveal>)}</div></section>;
}

// Pricing: preserve the upstream single-plan/two-column composition and checked benefits.
export function BreadSubscription() {
  return <section id="bread-club" className="subscription-section" aria-labelledby="club-title"><div className="shell"><Reveal><h2 id="club-title">A loaf to come home to.</h2><p className="section-copy">The Night Bread Club · an entirely fictional subscription.</p></Reveal><Reveal className="subscription-card"><div className="subscription-summary"><h3>The weekly loaf</h3><p>For the table, or the walk.</p><p className="subscription-price">€24 <span>/ four weeks</span></p><BakeryLink className="button" href="#faq">How the concept works <ArrowDown size={16}/></BakeryLink><p className="small-note">This illustrative plan cannot be purchased.</p></div><div className="subscription-benefits"><ul role="list">{['One canal sourdough each week','An imagined pickup at your favourite hour','A rotating loaf from the night menu','A little ritual, four times a month'].map(item=><li key={item}><Check size={18}/><span>{item}</span></li>)}</ul><p>This is a design study, not an offer for sale. There is no real bakery or subscription behind this page.</p></div></Reveal></div></section>;
}

export function NeighbourVoices() {
  return <section className="voices-section shell" aria-labelledby="voices-title"><Reveal className="voices-layout"><div><h2 id="voices-title">For the hours<br/>in between.</h2><p className="small-note">Imagined neighbours, fictional words.<br/>Illustrative social proof, not customer reviews.</p></div><figure><blockquote>“The city was asleep. The bread wasn’t. I took the long way home just to pass that window again.”</blockquote><figcaption>Mila · an invented night walker</figcaption></figure></Reveal></section>;
}

const questions = [
  ['Can I visit or order?', 'Nachtbakkerij, Lichtdam and Lantaarnkade 24 are imaginary. This page is a public design study, with no checkout, reservations or real-world location.'],
  ['How would the Bread Club work?', 'In the imagined bakery, you would collect one loaf each week for four weeks. The €24 price is illustrative only. There is no subscription to buy or mailing list to join.'],
  ['Is the oven schedule live?', 'The clock uses Europe/Amsterdam time and highlights the next time in a fixed fictional daily schedule. It does not show real stock or baking activity.'],
  ['What about ingredients and allergens?', 'The fictional bread and pastries contain wheat. Descriptions are storytelling, not dietary advice or verified allergen information. Ask staff in a real bakery before buying.'],
];
export function BakeryFAQ() {
  return <section id="faq" className="faq-section shell" aria-labelledby="faq-title"><Reveal><h2 id="faq-title">Before you follow<br/>the light.</h2></Reveal><div className="faq-list">{questions.map(([q,a])=><details key={q}><summary>{q}</summary><Reveal><p>{a}</p></Reveal></details>)}</div></section>;
}

// Footer: upstream linked brand + mapped, wrapping navigation + copyright.
// Remove all placeholder social-network links; keep only real page destinations.
export function BakeryFooter({children}) {
  const links=[['The oven','#oven'],['Menu','#menu'],['Bread Club','#bread-club'],['Questions','#faq'],['Find our light','#visit']];
  return <footer className="shell"><Reveal><div className="footer-top"><BakeryLink className="brand" href="#"><Moon size={20}/>nachtbakkerij</BakeryLink><span>For the hours in between.</span></div><nav className="footer-links" aria-label="Footer navigation">{links.map(([title,href])=><BakeryLink key={href} href={href}>{title}</BakeryLink>)}</nav>{children}<div className="footer-bottom"><span>© 2026 Nachtbakkerij · Fictional concept</span><BakeryLink href="#">Back to the warmth <ArrowUpRight size={14}/></BakeryLink></div></Reveal></footer>;
}
