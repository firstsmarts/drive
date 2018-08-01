<template>
    <div>
        <p>hello</p>
        <div>{{avatar}}</div>    
    </div>
    
</template>

<script>
import {mapState} from 'vuex'
export default {
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