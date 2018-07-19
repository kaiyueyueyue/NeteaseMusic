<template>
    <div class="BOX">
        <common-header></common-header>
        <router-view class="content"></router-view>
        <!-- <common-footer></common-footer> -->
    </div>
</template>
<script>
import CommonHeader from "../components/common/CommonHeader";
// import CommonFooter from "../components/common/CommonFooter";
export default {
  components: {
    CommonHeader,
    // CommonFooter
  }
};
</script>
<style lang="scss" scoped>
.BOX {
  height: 100%;
  display: -webkit-flex;
  flex-direction: column;
}
.content {
  overflow-y: auto;
  flex: 1;
}
</style>
