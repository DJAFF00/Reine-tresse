import { Photo, PageHead } from "../../components/ui";
import { waLink } from "../../lib/config";

export const metadata = { title: "À propos de nous" };

export default function About() {
  return (
    <main>
      <PageHead title="À propos de nous" />
      <section className="section about-grid">
        <Photo file="salon.jpg" label="L’intérieur du salon" className="about-photo" />
        <div className="prose">
          <h2>Salon de coiffure haut de gamme à Abomey-Calavi : bienvenue chez Reine et Tresses</h2>
          <p>
            Bienvenue chez <strong>Reine et Tresses</strong>, l’adresse incontournable
            de l’élégance et de la beauté à <strong>Abomey-Calavi</strong>. Plus qu’un
            simple rendez-vous, nous offrons à chaque femme une véritable expérience
            de prestige, pensée pour révéler la reine qui est en vous.
          </p>
          <h3>Notre savoir-faire : l’art de la coiffure et de la tresse</h3>
          <p>
            Nos artisans coiffeurs à Abomey-Calavi sont spécialisés dans la mise en
            beauté de tous les types de cheveux. Que vous souhaitiez des{" "}
            <strong>tresses sophistiquées, des nattes collées, un tissage professionnel
            ou des soins capillaires profonds</strong>, notre équipe maîtrise les
            techniques les plus modernes. Nous utilisons exclusivement des produits
            de haute qualité pour garantir la santé, la pousse et l’éclat de votre chevelure.
          </p>
          <h3>Notre philosophie : l’excellence d’un service royal</h3>
          <p>
            Chez <strong>Reine et Tresses</strong>, chaque cliente bénéficie d’un
            traitement sur-mesure. Notre salon de beauté vous accueille dans un cadre
            raffiné et apaisant au cœur d’Abomey-Calavi. Écoute attentive, conseils
            personnalisés et diagnostic capillaire précis sont au centre de notre
            démarche pour vous offrir un moment de détente absolu et un résultat impeccable.
          </p>
          <p><strong>
            N’attendez plus pour sublimer votre beauté. Prenez rendez-vous chez Reine
            et Tresses à Abomey-Calavi et confiez vos cheveux à de véritables experts.
          </strong></p>
          <a className="btn-line btn-dark caps" href={waLink()}>Prendre rendez-vous</a>
        </div>
      </section>
    </main>
  );
}
