import { PageHead } from "../../components/ui";
import { waLink } from "../../lib/config";

export const metadata = { title: "Conseils & Tarifs" };

export default function Conseils() {
  return (
    <main>
      <PageHead title="Conseils & tarifs" />
      <section className="section articles">
        <article className="prose">
          <h2>5 secrets pour faire durer vos tresses plus longtemps</h2>
          <p>
            Vous venez de sortir du salon et vos tresses sont magnifiques ? Pour
            préserver cet éclat et protéger vos cheveux naturels le plus longtemps
            possible, voici nos conseils d’experts :
          </p>
          <ol>
            <li><strong>Le rituel du soir (satin ou soie) :</strong> c’est le secret numéro 1. Dormez toujours avec un foulard ou un bonnet en satin ou en soie. Contrairement au coton, ces matières ne retiennent pas l’humidité de vos cheveux et limitent les frottements qui causent les frisottis.</li>
            <li><strong>Hydratez votre cuir chevelu :</strong> des tresses sur un cuir chevelu sec peuvent causer des démangeaisons. Utilisez un spray hydratant léger ou une huile naturelle (comme l’huile de jojoba) pour nourrir votre peau sans étouffer les pores.</li>
            <li><strong>Préservez vos « baby hairs » :</strong> évitez de trop tirer sur les bordures lors du coiffage quotidien. Une tension excessive peut fragiliser les tempes et causer une alopécie de traction. Laissez vos bordures respirer !</li>
            <li><strong>Un nettoyage en douceur :</strong> si vous gardez vos tresses plusieurs semaines, nettoyez votre cuir chevelu avec un coton imbibé d’eau tiède et de shampooing dilué pour éliminer les impuretés sans détremper toute la coiffure.</li>
            <li><strong>Soyez attentive à la dépose :</strong> ne gardez pas vos tresses au-delà de 6 à 8 semaines.</li>
          </ol>
          <p className="tip"><strong>Le conseil du pro :</strong> une pose bien entretenue est beaucoup plus facile et rapide à retirer lors de votre prochain passage. Cela réduit le temps de dépose et permet de passer plus vite à votre nouvelle création !</p>
        </article>

        <article className="prose">
          <h2>Quelle coloration choisir selon votre teint ?</h2>
          <p>
            Envie de changer de tête ? La coloration est un outil magique pour
            illuminer votre visage et affirmer votre style, mais choisir la bonne
            nuance est tout un art pour révéler votre beauté naturelle. Avant de
            craquer pour une nouvelle teinte, voici comment trouver celle qui vous
            mettra vraiment en valeur.
          </p>
          <h3>1. Identifiez votre sous-ton</h3>
          <p>Tout commence par la température de votre peau :</p>
          <ul>
            <li><strong>Teint chaud :</strong> si vos veines au poignet tirent sur le vert, vous avez un teint chaud.</li>
            <li><strong>Teint froid :</strong> si vos veines sont plutôt bleues ou violettes, votre teint est froid.</li>
          </ul>
          <h3>2. Trouvez votre nuance idéale</h3>
          <ul>
            <li><strong>Pour les teints chauds :</strong> misez sur des reflets <strong>dorés, miel ou cuivrés</strong>. Ces nuances apportent un effet « bonne mine » immédiat et réchauffent votre visage.</li>
            <li><strong>Pour les teints froids :</strong> privilégiez les tons <strong>cendrés, marrons glacés ou reflets irisés</strong>. Ces couleurs créent un contraste élégant et sophistiqué avec votre peau.</li>
          </ul>
        </article>
      </section>

      <section className="section tinted center" id="tarifs">
        <h2 className="big">Pourquoi le tarif varie-t-il ?</h2>
        <p className="narrow">
          Le prix d’une coloration n’est jamais fixe. Le tarif dépend directement de
          la <strong>longueur</strong> et de la <strong>densité</strong> (épaisseur)
          de vos cheveux. Plus la chevelure est importante, plus la quantité de produit
          utilisée et le temps de travail augmentent pour garantir un résultat uniforme
          et éclatant.
        </p>
        <p className="narrow">
          <strong>Besoin d’un avis d’expert ?</strong> Envoyez-nous une photo de vos
          cheveux actuels et de l’inspiration souhaitée via WhatsApp. Nous vous
          donnerons un conseil personnalisé et un <strong>devis précis</strong> à distance.
        </p>
        <a className="btn-line btn-dark caps" href={waLink("Bonjour, je voudrais un devis. Voici une photo de mes cheveux et de la coiffure souhaitée.")}>Nous écrire sur WhatsApp</a>
      </section>
    </main>
  );
}
