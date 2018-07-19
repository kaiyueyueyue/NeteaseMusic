<template>
  <div class="banner-box">
    
  <mt-swipe :auto="4000" class="banner">
  <mt-swipe-item :key="index" v-for="(d,index) in BannerList" ><img :src="d.picUrl"></mt-swipe-item>
</mt-swipe>
</div>
</template>

<script>
export default {
  data() {
    return {
      BannerList: []
    };
  },
  methods: {
    initPage() {
      fetch("http://120.79.162.149:3000/banner").then(response => {
        if (response.ok) {
          response.json().then(data => {
            this.BannerList = data.banners;
            // console.log(this.BannerList)
            // 因为拿的是data里面的result
          });
        }
      });
    }
  },
  created() {
    this.initPage();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"  scoped>
@import url(../../../assets/css/index.css);
.banner {
  height: 1.35rem;
  margin: 0.1rem auto;
  width: 96%;
  border-radius: 0.05rem;
}
.banner-box {
  //   overflow: hidden;
  padding-top: 0.1rem;
  height: 1.11rem;
  background: #e24439;
}
.banner img {
  width: 100%;
}
</style>