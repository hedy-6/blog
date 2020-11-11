module.exports = {
  title: "前端荟萃",
  description: "前端博客",
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      {
        text: "基础",
        items: [
          { text: "HTML", link: "/html/" },
          { text: "CSS", link: "/css/" },
          { text: "JavaScript", link: "/js/" },
        ],
      },
      { text: "React", link: "/react/" },
      { text: "Vue", link: "/vue/" },
      {
        text: "工具",
        items: [
          { text: "Webpack", link: "/webpack/" },
          { text: "Git", link: "/git/" },
        ],
      },
    ],
    sidebar: {
      // "/tools/": ["", "webpack", "git"],
      "/html/": [""],
      "/css/": [""],
      "/js/": [""],
      "/react/": ["", "create-react-app", "react-hook"],
      "/vue/": ["", "vue-next"],
      "/git/": [""],
      "/webpack/": [""],
      "/": [""],
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@img": "images",
      },
    },
  },
};
