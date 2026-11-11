"use client";
import { useState } from "react";
import { CATALOGUE, waLink } from "../lib/config";

const SERVICES = [...CATALOGUE.map((c) => c.name), "Soins capillaires", "Autre (je précise sur WhatsApp)"];

export default function ReservationForm() {
  const [f, setF] = useState({ nom: "", service: SERVICES[0], date: "", heure: "" });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    let d = "";
    if (f.date) { const [y, m, j] = f.date.split("-"); d = ` le ${j}/${m}/${y}`; }
    const h = f.heure ? ` vers ${f.heure}` : "";
    window.open(waLink(`Bonjour, je m’appelle ${f.nom}. Je souhaite réserver : ${f.service}${d}${h}.`), "_blank");
  };

  return (
    <form className="form" onSubmit={submit}>
      <label>Votre nom
        <input required value={f.nom} onChange={set("nom")} autoComplete="name" />
      </label>
      <label>Coiffure souhaitée
        <select value={f.service} onChange={set("service")}>
          {SERVICES.map((s) => <option key={s}>{s}</option>)}
        </select>
      </label>
      <div className="form-row">
        <label>Date
          <input type="date" value={f.date} onChange={set("date")} />
        </label>
        <label>Heure
          <input type="time" value={f.heure} onChange={set("heure")} />
        </label>
      </div>
      <button className="btn-line btn-dark caps" type="submit">Envoyer sur WhatsApp</button>
      <p className="muted">Votre demande s’ouvre dans WhatsApp, le salon vous confirme le créneau.</p>
    </form>
  );
}
