<template>
    <div class="box">
        <div class="left">
            <img v-if="musicInfor.album ||musicInfor.al"  @click="changeStyle" :src="musicInfor.album !=undefined ?musicInfor.album.picUrl :musicInfor.al.picUrl" alt="">
            <div>
                <p>{{musicInfor.name}}</p>
                <p v-if="musicInfor.artists || musicInfor.ar">{{musicInfor.artists!= undefined ?musicInfor.artists[0].name:musicInfor.ar[0].name}}</p>
            </div>
        </div>
        <div class="right">
            <i class="iconfont icon-bofang3"></i>
            <i class="iconfont icon-caidan"></i>
        </div>
    </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  props: ["musicInfor"],
  methods: {
    ...mapActions(["changeStyle"])
  }
};
</script>
<style lang="scss" scoped>
.box {
  height: 0.36rem;
  padding: 0.06rem 0;
  background: rgba(255, 255, 255, 1);
  display: -webkit-flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #ccc;
}
.left {
  display: -webkit-flex;
  img {
    width: 0.37rem;
    height: 0.37rem;
    border-radius: 0.07rem;
    padding-left: 0.07rem;
    padding-right: 0.08rem;
  }
  div {
    p:first-child {
      font-size: 0.12rem;
      color: #262626;
      padding-top: 0.05rem;
    }
    p:last-child {
      font-size: 0.1rem;
      color: #737373;
    }
  }
}
.right {
  i {
    float: left;
    // display: block;
    padding: 0 0.11rem;
    color: #515151;
    font-size: 0.24rem;
  }
}
</style>
