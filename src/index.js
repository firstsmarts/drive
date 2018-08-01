import Vue from 'vue'


import router from './router'
import store from './store'
import App from './App'


new Vue({
    el: '#root',
    router,
    store,
    template: '<App/>',
    components: {App}
})