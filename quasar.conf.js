// Configuration for your app

module.exports = function (ctx) {
  return {
    // app plugins (/src/plugins)
    plugins: ["axios", "gtm-plugin", "analytics"],
    css: ["app.styl"],
    extras: [
      ctx.theme.mat ? "roboto-font" : null,
      "material-icons" // optional, you are not bound to it
      // 'ionicons',
      // 'mdi',
      // 'fontawesome'
    ],
    supportIE: true,
    build: {
      scopeHoisting: true,
      distDir: 'docs/docs',
      // vueRouterMode: 'history',
      // vueCompiler: true,
      // gzip: true,
      // analyze: true,
      // extractCSS: false,
      extendWebpack(cfg) { }
    },
    devServer: {
      // https: true,
      // port: 8080,
      open: true // opens browser window automatically
    },
    // framework: 'all' --- includes everything; for dev only!
    framework: {
      components: [
        "QLayout",
        "QLayoutHeader",
        "QLayoutDrawer",
        "QPageContainer",
        "QPage",
        "QToolbar",
        "QToolbarTitle",
        "QBtn",
        "QIcon",
        "QList",
        "QListHeader",
        "QItem",
        "QItemMain",
        "QItemSide",
        "QRouteTab",
        "QTabs",
        "QTab",
        "QField",
        "QInput",
        "QCard",
        "QCardTitle",
        "QCardMain",
        "QCardMedia",
        "QCardSeparator",
        "QCardActions",
        "QModal",
        "QJumbotron",
        "QRange",
        "QParallax",
        "QLayoutFooter",

      ],
      directives: [
        "Ripple",
        "ScrollFire"
      ],
      // Quasar plugins
      plugins: [
        "Notify"
      ]
      // iconSet: ctx.theme.mat ? 'material-icons' : 'ionicons'
      // i18n: 'de' // Quasar language
    },
    // animations: 'all' --- includes all animations
    animations: [
      'fadeInDown'
    ],
    ssr: {
      pwa: false
    },
    pwa: {
      // workboxPluginMode: 'InjectManifest',
      // workboxOptions: {},
      // manifest: {
      //   name: 'Ebenezer Websites LLC',
      //   short_name: 'Ebenezer Websites LLC',
      //   description: 'Ebenezer Websites LLC is a company homegrown in Boise, Idaho. If you have any website needs--from an upgrade, to a brand new site--we are happy to help!',
      //   display: "standalone",
      //   orientation: "portrait",
      //   background_color: "#ffffff",
      //   theme_color: "#027be3",
      //   icons: [
      //     {
      //       src: "statics/icons/ee.png",
      //       sizes: "128x128",
      //       type: "image/png"
      //     },
      //     {
      //       src: "statics/icons/ee.png",
      //       sizes: "192x192",
      //       type: "image/png"
      //     },
      //     {
      //       src: "statics/icons/ee.png",
      //       sizes: "256x256",
      //       type: "image/png"
      //     },
      //     {
      //       src: "statics/icons/ee.png",
      //       sizes: "384x384",
      //       type: "image/png"
      //     },
      //     {
      //       src: "statics/icons/ee.png",
      //       sizes: "512x512",
      //       type: "image/png"
      //     }
      //   ]
      // }
    },
    cordova: {
      // id: 'org.cordova.quasar.app'
    },
    electron: {
      // bundler: 'builder', // or 'packager'
      extendWebpack(cfg) {
        // do something with Electron process Webpack cfg
      },
      packager: {
        // https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#options
        // OS X / Mac App Store
        // appBundleId: '',
        // appCategoryType: '',
        // osxSign: '',
        // protocol: 'myapp://path',
        // Window only
        // win32metadata: { ... }
      },
      builder: {
        // https://www.electron.build/configuration/configuration
        // appId: 'quasar-app'
      }
    }
  };
};
