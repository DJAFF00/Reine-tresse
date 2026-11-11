// ⚠️ À REMPLIR avec les vraies infos du salon avant de montrer le site.
export const SALON = {
  name: "Reine & Tresses",
  city: "Abomey-Calavi, Bénin",
  whatsapp: "2290191715652", // numéro WhatsApp, indicatif inclus, sans + ni espaces
  phone: "+229 0191715652",
  phoneHref: "+2290191715652",
  address: "Abomey-Calavi, Bénin", // adresse exacte à ajouter
  lat: 6.4502938,
  lng: 2.3468167,
  rating: "4,8",
  reviewCount: "127", // repris de leur site actuel : à vérifier sur Google Maps
  googleReviewsUrl: "https://maps.app.goo.gl/7pF5pHA5EGcGd8pE7",
  hours: [
    ["Lundi – Samedi", "À confirmer"],
    ["Dimanche", "À confirmer"],
  ],
};

export const WA_MESSAGE = "Bonjour Reine & Tresses, je voudrais prendre rendez-vous.";
export const waLink = (msg = WA_MESSAGE) =>
  `https://wa.me/${SALON.whatsapp}?text=${encodeURIComponent(msg)}`;

// Même menu que leur site actuel
export const NAV = [
  { label: "Accueil", href: "/" },
  { label: "À propos de nous", href: "/a-propos" },
  { label: "Catalogue Coiffures", href: "/catalogue" },
  { label: "Nos Formations", formations: true },
  { label: "Conseils & Tarifs", href: "/conseils" },
  { label: "Fidélité & Avis", href: "/fidelite" },
  { label: "Réservation & Contact", href: "/contact" },
];

// Intitulés coupés sur leur site actuel (« … ») : à confirmer avec le salon.
export const FORMATIONS = [
  { slug: "coiffure-de-base", title: "Formation coiffure de base débutant" },
  { slug: "specialisee-tresses", title: "Formation spécialisée en tresses" },
  { slug: "perruques-extensions", title: "Formation perruques / extensions" },
  { slug: "soins-capillaires", title: "Formation soins capillaires" },
  { slug: "maquillage-beaute", title: "Formation maquillage beauté" },
  { slug: "onglerie-beaute", title: "Formation onglerie / beauté additionnelle" },
  { slug: "entrepreneuriat", title: "Formation entrepreneuriat salon" },
  { slug: "marketing-digital", title: "Formation marketing digital pour coiffeuses" },
  { slug: "vip-masterclass", title: "Formations VIP / masterclass avancées" },
];

export const CATEGORIES = [
  { label: "Tresses", img: "cat-tresses.jpg" },
  { label: "Nattes collées", img: "cat-nattes.jpg" },
  { label: "Tissage", img: "cat-tissage.jpg" },
  { label: "Coloration", img: "cat-coloration.jpg" },
  { label: "Soins", img: "cat-soins.jpg" },
];

export const CATALOGUE = [
  { name: "", img: "coiffure-1.jpg" },
  { name: "", img: "coiffure-2.jpg" },
  { name: "", img: "coiffure-3.jpg" },
  { name: "", img: "coiffure-4.jpg" },
  { name: "", img: "coiffure-5.jpg" },
  { name: "", img: "coiffure-6.jpg" },
  { name: "", img: "coiffure-7.jpg" },
  { name: "", img: "coiffure-8.jpg" },
  { name: "", img: "coiffure-9.jpg" },
  { name: "", img: "coiffure-10.jpg" },
];

export const TILES = [
  { label: "", img: "tile-tresses.jpg" },
  { label: "", img: "tile-nattes.jpg" },
  { label: "", img: "tile-tissage.jpg" },
];

export const LOYALTY = [
  ["5 points", "Soin capillaire offert"],
  ["10 points", "20 % de réduction sur votre prochain service"],
  ["20 points", "Coiffure gratuite au choix"],
];
