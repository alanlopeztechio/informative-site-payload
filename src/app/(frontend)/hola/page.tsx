import type { Metadata } from 'next/types'

import React from 'react'

export const dynamic = 'force-static'
export const revalidate = 600

export default async function Page() {
  return <h1>Hola Mundo</h1>
}

export function generateMetadata(): Metadata {
  return {
    title: `Payload Website Template Posts`,
  }
}
