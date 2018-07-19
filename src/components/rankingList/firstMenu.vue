<template>
<ul class="firstMenu">
  <li @click="setSongList(c.playlist.id)" :key="index" v-for="(c,index) in rankingList">
    <router-link class="router-box" :to="{name:'list',query:{id:c.playlist.id}}">
      <img v-lazy="c.playlist.coverImgUrl">
      <div class="menu1Right">
        <a href="javascript:;">{{c.playlist.tracks[0].al.name}}&nbsp;&nbsp;-&nbsp;&nbsp;{{c.playlist.tracks[0].ar[0].name}}</a>
        <a href="javascript:;">{{c.playlist.tracks[1].al.name}}&nbsp;&nbsp;-&nbsp;&nbsp;{{c.playlist.tracks[1].ar[0].name}}</a>
        <a href="javascript:;">{{c.playlist.tracks[2].al.name}}&nbsp;&nbsp;-&nbsp;&nbsp;{{c.playlist.tracks[2].ar[0].name}}</a>
      </div> 
    </router-link>
  </li>
</ul>
</template>

<script>
import { Indicator } from "mint-ui";
import { mapActions } from "vuex";
export default {
  name: "firstMenu",
  data() {
    return {
      rankingList: [],
      idx: [0, 1, 2, 3, 4, 22, 23]
    };
  },
  methods: {
    ...mapActions(["setSongList"]),
    initPage() {
      Indicator.open({
        text: "加载中...",
        spinnerType: "fading-circle"
      });

      setTimeout(() => {
        Indicator.close();
      }, 5000);
      this.idx.forEach(v => {
        fetch(`http://120.79.162.149:3000/top/list?idx=${v}`).then(response => {
          if (response.ok) {
            response.json().then(data => {
              this.rankingList.push(data);
            });
          }
        });
      });
      // console.log(this.rankingList);
    }
  },
  created() {
    this.initPage();
  }
};
</script>

<style lang="scss" scoped>
.firstMenu {
  width: 100%;
  li {
    border-bottom: 1px solid #e4e5e7;
    width: 100%;
    .router-box {
      display: -webkit-flex;
      justify-content: flex-start;
      width: 100%;
      img {
        width: 1.19rem;
        height: 1.19rem;
        padding: 0.03rem 0;
      }
      .menu1Right {
        padding-top: 0.21rem;
        a {
          font-size: 0.12rem;
          color: #67686a;
          line-height: 0.33rem;
          padding-left: 0.1rem;
        }
      }
    }
  }
}
</style>
