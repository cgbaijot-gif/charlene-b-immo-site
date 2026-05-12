import './globals.css'

export const metadata = {
  title: "Charlene B Immobilier – Immobilier Premium & Gestion Locative",
  description:
    "Agence immobilière premium : transaction, gestion locative, conciergerie Airbnb, recherche de biens, investissement clé en main.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  );
}
