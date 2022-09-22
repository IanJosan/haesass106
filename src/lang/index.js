import Vue from 'vue'
import Cookies from 'js-cookie'
import Vuei18n from 'vue-i18n'
import elementZH from 'element-ui/lib/locale/lang/zh-CN'
import elementEN from 'element-ui/lib/locale/lang/en'
import elementJA from 'element-ui/lib/locale/lang/ja'
import custmZH from './zh'
import custmEN from './en'

Vue.use(Vuei18n)
export default new Vuei18n({
  locale: Cookies.get('language') || 'en', // 当前多语言类
  messages: {
    zh: {
      // 语言包 elementUI 语言包 自定语言包
      ...elementZH, ...custmZH
    },
    en: {
      ...elementEN, ...custmEN
    },
    ja: {
      ...elementJA
    }
  } // 当前语言包
})
