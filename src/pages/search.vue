<template>
   <div>
      <div id="p_header">
        <section class="p_header_con">
            <div class="p_header_el">
                <router-link :to="{path:'/tuijian'}">
                <i class="iconfont icon-xitongfanhui"></i>
                </router-link>
            </div>
            <input type="text" placeholder="搜索歌手、歌曲" class="search" v-model="msg">
            <span class="cancel" @click="msg=''">取消</span>
        </section>

        <search-hot-page v-if="!flag" :hotData="hotData" @getData="getDataToSon"></search-hot-page>
        
        <search-result-page v-if="flag" :dataA="dataA" :dataB="dataB"></search-result-page>
  </div>
   </div>
</template>

<script>
import SearchHotPage from "../components/search/searchHotPage.vue";
import SearchResultPage from "../components/search/searchResultPage.vue";

export default {
  name: "search",
  components: {
    SearchHotPage,
    SearchResultPage
  },

  data() {
    return {
      dataA: [
        {
          idA: "",
          nameA: "",
          picUrlA: ""
        },
        {
          idOne: "",
          nameOne: "",
          imgUrlOne: ""
        }
      ],
      dataB: "",
      hotData: "",
      flag: false,
      msg: ""
    };
  },
  watch: {
    msg() {
      if (this.msg != "") {
        this.flag = true;
        this.sendFetchA();
        this.sendFetchB();
      } else {
        this.dataB = "";
        this.flag = false;
      }
    }
  },
  methods: {
    //获取最佳歌手和歌单
    sendFetchA() {
      fetch(
        `http://120.79.162.149:3000/search/suggest?keywords=${this.msg}`
      ).then(response => {
        if (response.ok) {
          response.json().then(data => {
            this.dataA[0].idA = data.result.artists[0].id;
            this.dataA[0].nameA = data.result.artists[0].name;
            this.dataA[0].picUrlA = data.result.artists[0].picUrl;

            // console.log(data.result.playlists[0].name, data.result.playlists[0].coverImgUrl);
            this.dataA[1].idOne = data.result.playlists[0].id;
            this.dataA[1].nameOne = data.result.playlists[0].name;
            this.dataA[1].imgUrlOne = data.result.playlists[0].coverImgUrl;
          });
        }
      });
    },
    //获取歌手歌曲列表
    sendFetchB() {
      fetch(
        `http://120.79.162.149:3000/search?keywords=${this.msg}&offset=0`
      ).then(response => {
        if (response.ok) {
          response.json().then(data => {
            // console.log(data.result.songs);
            this.dataB = data.result.songs;
            // console.log(data.result.songs[0])
          });
        }
      });
    },
    //获取热搜
    hotFetch() {
      fetch(`http://120.79.162.149:3000/search/hot`).then(response => {
        if (response.ok) {
          response.json().then(data => {
            this.hotData = data.result.hots;
            // console.log(this.hotData);
          });
        }
      });
    },
    getDataToSon(val) {
      this.msg = val;
    }
  },
  created() {
    this.hotFetch();
  }
};
</script>

<style lang="scss" scoped>
@import "../style/mixin.scss";
#p_header {
  width: 100%;
  height: 0.42rem;
  background-color: #e04438;
  .p_header_con {
    // height: 100%;
    height: 0.42rem;

    margin: 0 0.15rem;
    display: -webkit-flex;
    align-items: center;
    .p_header_el {
      font-size: 0;
      .icon-xitongfanhui {
        display: inline-block;
        @include sc(0.15rem, $fc01);
        margin-right: 0.16rem;
      }
    }
    .search {
      width: 2.6rem;
      padding: 0.06rem;
      border-radius: 0.6rem;
      text-indent: 0.1rem;
      outline: none;
      border: none;
      background-color: #eee;
    }
    .cancel {
      @include sc(0.1rem, $fc01);
      padding-left: 0.1rem;
    }
  }
}
</style>