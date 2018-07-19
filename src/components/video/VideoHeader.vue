<template>
  <div class="vHead">
    <a v-for="p in aList" class="navHead">{{p.title}}</a>
  </div>

</template>

<script>
    export default {
      data(){
         return {
           aList: [
             {title: '推荐'},
             {title: '音乐'},
             {title: 'Showtime'},
             {title: 'Mv'},
             {title: '二次元'},
             {title: '舞蹈'},
             {title: '游戏'},
           ]
         }
      }
    }
</script>

<style lang="scss" scoped>
  .vHead{
    width:100%;
    height:0.35rem;
    display:-webkit-flex;
    -webkit-align-items: center;
    background: #e6483d;
    -webkit-flex-wrap: nowrap;
    overflow-x: scroll;
   .navHead{
     display:inline-block;
     font-size: 0.14rem;
     color:#fffffd;
     margin-left:0.21rem;
     -webkit-flex-shrink: 0;
   }
  }


</style>
