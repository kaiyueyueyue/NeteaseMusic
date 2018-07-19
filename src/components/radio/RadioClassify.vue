<template>
<div>
  <div class="box" :key="i" v-for="(t,i) in classifyData">
        <h3 class="title">{{t.djRadios[0].category}}<i class="iconfont icon-gengduo"></i></h3>
        <ul>
            <li :key="index" v-for="(item,index) in t.djRadios">
              <router-link :to="{path:'/radiolist',query:{id:item.id}}">
                <div>
                    <img v-lazy="item.picUrl" alt="">
                    <!-- <span class="buy">付费精品</span> -->
                    <!-- <p class="author">梁冬*睡睡平安</p> -->
                </div>
                <h3>{{item.rcmdtext}}</h3>
              </router-link>
            </li>
        </ul> 
    </div>
</div>
    
</template>
<script>
export default {
  data() {
    return {
      classifyData: [],
      type: [10001, 453050, 453051, 11, 13, 14, 2001, 2, 10002]
    };
  },
  methods: {
    getClassifyData() {
      this.type.forEach(item => {
        // console.log(item);
        fetch(`http://120.79.162.149:3000/dj/recommend/type?type=${item}`).then(
          response => {
            if (response.ok) {
              response.json().then(data => {
                // console.log(data);
                this.classifyData.push(data);
              });
            }
          }
        );
      });
      // console.log(this.classifyData);
    }
  },
  created() {
    this.getClassifyData();
  }
};
</script>

<style lang="scss" scoped>
.box {
  // background: #fff;
  padding: 0 0.08rem;
  padding-top: 0.21rem;
}
.title {
  font-size: 0.15rem;
  line-height: 0.5rem;
  color: #2e2e2e;
  i {
    color: #949597;
    font-weight: 100;
    font-size: 0.17rem;
  }
}
ul {
  background: transparent;
  display: -webkit-flex;
  justify-content: space-between;
  overflow-x: auto;
}
li {
  width: 1.14rem;
  background: #fff;
  border-radius: 0.07rem;
  margin-right: 0.1rem;
  div {
    width: 1.14rem;
    height: 1.14rem;
    position: relative;
    .buy {
      position: absolute;
      left: 0;
      top: 0;
      padding: 0 0.07rem;
      line-height: 0.18rem;
      font-size: 0.08rem;
      color: #faf7f2;
      background: #d54a47;
      border-bottom-right-radius: 0.05rem;
      border-top-left-radius: 0.05rem;
    }
    .author {
      position: absolute;
      left: 0;
      bottom: 0;
      font-size: 0.1rem;
      color: #feffff;
    }
    img {
      width: 100%;
      height: 100%;
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
}
</style>
