import { Photo, PageHead } from "../../components/ui";
import { CATALOGUE, waLink } from "../../lib/config";

export const metadata = { title: "Catalogue Coiffures" };

export default function Catalogue() {
  return (
    <main>
      <PageHead title="Catalogue coiffures" lead="Touchez une coiffure pour nous écrire sur WhatsApp." />
      <section className="section">
        <div className="grid">
          {CATALOGUE.map((c) => (
            <a key={c.name} className="card" href={waLink(`Bonjour, je suis intéressée par : ${c.name}.`)}>
              <Photo file={c.img} label={c.name} className="card-photo" />
              <span className="card-name">{c.name}</span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
