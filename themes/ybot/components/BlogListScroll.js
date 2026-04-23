import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import throttle from 'lodash.throttle'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { BlogItem } from './BlogItem'
import EmptyState from './EmptyState'

export default function BlogListScroll(props) {
  const { posts } = props
  const { locale, NOTION_CONFIG } = useGlobal()
  const [page, updatePage] = useState(1)
  const POSTS_PER_PAGE = siteConfig('POSTS_PER_PAGE', null, NOTION_CONFIG)
  const targetRef = useRef(null)

  const totalCount = posts?.length || 0
  const hasMore = page * POSTS_PER_PAGE < totalCount
  const postsToShow = useMemo(() => {
    return posts ? [...posts].slice(0, POSTS_PER_PAGE * page) : []
  }, [POSTS_PER_PAGE, page, posts])

  const handleGetMore = useCallback(() => {
    if (!hasMore) return
    updatePage(current => current + 1)
  }, [hasMore])

  const scrollTrigger = useCallback(
    throttle(() => {
      const viewportBottom = window.scrollY + window.innerHeight
      const targetHeight = targetRef.current?.offsetHeight || 0
      if (viewportBottom > targetHeight + 120) {
        handleGetMore()
      }
    }, 500),
    [handleGetMore]
  )

  useEffect(() => {
    window.addEventListener('scroll', scrollTrigger)
    return () => {
      window.removeEventListener('scroll', scrollTrigger)
      scrollTrigger.cancel?.()
    }
  }, [scrollTrigger])

  if (!posts?.length) {
    return (
      <EmptyState
        eyebrow='Empty Listing'
        title='这里暂时没有内容。'
        description='可以换个关键词、回归档页，或者先从首页继续往下看。'
        primaryHref='/search'
        primaryLabel='重新搜索'
        secondaryHref='/'
        secondaryLabel='回到首页'
      />
    )
  }

  return (
    <div id='posts-wrapper' className='mb-12 w-full' ref={targetRef}>
      {postsToShow.map(p => (
        <BlogItem key={p.id} post={p} />
      ))}

      <div className='mt-8 flex justify-center'>
        <button
          type='button'
          onClick={handleGetMore}
          className={`inline-flex min-w-[220px] items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold transition duration-300 ${
            hasMore
              ? 'border-[var(--ybot-accent)] bg-[var(--ybot-accent)] text-white hover:-translate-y-0.5 hover:bg-[var(--ybot-accent-strong)]'
              : 'cursor-default border-black/8 bg-white/60 text-[var(--ybot-muted)] dark:border-white/10 dark:bg-white/6 dark:text-white/45'
          }`}>
          {hasMore ? locale?.COMMON?.MORE || 'Load more' : `${locale?.COMMON?.NO_MORE || 'No more'} · 已经到底了`}
        </button>
      </div>
    </div>
  )
}
