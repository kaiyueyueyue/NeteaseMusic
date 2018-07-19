<template>
  <div class="mBox">
    <!-- <list-header :oList="oList"></list-header>
    <music-list :oList="oList"></music-list>
    <foot-collect :oList="oList"></foot-collect> -->
    <list-header :oList="oList" class="head"></list-header>
    <photo :oList="oList"></photo>
    <music-list :oList="oList"></music-list>
    <foot-collect :oList="oList"></foot-collect>
  </div>


</template>

<script>
// // 导入头部组件
// // import ListHeader from "../components/RankSongList/Listheader";
// import ListHeader from "../components/lists/listhead/ListHeader";
// // 引入音乐列表组件
// import MusicList from "../components/lists/listmusic/MusicList";
// // 引入底部收藏部分组件
// import FootCollect from "../components/lists/listfoot/FootCollect";
// 导入头部组件
import ListHeader from "../components/lists/ListHeader";
// 引入顶部图片部分
import photo from "../components/lists/listtop/photo";
// 引入音乐列表组件
import MusicList from "../components/lists/listmusic/MusicList";
// 引入底部收藏部分组件
import FootCollect from "../components/lists/listfoot/FootCollect";
export default {
  components: {
    ListHeader,
    MusicList,
    FootCollect
  },
  data() {
    return {
      oList: ""
    };
  },
  methods: {
    initPage() {
      console.log(this.$route.params.songID);

      fetch(
        "http://120.79.162.149:3000/playlist/detail?id=" + this.$route.query.id
      ).then(response => {
        if (response.ok) {
          response.json().then(data => {
            this.oList = data.result;
            console.log(this.oList);
          });
        }
      });
    }
  },
  created() {
    this.initPage();
    // this.songID=this.$route.params.songID;
  }
};
</script>

<style lang="scss"  scoped>
</style>
