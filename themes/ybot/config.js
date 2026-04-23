const CONFIG = {
  YBOT_HOME_POST_COUNT: 3,

  YBOT_HOME_PILLARS: [
    {
      eyebrow: 'Journal',
      title: '博客',
      description:
        '用更干净的列表和更稳的详情页，把阅读体验先立起来。',
      href: '/archive'
    },
    {
      eyebrow: 'Toolkit',
      title: '工具',
      description:
        '工具区先作为方法和模块展示层，后面再接入真实资源。',
      href: '/search'
    },
    {
      eyebrow: 'Showcase',
      title: '项目',
      description:
        '把更像专题和作品的内容单独陈列出来，拉高站点气场。',
      href: '/category'
    }
  ],

  YBOT_HOME_PROJECTS: [
    {
      tag: 'Showcase',
      name: '作品陈列面板',
      status: '旗舰模块',
      summary:
        '给重点项目、专题和代表性作品一个更像正式展示位的承载层。',
      detail: '适合未来放主打案例、长期专题或独立产品。',
      href: '/archive'
    },
    {
      tag: 'Lab',
      name: '实验栏目区',
      status: '持续更新',
      summary:
        '把阶段性尝试、小实验和未完成功能收进一个仍然体面的展示区。',
      detail: '适合接轻实验、小工具和短专题。',
      href: '/search'
    },
    {
      tag: 'Archive',
      name: '案例归档层',
      status: '可扩容',
      summary:
        '为未来越来越多的项目条目预留一个有秩序的归档结构。',
      detail: '数量长出来以后，页面依然不会乱。',
      href: '/tag'
    }
  ],

  YBOT_HOME_TOOLS: [
    {
      category: 'Design System',
      name: '视觉令牌',
      priority: 'Core',
      description:
        '先统一颜色、圆角、容器、阴影和字体，让整站先说同一种设计语言。',
      useCase: '颜色 / 圆角 / 阴影 / 字体 / 容器'
    },
    {
      category: 'Content Layer',
      name: '内容模型',
      priority: 'High',
      description:
        '未来真内容接进来时，只替换数据，不反复折腾页面结构。',
      useCase: '文章 / 页面 / 项目 / 信息模块'
    },
    {
      category: 'Navigation',
      name: '导航系统',
      priority: 'Ready',
      description:
        '导航不只是链接集合，它也是整个主题最先被感知到的气质入口。',
      useCase: 'Header / 当前态 / 页面切换 / 信息分流'
    }
  ],

  SIMPLE_MENU_CATEGORY: true,
  SIMPLE_MENU_TAG: true,
  SIMPLE_MENU_ARCHIVE: true,
  SIMPLE_MENU_SEARCH: true,
  SIMPLE_AUTHOR_LINK: process.env.NEXT_PUBLIC_AUTHOR_LINK || '#'
}

export default CONFIG
