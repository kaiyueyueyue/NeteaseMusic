<template>
    <div class="BOX">
        <index-header></index-header>
        <router-view class="content"></router-view>
    </div>
</template>
<script>
import IndexHeader from "../components/common/IndexHeader";
export default {
  components: {
    IndexHeader
  }
};
</script>
<style lang="scss" scoped>
.BOX {
  display: -webkit-flex;
  flex-direction: column;
}
.content {
  flex: 1;
  overflow-y: auto;
}
</style>
