<template>
  <div class="play-top">
    	<i @click="scaleView" class="iconfont icon-xitongfanhui"></i>
		<div class="play-right">
			<h3 class="title">{{musicInfor.name }}</h3>
			<p class="star" v-if="musicInfor.artists || musicInfor.ar">{{ musicInfor.artists!= undefined ?musicInfor.artists[0].name:musicInfor.ar[0].name}}</p>
		</div>
  </div>

</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["musicInfor"],
  methods: {
    ...mapActions(["scaleView"])
  }
};
</script>

<style lang="scss" scoped>
.play-top {
  width: 100%;
  display: flex;
  i {
    font-size: 0.2rem;
    color: #f1f1f1;
    padding-top: 0.15rem;
    padding-left: 0.15rem;
  }
  .play-right {
    width: 80%;
    margin: 0 auto;
    text-align: center;
    margin-top: 0.15rem;
    line-height: 0.2rem;
    padding-right: 0.35rem;
    .title {
      color: white;
      font-size: 0.18rem;
      text-align: center;
    }
    .star {
      color: white;
      font-size: 0.14rem;
      padding-top: 0.1rem;
    }
  }
}
</style>
