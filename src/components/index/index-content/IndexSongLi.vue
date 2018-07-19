<template>
  <div>
    <ul class="listul">
        <li @click="setSongList(c.id)" class="listli" :key="index" v-for="(c,index) in SongList">
          <router-link class="router-box" :to="{name:'list',query:{id:c.id}}">
          <div class="listimg">
            <img v-lazy="c.picUrl">
            <p class="listerji"><i class="iconfont icon-erji"></i>{{parseInt(c.playCount/10000)}}万</p>
          </div>
          <span>{{c.name}}</span>
        </router-link>
        </li>
        
      </ul>
  </div>
</template>

<script>
import $ from "jquery";
import { Indicator } from "mint-ui";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      SongList: []
    };
  },
  methods: {
    ...mapActions(["setSongList"]),
    initPage() {
      // Indicator.open({
      //   text: "加载中...",
      //   spinnerType: "fading-circle"
      // });

      setTimeout(() => {
        Indicator.close();
      }, 4000);
      fetch("http://120.79.162.149:3000/personalized?limit=9").then(
        response => {
          if (response.ok) {
            response.json().then(data => {
              this.SongList = data.result;
              // console.log(data)
              // 因为拿的是data里面的result
            });
          }
        }
      );
    }
  },
  created() {
    this.initPage();
  },
  mounted() {
    // Indicator.close();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
span {
  display: block;
}
.mint-indicator-spin {
  display: block;
}
.listul {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 0 1%;
}
.listul li {
  width: 1.15rem;
  // height: 1.53rem;
  margin-top: 0.2rem;
  .listimg {
    position: relative;
    width: 1.15rem;
    height: 1.15rem;
    .listerji {
      position: absolute;
      font-size: 0.12rem;
      right: 0.02rem;
      top: 0.02rem;
      color: white;
    }
  }
  img {
    width: 1.15rem;
    height: 1.15rem;
  }
  span {
    font-size: 0.12rem;
    color: #323234;
    margin-top: 0.09rem;
    line-height: 0.24rem;
    word-wrap: break-word;
  }
}
</style>