export default {
  title: "随想笔录", //站点标题
  description: "", //mate标签description，多用于搜索引擎抓取摘要
  base: "/blog/",
  theme: "reco",
  themeConfig: {
    type: "blog",
    logo: "/logo.png",
    nav: [
      //配置导航栏
      {
        text: "组件",
        link: "/components/select",
        activeMatch: "/components",
      },
      { text: "我的掘金", link: "https://juejin.cn/user/2955961141823773" },
      {
        text: "个人中心",
        items: [
          {
            items: [
              { text: "注册", link: "guide/center/register" },
              { text: "登录", link: "guide/center/login" },
            ],
          },
        ],
      },
    ],
    socialLinks: [
      //配置社交链接
      { icon: "github", link: "https://github.com/chendailu" },
      { icon: "twitter", link: "..." },
      // You can also add custom icons by passing SVG as string:
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>',
        },
        link: "...",
      },
    ],
    sidebar: {
      "/components/": [
        //配置侧边栏
        {
          text: "基本组件",
          items: [
            {
              text: "layout",
              link: "/components/layout",
            },
            {
              text: "icon",
              link: "/components/icon",
            },
            {
              text: "button",
              link: "/components/button",
            },
            {
              text: "input",
              link: "/components/input",
            },

            {
              text: "inputNumber",
              link: "/components/inputNumber",
            },
            {
              text: "badge",
              link: "/components/badge",
            },
            {
              text: "menu",
              link: "/components/menu",
            },
            {
              text: "rightMenu",
              link: "/components/rightMenu",
            },
            {
              text: "checkbox",
              link: "/components/checkbox",
            },
            {
              text: "radio",
              link: "/components/radio",
            },
            {
              text: "tree",
              link: "/components/tree",
            },
            {
              text: "switch",
              link: "/components/switch",
            },
            {
              text: "dropdown",
              link: "/components/dropdown",
            },
            {
              text: "tabs",
              link: "/components/tabs",
            },
            {
              text: "tag",
              link: "/components/tag",
            },
            {
              text: "timeLine",
              link: "/components/timeLine",
            },
            {
              text: "breadcrumb",
              link: "/components/breadcrumb",
            },
            {
              text: "step",
              link: "/components/step",
            },
            {
              text: "image",
              link: "/components/image",
            },
            {
              text: "select",
              link: "/components/select",
            },
            {
              text: "pagination",
              link: "/components/pagination",
            },
            {
              text: "progress",
              link: "/components/progress",
            },
            {
              text: "timeSelect",
              link: "/components/timeSelect",
            },
            {
              text: "timePicker",
              link: "/components/timePicker",
            },
            {
              text: "datePicker",
              link: "/components/datePicker",
            },
            {
              text: "dateTimePicker",
              link: "/components/dateTimePicker",
            },
            {
              text: "table",
              link: "/components/table",
            },
            {
              text: "messageBox",
              link: "/components/messageBox",
            },
            {
              text: "messageAlert",
              link: "/components/messageAlert",
            },
            {
              text: "messageNotice",
              link: "/components/messageNotice",
            },
            {
              text: "dialog",
              link: "/components/dialog",
            },
            {
              text: "form",
              link: "/components/form",
            },
            {
              text: "loading",
              link: "/components/loading",
            },
            {
              text: "cascader",
              link: "/components/cascader",
            },
            {
              text: "tooltip",
              link: "/components/tooltip",
            },
            {
              text: "autocomplete",
              link: "/components/autocomplete",
            },
            {
              text: "popover",
              link: "/components/popover",
            },
            {
              text: "audioVideo",
              link: "/components/audioVideo",
            },
            {
              text: "colorPicker",
              link: "/components/colorPicker",
            },
            {
              text: "drawer",
              link: "/components/drawer",
            },
          ],
        },
      ],
    },
  },
};
