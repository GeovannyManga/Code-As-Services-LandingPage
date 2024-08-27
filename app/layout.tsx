import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../context/ThemeContext";
import { LanguageProvider } from "../context/lenguageProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Code As Services",
  description: "En Code as Service, nos dedicamos a ofrecer servicios de desarrollo y consultoría de software de primer nivel. Nuestro equipo de expertos está comprometido en proporcionar soluciones personalizadas que satisfagan las necesidades únicas de cada cliente. Ya sea que necesites desarrollo de software a medida, creación de aplicaciones móviles o consultoría estratégica, estamos aquí para ayudar a tu negocio a prosperar en la era digital.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider>
        <LanguageProvider>
      <body className={inter.className}>{children}</body>
      </LanguageProvider>
      </ThemeProvider>
    </html>
  );
}
