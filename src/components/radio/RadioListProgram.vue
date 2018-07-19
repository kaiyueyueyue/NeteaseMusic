<template>
<div class="box">
    <dd :key="index" v-for="(p,index) in radioDetail">
        <div class="left">{{p.serialNum}}</div>
        <div class="center">
            <p class="center-title">{{p.mainSong.name}}</p>
            <p><span>{{p.createTime | createTimeFilter}}</span><span><i class="iconfont icon-bofangsanjiaoxing"></i>{{(p.listenerCount/10000).toFixed(1)}}万</span><span><i class="iconfont icon-shijian"></i>{{p.duration | timeFilter}}</span></p>
        </div>
        <div class="right"><i class="iconfont icon-gengduoxiao"></i></div>
    </dd>
</div>
            
</template>
<script>
export default {
  props: ["radioDetail"],
  filters: {
    timeFilter(data) {
      return (data / 60000).toFixed(2);
    },
    createTimeFilter(time) {
      var date = new Date(time);
      var month =
        date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1;
      var day = date.getHours();
      return month + "-" + day;
    }
  }
};
</script>
<style lang="scss" scoped>
dd {
  display: -webkit-flex;
  justify-content: space-between;
  align-items: center;
  // height:0.6rem;
  overflow: hidden;
  .left,
  .right {
    width: 14%;
    font-size: 0.12rem;
    color: #989898;
    text-align: center;
  }
  .center {
    width: 62%;
    border-bottom: 1px solid #dce0e3;
    p:first-child {
      width: 100%;
      font-size: 0.14rem;
      color: #353535;
      padding-top: 0.13rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    p:last-child {
      font-size: 0.12rem;
      color: #989898;
      line-height: 0.31rem;
      span {
        margin: 0 0.08rem;
        i {
          margin-right: 0.04rem;
        }
      }
    }
  }
}
</style>
