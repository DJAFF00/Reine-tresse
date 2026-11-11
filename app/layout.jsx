import { Poppins } from "next/font/google";
import Link from "next/link";
import Header from "../components/Header";
import { SALON, waLink } from "../lib/config";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Reine & Tresses | Salon de coiffure à Abomey-Calavi",
    template: "%s | Reine & Tresses",
  },
  description:
    "Tresses, nattes collées, tissage, coloration et soins capillaires à Abomey-Calavi. Réservez sur WhatsApp.",
};
export const viewport = { width: "device-width", initialScale: 1 };

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={poppins.variable}>
      <body>
        <div className="announce caps">Réservez sur WhatsApp</div>
        <Header />
        {children}
        <footer className="footer">
          <nav aria-label="Pied de page">
            <Link href="/a-propos">À propos</Link>
            <Link href="/catalogue">Catalogue</Link>
            <Link href="/formations">Formations</Link>
            <Link href="/conseils">Conseils & Tarifs</Link>
            <Link href="/fidelite">Fidélité & Avis</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <span>© {new Date().getFullYear()} {SALON.name}</span>
        </footer>
        <div className="sticky-bar">
          <a className="btn-line caps" href={`tel:${SALON.phoneHref}`}>Appeler</a>
          <a className="btn-line btn-dark caps" href={waLink()}>WhatsApp</a>
        </div>
      </body>
    </html>
  );
}
