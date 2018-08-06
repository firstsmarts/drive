import Vue from 'vue'
// ElementUI
import { Button, DatePicker} from 'element-ui'


// i18n
import i18n from './locale'

// local refs
import { createRouter } from './router'
import { createStore } from './store'
import App from './App'

// use element components
Vue.use(Button)
Vue.use(DatePicker)
// Vue.use(Select)
// Vue.use(Option)

export function createApp(){
    const router = createRouter()
    const store = createStore()
    const app = new Vue({
        router,
        store,
        i18n,
        render: (h) => h(App)

    })

    return {app,store,router}
}