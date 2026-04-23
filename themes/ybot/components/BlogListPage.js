import { AdSlot } from '@/components/GoogleAdsense'
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import SmartLink from '@/components/SmartLink'
import { useRouter } from 'next/router'
import CONFIG from '../config'
import { BlogItem } from './BlogItem'

export default function BlogListPage(props) {
  const { page = 1, posts, postCount } = props
  const router = useRouter()
  const { NOTION_CONFIG } = useGlobal()
  const POSTS_PER_PAGE = siteConfig('POSTS_PER_PAGE', null, NOTION_CONFIG)
  const totalPage = Math.ceil(postCount / POSTS_PER_PAGE)
  const currentPage = +page

  const SIMPLE_POST_AD_ENABLE = siteConfig('SIMPLE_POST_AD_ENABLE', false, CONFIG)

  const showPrev = currentPage > 1
  const showNext = page < totalPage
  const pagePrefix = router.asPath
    .split('?')[0]
    .replace(/\/page\/[1-9]\d*/, '')
    .replace(/\/$/, '')
    .replace('.html', '')

  const prevHref = {
    pathname: currentPage - 1 === 1 ? `${pagePrefix}/` : `${pagePrefix}/page/${currentPage - 1}`,
    query: router.query.s ? { s: router.query.s } : {}
  }
  const nextHref = {
    pathname: `${pagePrefix}/page/${currentPage + 1}`,
    query: router.query.s ? { s: router.query.s } : {}
  }

  return (
    <div className='mb-12 w-full'>
      <div id='posts-wrapper'>
        {posts?.map((p, index) => (
          <div key={p.id}>
            {SIMPLE_POST_AD_ENABLE && (index + 1) % 3 === 0 && <AdSlot type='in-article' />}
            {SIMPLE_POST_AD_ENABLE && index + 1 === 4 && <AdSlot type='flow' />}
            <BlogItem post={p} />
          </div>
        ))}
      </div>

      <div className='mt-8 flex flex-wrap items-center justify-between gap-4'>
        <SmartLink
          href={prevHref}
          className={`inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition duration-300 ${
            showPrev
              ? 'border-black/10 bg-white/70 text-[var(--ybot-foreground)] hover:-translate-y-0.5 hover:border-[var(--ybot-accent)] hover:text-[var(--ybot-accent-strong)] dark:border-white/10 dark:bg-white/6 dark:text-white/80'
              : 'pointer-events-none border-black/6 bg-black/[0.02] text-black/30 dark:border-white/6 dark:bg-white/[0.03] dark:text-white/22'
          }`}>
          <i className='fas fa-arrow-left text-xs' />
          较新文章
        </SmartLink>

        <div className='rounded-full border border-black/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--ybot-muted)] dark:border-white/10 dark:text-white/45'>
          Page {currentPage} / {totalPage || 1}
        </div>

        <SmartLink
          href={nextHref}
          className={`inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition duration-300 ${
            showNext
              ? 'border-black/10 bg-white/70 text-[var(--ybot-foreground)] hover:-translate-y-0.5 hover:border-[var(--ybot-accent)] hover:text-[var(--ybot-accent-strong)] dark:border-white/10 dark:bg-white/6 dark:text-white/80'
              : 'pointer-events-none border-black/6 bg-black/[0.02] text-black/30 dark:border-white/6 dark:bg-white/[0.03] dark:text-white/22'
          }`}>
          更早文章
          <i className='fas fa-arrow-right text-xs' />
        </SmartLink>
      </div>
    </div>
  )
}
