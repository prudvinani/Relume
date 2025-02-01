import type { Metadata } from "next"
import { Geist, Open_Sans } from "next/font/google"
import "./globals.css"
import type React from "react" // Import React

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Relume - Website designed & built faster with AI",
  description: "Website designed & built faster with AI",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${openSans.variable} antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}

