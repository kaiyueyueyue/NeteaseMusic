<template>
	<div class="content-top">
		<div class="contentimg">
			<div class="tree" id="tree">
				<img v-if="musicInfor.album ||musicInfor.al" :src="musicInfor.album !=undefined ?musicInfor.album.picUrl :musicInfor.al.picUrl">
			</div>
		</div>
	</div>
</template>

<script>
export default {
  props: ["musicInfor"],
  mounted() {
    this.$on("playOrPause", function(data) {
      var pic = document.getElementById("tree");
      if (data == "on") {
        pic.style.animationPlayState = "";
      } else {
        pic.style.animationPlayState = "paused";
      }
      // console.log(pic);
    });
    // console.log(this.musicInfor)
  }
};
</script>

<style lang="scss" scoped>
// @import url(../../../assets/css/index.css);
// .content-top{
// 	background: #000;
//     opacity: .6;
// }
.content-top {
  width: 100%;
  overflow: hidden;
}
.contentimg {
  width: 100%;
  margin: 0.8rem auto;
  .tree {
    margin: 0 auto;
    border-radius: 50%;
    width: 1.8rem;
    height: 1.8rem;
    border: 0.4rem solid #ccc;
    animation: photo 15s linear infinite;
  }
  img {
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 50%;
  }
}
@keyframes photo {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
