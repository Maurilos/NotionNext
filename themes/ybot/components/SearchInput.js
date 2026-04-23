import { useRouter } from 'next/router'
import { useImperativeHandle, useRef, useState } from 'react'
import { useGlobal } from '@/lib/global'
let lock = false

const SearchInput = ({ keyword, cRef, className = '' }) => {
  const [onLoading, setLoadingState] = useState(false)
  const [showClean, setShowClean] = useState(Boolean(keyword))
  const router = useRouter()
  const { locale } = useGlobal()
  const searchInputRef = useRef()

  useImperativeHandle(cRef, () => ({
    focus: () => {
      searchInputRef?.current?.focus()
    }
  }))

  const handleSearch = async () => {
    const key = searchInputRef.current?.value?.trim()

    if (key) {
      setLoadingState(true)
      await router.push(`/search/${encodeURIComponent(key)}`)
      setLoadingState(false)
    } else {
      await router.push('/')
    }
  }

  const handleKeyUp = e => {
    if (e.keyCode === 13) {
      handleSearch()
    } else if (e.keyCode === 27) {
      cleanSearch()
    }
  }

  const cleanSearch = () => {
    if (searchInputRef.current) {
      searchInputRef.current.value = ''
    }
    setShowClean(false)
  }

  const updateSearchKey = val => {
    if (lock) {
      return
    }
    if (searchInputRef.current) {
      searchInputRef.current.value = val
    }
    setShowClean(Boolean(val))
  }

  const lockSearchInput = () => {
    lock = true
  }

  const unLockSearchInput = () => {
    lock = false
  }

  const placeholder =
    locale?.NAV?.SEARCH || locale?.COMMON?.SEARCH || 'Search posts, notes, and pages'

  return (
    <section className={`mb-8 ${className}`}>
      <div className='ybot-surface rounded-[28px] p-5 md:p-7'>
        <div className='flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between'>
          <div className='max-w-2xl'>
            <p className='text-xs font-semibold uppercase tracking-[0.28em] text-[var(--ybot-muted)] dark:text-white/45'>
              Search Layer
            </p>
            <h2 className='ybot-display mt-3 text-3xl tracking-[-0.04em] text-[var(--ybot-foreground)] dark:text-white md:text-4xl'>
              搜索站内内容
            </h2>
            <p className='mt-3 text-sm leading-7 text-[var(--ybot-muted)] dark:text-white/68 md:text-base'>
              用关键词快速定位文章、页面和索引内容，让搜索页也保持和首页同一套视觉秩序。
            </p>
          </div>

          <div className='flex w-full max-w-2xl items-center gap-3 rounded-[22px] border border-black/10 bg-white/70 px-4 py-3 shadow-[0_12px_34px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-white/6'>
            <span className='flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-black/8 bg-black/[0.03] text-[var(--ybot-muted)] dark:border-white/10 dark:bg-white/6 dark:text-white/60'>
              <i className={`fas ${onLoading ? 'fa-spinner animate-spin' : 'fa-search'}`} />
            </span>
            <input
              ref={searchInputRef}
              type='text'
              className='h-11 w-full bg-transparent text-sm font-normal text-[var(--ybot-foreground)] outline-none placeholder:text-[var(--ybot-muted)]/80 dark:text-white dark:placeholder:text-white/40 md:text-base'
              onKeyUp={handleKeyUp}
              onCompositionStart={lockSearchInput}
              onCompositionUpdate={lockSearchInput}
              onCompositionEnd={unLockSearchInput}
              onChange={e => updateSearchKey(e.target.value)}
              defaultValue={keyword}
              placeholder={placeholder}
            />
            {showClean ? (
              <button
                type='button'
                aria-label='Clear search'
                onClick={cleanSearch}
                className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/8 text-[var(--ybot-muted)] transition hover:border-[var(--ybot-accent)] hover:text-[var(--ybot-accent-strong)] dark:border-white/10 dark:text-white/55'>
                <i className='fas fa-times' />
              </button>
            ) : null}
            <button
              type='button'
              onClick={handleSearch}
              className='inline-flex h-11 shrink-0 items-center justify-center rounded-full border border-[var(--ybot-accent)] bg-[var(--ybot-accent)] px-5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[var(--ybot-accent-strong)]'>
              搜索
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SearchInput
