import "./globals.css";

export const metadata = {
  title: "Charlene B Immobilier – Immobilier Premium",
  description:
    "Agence immobilière premium : transaction, gestion locative, conciergerie Airbnb, investissement clé en main.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
