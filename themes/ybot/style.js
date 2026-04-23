/* eslint-disable react/no-unknown-property */
const Style = () => {
  return <style jsx global>{`
    :root {
      --ybot-bg: #f5f0e8;
      --ybot-surface: rgba(255, 255, 255, 0.74);
      --ybot-foreground: #111827;
      --ybot-muted: #5b6475;
      --ybot-ink: #0b1120;
      --ybot-accent: #3d63ff;
      --ybot-accent-strong: #2646d8;
      --ybot-border: rgba(17, 24, 39, 0.08);
      --ybot-shadow: 0 18px 60px rgba(15, 23, 42, 0.06);
      --ybot-display: 'Baskerville', 'Iowan Old Style', 'Charter', 'Palatino Linotype', 'Songti SC', 'STSong', serif;
      --ybot-sans: 'SF Pro Text', 'SF Pro Display', 'Inter', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Noto Sans SC', system-ui, sans-serif;
    }

    html {
      scroll-behavior: smooth;
      font-kerning: normal;
    }

    body {
      background:
        radial-gradient(circle at top left, rgba(63, 99, 255, 0.14), transparent 28%),
        radial-gradient(circle at 85% 8%, rgba(11, 17, 32, 0.08), transparent 24%),
        linear-gradient(180deg, rgba(255, 255, 255, 0.28), transparent 18%),
        var(--ybot-bg);
      color: var(--ybot-foreground);
      font-family: var(--ybot-sans);
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-feature-settings: 'kern' 1, 'liga' 1, 'calt' 1;
    }

    .dark body {
      background: #090d17;
      color: #e5e7eb;
    }

    body::before {
      content: '';
      position: fixed;
      inset: 0;
      pointer-events: none;
      background-image:
        linear-gradient(rgba(17, 24, 39, 0.05) 1px, transparent 1px),
        linear-gradient(90deg, rgba(17, 24, 39, 0.04) 1px, transparent 1px);
      background-size: 100% 76px, 76px 100%;
      mask-image: radial-gradient(circle at center, black, transparent 86%);
      opacity: 0.32;
    }

    .dark body::before {
      opacity: 0.12;
    }

    #theme-ybot {
      position: relative;
      z-index: 1;
      color: var(--ybot-foreground);
    }

    .dark #theme-ybot {
      color: #e5e7eb;
    }

    #theme-ybot .ybot-display {
      font-family: var(--ybot-display);
      font-weight: 600;
      font-feature-settings: 'kern' 1, 'liga' 1;
    }

    #theme-ybot .ybot-surface {
      border: 1px solid var(--ybot-border);
      background: var(--ybot-surface);
      box-shadow: var(--ybot-shadow);
      backdrop-filter: blur(14px);
    }

    .dark #theme-ybot .ybot-surface {
      border-color: rgba(255, 255, 255, 0.08);
      background: rgba(17, 24, 39, 0.62);
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
    }

    #theme-ybot .ybot-tag {
      display: inline-flex;
      align-items: center;
      border-radius: 999px;
      border: 1px solid rgba(17, 24, 39, 0.1);
      background: rgba(17, 24, 39, 0.03);
      padding: 0.3rem 0.8rem;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.24em;
      text-transform: uppercase;
      color: var(--ybot-muted);
    }

    .dark #theme-ybot .ybot-tag {
      border-color: rgba(255, 255, 255, 0.1);
      background: rgba(255, 255, 255, 0.05);
      color: rgba(255, 255, 255, 0.7);
    }

    #theme-ybot .ybot-scrollbar-hidden::-webkit-scrollbar,
    #theme-ybot .scroll-hidden::-webkit-scrollbar {
      display: none;
    }

    #theme-ybot .ybot-scrollbar-hidden,
    #theme-ybot .scroll-hidden {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }

    #theme-ybot .ybot-prose {
      font-family: var(--ybot-sans);
    }

    #theme-ybot .ybot-prose .notion {
      margin-top: 0 !important;
      margin-bottom: 0 !important;
      background: transparent !important;
    }

    #theme-ybot .ybot-prose .notion-page {
      width: 100%;
      padding: 0 !important;
    }

    #theme-ybot .ybot-prose .notion-text,
    #theme-ybot .ybot-prose .notion-list li,
    #theme-ybot .ybot-prose .notion-callout-text {
      color: rgba(17, 24, 39, 0.82);
      font-size: 1.02rem;
      line-height: 1.92;
    }

    .dark #theme-ybot .ybot-prose .notion-text,
    .dark #theme-ybot .ybot-prose .notion-list li,
    .dark #theme-ybot .ybot-prose .notion-callout-text {
      color: rgba(229, 231, 235, 0.84);
    }

    #theme-ybot .ybot-prose .notion-text {
      margin: 1rem 0;
    }

    #theme-ybot .ybot-prose .notion-h,
    #theme-ybot .ybot-prose .notion-h1,
    #theme-ybot .ybot-prose .notion-h2,
    #theme-ybot .ybot-prose .notion-h3 {
      margin-top: 2.6rem;
      margin-bottom: 1rem;
      font-family: var(--ybot-display);
      letter-spacing: -0.04em;
      color: var(--ybot-foreground);
    }

    #theme-ybot .ybot-prose .notion-h1 {
      font-size: 2.6rem;
      line-height: 1.02;
    }

    #theme-ybot .ybot-prose .notion-h2 {
      font-size: 2rem;
      line-height: 1.08;
    }

    #theme-ybot .ybot-prose .notion-h3 {
      font-size: 1.55rem;
      line-height: 1.16;
    }

    .dark #theme-ybot .ybot-prose .notion-h,
    .dark #theme-ybot .ybot-prose .notion-h1,
    .dark #theme-ybot .ybot-prose .notion-h2,
    .dark #theme-ybot .ybot-prose .notion-h3 {
      color: #f8fafc;
    }

    #theme-ybot .ybot-prose .notion-list {
      padding-left: 1.25rem;
    }

    #theme-ybot .ybot-prose .notion-list li {
      margin: 0.45rem 0;
      padding-left: 0.25rem;
    }

    #theme-ybot .ybot-prose .notion-callout {
      margin: 1.4rem 0;
      border-radius: 22px;
      border: 1px solid rgba(17, 24, 39, 0.08);
      background: rgba(17, 24, 39, 0.03);
      padding: 1rem 1.1rem;
    }

    .dark #theme-ybot .ybot-prose .notion-callout {
      border-color: rgba(255, 255, 255, 0.08);
      background: rgba(255, 255, 255, 0.04);
    }

    #theme-ybot .ybot-prose .notion-quote {
      margin: 1.6rem 0;
      border-left: 4px solid var(--ybot-accent);
      padding: 0.3rem 0 0.3rem 1.1rem;
      font-family: var(--ybot-display);
      font-size: 1.25rem;
      line-height: 1.7;
      color: rgba(17, 24, 39, 0.84);
    }

    .dark #theme-ybot .ybot-prose .notion-quote {
      color: rgba(248, 250, 252, 0.86);
    }

    #theme-ybot .ybot-prose code {
      border-radius: 10px;
      background: rgba(17, 24, 39, 0.06);
      padding: 0.15rem 0.45rem;
      font-size: 0.92em;
    }

    .dark #theme-ybot .ybot-prose code {
      background: rgba(255, 255, 255, 0.08);
    }

    #theme-ybot .ybot-prose pre,
    #theme-ybot .ybot-prose .notion-code {
      margin: 1.4rem 0;
      overflow-x: auto;
      border-radius: 24px;
      border: 1px solid rgba(17, 24, 39, 0.08);
      background: #0b1120;
      padding: 1.1rem 1.2rem;
      color: #e5e7eb;
      box-shadow: 0 18px 50px rgba(2, 6, 23, 0.18);
    }

    #theme-ybot .ybot-prose pre code,
    #theme-ybot .ybot-prose .notion-code code {
      background: transparent;
      padding: 0;
      color: inherit;
    }

    #theme-ybot .ybot-prose .notion-image,
    #theme-ybot .ybot-prose .notion-bookmark {
      overflow: hidden;
      border-radius: 26px;
    }

    #theme-ybot .ybot-prose .notion-image img {
      border-radius: 26px;
    }

    #theme-ybot .ybot-prose .notion-bookmark {
      border: 1px solid rgba(17, 24, 39, 0.08);
      background: rgba(255, 255, 255, 0.56);
      box-shadow: 0 18px 50px rgba(15, 23, 42, 0.06);
    }

    .dark #theme-ybot .ybot-prose .notion-bookmark {
      border-color: rgba(255, 255, 255, 0.08);
      background: rgba(255, 255, 255, 0.04);
    }

    #theme-ybot .ybot-prose .notion-hr {
      border-color: rgba(17, 24, 39, 0.08);
      margin: 2rem 0;
    }

    .dark #theme-ybot .ybot-prose .notion-hr {
      border-color: rgba(255, 255, 255, 0.08);
    }

    #theme-ybot .ybot-prose .notion-link,
    #theme-ybot .menu-link {
      transition: color 160ms ease, border-color 160ms ease, background-size 160ms ease;
    }

    #theme-ybot .menu-link:hover,
    #theme-ybot .notion-link:hover {
      color: var(--ybot-accent-strong);
    }

    #theme-ybot .ybot-home-hero {
      background:
        radial-gradient(circle at top left, rgba(120, 150, 255, 0.25), transparent 38%),
        radial-gradient(circle at 80% 20%, rgba(54, 83, 194, 0.35), transparent 32%),
        linear-gradient(180deg, rgba(255, 255, 255, 0.02), transparent 28%),
        var(--ybot-ink);
    }

    #theme-ybot .ybot-home-dark {
      background: var(--ybot-ink);
      color: #fff;
    }

    #theme-ybot .ybot-nav-link[aria-current='page'] {
      background: var(--ybot-ink);
      color: #fff !important;
      box-shadow: 0 12px 28px rgba(11, 17, 32, 0.22);
    }

    .dark #theme-ybot .ybot-nav-link[aria-current='page'] {
      background: rgba(255, 255, 255, 0.9);
      color: #0b1120 !important;
    }

    @media (max-width: 768px) {
      #theme-ybot .ybot-prose .notion-h1 {
        font-size: 2rem;
      }

      #theme-ybot .ybot-prose .notion-h2 {
        font-size: 1.65rem;
      }

      #theme-ybot .ybot-prose .notion-h3 {
        font-size: 1.35rem;
      }
    }
  `}</style>
}

export { Style }
