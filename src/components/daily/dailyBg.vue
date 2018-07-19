<template>
    <div class="p_bar">
      <img src="../../assets/images/p_pic.jpg" alt="">
      <div class="p_info">
        <div class="p_day">
          <i class="iconfont icon-rili1"></i>
          <span class="day">{{date}}</span>   
        </div>
        <p class="p_notes"><i class="iconfont icon-dengpao"></i>根据你的音乐口味生成，每天6:00更新</p>
      </div>
    </div>
</template>

<script>
  export default {
    
    name: "dailyBg",

    props:['date']
    
  }
</script>

<style lang="scss" scoped>
  @import "../../style/mixin.scss";
  .p_bar{
    width:100%;
    height:1.6rem;
    position:relative;
    img{
      width:100%;
      height:100%;
    }
    .p_info{
      position:absolute;
      left:.14rem;
      bottom:.16rem;
      .p_day{
        position:relative;
        width:.56rem;
        height:.56rem;
        font-size:0;
        margin-bottom:.14rem;
        .icon-rili1{
          @include sc(.56rem,$fc01);
        }
        .day{
          margin-top:.1rem;
          @include sc(.19rem,$fc01);
          @include center;
        }
      }
      .p_notes{
        @include sc(.07rem,#a0a0a0);
      }
    }
  }
</style>
