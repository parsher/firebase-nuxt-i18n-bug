require('dotenv').config()
module.exports = {
  mode: 'universal',
  srcDir: 'src',
  buildDir: 'functions/.nuxt',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s',
    title: 'test' || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'test' || ''
      }
    ],
    link: [
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/firebase',
    '~/plugins/common_variables', // Fixme.
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    'nuxt-i18n'
  ],

  i18n: {
    locales: [{ code: 'en', file: 'en-US.js', iso: 'en-US', name: 'English' }, { code: 'ko', file: 'ko-KR.js', iso: 'ko-KR', name: '한글' }],
    defaultLocale: 'en',
    lazy: true,
    langDir: 'lang/',
    vueI18n: {
      fallbackLocale: 'en'
    },
  },
 
  /*
  ** Build configuration
  */
  build: {
    extractCSS: true
  },

  env: {
    FIREBASE_APIKEY: process.env.FIREBASE_APIKEY,
    FIREBASE_AUTHDOMAIN: process.env.FIREBASE_AUTHDOMAIN,
    FIREBASE_PROJECTID: process.env.FIREBASE_PROJECTID,
    GOOGLE_RECAPTCHA_CLIENT: process.env.GOOGLE_RECAPTCHA_CLIENT
  },
}