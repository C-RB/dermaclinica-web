import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Calendar } from 'lucide-react'
import { getPostBySlug, getAllPostSlugs, formatDate, stripHtml } from '@/lib/wordpress'

// Pre-genera las 20 rutas en build time
export async function generateStaticParams() {
  const slugs = await getAllPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

// Metadatos dinámicos por post
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return {}

  return {
    title: stripHtml(post.title.rendered),
    description: stripHtml(post.excerpt.rendered).slice(0, 160),
  }
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) notFound()

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      {/* Breadcrumb */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-sm text-charcoal/50 hover:text-teal-primary transition-colors mb-8"
      >
        <ArrowLeft size={14} />
        Volver al blog
      </Link>

      {/* Header del post */}
      <header className="mb-10">
        <div className="flex items-center gap-1.5 text-sm text-charcoal/50 mb-4">
          <Calendar size={14} />
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </div>
        <h1
          className="font-heading font-bold text-3xl md:text-4xl text-charcoal leading-tight"
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />
      </header>

      {/* Contenido del post — prose aplica tipografía legible al HTML de WordPress */}
      <div
        className="prose prose-stone prose-headings:font-heading prose-a:text-teal-primary prose-a:no-underline hover:prose-a:underline max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />

      {/* Footer del post */}
      <div className="mt-12 pt-8 border-t border-gray-100">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-primary hover:text-teal-secondary transition-colors"
        >
          <ArrowLeft size={14} />
          Ver todas las publicaciones
        </Link>
      </div>
    </div>
  )
}
