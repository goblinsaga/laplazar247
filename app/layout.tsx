
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "La Plaza 24/7 RP | Reglamento Oficial",
  description:
    "Centro oficial de consulta del reglamento del servidor LA PLAZA 24/7 RP.",
  icons: {
    icon: "/la_plaza_247.png",
    shortcut: "/la_plaza_247.png",
    apple: "/la_plaza_247.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}