import dynamic from 'next/dynamic'
import { siteConfig } from '@/lib/config'

const Comment = dynamic(() => import('@/components/Comment'), {
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

function hasCommentProvider() {
  const keys = [
    'COMMENT_ARTALK_SERVER',
    'COMMENT_TWIKOO_ENV_ID',
    'COMMENT_WALINE_SERVER_URL',
    'COMMENT_VALINE_APP_ID',
    'COMMENT_GISCUS_REPO',
    'COMMENT_CUSDIS_APP_ID',
    'COMMENT_UTTERRANCES_REPO',
    'COMMENT_GITALK_CLIENT_ID',
    'COMMENT_WEBMENTION_ENABLE'
  ]

  return keys.some(key => isEnabled(siteConfig(key)))
}

export default function ArticleCommentSection({ post }) {
  if (!post || post?.comment === 'Hide' || !hasCommentProvider()) {
    return null
  }

  return (
    <section className='mt-12 border-t border-black/8 pt-8 dark:border-white/10'>
      <div className='mb-6'>
        <p className='text-xs font-semibold uppercase tracking-[0.28em] text-[var(--ybot-muted)] dark:text-white/45'>
          Continue the Thread
        </p>
        <h2 className='ybot-display mt-3 text-3xl tracking-[-0.04em] text-[var(--ybot-foreground)] dark:text-white'>
          继续聊这篇内容
        </h2>
        <p className='mt-3 max-w-2xl text-sm leading-7 text-[var(--ybot-muted)] dark:text-white/64 md:text-base'>
          如果你有补充、反例、踩坑记录，直接丢在下面。长文最好有回声，站点也会更像活的系统。
        </p>
      </div>

      <div className='ybot-comment-shell ybot-surface rounded-[28px] p-6 md:p-8'>
        <Comment frontMatter={post} className='!mt-0' />
      </div>
    </section>
  )
}
