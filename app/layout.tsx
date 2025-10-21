import type React from "react"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "Nestbooking",
  description: "booking app",
  generator: "Nestbooking.com",
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
