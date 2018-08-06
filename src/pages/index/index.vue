<template>
    <div>
        <p>hello</p>
        <div>{{avatar}}</div>    
        <div>
            <el-date-picker
            v-model="value"
            type="date"
            placeholder="选择日期"></el-date-picker>
        </div>
        <!-- <el-select v-model="lang" @change="switchLang">
            <el-option value="en">en</el-option>
            <el-option value="cn">cn</el-option>
        </el-select> -->
        <el-button v-text="$t('messages.hello')"></el-button>
        <router-link to="/test">Test</router-link>
    </div>
    
</template>

<script>
import {mapState} from 'vuex'
export default {
    asyncData({store,route}) {
        console.log(store,route)
        return store.dispatch('index/fetchItem',{id:1})
    },
    data(){
        return {
            value:'',
            lang: 'en'
        }
    },
    computed:mapState('index',[
        // 映射 this.count 为 store.state.count
        'avatar'
    ]),
    methods:{
        switchLang(){
            this.$i18n.locale = this.lang
        }
    }
}
</script>

<style>
    div{
        color: red;
    }
</style>