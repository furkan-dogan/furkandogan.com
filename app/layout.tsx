import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Alex.Dev - Creative Web Developer | Futuristic Digital Experiences",
  description:
    "Creative full-stack developer specializing in cutting-edge web applications, AI-powered solutions, and immersive digital experiences. Pushing the boundaries of web development.",
  keywords:
    "creative web developer, futuristic web design, AI applications, 3D web experiences, glassmorphism, neon design",
  authors: [{ name: "Alex.Dev" }],
  openGraph: {
    title: "Alex.Dev - Creative Web Developer",
    description: "Crafting the future, one line of code at a time",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex.Dev - Creative Web Developer",
    description: "Crafting the future, one line of code at a time",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
