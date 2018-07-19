<template>
  <div>
    <first-menu-list></first-menu-list>
    <second-menu-list></second-menu-list>
  </div>
</template>

<script>
  import firstMenuList from "../components/rankingList/firstMenuList"
  import SecondMenuList from "../components/rankingList/secondMenuList";
    export default {
        name: "rankingList",
        components:{
          SecondMenuList,
          firstMenuList
        }
    }
</script>

<style scoped>

</style>
