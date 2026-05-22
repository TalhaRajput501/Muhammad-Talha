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
  title: "Muhammad Talha | MERN Stack Developer",
  icons: {
    icon: "/talha.webp",
  },
}

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
