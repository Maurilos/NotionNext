import NotionIcon from '@/components/NotionIcon'
import SmartLink from '@/components/SmartLink'
import { siteConfig } from '@/lib/config'
import CONFIG from '../config'

function getDateText(post) {
  return post?.publishDay || post?.date?.start_date || post?.createdTime || ''
}

export default function ArticleInfo({ post }) {
  if (!post) {
    return null
  }

  return (
    <section className='mb-10'>
      <div className='flex flex-wrap gap-3'>
        {post?.category ? <span className='ybot-tag'>{post.category}</span> : null}
        <span className='ybot-tag'>{post?.type || 'Post'}</span>
      </div>

      <h1 className='ybot-display mt-6 text-4xl tracking-[-0.05em] text-[var(--ybot-foreground)] dark:text-white md:text-6xl'>
        {siteConfig('POST_TITLE_ICON') && <NotionIcon icon={post?.pageIcon} />}
        {post?.title}
      </h1>

      {post?.summary ? (
        <p className='mt-5 max-w-3xl text-base leading-8 text-[var(--ybot-muted)] dark:text-white/68 md:text-lg'>
          {post.summary}
        </p>
      ) : null}

      <div className='mt-6 flex flex-wrap items-center gap-4 text-sm text-[var(--ybot-muted)] dark:text-white/55'>
        <span>
          <i className='fa-regular fa-user mr-2' />
          <a href={siteConfig('SIMPLE_AUTHOR_LINK', null, CONFIG)}>{siteConfig('AUTHOR')}</a>
        </span>
        <span>
          <i className='fa-regular fa-clock mr-2' />
          {getDateText(post)}
        </span>
        {post?.lastEditedDay ? (
          <span>
            <i className='fa-regular fa-pen-to-square mr-2' />
            {post.lastEditedDay}
          </span>
        ) : null}
      </div>

      {post?.tags?.length ? (
        <div className='mt-6 flex flex-wrap gap-2'>
          {post.tags.map(tag => (
            <SmartLink
              key={tag}
              href={`/tag/${tag}`}
              className='rounded-full border border-black/10 px-3 py-1 text-xs text-[var(--ybot-muted)] transition hover:text-[var(--ybot-accent-strong)] dark:border-white/10 dark:text-white/60'>
              #{tag}
            </SmartLink>
          ))}
        </div>
      ) : null}
    </section>
  )
}
