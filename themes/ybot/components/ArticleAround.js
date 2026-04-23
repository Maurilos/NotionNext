import SmartLink from '@/components/SmartLink'

function AroundCard({ label, post, align = 'left' }) {
  if (!post) return null

  const isLeft = align === 'left'

  return (
    <SmartLink
      href={`/${post.slug}`}
      passHref
      className={`ybot-surface group flex min-h-[154px] flex-col justify-between rounded-[28px] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(15,23,42,0.10)] ${
        isLeft ? 'items-start text-left' : 'items-end text-right'
      }`}>
      <div>
        <p className='text-xs font-semibold uppercase tracking-[0.26em] text-[var(--ybot-muted)] dark:text-white/45'>
          {label}
        </p>
        <h3 className='ybot-display mt-4 text-2xl leading-tight tracking-[-0.04em] text-[var(--ybot-foreground)] transition group-hover:text-[var(--ybot-accent-strong)] dark:text-white'>
          {post.title}
        </h3>
      </div>
      <span className='mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--ybot-foreground)] dark:text-white/72'>
        {isLeft ? <i className='fas fa-arrow-left text-xs' /> : null}
        前往阅读
        {!isLeft ? <i className='fas fa-arrow-right text-xs' /> : null}
      </span>
    </SmartLink>
  )
}

export default function ArticleAround({ prev, next }) {
  if (!prev && !next) {
    return null
  }

  return (
    <section className='mt-12 border-t border-black/8 pt-8 dark:border-white/10'>
      <div className='mb-6 flex items-end justify-between gap-4'>
        <div>
          <p className='text-xs font-semibold uppercase tracking-[0.28em] text-[var(--ybot-muted)] dark:text-white/45'>
            Article Flow
          </p>
          <h2 className='ybot-display mt-3 text-3xl tracking-[-0.04em] text-[var(--ybot-foreground)] dark:text-white'>
            接着往前或往后读
          </h2>
        </div>
      </div>
      <div className={`grid gap-4 ${prev && next ? 'md:grid-cols-2' : 'md:grid-cols-1'}`}>
        <AroundCard label='上一篇' post={prev} align='left' />
        <AroundCard label='下一篇' post={next} align='right' />
      </div>
    </section>
  )
}
