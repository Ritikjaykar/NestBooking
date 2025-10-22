import type React from "react"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nestbooking - Buy, Rent, or Sell Your Property",
  description: "A great platform to buy, sell, or rent your property without any commissions.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
