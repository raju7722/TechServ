"use client";

import React from "react";
import { motion } from "framer-motion";

const PREMIUM_EASE = [0.25, 0.8, 0.25, 1];
const VIEWPORT_ONCE = { once: true, margin: "-50px" };

const footerRevealVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: PREMIUM_EASE,
    },
  },
};

const footerSections = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact us", href: "#contact" },
      { label: "Community", href: "/community" },
    ],
  },
  {
    title: "Platform",
    links: [
      { label: "Enterprise Platforms", href: "#platform" },
      { label: "BidBrainPre", href: "#bidbrain-pre" },
      { label: "BidBrain Post", href: "#bidbrain-post" },
      { label: "ContractAI", href: "#contract-ai" },
    ],
  },
  {
    title: "Services",
    href: "/built-for-every-layer",
    links: [],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms & Conditions", href: "#terms-and-conditions" },
      { label: "Privacy Policy", href: "#privacy-policy" },
      { label: "Cookie Policy", href: "#cookie-policy" },
    ],
  },
];

function FooterSection({ section }) {
  const headingClass =
    "text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-secondary-purple)]";
  const linkClass =
    "text-[0.88rem] leading-6 text-[var(--color-brand-black)] transition-colors duration-200 hover:text-[var(--color-primary-blue)]";

  return (
    <section>
      <h2>
        {section.href ? (
          <a className={`${headingClass} transition-colors duration-200 hover:text-[var(--color-primary-blue)]`} href={section.href}>
            {section.title}
          </a>
        ) : (
          <span className={headingClass}>{section.title}</span>
        )}
      </h2>
      {section.links.length > 0 && (
        <ul className="mt-3 flex flex-wrap gap-x-8 gap-y-2">
          {section.links.map((link) => (
            <li key={link.label}>
              <a className={linkClass} href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default function Footer() {
  const mainSections = footerSections.filter((section) => section.title !== "Legal");
  const legalSection = footerSections.find((section) => section.title === "Legal");

  return (
    <motion.footer
      id="site-footer"
      className="site-footer-shell relative overflow-hidden border-t border-[var(--color-border-subtle)]"
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_ONCE}
      variants={footerRevealVariants}
      style={{ willChange: "transform, opacity" }}
    >
      <div className="footer-ambient-gradient" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(90deg,rgba(80,0,254,0.025) 1px,transparent 1px),linear-gradient(180deg,rgba(80,0,254,0.02) 1px,transparent 1px)",
          backgroundSize: "7.5rem 7.5rem",
        }}
      />
      <div className="relative mx-auto grid w-full max-w-[1600px] px-5 py-8 sm:px-8 lg:grid-cols-[minmax(20rem,0.96fr)_minmax(0,1fr)] lg:px-0 lg:py-0">
        <div className="flex lg:min-h-[18rem] pb-3 flex-col items-start px-0 lg:px-8 lg:py-10 xl:px-10">
          <div className="relative -ml-1">
            <img
              alt="TECHSERV.ai"
              className="h-auto w-[160px] sm:w-[176px]"
              height="126"
              loading="lazy"
              src="/techserv-logo.svg"
              width="428"
            />
          </div>
          <p className="mt-7 text-[0.95rem] font-normal leading-6 text-[var(--color-muted)]">
            The AI Operating System for IT Sales
          </p>
          <p className="lg:mt-auto mt-3 pt-10 text-[0.82rem] font-medium leading-6 text-[var(--color-brand-black)]">
            2026 Tech Serv.ai. Built for modern IT sales growth.
          </p>
        </div>
        <div className="border-t border-[var(--color-border-subtle)] pt-8 lg:border-l lg:border-t-0 lg:px-12 lg:py-10">
          <nav aria-label="Footer" className="space-y-8">
            {mainSections.map((section) => (
              <FooterSection key={section.title} section={section} />
            ))}
          </nav>
          {legalSection && (
            <div className="mt-8">
              <FooterSection section={legalSection} />
            </div>
          )}
        </div>
      </div>
    </motion.footer>
  );
}
