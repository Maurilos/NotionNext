export default function BlogPostBar(props) {
  const { tag, category, postCount } = props

  if (!tag && !category) {
    return null
  }

  return (
    <div className='mb-8 rounded-[24px] border border-black/8 bg-white/52 px-6 py-5 text-[var(--ybot-foreground)] shadow-[0_12px_38px_rgba(15,23,42,0.04)] dark:border-white/10 dark:bg-white/6 dark:text-white'>
      <p className='text-xs font-semibold uppercase tracking-[0.28em] text-[var(--ybot-muted)] dark:text-white/45'>
        Directory
      </p>
      <h2 className='ybot-display mt-3 text-3xl tracking-[-0.04em] md:text-4xl'>
        {tag ? `标签：${tag}` : `分类：${category}`}
      </h2>
      {postCount ? (
        <p className='mt-3 text-sm leading-7 text-[var(--ybot-muted)] dark:text-white/65'>
          当前筛选下共 {postCount} 篇内容。
        </p>
      ) : null}
    </div>
  )
}
