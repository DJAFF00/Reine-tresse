"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV, FORMATIONS } from "../lib/config";

const Chevron = () => (
  <svg viewBox="0 0 12 8" width="10" height="7" aria-hidden="true">
    <path d="M1 1l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [dd, setDd] = useState(false);
  const close = () => { setOpen(false); setDd(false); };
  const cur = (href) => (path === href ? "page" : undefined);

  return (
    <header className="header">
      <div className="header-row">
        <Link href="/" className="logo" onClick={close}>Reine &amp; Tresses</Link>
        <button className="burger" aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(!open)}>
          {open ? "Fermer" : "Menu"}
        </button>
      </div>
      <nav id="main-nav" className={`nav ${open ? "is-open" : ""}`} aria-label="Navigation principale">
        {NAV.map((item) =>
          item.formations ? (
            <div key="formations" className="dd" onMouseEnter={() => setDd(true)} onMouseLeave={() => setDd(false)}>
              <button className="dd-btn" aria-expanded={dd} onClick={() => setDd(!dd)}>
                {item.label} <Chevron />
              </button>
              {dd && (
                <ul className="dd-list">
                  <li><Link href="/formations" onClick={close}>Toutes les formations</Link></li>
                  {FORMATIONS.map((f) => (
                    <li key={f.slug}>
                      <Link href={`/formations/${f.slug}`} onClick={close} aria-current={cur(`/formations/${f.slug}`)}>{f.title}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ) : (
            <Link key={item.href} href={item.href} onClick={close} aria-current={cur(item.href)}>{item.label}</Link>
          )
        )}
      </nav>
    </header>
  );
}
