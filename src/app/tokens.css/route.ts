import { readFile } from 'fs/promises'
import path from 'path'

export const dynamic = 'force-static'

export async function GET() {
  const filePath = path.join(process.cwd(), 'src', 'styles', 'tokens.css')
  const css = await readFile(filePath, 'utf8')

  return new Response(css, {
    headers: {
      'Content-Type': 'text/css; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=3600, must-revalidate',
    },
  })
}
