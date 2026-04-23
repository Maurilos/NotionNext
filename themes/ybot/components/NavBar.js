import SmartLink from '@/components/SmartLink'
import { siteConfig } from '@/lib/config'
import { useRouter } from 'next/router'
import CONFIG from '../config'

function normalize(asPath = '') {
  return asPath.split('?')[0].split('#')[0] || '/'
}

function isActive(currentPath, href) {
  if (!href) return false
  if (href === '/') return currentPath === '/'
  return currentPath === href || currentPath.startsWith(`${href}/`) || currentPath.startsWith(`${href}#`)
}

function buildLinks({ customNav = [], customMenu = [] }) {
  const defaultLinks = [
    { name: '首页', href: '/', show: true },
    { name: '归档', href: '/archive', show: siteConfig('SIMPLE_MENU_ARCHIVE', null, CONFIG) },
    { name: '分类', href: '/category', show: siteConfig('SIMPLE_MENU_CATEGORY', null, CONFIG) },
    { name: '标签', href: '/tag', show: siteConfig('SIMPLE_MENU_TAG', null, CONFIG) },
    { name: '搜索', href: '/search', show: siteConfig('SIMPLE_MENU_SEARCH', null, CONFIG) }
  ]

  let links = defaultLinks.concat(customNav || [])

  if (siteConfig('CUSTOM_MENU') && customMenu?.length) {
    links = customMenu
  }

  return links
    .filter(link => link && link.show !== false)
    .map(link => ({
      ...link,
      href: link.href || link?.subMenus?.[0]?.href || '#',
      name: link.name || link.title || 'Menu'
    }))
}

export default function NavBar(props) {
  const router = useRouter()
  const currentPath = normalize(router.asPath)
  const links = buildLinks(props)

  if (!links?.length) {
    return null
  }

  return (
    <nav className='sticky top-0 z-40 border-b border-black/5 bg-[rgba(245,240,232,0.7)] py-3 backdrop-blur-xl dark:border-white/10 dark:bg-[rgba(9,13,23,0.72)] md:py-4'>
      <div className='mx-auto flex w-full max-w-[1320px] px-5 md:px-10'>
        <div className='ybot-scrollbar-hidden flex w-full items-center gap-2 overflow-x-auto rounded-[24px] border border-black/8 bg-white/80 p-1.5 shadow-[0_10px_30px_rgba(15,23,42,0.05)] backdrop-blur dark:border-white/10 dark:bg-white/10'>
          {links.map(link => {
            const active = isActive(currentPath, link.href)
            return (
              <SmartLink
                key={`${link.name}-${link.href}`}
                href={link.href}
                target={link.target}
                aria-current={active ? 'page' : undefined}
                className='ybot-nav-link inline-flex min-w-[5.1rem] shrink-0 items-center justify-center rounded-full px-4 py-2.5 text-sm font-semibold tracking-[-0.02em] text-[var(--ybot-foreground)]/90 transition duration-200 hover:bg-black/[0.04] dark:text-white/80 dark:hover:bg-white/10 md:min-w-[5.5rem] md:px-5 md:py-3 md:text-[15px]'>
                {link.name}
              </SmartLink>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
