"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "./theme-toggle";
import { site } from "@/lib/site";

const links = [
  { href: "#features", label: "Features" },
  { href: "#preview", label: "Preview" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container nav-inner">
        <a className="logo" href="#home" aria-label={`${site.name} home`}>
          <span className="logo-mark" aria-hidden="true">✦</span><span>{site.name}</span>
        </a>
        <nav className={`nav-links ${open ? "is-open" : ""}`} aria-label="Main navigation" id="mobile-nav">
          {links.map(link => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}
          <a className="mobile-cta" href={site.links.start} onClick={() => setOpen(false)}>Get started <ArrowUpRight size={16} /></a>
        </nav>
        <div className="nav-actions">
          <ThemeToggle />
          <a className="button button-small button-outline desktop-cta" href={site.links.start}>Get started <ArrowUpRight size={16} /></a>
          <button className="icon-button menu-button" type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>{open ? <X size={21}/> : <Menu size={21}/>}</button>
        </div>
      </div>
    </header>
  );
}
