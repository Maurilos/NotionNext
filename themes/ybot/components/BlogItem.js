import NotionIcon from '@/components/NotionIcon'
import SmartLink from '@/components/SmartLink'
import { siteConfig } from '@/lib/config'

function getDateText(post) {
  return post?.publishDay || post?.date?.start_date || post?.createdTime || ''
}

export const BlogItem = ({ post }) => {
  if (!post) {
    return null
  }

  return (
    <article className='ybot-surface my-6 rounded-[28px] p-7 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(15,23,42,0.1)] md:p-8'>
      <div className='flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--ybot-muted)] dark:text-white/50'>
        {post?.category ? <span>{post.category}</span> : null}
        {post?.category ? <span className='h-1 w-1 rounded-full bg-black/20 dark:bg-white/20' /> : null}
        <span>{getDateText(post)}</span>
      </div>

      <div className='mt-6 flex flex-wrap gap-2'>
        {post?.type ? <span className='ybot-tag'>{post.type}</span> : null}
      </div>

      <h2 className='ybot-display mt-6 text-3xl tracking-[-0.04em] text-[var(--ybot-foreground)] dark:text-white'>
        <SmartLink href={post.href} className='menu-link'>
          {siteConfig('POST_TITLE_ICON') && <NotionIcon icon={post.pageIcon} />}
          {post.title}
        </SmartLink>
      </h2>

      <p className='mt-4 text-base leading-8 text-[var(--ybot-muted)] dark:text-white/68'>
        {post.summary}
        {post.summary ? '…' : ''}
      </p>

      {post?.tags?.length ? (
        <div className='mt-6 flex flex-wrap gap-2'>
          {post.tags.slice(0, 4).map(tag => (
            <SmartLink
              key={tag}
              href={`/tag/${tag}`}
              className='rounded-full border border-black/10 px-3 py-1 text-xs text-[var(--ybot-muted)] transition hover:text-[var(--ybot-accent-strong)] dark:border-white/10 dark:text-white/60'>
              #{tag}
            </SmartLink>
          ))}
        </div>
      ) : null}

      <div className='mt-8'>
        <SmartLink
          href={post.href}
          className='inline-flex items-center gap-2 text-sm font-semibold text-[var(--ybot-foreground)] transition hover:text-[var(--ybot-accent-strong)] dark:text-white'>
          阅读全文 <i className='fas fa-arrow-right text-xs' />
        </SmartLink>
      </div>
    </article>
  )
}
