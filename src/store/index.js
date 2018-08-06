import Vue from 'vue'
import Vuex from 'vuex'

import index from './modules/index'

Vue.use(Vuex)

export function createStore(){

    return new Vuex.Store({
        modules: {
            index
        }
    })
}