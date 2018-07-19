<template>
    <div class="box">
        <div class="name">
            <p class="title" style="background: url(../../assets/images/radio-infor-bg.jpg) left center no-repeat">主播</p>
            <div class="infor">
                <img v-lazy="radioDetail[0].dj.avatarUrl" alt="">
                <div class="infor-right">
                    <div>
                        <p class="id">{{radioDetail[0].dj.nickname}}</p>
                        <p class="desc">{{radioDetail[0].dj.decription}}</p>
                    </div>
                    <i class="iconfont icon-bofangsanjiaoxing"></i>
                </div>
            </div>
        </div>
        <div class="content">
            <p class="title">电台内容简介</p>
            <p>分类：<span>{{radioDetail[0].radio.category}}</span> </p>
            <p>{{radioDetail[0].radio.desc}}</p>
        </div>
        <div class="comment">
            <p class="title">精彩评论</p>
            <ul>
                <li :key="index" v-for="(c,index) in comment">
                    <p><img v-lazy="c.user.avatarUrl" alt=""> <span>{{c.user.nickname}}</span></p>
                    <p>{{c.content}}</p>
                </li>
            </ul>
        </div>

    </div>
</template>
<script>
export default {
  props: ["radioDetail"],
  data() {
    return {
      comment: ""
    };
  },
  methods: {
    getRadioComment() {
      console.log(this.$route.query.id);
      fetch(
        `http://120.79.162.149:3000/comment/dj?id=${this.$route.query.id}`
        // http://120.79.162.149:3000/comment/dj?id=1367591486
      ).then(response => {
        if (response.ok) {
          response.json().then(data => {
            // console.log(data);
            this.comment = data.comments;
          });
        }
      });
    }
  },
  created() {
    this.getRadioComment();
  }
};
</script>
<style lang="scss" scoped>
.title {
  line-height: 0.47rem;
  font-size: 0.11rem;
  padding-left: 0.12rem;
  //   background: url(../../assets/images/radio-infor-bg.jpg) left center no-repeat;
}
.name {
  margin-bottom: 0.26rem;
}
.infor {
  display: -webkit-flex;
  //   justify-content: space-between;
  align-items: center;
  padding: 0.1rem 0;
  border-top: 1px solid #e2e6e9;
  border-bottom: 1px solid #e2e6e9;
  img {
    width: 0.53rem;
    height: 0.53rem;
    border-radius: 50%;
    margin: 0 0.11rem;
  }
  .infor-right {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .id {
      font-size: 0.13rem;
      color: #272b2a;
      line-height: 0.17rem;
    }
    .desc {
      font-size: 0.1rem;
      color: #7e7e7e;
      line-height: 0.17rem;
    }
    i {
      margin-right: 0.11rem;
    }
  }
}
.content {
  margin-bottom: 0.26rem;
  p {
    padding-left: 0.12rem;
  }
  p:nth-child(2) {
    font-size: 0.1rem;
    line-height: 0.23rem;
    span {
      color: #c43960;
      border: 1px solid #c43960;
      padding: 0.02rem 0.05rem;
    }
  }
  p:nth-child(3) {
    font-size: 0.1rem;
    line-height: 0.23rem;
  }
}
.comment {
  li {
    p:first-child {
      overflow: hidden;
      display: -webkit-flex;
      margin-top: 0.15rem;
      span {
        flex: 1;
        font-size: 0.1rem;
        color: #6e7271;
        line-height: 0.3rem;
        float: left;
      }
      img {
        width: 0.3rem;
        height: 0.3rem;
        border-radius: 50%;
        float: left;
        margin-right: 0.15rem;
      }
    }
    p:last-child {
      font-size: 0.1rem;
      color: #1e1e1e;
      line-height: 0.24rem;
      padding: 0 0.15rem 0 0.55rem;
    }
  }
}
</style>
