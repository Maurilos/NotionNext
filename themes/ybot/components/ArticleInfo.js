import NotionIcon from '@/components/NotionIcon'
import SmartLink from '@/components/SmartLink'
import { siteConfig } from '@/lib/config'
import CONFIG from '../config'

function getDateText(post) {
  return post?.publishDay || post?.date?.start_date || post?.createdTime || ''
}

function MetaItem({ icon, label, value, href }) {
  return (
    <div className='rounded-[20px] border border-black/8 bg-black/[0.02] px-4 py-3 dark:border-white/10 dark:bg-white/[0.03]'>
      <p className='text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--ybot-muted)] dark:text-white/40'>
        {label}
      </p>
      <div className='mt-2 flex items-center gap-2 text-sm font-medium text-[var(--ybot-foreground)] dark:text-white/78'>
        <i className={`${icon} text-xs`} />
        {href ? (
          <a href={href} className='transition hover:text-[var(--ybot-accent-strong)]'>
            {value}
          </a>
        ) : (
          <span>{value}</span>
        )}
      </div>
    </div>
  )
}

export default function ArticleInfo({ post }) {
  if (!post) {
    return null
  }

  return (
    <section className='mb-10 border-b border-black/8 pb-8 dark:border-white/10 md:mb-12 md:pb-10'>
      <div className='flex flex-wrap gap-3'>
        {post?.category ? <span className='ybot-tag'>{post.category}</span> : null}
        <span className='ybot-tag'>{post?.type || 'Post'}</span>
      </div>

      <h1 className='ybot-display mt-6 max-w-5xl text-4xl leading-[0.94] tracking-[-0.055em] text-[var(--ybot-foreground)] dark:text-white md:text-6xl lg:text-[4.5rem]'>
        {siteConfig('POST_TITLE_ICON') && <NotionIcon icon={post?.pageIcon} />}
        {post?.title}
      </h1>

      {post?.summary ? (
        <p className='mt-5 max-w-3xl text-base leading-8 text-[var(--ybot-muted)] dark:text-white/68 md:text-lg'>
          {post.summary}
        </p>
      ) : null}

      <div className='mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-3'>
        <MetaItem
          icon='fa-regular fa-user'
          label='Author'
          value={siteConfig('AUTHOR')}
          href={siteConfig('SIMPLE_AUTHOR_LINK', null, CONFIG)}
        />
        <MetaItem icon='fa-regular fa-clock' label='Published' value={getDateText(post)} />
        {post?.lastEditedDay ? (
          <MetaItem icon='fa-regular fa-pen-to-square' label='Updated' value={post.lastEditedDay} />
        ) : null}
      </div>

      {post?.tags?.length ? (
        <div className='mt-6 flex flex-wrap gap-2'>
          {post.tags.map(tag => (
            <SmartLink
              key={tag}
              href={`/tag/${tag}`}
              className='rounded-full border border-black/10 px-3 py-1 text-xs text-[var(--ybot-muted)] transition hover:border-[var(--ybot-accent)] hover:text-[var(--ybot-accent-strong)] dark:border-white/10 dark:text-white/60 dark:hover:border-white/18 dark:hover:text-white'>
              #{tag}
            </SmartLink>
          ))}
        </div>
      ) : null}
    </section>
  )
}
