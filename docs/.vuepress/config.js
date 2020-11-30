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
          {
            text: "JavaScript",
            link: "/js/",
            // items: [
            //   { text: "类型判断", link: "/js/type/" },
            //   { text: "ES2020", link: "/js/es2020/" },
            // ],
          },
        ],
      },
      {
        text: "高级JS",
        link: "/high-javascript/",
      },
      {
        text: "工具",
        items: [
          { text: "浏览器", link: "/tools/browser/" },
          { text: "Http", link: "/tools/http/" },
          { text: "Git", link: "/tools/git/" },
          { text: "Npm", link: "/tools/npm/" },
          { text: "Webpack", link: "/tools/webpack/" },
          { text: "build", link: "/tools/build/" },
          { text: "eslint、stylelint、prettier", link: "/tools/lint/" },
        ],
      },
    ],
    sidebar: {
      // "/tools/": ["", "webpack", "git"],
      "/high-javascript/": [
        "",
        "Prototype",
        "Scope",
        "this",
        "closure",
        "Modules",
        "GC",
      ],
      "/html/": [""],
      "/css/": [""],
      "/js/": ["", "type", "ES6", "ES2020", "clone", "eventloop"],
      "/react/": ["", "create-react-app", "react-hook"],
      "/vue/": ["", "vue-next"],
      "/tools/browser/": [""],
      "/tools/http/": [""],
      "/tools/git/": [""],
      "/tools/npm/": [""],
      "/tools/webpack/": [""],
      "/tools/build/": [""],
      "/tools/lint/": [""],
      "/": [""],
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@img": "../images",
      },
    },
  },
};
