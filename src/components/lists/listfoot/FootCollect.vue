<template>
  <div class="footBox">
    <p class="foot-right">{{oList.subscribedCount}}人收藏</p>
  </div>

</template>

<script>
    export default {
      props:["oList"]
    }
</script>

<style lang="scss" scoped>
  .footBox{
    width:100%;
    height:0.59rem;
    display:-webkit-flex;
    -webkit-justify-content: center;
    .foot-right{
      display:-webkit-flex;
      -webkit-align-items: center;
      -webkit-justify-content: center;
      width:33%;
      font-size: 0.14rem;
      color:#959698;
    }

  }


</style>
