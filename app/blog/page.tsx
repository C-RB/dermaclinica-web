import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { getPosts } from '@/lib/wordpress'
import PostCard from '@/components/PostCard'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Artículos sobre dermatología, cuidado de la piel y tratamientos estéticos.',
}

// searchParams es Promise en Next.js 16
export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>
}) {
  const { page: pageParam } = await searchParams
  const currentPage = Math.max(1, parseInt(pageParam ?? '1', 10))
  const perPage = 9

  const { posts, totalPages } = await getPosts(currentPage, perPage)

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="mb-12">
        <p className="text-sm font-semibold text-teal-primary uppercase tracking-widest mb-2">
          Publicaciones
        </p>
        <h1 className="font-heading font-bold text-4xl text-charcoal">Blog</h1>
        <p className="mt-3 text-charcoal/60">
          Artículos sobre dermatología, cuidado de la piel y nuestros tratamientos.
        </p>
      </div>

      {posts.length === 0 ? (
        <p className="text-charcoal/50">No hay publicaciones disponibles.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>

          {/* Paginación */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-4 mt-12">
              {currentPage > 1 && (
                <Link
                  href={`/blog?page=${currentPage - 1}`}
                  className="flex items-center gap-1 px-4 py-2 rounded border border-gray-200 text-sm font-medium text-charcoal hover:border-teal-primary hover:text-teal-primary transition-colors"
                >
                  <ChevronLeft size={16} />
                  Anterior
                </Link>
              )}

              <span className="text-sm text-charcoal/50">
                Página {currentPage} de {totalPages}
              </span>

              {currentPage < totalPages && (
                <Link
                  href={`/blog?page=${currentPage + 1}`}
                  className="flex items-center gap-1 px-4 py-2 rounded border border-gray-200 text-sm font-medium text-charcoal hover:border-teal-primary hover:text-teal-primary transition-colors"
                >
                  Siguiente
                  <ChevronRight size={16} />
                </Link>
              )}
            </div>
          )}
        </>
      )}
    </div>
  )
}
