import { NextResponse } from 'next/server'
import { components, COMPONENT_CATEGORY_LABELS } from '@/data/components'

export const dynamic = 'force-static'

export async function GET() {
  const implemented = components.filter((c) => c.implemented).length

  return NextResponse.json(
    {
      version: '1.0',
      generatedAt: new Date().toISOString(),
      total: components.length,
      implemented,
      categories: COMPONENT_CATEGORY_LABELS,
      components,
    },
    {
      headers: {
        'Cache-Control': 'public, max-age=0, s-maxage=3600, must-revalidate',
      },
    },
  )
}
