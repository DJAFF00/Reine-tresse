import { PageHead, ContactBlock } from "../../components/ui";
import ReservationForm from "../../components/ReservationForm";

export const metadata = { title: "Réservation & Contact" };

export default function Contact() {
  return (
    <main>
      <PageHead title="Réservation & contact" lead="Choisissez votre coiffure et le moment qui vous convient, puis envoyez la demande sur WhatsApp." />
      <section className="section"><ReservationForm /></section>
      <ContactBlock />
    </main>
  );
}
