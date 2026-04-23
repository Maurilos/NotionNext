import SmartLink from '@/components/SmartLink'

export default function EmptyState({
  eyebrow = 'No Results',
  title = '这里暂时没有内容。',
  description = '可能是筛选条件太窄，也可能这块内容还没填。先回首页、归档或搜索别的关键词。',
  primaryHref = '/',
  primaryLabel = '回到首页',
  secondaryHref = '/archive',
  secondaryLabel = '查看归档'
}) {
  return (
    <section className='ybot-surface rounded-[28px] p-7 md:p-9'>
      <p className='text-xs font-semibold uppercase tracking-[0.28em] text-[var(--ybot-muted)] dark:text-white/45'>
        {eyebrow}
      </p>
      <h2 className='ybot-display mt-4 text-4xl tracking-[-0.05em] text-[var(--ybot-foreground)] dark:text-white md:text-5xl'>
        {title}
      </h2>
      <p className='mt-4 max-w-2xl text-sm leading-8 text-[var(--ybot-muted)] dark:text-white/68 md:text-base'>
        {description}
      </p>
      <div className='mt-8 flex flex-wrap gap-3'>
        <SmartLink
          href={primaryHref}
          className='inline-flex items-center justify-center rounded-full border border-[var(--ybot-accent)] bg-[var(--ybot-accent)] px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[var(--ybot-accent-strong)]'>
          {primaryLabel}
        </SmartLink>
        <SmartLink
          href={secondaryHref}
          className='inline-flex items-center justify-center rounded-full border border-black/10 bg-white/70 px-5 py-3 text-sm font-semibold text-[var(--ybot-foreground)] transition duration-300 hover:-translate-y-0.5 hover:border-[var(--ybot-accent)] hover:text-[var(--ybot-accent-strong)] dark:border-white/10 dark:bg-white/6 dark:text-white/80'>
          {secondaryLabel}
        </SmartLink>
      </div>
    </section>
  )
}
