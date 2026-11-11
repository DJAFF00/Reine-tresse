import { PageHead } from "../../components/ui";
import { SALON, LOYALTY, waLink } from "../../lib/config";

export const metadata = { title: "Fidélité & Avis" };

export default function Fidelite() {
  return (
    <main>
      <PageHead title="Fidélité & avis" />
      <section className="section center">
        <h2 className="big">Fidélité</h2>
        <p className="narrow">Votre programme de récompenses</p>
        <p className="onepoint">1 passage = 1 point</p>
        <ul className="loyalty">
          {LOYALTY.map(([pts, reward]) => (
            <li key={pts}><strong>{pts}</strong><span>{reward}</span></li>
          ))}
        </ul>
      </section>

      <section className="section tinted center">
        <h2 className="big">Avis</h2>
        <p className="narrow">Ce que disent nos clientes</p>
        <p className="score">{SALON.rating}</p>
        <p className="stars" role="img" aria-label="5 étoiles">★★★★★</p>
        <p className="caps">Basé sur {SALON.reviewCount} avis Google</p>
        <a className="btn-line btn-dark caps" href={SALON.googleReviewsUrl}>Laisser un avis Google</a>
      </section>

      <section className="section center">
        <p className="caps">Pas satisfaite ?</p>
        <a className="btn-line caps" href={waLink("Bonjour, je souhaite vous faire part d’un problème.")}>Nous écrire sur WhatsApp</a>
      </section>
    </main>
  );
}
