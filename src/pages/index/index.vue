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
        <el-button v-text="$t('messages.hello')"></el-button>
    </div>
    
</template>

<script>
import {mapState} from 'vuex'
export default {
    data(){
        return {
            value:''
        }
    },
    created(){
        console.log(this.$store)
    },
    computed:mapState('index',[
        // 映射 this.count 为 store.state.count
        'avatar'
    ])
}
</script>

<style>
    div{
        color: red;
    }
</style>