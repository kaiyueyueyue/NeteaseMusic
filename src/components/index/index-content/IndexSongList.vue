<template>
  <div>
    <div class="songlist">
    <h3>推荐歌单<i class="iconfont icon-arrow-right-copy-copy"></i></h3>
    <index-song-li></index-song-li>
    </div>
    <div class="songlist">
    <h3>推荐电台<i class="iconfont icon-arrow-right-copy-copy"></i></h3>
    <index-radio-li></index-radio-li>
    </div>
  </div>

</template>

<script>
import IndexSongLi from "./IndexSongLi"
import IndexRadioLi from "./IndexRadioLi"
export default {
 components:{
  IndexSongLi,
  IndexRadioLi
 }
};
     
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
span{
  display: block;
}
.songlist{
  margin-top: 0.24rem;
}
.songlist h3{
   font-size:0.16rem;
   padding-left:2%;
   i{
    color:#939496;
    padding-left:0.05rem;
   }
}



   
</style>