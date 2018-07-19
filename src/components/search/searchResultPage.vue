<template>
    <div>
        <p class="re_title">最佳匹配</p>
        <router-link :to="{path:'/singersonglist',query:{id:dataA[0].idA}}">
        <div @click="setSingerSongList(dataA[0].idA)" class="presons">
            <div class="imgs"> <img v-lazy="dataA[0].picUrlA"></div>
            <p class="preson_name">歌手：{{dataA[0].nameA}}</p>
        </div>
        </router-link>
        <router-link  :to="{name:'list',query:{id:dataA[1].idOne}}">
        <div  @click="setSongList(dataA[1].idOne)" class="songer">    
            <div class="songer_imgs"><img v-lazy="dataA[1].imgUrlOne"></div>
            <p class="songer_name">歌单：{{dataA[1].nameOne}}</p>
        </div>
        </router-link>
        <ul>
            <li   @click="changeStyle(n.id)" v-for="(n, index) in dataB" :key="index">
              <router-link  class="song_list" :to="{path:'/'}">
                <p class="list_name">{{n.name}}</p>
                <p class="list_detail">{{n.artists[0].name}}</p>
              </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "searchResultPage",

  props: {
    dataA: {},
    dataB: ""
  },
  created() {
    console.log(this.dataA);
  },
  methods: {
    ...mapActions(["changeStyle","setSongList","setSingerSongList"])
  }
};
</script>

<style lang="scss" scoped>
@import "../../style/mixin.scss";
.re_title {
  @include sc(0.1rem, #e04438);
  padding: 0.1rem;
}
.presons,
.songer {
  display: -webkit-flex;
  align-items: center;
  padding: 0.06rem 0.16rem;
  border-bottom: 1px solid #ededed;
  .imgs,
  .songer_imgs {
    width: 0.5rem;
    height: 0.5rem;
    padding-right: 0.15rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .preson_name,
  .songer_name {
    @include sc(0.07rem, $fc03);
  }
}
//列表
.song_list {
  padding: 0.06rem 0.16rem;
  border-bottom: 1px solid #ededed;
  .list_name {
    @include sc(0.1rem, $fc03);
    @include ell(100%);
  }
  .list_detail {
    @include sc(0.07rem, $fc02);
    @include ell(100%);
  }
}
</style>