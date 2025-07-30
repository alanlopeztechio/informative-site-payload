import type { Metadata } from 'next'

import { cn } from '@/utilities/ui'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import React from 'react'

import { AdminBar } from '@/components/AdminBar'
import { Footer } from '@/Footer/Component'
import { Header } from '@/Header/Component'
import { Providers } from '@/providers'
import { InitTheme } from '@/providers/Theme/InitTheme'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { draftMode } from 'next/headers'

import './globals.css'
import { getServerSideURL } from '@/utilities/getURL'

//   función para traer los colores del siteConfig desde Payload
async function fetchSiteConfig() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/globals/siteConfig`, {
    next: { revalidate: 60 }, // Cache por 60 segundos en frontend
  })
  if (!res.ok) {
    console.error('Error al cargar siteConfig:', res.statusText)
    return { headerBackgroundColor: '#ffffff', footerBackgroundColor: '#f5f5f5' }
  }
  return res.json()
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { isEnabled } = await draftMode()

  //  Obtenemos colores dinámicos desde Payload CMS
  const siteConfig = await fetchSiteConfig()

  return (
    <html className={cn(GeistSans.variable, GeistMono.variable)} lang="en" suppressHydrationWarning>
      <head>
        <InitTheme />
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      </head>
      <body>
        <Providers>
          <AdminBar
            adminBarProps={{
              preview: isEnabled,
            }}
          />

          {/*  Header con color dinámico desde siteConfig */}
          <div style={{ backgroundColor: siteConfig.headerBackgroundColor }}>
            <Header />
          </div>

          {children}

          {/*  Footer con color dinámico desde siteConfig */}
          <div style={{ backgroundColor: siteConfig.footerBackgroundColor }}>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}

//  Metadata para SEO y redes sociales
export const metadata: Metadata = {
  metadataBase: new URL(getServerSideURL()),
  openGraph: mergeOpenGraph(),
  twitter: {
    card: 'summary_large_image',
    creator: '@payloadcms',
  },
}
