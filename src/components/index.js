// 该文件负责所有的公共的组件的全局注册   Vue.use
import PageTools from './Pagetools'
import UploadExcel from './UpdateExcel'
import ImageUpload from './ImageUpload'
import Print from 'vue-print-nb'
import screenfull from './ScreenFull'
import ThemePicker from './ThemePicker'
import Lang from './Lang'
import TagsView from './TagsView'
export default {
  install(Vue) {
    //  注册全局的通用栏组件对象
    Vue.component('PageTools', PageTools)
    Vue.component('UploadExcel', UploadExcel)
    Vue.component('ImageUpload', ImageUpload)
    Vue.component('screenfull', screenfull)
    Vue.component('ThemePicker', ThemePicker)
    Vue.component('Lang', Lang)
    Vue.component('TagsView', TagsView)

    Vue.use(Print)
  }
}
