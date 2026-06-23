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

// todo: Get the pictures generate by gemeni and use it before the deployment.
export const metadata: Metadata = {
  title: "Muhammad Talha | MERN & Next.js Developer",
  description: "Explore the full-stack engineering portfolio of Muhammad Talha, specializing in production-ready React, Next.js, and Node.js applications.",
  
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
   description: "Explore the engineering portfolio of Muhammad Talha, a Full-Stack Web Developer specializing in production-grade React, Next.js, and Node.js applications. From complex MERN stack architectures to performance-optimized web systems, discover scalable software solutions built for the modern web.",
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
    description: "Full-Stack Engineer specializing in high-performance React, Next.js, and MERN applications. Building production-grade web systems with clean architecture.",
    images: ["/talha-og.webp"],
  },

  // Favicon and icons (Optional, but good for branding)
  icons: {
    icon: "/talha.ico",
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "icon", url: "/favicon-32x32.png", sizes: "32x32" },
      { rel: "icon", url: "/favicon-16x16.png", sizes: "16x16" },
    ],
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
