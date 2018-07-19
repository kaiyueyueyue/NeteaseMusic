<template>
  <div>
    <index-banner></index-banner>
    <index-nav></index-nav>
    <index-song-list></index-song-list>
  </div>
</template>

<script>
import IndexBanner from "../components/index/index-header/IndexBanner.vue";
import indexNav from "../components/index/index-content/indexNav.vue";
import indexSongList from "../components/index/index-content/indexSongList.vue";


export default {
 
  components: {
    IndexBanner,
    indexNav,
    indexSongList
  },
}
</script>

<style lang="scss" scoped>
   .index-nav{
    padding-bottom: 0.15rem;
    border-bottom:0.01rem solid #eff0f2;
   }
</style>
