"use client";
import { useState } from "react";

const LINKS = [
  ["Catalogue", "#catalogue"],
  ["Tarifs", "#tarifs"],
  ["Fidélité", "#fidelite"],
  ["Formations", "#formations"],
  ["Contact", "#contact"],
];

export default function Menu() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="nav-desktop" aria-label="Navigation principale">
        {LINKS.map(([l, h]) => (
          <a key={h} href={h}>{l}</a>
        ))}
      </nav>
      <button
        className="burger"
        aria-expanded={open}
        aria-controls="menu-mobile"
        onClick={() => setOpen(!open)}
      >
        {open ? "Fermer" : "Menu"}
      </button>
      {open && (
        <nav id="menu-mobile" className="nav-mobile" aria-label="Navigation principale">
          {LINKS.map(([l, h]) => (
            <a key={h} href={h} onClick={() => setOpen(false)}>{l}</a>
          ))}
        </nav>
      )}
    </>
  );
}
