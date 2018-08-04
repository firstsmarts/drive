<template>
    <div>
        <p>hello</p>
        <div>{{avatar}}</div>    
        <!-- <div>
            <el-date-picker
            v-model="value"
            type="date"
            placeholder="选择日期"></el-date-picker>
        </div> -->
        <!-- <el-select v-model="lang" @change="switchLang">
            <el-option value="en">en</el-option>
            <el-option value="cn">cn</el-option>
        </el-select> -->
        <div v-text="$t('messages.hello')"></div>
    </div>
    
</template>

<script>
import {mapState} from 'vuex'
export default {
    data(){
        return {
            value:'',
            lang: 'en'
        }
    },
    created(){
        console.log(this.$store)
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