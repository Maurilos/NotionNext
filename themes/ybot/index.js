import replaceSearchResult from '@/components/Mark'
import NotionIcon from '@/components/NotionIcon'
import NotionPage from '@/components/NotionPage'
import SmartLink from '@/components/SmartLink'
import { siteConfig } from '@/lib/config'
import { useEffect } from 'react'
import dynamic from 'next/dynamic'
import BlogArchiveItem from './components/BlogArchiveItem'
import BlogItem from './components/BlogItem'
import BlogListPage from './components/BlogListPage'
import BlogListScroll from './components/BlogListScroll'
import BlogPostBar from './components/BlogPostBar'
import Catalog from './components/Catalog'
import Footer from './components/Footer'
import EmptyState from './components/EmptyState'
import Header from './components/Header'
import NavBar from './components/NavBar'
import SearchInput from './components/SearchInput'
import ArticleInfo from './components/ArticleInfo'
import ArticleShareBar from './components/ArticleShareBar'
import ArticleCommentSection from './components/ArticleCommentSection'
import CONFIG from './config'
import { Style } from './style'

const ArticleAround = dynamic(() => import('./components/ArticleAround'), {
  ssr: false
})
const RecommendPosts = dynamic(() => import('./components/RecommendPosts'), {
  ssr: false
})
const ArticleLock = dynamic(() => import('./components/ArticleLock'), {
  ssr: false
})
const JumpToTopButton = dynamic(() => import('./components/JumpToTopButton'), {
  ssr: false
})

function getDateText(post) {
  return post?.publishDay || post?.date?.start_date || post?.createdTime || ''
}

function Tag({ children, invert = false }) {
  return (
    <span
      className={`ybot-tag ${
        invert ? '!border-white/12 !bg-white/6 !text-white/72' : ''
      }`}>
      {children}
    </span>
  )
}

function SectionHeading({ eyebrow, title, description, action, invert = false }) {
  return (
    <div
      className={`mb-10 flex flex-col gap-6 border-b pb-6 md:flex-row md:items-end md:justify-between ${
        invert ? 'border-white/10' : 'border-black/8'
      }`}>
      <div className='max-w-3xl'>
        <p
          className={`text-xs font-semibold uppercase tracking-[0.28em] ${
            invert ? 'text-white/45' : 'text-[var(--ybot-muted)]'
          }`}>
          {eyebrow}
        </p>
        <h2
          className={`ybot-display mt-3 text-4xl leading-none tracking-[-0.04em] md:text-5xl ${
            invert ? 'text-white' : 'text-[var(--ybot-foreground)]'
          }`}>
          {title}
        </h2>
        {description ? (
          <p
            className={`mt-4 max-w-2xl text-base leading-8 md:text-lg ${
              invert ? 'text-white/68' : 'text-[var(--ybot-muted)]'
            }`}>
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className='shrink-0'>{action}</div> : null}
    </div>
  )
}

function InlineLink({ href, children, invert = false }) {
  return (
    <SmartLink
      href={href}
      className={`inline-flex items-center gap-2 text-sm font-semibold transition ${
        invert
          ? 'text-white hover:text-white/78'
          : 'text-[var(--ybot-foreground)] hover:text-[var(--ybot-accent-strong)]'
      }`}>
      {children}
    </SmartLink>
  )
}

function PrimaryLink({ href, children }) {
  return (
    <SmartLink
      href={href}
      className='inline-flex items-center justify-center rounded-full border border-[var(--ybot-accent)] bg-[var(--ybot-accent)] px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[var(--ybot-accent-strong)]'>
      {children}
    </SmartLink>
  )
}

function SecondaryLink({ href, children }) {
  return (
    <SmartLink
      href={href}
      className='inline-flex items-center justify-center rounded-full border border-white/14 bg-white/6 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/10'>
      {children}
    </SmartLink>
  )
}

function HomePostCard({ post, featured = false }) {
  if (!post) {
    return null
  }

  return (
    <article
      className={`ybot-surface h-full rounded-[28px] p-7 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(15,23,42,0.10)] ${
        featured ? 'md:p-9' : ''
      }`}>
      <div className='flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--ybot-muted)] dark:text-white/50'>
        {post?.category ? <span>{post.category}</span> : null}
        {post?.category ? <span className='h-1 w-1 rounded-full bg-black/20 dark:bg-white/20' /> : null}
        <span>{getDateText(post)}</span>
      </div>
      <div className='mt-6 flex flex-wrap gap-3'>
        <Tag>{post?.type || 'Post'}</Tag>
      </div>
      <h3
        className={`ybot-display mt-6 text-[var(--ybot-foreground)] transition hover:text-[var(--ybot-accent-strong)] dark:text-white ${
          featured ? 'text-3xl md:text-[2.5rem]' : 'text-2xl'
        }`}>
        <SmartLink href={post.href} className='menu-link'>
          {siteConfig('POST_TITLE_ICON') && <NotionIcon icon={post.pageIcon} />}
          {post.title}
        </SmartLink>
      </h3>
      <p className='mt-4 text-sm leading-7 text-[var(--ybot-muted)] dark:text-white/68 md:text-base md:leading-8'>
        {post.summary}
      </p>
      {post?.tags?.length ? (
        <div className='mt-6 flex flex-wrap gap-2'>
          {post.tags.slice(0, 4).map(tag => (
            <SmartLink
              key={tag}
              href={`/tag/${tag}`}
              className='rounded-full border border-black/10 px-3 py-1 text-xs text-[var(--ybot-muted)] dark:border-white/10 dark:text-white/60'>
              #{tag}
            </SmartLink>
          ))}
        </div>
      ) : null}
      <div className='mt-8'>
        <InlineLink href={post.href}>阅读全文 →</InlineLink>
      </div>
    </article>
  )
}

function HomeProjectCard({ item }) {
  return (
    <div className='ybot-surface h-full rounded-[28px] p-8'>
      <div className='flex items-start justify-between gap-4'>
        <Tag>{item.tag}</Tag>
        <div className='text-right'>
          <p className='text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--ybot-muted)] dark:text-white/45'>
            2026
          </p>
          <p className='mt-2 text-xs text-[var(--ybot-foreground)]/64 dark:text-white/55'>{item.status}</p>
        </div>
      </div>
      <h3 className='ybot-display mt-6 text-3xl tracking-[-0.04em] text-[var(--ybot-foreground)] dark:text-white'>
        {item.name}
      </h3>
      <p className='mt-4 text-base leading-8 text-[var(--ybot-muted)] dark:text-white/68'>{item.summary}</p>
      <p className='mt-6 border-t border-black/8 pt-6 text-sm leading-7 text-[var(--ybot-foreground)]/82 dark:border-white/10 dark:text-white/72'>
        {item.detail}
      </p>
      <div className='mt-8'>
        <InlineLink href={item.href}>查看板块 →</InlineLink>
      </div>
    </div>
  )
}

function HomeToolCard({ item }) {
  return (
    <div className='rounded-[28px] border border-white/10 bg-white/6 p-7 shadow-[0_18px_60px_rgba(3,7,18,0.24)]'>
      <Tag invert>{item.category}</Tag>
      <h3 className='mt-6 text-2xl font-semibold tracking-[-0.03em] text-white'>{item.name}</h3>
      <p className='mt-3 text-xs uppercase tracking-[0.18em] text-white/42'>{item.priority}</p>
      <p className='mt-4 text-sm leading-7 text-white/68'>{item.description}</p>
      <p className='mt-6 border-t border-white/10 pt-5 text-sm leading-7 text-white/54'>{item.useCase}</p>
    </div>
  )
}

function LayoutBase(props) {
  const { children } = props

  return (
    <div id='theme-ybot' className={`${siteConfig('FONT_STYLE')} min-h-screen scroll-smooth`}>
      <Style />
      <Header {...props} />
      <NavBar {...props} />
      <main className='relative z-10 flex-1'>{children}</main>
      <div className='fixed bottom-4 right-4 z-30'>
        <JumpToTopButton />
      </div>
      <Footer {...props} />
    </div>
  )
}

function LayoutIndex(props) {
  const homePosts = (props?.latestPosts?.length ? props.latestPosts : props?.allNavPages || [])
    .filter(Boolean)
    .slice(0, Number(siteConfig('YBOT_HOME_POST_COUNT', 3, CONFIG)) || 3)

  const featuredPost = homePosts[0]
  const secondaryPosts = homePosts.slice(1, 3)
  const postCount = props?.allNavPages?.length || homePosts.length
  const projectCount = CONFIG.YBOT_HOME_PROJECTS.length
  const toolCount = CONFIG.YBOT_HOME_TOOLS.length
  const title = props?.siteInfo?.title || siteConfig('TITLE') || siteConfig('AUTHOR')
  const description = props?.siteInfo?.description || siteConfig('DESCRIPTION')

  return (
    <>
      <section className='ybot-home-hero relative overflow-hidden border-b border-black/8 text-white'>
        <div className='mx-auto grid w-full max-w-[1320px] gap-10 px-6 py-20 md:px-10 md:py-24 lg:grid-cols-[minmax(0,1.3fr)_minmax(320px,0.7fr)] lg:items-end'>
          <div className='max-w-4xl'>
            <div className='inline-flex items-center gap-3 rounded-full border border-white/14 bg-white/6 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-white/70'>
              <span className='h-2 w-2 rounded-full bg-[var(--ybot-accent)]' />
              {title}
            </div>
            <h1 className='ybot-display mt-6 max-w-4xl text-5xl leading-[0.92] tracking-[-0.05em] md:text-7xl lg:text-[5.2rem]'>
              先把门面做稳，再让内容自己长出来。
            </h1>
            <p className='mt-6 max-w-2xl text-base leading-8 text-white/70 md:text-lg'>
              {description || '这是一套为 NotionNext 准备的编辑型主题：首页先收束成清楚、利落、能直接承载内容的门面。'}
            </p>
            <div className='mt-9 flex flex-wrap gap-4'>
              <PrimaryLink href={featuredPost?.href || '/archive'}>阅读最新文章</PrimaryLink>
              <SecondaryLink href='/archive'>查看归档</SecondaryLink>
            </div>
          </div>

          <div className='grid gap-4'>
            {[
              {
                label: '文章内容',
                value: `${postCount} 篇`,
                detail: '最新文章会直接从 NotionNext 的数据流里接进首页。'
              },
              {
                label: '项目展示',
                value: `${projectCount} 组`,
                detail: '项目精选先走静态配置，后续可替换成数据库驱动。'
              },
              {
                label: '工具模块',
                value: `${toolCount} 组`,
                detail: '工具区负责承接方法、资源和结构说明。'
              }
            ].map(metric => (
              <div
                key={metric.label}
                className='rounded-[26px] border border-white/12 bg-white/6 p-6 shadow-[0_18px_48px_rgba(3,7,18,0.28)]'>
                <p className='text-xs font-semibold uppercase tracking-[0.26em] text-white/46'>
                  {metric.label}
                </p>
                <p className='mt-3 text-2xl font-semibold tracking-[-0.04em] text-white'>
                  {metric.value}
                </p>
                <p className='mt-3 text-sm leading-7 text-white/68'>{metric.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='py-16 md:py-20'>
        <div className='mx-auto w-full max-w-[1320px] px-6 md:px-10'>
          <SectionHeading
            eyebrow='Site Layers'
            title='先看这座站的三条主线。'
            description='首页先承担品牌入口和导航职责，把博客、工具和项目三条线清楚摆出来。'
          />
          <div className='grid gap-6 lg:grid-cols-3'>
            {CONFIG.YBOT_HOME_PILLARS.map(item => (
              <div key={item.title} className='ybot-surface h-full rounded-[28px] p-7 md:p-8'>
                <p className='text-xs font-semibold uppercase tracking-[0.28em] text-[var(--ybot-muted)] dark:text-white/45'>
                  {item.eyebrow}
                </p>
                <h3 className='ybot-display mt-6 text-3xl tracking-[-0.04em] text-[var(--ybot-foreground)] dark:text-white'>
                  {item.title}
                </h3>
                <p className='mt-4 text-base leading-8 text-[var(--ybot-muted)] dark:text-white/68'>
                  {item.description}
                </p>
                <div className='mt-8'>
                  <InlineLink href={item.href}>进入板块 →</InlineLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='border-b border-black/8 bg-white/42 py-16 dark:border-white/10 dark:bg-white/[0.03] md:py-20'>
        <div className='mx-auto w-full max-w-[1320px] px-6 md:px-10'>
          <SectionHeading
            eyebrow='Featured Writing'
            title='最新文章'
            description='首页先挂出最新内容，把列表页和详情页的阅读感一起带起来。'
            action={<InlineLink href='/archive'>查看博客页 →</InlineLink>}
          />
          {featuredPost ? (
            <div className='grid gap-6 lg:grid-cols-[1.15fr_0.85fr]'>
              <HomePostCard post={featuredPost} featured />
              <div className='grid gap-6'>
                {secondaryPosts.map(post => (
                  <HomePostCard key={post.id || post.slug || post.href} post={post} />
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </section>

      <section className='py-16 md:py-20'>
        <div className='mx-auto w-full max-w-[1320px] px-6 md:px-10'>
          <SectionHeading
            eyebrow='Project Presence'
            title='项目精选'
            description='这里先把陈列方式和层级关系做好，让项目区看起来像作品展示，而不是链接堆叠。'
            action={<InlineLink href='/category'>看项目页 →</InlineLink>}
          />
          <div className='grid gap-6 lg:grid-cols-3'>
            {CONFIG.YBOT_HOME_PROJECTS.map(item => (
              <HomeProjectCard key={item.name} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className='ybot-home-dark border-y border-black/8 py-16 dark:border-white/10 md:py-20'>
        <div className='mx-auto w-full max-w-[1320px] px-6 md:px-10'>
          <SectionHeading
            eyebrow='Tool Modules'
            title='工具区'
            description='在真实资源还没接进来之前，先用模块化信息把这一页撑稳。'
            action={<InlineLink href='/search' invert>看工具页 →</InlineLink>}
            invert
          />
          <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
            {CONFIG.YBOT_HOME_TOOLS.map(item => (
              <HomeToolCard key={item.name} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className='py-12 md:py-16'>
        <div className='mx-auto w-full max-w-[1320px] px-6 md:px-10'>
          <div className='ybot-surface rounded-[28px] p-7 md:p-9'>
            <p className='text-xs font-semibold uppercase tracking-[0.28em] text-[var(--ybot-muted)] dark:text-white/45'>
              YBOT 2.0
            </p>
            <div className='mt-5 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end'>
              <div>
                <h2 className='ybot-display max-w-4xl text-[2.35rem] tracking-[-0.05em] text-[var(--ybot-foreground)] dark:text-white md:text-[3.1rem]'>
                  首页先做轻，结构先做稳。
                </h2>
                <p className='mt-3 max-w-3xl text-[15px] leading-8 text-[var(--ybot-muted)] dark:text-white/68 md:text-base'>
                  现在只保留最该出现的 5 段内容，后面的说明压成一块。首页会更利落，也更像成熟站点的门面。
                </p>
              </div>
              <div className='flex flex-wrap gap-3 lg:justify-end'>
                <Tag>Cleaner Home</Tag>
                <Tag>Better Type</Tag>
                <Tag>{props?.siteInfo?.title || siteConfig('AUTHOR')}</Tag>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function LayoutPostList(props) {
  const slotTop = props.slotTop

  return (
    <div className='mx-auto w-full max-w-[1320px] px-6 pb-16 pt-10 md:px-10 md:pt-14'>
      {slotTop}
      <BlogPostBar {...props} />
      {siteConfig('POST_LIST_STYLE') === 'page' ? (
        <BlogListPage {...props} />
      ) : (
        <BlogListScroll {...props} />
      )}
    </div>
  )
}

function LayoutSearch(props) {
  const { keyword } = props

  useEffect(() => {
    const timer = setTimeout(() => {
      replaceSearchResult({
        doms: document.getElementById('posts-wrapper'),
        search: keyword,
        target: {
          element: 'span',
          className: 'text-red-500 border-b border-dashed'
        }
      })
    }, 0)

    return () => clearTimeout(timer)
  }, [keyword])

  return <LayoutPostList {...props} slotTop={<SearchInput {...props} />} />
}

function LayoutArchive(props) {
  const { archivePosts } = props

  return (
    <div className='mx-auto w-full max-w-[1320px] px-6 pb-16 pt-10 md:px-10 md:pt-14'>
      <div className='ybot-surface rounded-[28px] p-6 md:p-8'>
        {Object.keys(archivePosts || {}).map(archiveTitle => (
          <BlogArchiveItem
            key={archiveTitle}
            archiveTitle={archiveTitle}
            archivePosts={archivePosts}
          />
        ))}
      </div>
    </div>
  )
}

function LayoutSlug(props) {
  const { post, lock, validPassword, prev, next, recommendPosts } = props

  return (
    <div className='mx-auto w-full max-w-[1380px] px-6 py-10 md:px-10 md:py-14'>
      {lock && <ArticleLock validPassword={validPassword} />}

      {!lock && post && (
        <div className='grid gap-6 xl:grid-cols-[minmax(0,1fr)_300px] xl:items-start'>
          <div className='ybot-surface rounded-[32px] p-8 md:p-10 lg:p-12'>
            <ArticleInfo post={post} />

            <div className='xl:hidden'>
              <Catalog post={post} compact />
            </div>

            <div className='ybot-prose' id='article-wrapper'>
              <NotionPage post={post} />
            </div>

            <ArticleShareBar post={post} />

            {post?.type === 'Post' && (
              <>
                <ArticleAround prev={prev} next={next} />
                <RecommendPosts recommendPosts={recommendPosts} />
              </>
            )}

            <ArticleCommentSection post={post} />
          </div>

          <aside className='hidden xl:block xl:sticky xl:top-28'>
            <Catalog post={post} />
          </aside>
        </div>
      )}
    </div>
  )
}

function LayoutCategoryIndex(props) {
  const { categoryOptions = [] } = props

  return (
    <div className='mx-auto w-full max-w-[1320px] px-6 pb-16 pt-10 md:px-10 md:pt-14'>
      <div className='ybot-surface rounded-[28px] p-8'>
        <SectionHeading
          eyebrow='Category Index'
          title='分类目录'
          description='按主题把内容整理成清楚的入口，先看全貌，再决定往哪条线继续读。'
        />
        {categoryOptions.length ? (
          <div className='grid gap-4 md:grid-cols-2 xl:grid-cols-3'>
            {categoryOptions.map(category => (
              <SmartLink
                key={category.name}
                href={`/category/${category.name}`}
                className='group rounded-[24px] border border-black/8 bg-white/56 p-5 transition duration-300 hover:-translate-y-0.5 hover:border-[var(--ybot-accent)] hover:shadow-[0_18px_40px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-white/[0.03]'>
                <p className='text-xs font-semibold uppercase tracking-[0.24em] text-[var(--ybot-muted)] dark:text-white/45'>
                  Category
                </p>
                <h3 className='ybot-display mt-4 text-3xl tracking-[-0.04em] text-[var(--ybot-foreground)] transition group-hover:text-[var(--ybot-accent-strong)] dark:text-white'>
                  {category.name}
                </h3>
                <p className='mt-4 text-sm leading-7 text-[var(--ybot-muted)] dark:text-white/64'>
                  这一类下共 {category.count} 篇内容，适合按主题连续阅读。
                </p>
              </SmartLink>
            ))}
          </div>
        ) : (
          <EmptyState
            eyebrow='Category Index'
            title='还没有分类内容。'
            description='分类目录会在内容积累后慢慢丰满起来，现在先从首页或归档继续看。'
            primaryHref='/'
            primaryLabel='回到首页'
            secondaryHref='/archive'
            secondaryLabel='去归档'
          />
        )}
      </div>
    </div>
  )
}

function LayoutTagIndex(props) {
  const { tagOptions = [] } = props

  return (
    <div className='mx-auto w-full max-w-[1320px] px-6 pb-16 pt-10 md:px-10 md:pt-14'>
      <div className='ybot-surface rounded-[28px] p-8'>
        <SectionHeading
          eyebrow='Tag Index'
          title='标签目录'
          description='标签更像细颗粒度的索引，用来横向串起相关主题。'
        />
        {tagOptions.length ? (
          <div className='grid gap-3 sm:grid-cols-2 xl:grid-cols-4'>
            {tagOptions.map(tag => (
              <SmartLink
                key={tag.name}
                href={`/tag/${encodeURIComponent(tag.name)}`}
                className='group rounded-[22px] border border-black/8 bg-white/56 px-5 py-5 text-[var(--ybot-foreground)] transition duration-300 hover:-translate-y-0.5 hover:border-[var(--ybot-accent)] hover:shadow-[0_18px_40px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-white/[0.03] dark:text-white/80'>
                <p className='text-xs font-semibold uppercase tracking-[0.24em] text-[var(--ybot-muted)] dark:text-white/45'>
                  Tag
                </p>
                <h3 className='mt-3 text-lg font-semibold tracking-[-0.02em] transition group-hover:text-[var(--ybot-accent-strong)]'>
                  #{tag.name}
                </h3>
                <p className='mt-3 text-sm text-[var(--ybot-muted)] dark:text-white/55'>
                  {tag.count ? `${tag.count} 篇内容` : '查看相关内容'}
                </p>
              </SmartLink>
            ))}
          </div>
        ) : (
          <EmptyState
            eyebrow='Tag Index'
            title='标签还没铺开。'
            description='等内容和结构更丰满，这里会成为非常好用的横向索引入口。'
            primaryHref='/'
            primaryLabel='回到首页'
            secondaryHref='/search'
            secondaryLabel='去搜索'
          />
        )}
      </div>
    </div>
  )
}

function Layout404() {
  return (
    <section className='relative overflow-hidden border-b border-black/8 bg-[var(--ybot-ink)] py-20 text-white md:py-28'>
      <div className='mx-auto grid w-full max-w-[1320px] gap-10 px-6 md:px-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(280px,0.5fr)] lg:items-end'>
        <div>
          <p className='text-xs font-semibold uppercase tracking-[0.34em] text-white/45'>404 · Lost Signal</p>
          <h1 className='ybot-display mt-6 max-w-3xl text-5xl leading-[0.92] tracking-[-0.05em] md:text-7xl'>
            这页没接上线，但整座站还亮着。
          </h1>
          <p className='mt-6 max-w-2xl text-base leading-8 text-white/68 md:text-lg'>
            你访问的路径不存在，或者这块内容还没填。先回到首页、归档或分类页继续看。
          </p>
          <div className='mt-9 flex flex-wrap gap-4'>
            <PrimaryLink href='/'>回到首页</PrimaryLink>
            <SecondaryLink href='/archive'>去归档</SecondaryLink>
          </div>
        </div>

        <div className='rounded-[30px] border border-white/10 bg-white/6 p-7 shadow-[0_20px_70px_rgba(3,7,18,0.28)]'>
          <p className='text-xs font-semibold uppercase tracking-[0.28em] text-white/45'>Useful Routes</p>
          <div className='mt-6 space-y-4 text-sm text-white/74'>
            <SmartLink href='/archive' className='block rounded-2xl border border-white/10 px-4 py-4 transition hover:bg-white/6 hover:text-white'>
              内容归档
            </SmartLink>
            <SmartLink href='/category' className='block rounded-2xl border border-white/10 px-4 py-4 transition hover:bg-white/6 hover:text-white'>
              分类目录
            </SmartLink>
            <SmartLink href='/tag' className='block rounded-2xl border border-white/10 px-4 py-4 transition hover:bg-white/6 hover:text-white'>
              标签目录
            </SmartLink>
            <SmartLink href='/search' className='block rounded-2xl border border-white/10 px-4 py-4 transition hover:bg-white/6 hover:text-white'>
              站内搜索
            </SmartLink>
          </div>
        </div>
      </div>
    </section>
  )
}

export {
  Layout404,
  LayoutArchive,
  LayoutBase,
  LayoutCategoryIndex,
  LayoutIndex,
  LayoutPostList,
  LayoutSearch,
  LayoutSlug,
  LayoutTagIndex,
  CONFIG as THEME_CONFIG
}
