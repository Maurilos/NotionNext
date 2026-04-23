import dynamic from 'next/dynamic'
import { siteConfig } from '@/lib/config'
import CONFIG from '../config'

const ShareButtons = dynamic(() => import('@/components/ShareButtons'), {
  ssr: false
})

function isEnabled(value) {
  return !(
    value === false ||
    value === 'false' ||
    value === 'False' ||
    value === '' ||
    value === null ||
    value === undefined
  )
}

export default function ArticleShareBar({ post }) {
  if (!post || post?.type !== 'Post' || !isEnabled(siteConfig('POST_SHARE_BAR_ENABLE', null, CONFIG))) {
    return null
  }

  return (
    <section className='mt-10 border-t border-black/8 pt-8 dark:border-white/10'>
      <div className='grid gap-5 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end'>
        <div>
          <p className='text-xs font-semibold uppercase tracking-[0.28em] text-[var(--ybot-muted)] dark:text-white/45'>
            Share & Save
          </p>
          <h2 className='ybot-display mt-3 text-3xl tracking-[-0.04em] text-[var(--ybot-foreground)] dark:text-white'>
            这篇内容值得留个入口
          </h2>
          <p className='mt-3 max-w-2xl text-sm leading-7 text-[var(--ybot-muted)] dark:text-white/64 md:text-base'>
            你可以直接复制链接、丢进稍后读，或者转给正在做同类问题的人。
          </p>
        </div>

        <div className='ybot-share-shell ybot-surface rounded-[24px] px-4 py-4 md:px-5'>
          <div className='flex flex-wrap items-center gap-2'>
            <ShareButtons post={post} />
          </div>
        </div>
      </div>
    </section>
  )
}
