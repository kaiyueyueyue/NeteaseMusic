<template>
    <div class="box">
        <h2>精品推荐</h2>
        <p class="sub-title">你值得拥有的优质内容</p>
        <ul>
            <li :key="index" v-for="(p,index) in recommendData">
              <!-- <router-link :to="{path:'/radiolist',query:{id:p.id}}"> -->
                <div>
                    <img v-lazy="p.sPicUrl" alt="">
                </div>
                <h3>{{p.name}}</h3>
                <!-- </router-link> -->
            </li>
        </ul>
        <a class="btn" href="javascript:;">全部精品电台<i class="iconfont icon-gengduo"></i></a>
    </div>
</template>
<script>
export default {
  data() {
    return {
      recommendData: ""
    };
  },
  methods: {
    getRecommendData() {
      fetch("http://120.79.162.149:3000/personalized/privatecontent").then(
        response => {
          if (response.ok) {
            response.json().then(data => {
              // console.log(data);
              this.recommendData = data.result;
            });
          }
        }
      );
    }
  },
  created() {
    this.getRecommendData();
  }
};
</script>
<style lang="scss" scoped>
.box {
  background: url(../../assets/images/radio/radio-recommend-bg.jpg) center
    repeat;
  // padding-top: 0.1rem;
  overflow: hidden;
}
h2 {
  text-align: center;
  font-size: 0.17rem;
  color: #fff;
  padding-top: 0.23rem;
}
.sub-title {
  text-align: center;
  font-size: 0.11rem;
  color: #d3d4d9;
  line-height: 0.27rem;
}
ul {
  background: transparent;
  display: -webkit-flex;
  padding: 0 0.08rem;
  justify-content: space-between;
}
li {
  width: 1.14rem;
  background: #fff;
  border-radius: 0.07rem;
  div {
    // position: relative;
    // .buy {
    //   position: absolute;
    //   left: 0;
    //   top: 0;
    //   padding: 0 0.07rem;
    //   line-height: 0.18rem;
    //   font-size: 0.08rem;
    //   color: #faf7f2;
    //   background: #d54a47;
    //   border-bottom-right-radius: 0.05rem;
    //   border-top-left-radius: 0.05rem;
    // }
    // .author {
    //   position: absolute;
    //   left: 0;
    //   bottom: 0;
    //   font-size: 0.1rem;
    //   color: #feffff;
    // }
    img {
      width: 100%;
      height: 50%;
      border-top-left-radius: 0.07rem;
      border-top-right-radius: 0.07rem;
    }
  }
  h3 {
    font-weight: 100;
    color: #2f2f2f;
    font-size: 0.12rem;
    line-height: 0.17rem;
    // padding-top: 0.05rem;
    padding: 0.05rem 0.06rem 0;
  }
  p {
    color: #d53b33;
    font-size: 0.09rem;
    padding: 0.05rem 0.06rem 0;
    line-height: 0.24rem;
  }
}
.btn {
  color: #fbfbfb;
  display: block;
  margin: 0.2rem auto;
  width: 1.2rem;
  font-size: 0.13rem;
  text-align: center;
  border: 2px solid #d5d3d6;
  border-radius: 0.14rem;
  line-height: 0.29rem;
  i {
    vertical-align: middle;
  }
}
</style>
