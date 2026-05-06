import type { Metadata } from 'next'
import { Inter, JetBrains_Mono, Roboto_Mono } from 'next/font/google'
import AppShell from '@/components/layout/AppShell'
import '@/styles/globals.css'
import '@/styles/components.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'TRDR Design Hub',
  description: 'Plataforma do Design System TRDR — tokens, componentes, layouts e gerador de prompts para IA.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" data-theme="dark" className={`${inter.variable} ${jetbrainsMono.variable} ${robotoMono.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body>
        <AppShell>
          {children}
        </AppShell>
      </body>
    </html>
  )
}
