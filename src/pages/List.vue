<template>
  <div class="mBox">
    <list-header :oList="oList" class="head"></list-header>
      <photo :oList="oList"></photo>
    <music-list :oList="oList"></music-list>
    <foot-collect :oList="oList"></foot-collect>
    
  </div>


</template>

<script>
import { Indicator } from "mint-ui";
// 导入头部组件
import ListHeader from "../components/lists/ListHeader";
// 引入顶部图片部分
import photo from "../components/lists/listtop/photo";
// 引入音乐列表组件
import MusicList from "../components/lists/listmusic/MusicList";
// 引入底部收藏部分组件
import FootCollect from "../components/lists/listfoot/FootCollect";
// 引入jquery
import $ from "jquery";

export default {
  components: {
    ListHeader,
    photo,
    MusicList,
    FootCollect
  },
  data() {
    return {
      oList: ""
      // songID:''
    };
  },
  methods: {
    initPage() {
        Indicator.open({
          text: "加载中...",
          spinnerType: "fading-circle"
        });

        setTimeout(() => {
          Indicator.close();
        }, 8000);

        fetch(
          "http://120.79.162.149:3000/playlist/detail?id=" + this.$route.query.id
        ).then(response => {
          if (response.ok) {
            response.json().then(data => {
              this.oList = data.result;
              // console.log(this.oList)
            });
          }
        });
    },
    headBj() {
      // console.log(this.oList);
      var that = this;
      // console.log($(".mBox"));

      $(document).on("scroll", function() {
        // console.log(1);
        //   console.log($(window).scrollTop());
        if ($(document).scrollTop() > 100) {
          $(".head").css("background", "rgba(0,0,0,.6)");
          $(".head .head-title").text(that.oList.name);
        } else {
          $(".head").css("background", "rgba(0,0,0,0)");
        }
      });
    }
  },
  created() {
    this.initPage();
    this.headBj();
  }
};
</script>

<style lang="scss"  scoped>
</style>