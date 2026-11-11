import { SALON, waLink } from "../lib/config";

// Affiche /public/images/<fichier>. Fichier absent = bloc gris clair.
export function Photo({ file, label, className = "" }) {
  return (
    <div role="img" aria-label={label} className={`photo ${className}`}
      style={{ backgroundImage: `url(/images/${file})` }} />
  );
}

export function PageHead({ title, lead }) {
  return (
    <section className="pagehead">
      <h1 className="big">{title}</h1>
      {lead && <p className="narrow">{lead}</p>}
    </section>
  );
}

export function ContactBlock() {
  const mapSrc = `https://www.google.com/maps?q=${SALON.lat},${SALON.lng}&z=16&output=embed`;
  return (
    <section className="section tinted" id="contact-info">
      <h2 className="big center">Nous trouver</h2>
      <div className="contact">
        <div>
          <p><strong>{SALON.name}</strong><br />{SALON.address}</p>
          <p><a href={`tel:${SALON.phoneHref}`}>{SALON.phone}</a></p>
          <dl className="hours">
            {SALON.hours.map(([d, h]) => (
              <div key={d}><dt>{d}</dt><dd>{h}</dd></div>
            ))}
          </dl>
          <div className="btns">
            <a className="btn-line caps" href={waLink()}>Nous écrire sur WhatsApp</a>
            <a className="btn-line caps" href={`https://www.google.com/maps/search/?api=1&query=${SALON.lat},${SALON.lng}`}>Itinéraire</a>
          </div>
        </div>
        <iframe title="Carte du salon" src={mapSrc} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div>
    </section>
  );
}
