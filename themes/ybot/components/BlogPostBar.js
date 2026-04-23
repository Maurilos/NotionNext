export default function BlogPostBar(props) {
  const { tag, category, postCount } = props

  if (!tag && !category) {
    return null
  }

  const label = tag ? 'Tag Directory' : 'Category Directory'
  const title = tag ? `标签：${tag}` : `分类：${category}`

  return (
    <div className='mb-8 rounded-[28px] border border-black/8 bg-white/56 px-6 py-6 text-[var(--ybot-foreground)] shadow-[0_12px_38px_rgba(15,23,42,0.04)] dark:border-white/10 dark:bg-white/6 dark:text-white md:px-8 md:py-7'>
      <div className='flex flex-col gap-4 md:flex-row md:items-end md:justify-between'>
        <div>
          <p className='text-xs font-semibold uppercase tracking-[0.28em] text-[var(--ybot-muted)] dark:text-white/45'>
            {label}
          </p>
          <h2 className='ybot-display mt-3 text-3xl tracking-[-0.04em] md:text-4xl'>
            {title}
          </h2>
          {postCount ? (
            <p className='mt-3 text-sm leading-7 text-[var(--ybot-muted)] dark:text-white/65'>
              当前筛选下共 {postCount} 篇内容，列表和详情页都会沿用同一套阅读节奏。
            </p>
          ) : null}
        </div>
        {postCount ? (
          <div className='inline-flex w-fit items-center rounded-full border border-black/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--ybot-muted)] dark:border-white/10 dark:text-white/45'>
            {postCount} Posts
          </div>
        ) : null}
      </div>
    </div>
  )
}
