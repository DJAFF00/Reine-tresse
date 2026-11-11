import Link from "next/link";
import { PageHead } from "../../components/ui";
import { FORMATIONS } from "../../lib/config";

export const metadata = { title: "Formations et masterclass" };

export default function Formations() {
  return (
    <main>
      <PageHead title="Formations & masterclass avancées" lead="Le salon forme aussi celles qui veulent se lancer ou se perfectionner." />
      <section className="section">
        <ul className="flist">
          {FORMATIONS.map((f) => (
            <li key={f.slug}><Link href={`/formations/${f.slug}`}>{f.title}</Link></li>
          ))}
        </ul>
      </section>
    </main>
  );
}
