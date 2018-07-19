<template>
    <div>
        <p class="hot_title">热门搜索</p>
        <ul class="hot_list">
            <li class="hot_name" v-for="(n,idx) in hotData" :key="idx" @click="sendToFather(n.first)">{{n.first}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name:'searchHotPage',

        props:['hotData'],

        data() {
            return {
            }
        },
        methods:{
            sendToFather(val) {
                this.$emit('getData',val);
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import "../../style/mixin.scss";
    .hot_title{
        padding:.2rem .2rem;
       @include sc(.1rem, $fc02);
    }
    .hot_list{
        padding:.05rem .2rem;
        display:-webkit-flex;
        flex-wrap: wrap;
        .hot_name{
            @include sc(.1rem, $fc03);
            padding:.04rem;
            margin:.05rem;
            border-radius: .1rem;
            border:1px solid #eee;
            text-align:center;
        }
    }
</style>