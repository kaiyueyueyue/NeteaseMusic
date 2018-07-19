<template>
    <div class="secondMenu">
      <h3>全球榜</h3>
      <second-menu></second-menu>
    </div>
</template>

<script>
    import SecondMenu from "./secondMenu";
    export default {
        name: "secondMenuList",
      components: {SecondMenu}
    }
</script>

<style lang="scss" scoped>
  .secondMenu{
    width:100%;
    background:#fbfcfe;
    
    h3{
      padding-left:0.05rem ;
      font-size: 0.14rem;
      line-height:0.5rem ;
     }
  }
</style>
