<template>
<div class="box">
    <dd :key="index"  @click="changeStyle(index)" v-for="(p,index) in singerInfor.hotSongs">
      <router-link class="dd-box" :to="{path:'/'}">
        <div class="left">{{index + 1}}</div>
        <div class="center">
            <p class="center-title">{{p.name}}</p>
            <p><span>{{  p.ar[0] != undefined ?p.ar[0].name : ''}}/{{ p.ar[1] !=undefined ?p.ar[1].name : ''}}&nbsp;-&nbsp;{{p.al.name}}</span></p>
        </div>
        <div class="right">
          <i class="iconfont icon-zhongxinshipin"></i>
          <i class="iconfont icon-gengduoxiao"></i>
        </div>
      </router-link>
    </dd>
</div>
            
</template>
<script>
import { mapActions } from "vuex";
export default {
  props: ["singerInfor"],
 
  methods: {
    ...mapActions(["changeStyle"])
  }
};
</script>
<style lang="scss" scoped>
.dd-box {
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
        // margin: 0 0.08rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        i {
          margin-right: 0.04rem;
        }
      }
    }
  }
}
</style>
