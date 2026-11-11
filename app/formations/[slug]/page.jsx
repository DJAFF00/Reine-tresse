import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHead } from "../../../components/ui";
import { FORMATIONS, waLink } from "../../../lib/config";

export function generateStaticParams() {
  return FORMATIONS.map((f) => ({ slug: f.slug }));
}
export function generateMetadata({ params }) {
  const f = FORMATIONS.find((x) => x.slug === params.slug);
  return { title: f ? f.title : "Formation" };
}

export default function Formation({ params }) {
  const f = FORMATIONS.find((x) => x.slug === params.slug);
  if (!f) notFound();
  return (
    <main>
      <PageHead title={f.title} />
      <section className="section center">
        <p className="narrow">
          Écrivez-nous sur WhatsApp pour connaître le programme, les dates et le
          tarif de cette formation.
        </p>
        <div className="btns btns-center">
          <a className="btn-line btn-dark caps" href={waLink(`Bonjour, je voudrais des informations sur : ${f.title}.`)}>Demander le programme</a>
          <Link className="btn-line caps" href="/formations">Toutes les formations</Link>
        </div>
      </section>
    </main>
  );
}
