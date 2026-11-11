import Link from "next/link";
import { Photo, ContactBlock } from "../components/ui";
import { SALON, CATEGORIES, TILES, FORMATIONS, waLink } from "../lib/config";

export default function Home() {
  return (
    <>
      <main id="top">
        <section className="hero">
          <h1 className="wordmark" aria-label="Reine & Tresses">
            <svg className="wm wm-two" viewBox="0 0 1000 392" aria-hidden="true">
              <text x="0" y="236" textLength="1000" lengthAdjust="spacingAndGlyphs" fontSize="330">REINE</text>
              <text x="0" y="388" textLength="1000" lengthAdjust="spacingAndGlyphs" fontSize="175">&amp; TRESSES</text>
            </svg>
            <svg className="wm wm-one" viewBox="0 0 1000 86" aria-hidden="true">
              <text x="0" y="82" textLength="1000" lengthAdjust="spacingAndGlyphs" fontSize="115">REINE &amp; TRESSES</text>
            </svg>
          </h1>
          <Photo file="hero.jpg" label="Clientes du salon avec leurs coiffures" className="hero-photo" />
          <a className="btn-line caps" href={waLink()}>Réserver</a>
        </section>

        <section className="cats" aria-label="Nos prestations">
          {CATEGORIES.map((c) => (
            <Link key={c.label} href="/catalogue" className="cat">
              <Photo file={c.img} label={c.label} className="cat-photo" />
              <span className="caps">{c.label}</span>
            </Link>
          ))}
        </section>

        <section className="intro">
          <p>
            Plus qu’un simple rendez-vous, nous vous proposons une véritable
            expérience capillaire au cœur de notre espace moderne et chaleureux.
            Passionnés par l’art de la coiffure, notre équipe d’experts met tout
            son savoir-faire à votre service pour révéler votre beauté naturelle.
          </p>
          <p>
            Que ce soit pour une <strong>coupe tendance</strong>, une{" "}
            <strong>coloration éclatante</strong> ou des <strong>tresses travaillées</strong>,
            nous utilisons notre expertise pour répondre à vos envies les plus
            spécifiques. Explorez notre catalogue et réservez votre moment de
            détente en quelques clics.
          </p>
        </section>

        <section className="feature">
          <div className="feature-img">
            <Photo file="feature.jpg" label="Coiffure réalisée au salon" className="feature-photo" />
          </div>
          <div className="feature-text">
            <p className="caps">Révélez la beauté de vos cheveux</p>
            <h2 className="big">Tresses, nattes &amp; tissage</h2>
            <Link className="btn-line caps" href="/catalogue">Voir notre catalogue</Link>
          </div>
        </section>

        <section className="band-wrap">
          <div className="band">
            <h2 className="big">Nos coiffures</h2>
            <Link className="caps band-link" href="/catalogue">Voir toutes nos coiffures</Link>
          </div>
          <div className="tiles">
            {TILES.map((t) => (
              <Link key={t.label} href="/catalogue" className="tile">
                <Photo file={t.img} label={t.label} className="tile-photo" />
                <span className="tile-label">{t.label}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="section quick">
          <Link className="btn-line caps" href="/catalogue">Voir notre catalogue</Link>
          <Link className="btn-line caps" href="/conseils">Conseils &amp; Tarifs</Link>
          <a className="btn-line btn-dark caps" href={waLink()}>Prendre RDV (WhatsApp)</a>
          <a className="btn-line caps" href={SALON.googleReviewsUrl}>Laissez vos avis</a>
        </section>

        <section className="section tinted center">
          <p className="score">{SALON.rating}</p>
          <p className="caps">Sur {SALON.reviewCount} avis Google</p>
          <Link className="btn-line caps" href="/fidelite">Fidélité &amp; Avis</Link>
        </section>

        <section className="section center">
          <h2 className="big">Nos formations</h2>
          <ul className="tags">
            {FORMATIONS.map((f) => (
              <li key={f.slug}><Link href={`/formations/${f.slug}`}>{f.title.replace(/^Formations? /, "")}</Link></li>
            ))}
          </ul>
        </section>

        <ContactBlock />
      </main>
    </>
  );
}
