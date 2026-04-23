import { BeiAnGongAn } from '@/components/BeiAnGongAn'
import SmartLink from '@/components/SmartLink'
import { siteConfig } from '@/lib/config'

function buildFooterLinks({ customNav = [], customMenu = [] }) {
  const defaults = [
    { name: '首页', href: '/' },
    { name: '归档', href: '/archive' },
    { name: '分类', href: '/category' },
    { name: '标签', href: '/tag' },
    { name: '搜索', href: '/search' }
  ]

  if (siteConfig('CUSTOM_MENU') && customMenu?.length) {
    return customMenu.map(item => ({
      name: item.name || item.title || 'Menu',
      href: item.href || item?.subMenus?.[0]?.href || '#'
    }))
  }

  return defaults.concat((customNav || []).map(item => ({
    name: item.name || item.title || 'Page',
    href: item.href || '#'
  })))
}

export default function Footer(props) {
  const currentYear = new Date().getFullYear()
  const since = siteConfig('SINCE')
  const copyrightDate = parseInt(since) < currentYear ? `${since}-${currentYear}` : currentYear
  const latestPosts = props?.latestPosts?.slice(0, 3) || []
  const links = buildFooterLinks(props).slice(0, 7)
  const title = props?.siteInfo?.title || siteConfig('TITLE') || siteConfig('AUTHOR')
  const description = props?.siteInfo?.description || siteConfig('DESCRIPTION')

  return (
    <footer className='border-t border-black/8 bg-[var(--ybot-ink)] text-white dark:border-white/10'>
      <div className='mx-auto w-full max-w-[1320px] px-6 pb-16 pt-14 md:px-10 md:pt-16'>
        <div className='rounded-[34px] border border-white/10 bg-white/[0.04] p-7 shadow-[0_24px_90px_rgba(2,6,23,0.24)] md:p-10'>
          <div className='grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end'>
            <div>
              <span className='ybot-tag !border-white/12 !bg-white/6 !text-white/72'>
                {title}
              </span>
              <h2 className='ybot-display mt-6 max-w-3xl text-4xl tracking-[-0.05em] text-white md:text-6xl'>
                让首页、文章、索引和细节都像同一座站，而不是拼起来的页面。
              </h2>
              <p className='mt-5 max-w-2xl text-base leading-8 text-white/68'>
                {description || '先把门面、节奏和结构做稳，再让真实内容慢慢长出来。'}
              </p>
            </div>
            <div className='flex flex-wrap gap-3 lg:justify-end'>
              <SmartLink
                href='/archive'
                className='inline-flex items-center justify-center rounded-full border border-white/14 bg-white/8 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/12'>
                看全部内容
              </SmartLink>
              <SmartLink
                href='/search'
                className='inline-flex items-center justify-center rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-white/82 transition duration-300 hover:-translate-y-0.5 hover:bg-white/8 hover:text-white'>
                站内搜索
              </SmartLink>
            </div>
          </div>
        </div>
      </div>

      <div className='mx-auto grid w-full max-w-[1320px] gap-12 px-6 pb-16 md:px-10 lg:grid-cols-[1.15fr_0.85fr_0.9fr]'>
        <div>
          <p className='text-xs font-semibold uppercase tracking-[0.28em] text-white/45'>Brand Note</p>
          <p className='mt-5 max-w-xl text-base leading-8 text-white/68'>
            这套 ybot 主题不是照着某个站硬抄，而是借了成熟内容站的骨架，再把信息密度、标题气场和页面节奏往前推一档。
          </p>
        </div>

        <div>
          <p className='text-xs font-semibold uppercase tracking-[0.28em] text-white/45'>导航</p>
          <ul className='mt-5 grid gap-4 text-sm text-white/78 sm:grid-cols-2'>
            {links.map(link => (
              <li key={`${link.name}-${link.href}`}>
                <SmartLink href={link.href} className='transition hover:text-white'>
                  {link.name}
                </SmartLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className='text-xs font-semibold uppercase tracking-[0.28em] text-white/45'>最新文章</p>
          <ul className='mt-5 space-y-4 text-sm text-white/78'>
            {latestPosts.map(post => (
              <li key={post.id || post.slug || post.href}>
                <SmartLink href={post.href} className='transition hover:text-white'>
                  {post.title}
                </SmartLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className='mx-auto flex w-full max-w-[1320px] flex-col gap-3 border-t border-white/10 px-6 py-6 text-xs uppercase tracking-[0.24em] text-white/42 md:flex-row md:items-center md:justify-between md:px-10'>
        <span>© {copyrightDate} {siteConfig('AUTHOR')}. Powered by NotionNext.</span>
        <span className='flex flex-wrap items-center gap-3'>
          {siteConfig('BEI_AN') && (
            <a href={siteConfig('BEI_AN_LINK')} className='hover:text-white'>
              {siteConfig('BEI_AN')}
            </a>
          )}
          <BeiAnGongAn />
        </span>
      </div>
    </footer>
  )
}
