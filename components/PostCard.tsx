import Link from 'next/link'
import { Calendar } from 'lucide-react'
import { formatDate, stripHtml } from '@/lib/wordpress'
import type { WPPost } from '@/lib/wordpress'

interface PostCardProps {
  post: WPPost
}

export default function PostCard({ post }: PostCardProps) {
  const title = post.title.rendered
  const excerpt = stripHtml(post.excerpt.rendered).slice(0, 130) + '…'
  const date = formatDate(post.date)

  return (
    <article className="bg-white rounded border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
      {/* Imagen placeholder — se puede conectar con featured_media después */}
      <div className="h-40 bg-teal-primary/10 flex items-center justify-center">
        <span className="text-teal-primary/30 text-4xl font-heading font-bold">D</span>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-1.5 text-xs text-charcoal/50 mb-2">
          <Calendar size={12} />
          <time dateTime={post.date}>{date}</time>
        </div>

        <h3
          className="font-heading font-semibold text-base text-charcoal leading-snug mb-2"
          dangerouslySetInnerHTML={{ __html: title }}
        />

        <p className="text-sm text-charcoal/70 leading-relaxed flex-1">{excerpt}</p>

        <Link
          href={`/blog/${post.slug}`}
          className="mt-4 text-sm font-semibold text-teal-primary hover:text-teal-secondary transition-colors"
        >
          Leer más →
        </Link>
      </div>
    </article>
  )
}
