module.exports = {
  title: "前端荟萃",
  description: "前端博客",
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "React", link: "/react/" },
      { text: "Vue", link: "/vue/" },
      {
        text: "基础",
        items: [
          { text: "HTML", link: "/html/" },
          { text: "CSS", link: "/css/" },
          { text: "JavaScript", link: "/js/" },
          // {
          //   text: "JavaScript",
          //   items: [{ text: "类型判断", link: "/js/type/" }],
          // },
        ],
      },
      {
        text: "高级",
        items: [
          { text: "继承与原型链", link: "/high-javascript/extends-prototype/" },
          { text: "内存管理", link: "/high-javascript/memory-management/" },
        ],
      },
      {
        text: "工具",
        items: [
          { text: "Git", link: "/tools/git/" },
          { text: "Webpack", link: "/tools/webpack/" },
          { text: "eslint、stylelint、prettier", link: "/tools/lint/" },
        ],
      },
    ],
    sidebar: {
      // "/tools/": ["", "webpack", "git"],
      "/high-javascript/memory-management/": [""],
      "/html/": [""],
      "/css/": [""],
      "/js/": ["", "type", "closure"],
      "/react/": ["", "create-react-app", "react-hook"],
      "/vue/": ["", "vue-next"],
      "/tools/git/": [""],
      "/tools/webpack/": [""],
      "/tools/lint/": [""],
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
