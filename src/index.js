import Vue from 'vue'
// ElementUI
import {Button,DatePicker} from 'element-ui'
import lang from 'element-ui/lib/locale/lang/zh-CN'
import locale from 'element-ui/lib/locale'

// i18n
import i18n from './locale'

// local refs
import router from './router'
import store from './store'
import App from './App'

// set lang
locale.use(lang)
// use element components
Vue.use(Button)
Vue.use(DatePicker)

new Vue({
    el: '#root',
    router,
    i18n,
    store,
    template: '<App/>',
    components: {App}
})