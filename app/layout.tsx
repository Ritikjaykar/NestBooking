import type React from "react"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import OfferPopup from "@/components/offer-popup"
import "./globals.css"

// rename `_plusJakarta` → `plusJakarta` for clarity
const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nestbooking",
  description: "Find your perfect rental property",
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      {/* apply the font */}
      <body className={`${plusJakarta.className} font-sans antialiased`}>
        <OfferPopup />
        {children}
      </body>
    </html>
  )
}
