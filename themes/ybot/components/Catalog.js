import { useGlobal } from '@/lib/global'
import throttle from 'lodash.throttle'
import { uuidToId } from 'notion-utils'
import { useEffect, useMemo, useRef, useState } from 'react'

const Catalog = ({ post, compact = false }) => {
  const { locale } = useGlobal()
  const tRef = useRef(null)
  const [activeSection, setActiveSection] = useState(null)

  const toc = useMemo(() => post?.toc || [], [post])

  useEffect(() => {
    if (!toc.length) return

    const actionSectionScrollSpy = throttle(() => {
      const sections = document.getElementsByClassName('notion-h')
      let prevBBox = null
      let currentSectionId = activeSection

      for (let i = 0; i < sections.length; ++i) {
        const section = sections[i]
        if (!section || !(section instanceof Element)) continue
        if (!currentSectionId) {
          currentSectionId = section.getAttribute('data-id')
        }
        const bbox = section.getBoundingClientRect()
        const prevHeight = prevBBox ? bbox.top - prevBBox.bottom : 0
        const offset = Math.max(150, prevHeight / 4)
        if (bbox.top - offset < 0) {
          currentSectionId = section.getAttribute('data-id')
          prevBBox = bbox
          continue
        }
        break
      }

      setActiveSection(currentSectionId)
      const index = toc.findIndex(obj => uuidToId(obj.id) === currentSectionId)
      if (index >= 0) {
        tRef?.current?.scrollTo({ top: 44 * index, behavior: 'smooth' })
      }
    }, 200)

    window.addEventListener('scroll', actionSectionScrollSpy)
    actionSectionScrollSpy()
    return () => {
      window.removeEventListener('scroll', actionSectionScrollSpy)
      actionSectionScrollSpy.cancel?.()
    }
  }, [activeSection, toc])

  if (!toc.length) {
    return null
  }

  return (
    <section className={`${compact ? 'mb-8 xl:hidden' : ''}`}>
      <div className='ybot-surface rounded-[28px] p-5 md:p-6'>
        <div className='border-b border-black/8 pb-4 dark:border-white/10'>
          <p className='text-xs font-semibold uppercase tracking-[0.28em] text-[var(--ybot-muted)] dark:text-white/45'>
            Outline
          </p>
          <h3 className='ybot-display mt-3 text-3xl tracking-[-0.04em] text-[var(--ybot-foreground)] dark:text-white'>
            {locale?.COMMON?.TABLE_OF_CONTENTS || '目录'}
          </h3>
          <p className='mt-2 text-sm leading-7 text-[var(--ybot-muted)] dark:text-white/62'>
            跟着正文滚动定位当前章节，让长文阅读更稳。
          </p>
        </div>

        <div
          className={`mt-4 overflow-y-auto overscroll-none scroll-hidden ${compact ? 'max-h-56' : 'max-h-[70vh]'}`}
          ref={tRef}>
          <nav className='grid gap-2'>
            {toc.map(tocItem => {
              const id = uuidToId(tocItem.id)
              const active = activeSection === id
              return (
                <a
                  key={id}
                  href={`#${id}`}
                  className={`group block rounded-[18px] border px-4 py-3 text-sm transition duration-200 ${
                    active
                      ? 'border-[var(--ybot-accent)] bg-[var(--ybot-accent)]/8 text-[var(--ybot-accent-strong)] dark:border-white/15 dark:bg-white/10 dark:text-white'
                      : 'border-transparent text-[var(--ybot-muted)] hover:border-black/8 hover:bg-black/[0.03] hover:text-[var(--ybot-foreground)] dark:text-white/58 dark:hover:border-white/10 dark:hover:bg-white/[0.05] dark:hover:text-white/85'
                  } notion-table-of-contents-item-indent-level-${tocItem.indentLevel} catalog-item`}>
                  <span
                    style={{ marginLeft: tocItem.indentLevel * 14 }}
                    className={`block truncate leading-6 ${active ? 'font-semibold' : 'font-medium'}`}>
                    {tocItem.text}
                  </span>
                </a>
              )
            })}
          </nav>
        </div>
      </div>
    </section>
  )
}

export default Catalog
