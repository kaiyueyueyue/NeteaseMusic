<template>
        <ul>
            <li :key="index" v-for="(s,index) in userEvent">
                <div class="shareHead">
                    <img src="../../assets/images/mine/img.jpg" alt="">
                    <div class="right">
                        <p><span>{{userInfor.profile.nickname}}</span>&nbsp;分享单曲</p>
                        <p>{{s.eventTime | createTimeFilter}}</p>
                    </div>
                </div>
                <div class="contentBox">
                    <div class="content">
                        <div class="pic">
                            <img v-lazy="JSON.parse(s.json).song.album.picUrl" alt="">
                            <i class="iconfont icon-triangle-right"></i>
                        </div>
                        <div class="content-right">
                            <p>{{JSON.parse(s.json).song.name}}</p>
                            <p>{{JSON.parse(s.json).song.artists[0].name}}</p>
                        </div>
                    </div>
                </div>
                <div class="commentBox">
                    <div class="comment">
                        <p>
                            <i class="iconfont icon-zan"></i>赞
                        </p>
                        <p>
                            <i class="iconfont icon-pinglun"></i>评论
                        </p>
                        <p>
                            <i class="iconfont icon-fenxiang"></i>分享
                        </p>
                        <p>
                            <i class="iconfont icon-gengduoxiao"></i>
                        </p>
                    </div>
                </div>
                
            </li>
        </ul>
</template>
<script>
export default {
  props: ["userEvent", "userInfor"],
  created() {
    // console.log(this.userEvent[1].json);
  },
  filters: {
    timeFilter(data) {
      return (data / 60000).toFixed(2);
    },
    createTimeFilter(time) {
      var date = new Date(time);
      var year = date.getFullYear();
      var month =
        date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1;
      var day = date.getHours();
      return year + "-" + month + "-" + day;
    }
  }
};
</script>
<style lang="scss" scoped>
li {
  padding: 0 0.1rem;
}
.shareHead {
  display: -webkit-flex;
  align-items: center;
  height: 0.36rem;
  img {
    width: 0.36rem;
    height: 0.36rem;
    border-radius: 50%;
    margin-right: 0.1rem;
  }
  .right {
    flex: 1;
    color: #919294;
    p:first-child {
      font-size: 0.11rem;
      span {
        color: #507eb0;
      }
    }
    p:last-child {
      font-size: 0.09rem;
    }
  }
}
.contentBox {
  width: 100%;
  overflow: hidden;
}
.content {
  width: 87%;
  float: right;
  background: #eff0f2;
  height: 0.48rem;
  display: -webkit-flex;
  border-radius: 0.06rem;
  align-items: center;
  margin-top: 0.08rem;
  img {
    width: 0.36rem;
    height: 0.36rem;
    border-radius: 0.06rem;
  }
  p:first-child {
    color: #343434;
    font-size: 0.11rem;
  }
  p:last-child {
    font-size: 0.09rem;
    color: #797a7c;
  }
}
.pic {
  margin: 0 0.07rem;
  position: relative;
  .icon-triangle-right {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: #d23931;
  }
}
.commentBox {
  overflow: hidden;
}
.comment {
  width: 87%;
  float: right;
  display: flex;
  height: 0.52rem;
  align-items: center;
  p {
    flex: 1;
    font-size: 0.1rem;
    color: #696a6c;
    i {
      margin-right: 0.05rem;
    }
  }
  p:last-child {
    text-align: right;
  }
}
</style>
