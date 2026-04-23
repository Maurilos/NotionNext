import LazyImage from '@/components/LazyImage'
import SmartLink from '@/components/SmartLink'
import { siteConfig } from '@/lib/config'

export default function Header({ siteInfo }) {
  const title = siteInfo?.title || siteConfig('TITLE') || siteConfig('AUTHOR')
  const description = siteInfo?.description || siteConfig('DESCRIPTION')

  return (
    <header className='relative z-30 border-b border-black/5 bg-[rgba(245,240,232,0.76)] backdrop-blur-xl dark:border-white/10 dark:bg-[rgba(9,13,23,0.82)]'>
      <div className='mx-auto flex w-full max-w-[1320px] flex-col gap-4 px-5 py-4 md:px-10 md:py-5'>
        <SmartLink href='/' className='group inline-flex items-start gap-4 md:items-center'>
          <span className='flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-black/8 bg-white/75 shadow-[0_12px_30px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-white/10 md:h-14 md:w-14'>
            {siteInfo?.icon ? (
              <LazyImage
                priority
                src={siteInfo.icon}
                width={56}
                height={56}
                alt={title}
                className='h-full w-full object-cover'
              />
            ) : (
              <span className='ybot-display text-xl text-[var(--ybot-foreground)] dark:text-white md:text-2xl'>Y</span>
            )}
          </span>

          <span className='min-w-0'>
            <span className='block text-[10px] font-semibold uppercase tracking-[0.34em] text-[var(--ybot-muted)] dark:text-white/45 md:text-[11px]'>
              Editorial System
            </span>
            <span className='ybot-display mt-1 block text-[1.65rem] leading-none tracking-[-0.05em] text-[var(--ybot-foreground)] dark:text-white md:text-[2rem]'>
              {title}
            </span>
            {description ? (
              <span className='mt-1 block max-w-3xl text-[13px] leading-6 text-[var(--ybot-muted)] dark:text-white/60 md:text-sm'>
                {description}
              </span>
            ) : null}
          </span>
        </SmartLink>
      </div>
    </header>
  )
}
