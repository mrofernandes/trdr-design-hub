import type { Metadata } from 'next'
import { Inter, Space_Grotesk, Roboto_Mono } from 'next/font/google'
import AppShell from '@/components/layout/AppShell'
import '@/styles/globals.css'
import '@/styles/components.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
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
    <html lang="pt-BR" data-theme="dark" className={`${inter.variable} ${spaceGrotesk.variable} ${robotoMono.variable}`}>
      <body>
        <AppShell>
          {children}
        </AppShell>
      </body>
    </html>
  )
}
