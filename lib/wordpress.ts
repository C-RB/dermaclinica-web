const WP_API = 'https://dermaclinica.cl/wp-json/wp/v2'

export interface WPPost {
  id: number
  slug: string
  date: string
  title: { rendered: string }
  content: { rendered: string }
  excerpt: { rendered: string }
  featured_media: number
  categories: number[]
}

export interface WPCategory {
  id: number
  name: string
  slug: string
  count: number
}

export interface WPMedia {
  id: number
  source_url: string
  alt_text: string
  media_details: {
    sizes?: {
      medium?: { source_url: string }
      large?: { source_url: string }
    }
  }
}

export async function getPosts(page = 1, perPage = 10): Promise<{ posts: WPPost[]; total: number; totalPages: number }> {
  const res = await fetch(
    `${WP_API}/posts?per_page=${perPage}&page=${page}&_embed=false`,
    { cache: 'force-cache' }
  )
  if (!res.ok) return { posts: [], total: 0, totalPages: 0 }

  const posts: WPPost[] = await res.json()
  const total = parseInt(res.headers.get('X-WP-Total') ?? '0', 10)
  const totalPages = parseInt(res.headers.get('X-WP-TotalPages') ?? '1', 10)
  return { posts, total, totalPages }
}

export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  const res = await fetch(
    `${WP_API}/posts?slug=${slug}`,
    { cache: 'force-cache' }
  )
  if (!res.ok) return null

  const posts: WPPost[] = await res.json()
  return posts[0] ?? null
}

export async function getAllPostSlugs(): Promise<string[]> {
  const res = await fetch(
    `${WP_API}/posts?per_page=100&_fields=slug`,
    { cache: 'force-cache' }
  )
  if (!res.ok) return []

  const posts: Pick<WPPost, 'slug'>[] = await res.json()
  return posts.map((p) => p.slug)
}

export async function getCategories(): Promise<WPCategory[]> {
  const res = await fetch(
    `${WP_API}/categories`,
    { cache: 'force-cache' }
  )
  if (!res.ok) return []
  return res.json()
}

export async function getMediaById(mediaId: number): Promise<WPMedia | null> {
  if (!mediaId) return null
  const res = await fetch(
    `${WP_API}/media/${mediaId}`,
    { cache: 'force-cache' }
  )
  if (!res.ok) return null
  return res.json()
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('es-CL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, '').trim()
}
