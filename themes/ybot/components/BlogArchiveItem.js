import SmartLink from '@/components/SmartLink'

export default function BlogArchiveItem({ archiveTitle, archivePosts }) {
  return (
    <section key={archiveTitle} className='border-t border-black/8 py-8 first:border-t-0 first:pt-0 dark:border-white/10'>
      <div className='grid gap-6 lg:grid-cols-[180px_minmax(0,1fr)]'>
        <div>
          <p className='text-xs font-semibold uppercase tracking-[0.28em] text-[var(--ybot-muted)] dark:text-white/45'>
            Archive
          </p>
          <h2 id={archiveTitle} className='ybot-display mt-3 text-4xl tracking-[-0.05em] text-[var(--ybot-foreground)] dark:text-white'>
            {archiveTitle}
          </h2>
        </div>

        <ul className='grid gap-3'>
          {archivePosts[archiveTitle].map(post => (
            <li
              key={post.id}
              className='rounded-[22px] border border-black/8 bg-white/56 px-5 py-4 transition duration-300 hover:-translate-y-0.5 hover:border-[var(--ybot-accent)] hover:shadow-[0_18px_40px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-white/[0.03]'>
              <div className='flex flex-col gap-3 md:flex-row md:items-center md:justify-between'>
                <div>
                  <p className='text-xs font-semibold uppercase tracking-[0.2em] text-[var(--ybot-muted)] dark:text-white/45'>
                    {post.date?.start_date || post.publishDay || post.lastEditedDay || ''}
                  </p>
                  <SmartLink
                    href={post?.href}
                    passHref
                    className='mt-2 block text-lg font-semibold leading-8 tracking-[-0.02em] text-[var(--ybot-foreground)] transition hover:text-[var(--ybot-accent-strong)] dark:text-white'>
                    {post.title}
                  </SmartLink>
                </div>
                <span className='shrink-0 text-sm font-semibold text-[var(--ybot-muted)] dark:text-white/55'>
                  阅读文章 →
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
