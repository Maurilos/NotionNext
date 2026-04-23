import SmartLink from '@/components/SmartLink'
import { useGlobal } from '@/lib/global'
import CONFIG from '../config'
import { siteConfig } from '@/lib/config'

const RecommendPosts = ({ recommendPosts }) => {
  const { locale } = useGlobal()

  if (!siteConfig('SIMPLE_ARTICLE_RECOMMEND_POSTS', null, CONFIG) || !recommendPosts || recommendPosts.length < 1) {
    return null
  }

  return (
    <section className='mt-12 border-t border-black/8 pt-8 dark:border-white/10'>
      <div className='mb-6'>
        <p className='text-xs font-semibold uppercase tracking-[0.28em] text-[var(--ybot-muted)] dark:text-white/45'>
          Related Reading
        </p>
        <h2 className='ybot-display mt-3 text-3xl tracking-[-0.04em] text-[var(--ybot-foreground)] dark:text-white'>
          {locale?.COMMON?.RELATE_POSTS || '相关文章'}
        </h2>
      </div>
      <div className='grid gap-4 md:grid-cols-2 xl:grid-cols-3'>
        {recommendPosts.map(post => (
          <SmartLink
            key={post.id}
            href={`/${post.slug}`}
            className='ybot-surface group flex h-full flex-col justify-between rounded-[24px] p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(15,23,42,0.10)]'>
            <div>
              <p className='text-xs font-semibold uppercase tracking-[0.24em] text-[var(--ybot-muted)] dark:text-white/45'>
                {post.category || post.type || 'Post'}
              </p>
              <h3 className='mt-4 text-lg font-semibold leading-8 tracking-[-0.02em] text-[var(--ybot-foreground)] transition group-hover:text-[var(--ybot-accent-strong)] dark:text-white'>
                {post.title}
              </h3>
            </div>
            <span className='mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--ybot-foreground)] dark:text-white/70'>
              继续阅读 <i className='fas fa-arrow-right text-xs' />
            </span>
          </SmartLink>
        ))}
      </div>
    </section>
  )
}

export default RecommendPosts
