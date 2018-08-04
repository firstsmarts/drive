import Vue from 'vue'
// ElementUI
import {Button} from 'element-ui'


// i18n
import i18n from './locale'

// local refs
import router from './router'
import store from './store'
import App from './App'

// use element components
Vue.use(Button)
// Vue.use(DatePicker)
// Vue.use(Select)
// Vue.use(Option)

new Vue({
    el: '#root',
    router,
    i18n,
    store,
    template: '<App/>',
    components: {App}
})