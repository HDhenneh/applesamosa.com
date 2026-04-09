import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

export const metadata: Metadata = {
  title: 'Remote Goat - Agentic Hustler Platform',
  description: 'Intent-based hustle matching with multi-agent architecture. Self-improving systems that learn from users, not static lists.',
  keywords: ['hustle', 'remote work', 'side hustle', 'agentic', 'AI', 'freelancing'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Inter />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
