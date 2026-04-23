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

    #theme-ybot .ybot-prose .notion {
      margin-top: 0 !important;
      margin-bottom: 0 !important;
      background: transparent !important;
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

    #theme-ybot .ybot-prose .notion-h,
    #theme-ybot .ybot-prose .notion-h1,
    #theme-ybot .ybot-prose .notion-h2,
    #theme-ybot .ybot-prose .notion-h3 {
      font-family: var(--ybot-display);
      letter-spacing: -0.04em;
      color: var(--ybot-foreground);
    }

    .dark #theme-ybot .ybot-prose .notion-h,
    .dark #theme-ybot .ybot-prose .notion-h1,
    .dark #theme-ybot .ybot-prose .notion-h2,
    .dark #theme-ybot .ybot-prose .notion-h3 {
      color: #f8fafc;
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
  `}</style>
}

export { Style }
