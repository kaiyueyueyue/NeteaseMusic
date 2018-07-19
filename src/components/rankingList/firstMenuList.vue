<template>
  <ul class="firstMenu">
    <h3 @click="goBack">官方版</h3>
      <first-menu></first-menu>
  </ul>

</template>

<script>
import firstMenu from "./firstMenu";
export default {
  name: "firstMenuList",
  components: {
    firstMenu
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="scss" scoped>
.firstMenu {
  width: 100%;
  background: #fbfcfe;
  h3 {
    font-size: 0.14rem;
    line-height: 0.5rem;
    padding-left: 0.05rem;
  }
}
</style>
