<template>
    <div>
        <dl class="mylist">
            <dt><span>歌单（{{mineList.length}}）</span><span>共被收藏0次</span></dt>
            <dd @click="setSongList(mine.id)" :key="index" v-for="(mine,index) in mineList">
              <router-link class="dd-box" :to="{name:'list',query:{id:mine.id}}">
                <img v-lazy="mine.coverImgUrl" alt="">
                <div class="right">
                    <h3>{{mine.name}}</h3>
                    <p>{{mine.trackCount}}首，播放{{mine.playCount}}次</p>
                </div>
              </router-link>
            </dd>
        </dl>
        <dl >
            <dt><span>收藏的歌单（{{collectionList.length}}）</span></dt>
            <dd  @click="setSongList(collect.id)" class="dd-box" :key="index" v-for="(collect,index) in collectionList">
               <router-link class="dd-box" :to="{name:'list',query:{id:collect.id}}">
                <img v-lazy="collect.coverImgUrl" alt="">
                <div class="right">
                    <h3>{{collect.name}}</h3>
                    <p>{{collect.trackCount}}首，by&nbsp;&nbsp;{{collect.creator.nickname}}，播放{{(collect.playCount / 10000).toFixed(1)}}万</p>
                </div>
                </router-link>
            </dd>
        </dl>
    </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  props: ["mineList", "collectionList"],
 methods:{
    ...mapActions(["setSongList"])
 }
};
</script>
<style lang="scss" scoped>
.mylist {
  border-top-left-radius: 0.07rem;
  border-top-right-radius: 0.07rem;
}
dt {
  line-height: 0.25rem;
  font-size: 0.11rem;
  color: #626365;
  background: #eff0f2;
  display: -webkit-flex;
  justify-content: space-between;
  padding: 0.11rem;
}
.dd-box {
  display: -webkit-flex;
  //   padding: 0.03rem 0;
  height: 0.62rem;
  align-items: center;
  padding: 0 0.06rem;
  img {
    width: 0.54rem;
    height: 0.54rem;
    border-radius: 0.07rem;
    margin-right: 0.13rem;
  }
  .right {
    flex: 1;
    padding-bottom: 0.06rem;
    border-bottom: 1px solid #eff0f2;
    h3 {
      font-size: 0.13rem;
      color: #353638;
      line-height: 0.21rem;
    }
    p {
      line-height: 0.24rem;
      font-size: 0.11rem;
      color: #7d7e80;
    }
  }
}
</style>
