module.exports = {
  title: "学无止境",
  description: "查阅知识",
  base: "/docs/",
  head: [
    ['link', { rel: 'icon', href: '/assets/img/favicon.png' }],
    ['meta', { name: 'author', content: '阿松大' }],
    ['meta', { name: 'keywords', content: 'ccc' }],
  ],
  themeConfig: {
    type: 'blog',
    logo: "/assets/img/hxw.jpg",
    authorAvatar: '/assets/img/hxw.jpg',
    bgImageStyle: {
      height: '350px',
      width: '100%'
    },
    // navbar: false,
    // 添加导航栏
    nav: [
      { text: 'home', link: '/' },
      { text: 'Guide', link: '/about/' },
      {
        text: 'github',
        // 这里是下拉列表展现形式。
        items: [
          { text: 'focus-outside', link: 'https://github.com/txs1992/focus-outside' },
          { text: 'stylus-converter', link: 'https://github.com/txs1992/stylus-converter' }
        ]
      },
    ],
    // 为以下路由添加侧边栏
    sidebar: ['/', '/about', '/react'],
    theme: 'reco',

  }
}