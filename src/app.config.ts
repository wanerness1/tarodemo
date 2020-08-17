export default {
  pages: ["pages/index/index","pages/test/index"],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    list: [
      {
        pagePath: "pages/index/index",
        text:'home'
      },
      {
        pagePath: "pages/test/index",
        text:'test'
      },
    ],
  },
};
