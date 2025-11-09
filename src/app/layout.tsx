import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./globals.css"

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
})

export const metadata: Metadata = {
  title: "Ana Gomes | Full-Stack Engineer",
  description: "Full-Stack Engineer specialized in Ruby on Rails, React, Supabase, and AI integrations",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} ${inter.variable} font-body antialiased`}>
        <ThemeProvider theme={theme} disableTransitionOnChange>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
