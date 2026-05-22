import "./globals.css"
import type { Metadata, Viewport } from "next"
import { Akaya_Kanadaka, Archivo_Black, Permanent_Marker, Poppins } from "next/font/google"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
})
const permanentMarker = Permanent_Marker({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-permanent-marker",
})
const akayaKanadaka = Akaya_Kanadaka({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-akaya-kanadaka",
})
const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-archivo-black",
})

export const metadata: Metadata = {
  title: "Muhammad Talha | MERN & Next.js Developer",
  description: "Professional portfolio of Muhammad Talha, a Full-Stack Developer specializing in high-performance React, Next.js, Node.js, and TypeScript applications.",
  
  // 1. Core indexing configurations
  metadataBase: new URL("https://talhadevco.vercel.app"),
  alternates: {
    canonical: "/",
  },

  // 2. Keywords (Clean array of strings for non-Google scrapers)
  keywords: [
    "Muhammad Talha",
    "MERN Stack Developer",
    "Next.js Developer",
    "React Engineer",
    "Full Stack Web Developer",
    "JavaScript Developer",
    "TypeScript Portfolio",
  ],

  // 3. Open Graph (For LinkedIn, Discord, Facebook previews)
  openGraph: {
    title: "Muhammad Talha | MERN & Next.js Developer",
    description: "Explore production-grade full-stack projects, including custom POS systems and optimized e-commerce platforms built with Next.js.",
    url: "https://talhadevco.vercel.app",
    siteName: "TalhaDev Portfolio",
    images: [
      {
        url: "/talha-og.webp", // Add a nice screenshot image named 'talha-og.webp' inside your public folder
        width: 1200,
        height: 630,
        alt: "Muhammad Talha Developer Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // 4. Twitter Cards (For X/Twitter link expansion)
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Talha | MERN & Next.js Developer",
    description: "Full-Stack Web Developer specializing in React, Next.js, and Node.js.",
    images: ["/talha-og.webp"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${permanentMarker.variable} ${akayaKanadaka.variable} ${archivoBlack.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
