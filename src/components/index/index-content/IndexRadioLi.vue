<template>
  <div>
    <ul class="listul">
        <li class="listli" :key="index" v-for="(p,index) in RadioList">
      <router-link :to="{path:'/radiolist',query:{id:p.program.radio.id}}">
          <div class="listimg">
            <img v-lazy="p.picUrl">
            <p class="listerji">{{p.program.radio.category
}}</p>
          </div>
          <span>{{p.name}}</span>
        </router-link>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      RadioList: []
    };
  },
  methods: {
    initPage() {
      fetch("http://120.79.162.149:3000/personalized/djprogram").then(
        response => {
          if (response.ok) {
            response.json().then(data => {
              this.RadioList = data.result;
              // console.log(data.result);
              // 因为拿的是data里面的result
            });
          }
        }
      );
    }
  },
  created() {
    this.initPage();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
span {
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
      left: 0.02rem;
      bottom: 0.02rem;
      color: white;
      letter-spacing: 0.03rem;
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
  }
}
</style>