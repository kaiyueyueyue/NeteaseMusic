<template>
    <div class="head-box">
      <router-link :to="{path:'/login'}">
        <i class="iconfont icon-caidan"></i>
      </router-link>
        <div>
            <router-link :to="{path:'/left'}" active-class="active" append>
              <i class="iconfont icon-music">
            </i></router-link>
            <router-link :to="{path:'/center'}" active-class="active" append>
              <i class="iconfont icon-icon-"></i>
            </router-link>
            <router-link :to="{path:'/right'}" active-class="active" append>
             <i class="iconfont icon-zhongxinshipin"></i>
            </router-link>
        </div>
        <router-link :to="{path:'/search'}">
        <i class="iconfont icon-iconfontzhizuobiaozhun22"></i>
        </router-link>
    </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.head-box {
  height: 0.53rem;
  background: #e24439;
  display: -webkit-flex;
  justify-content: space-between;
  align-items: center;
  i {
    font-size: 0.25rem;
    font-weight: bold;
    color: #eb8b8c;
    display: block;
  }
  .icon-caidan {
    color: #fff;
    padding-left: 0.15rem;
  }
  .icon-iconfontzhizuobiaozhun22 {
    color: #fff;
    padding-right: 0.15rem;
  }
  div {
    display: flex;
    justify-content: space-around;
    i {
      padding: 0 0.15rem;
    }
  }
}
.active i {
  color: #fff;
}
</style>
