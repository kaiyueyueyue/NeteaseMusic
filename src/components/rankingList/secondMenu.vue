<template>
<ul class="secondMenu">
  <li @click="setSongList(c.playlist.id)" :key="index" v-for="(c,index) in secondMenu">
    <router-link :to="{name:'list',query:{id:c.playlist.id}}">
      <img v-lazy="c.playlist.coverImgUrl"/>
      <a>{{c.playlist.name}}</a>
    </router-link>
  </li>
</ul>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "secondMenu",
  data() {
    return {
      secondMenu: [],
      idx: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
    };
  },
  methods: {
    ...mapActions(["setSongList"]),
    initPage() {
      this.idx.forEach(v => {
        fetch(`http://120.79.162.149:3000/top/list?idx=${v}`).then(response => {
          if (response.ok) {
            response.json().then(data => {
              this.secondMenu.push(data);
            });
          }
        });
      });
      // console.log(this.secondMenu);
    }
  },
  created() {
    this.initPage();
  }
};
</script>

<style lang="scss" scoped>
.secondMenu {
  display: -webkit-flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  li {
    width: 33%;
    img {
      width: 1.13rem;
      height: 1.13rem;
    }
    a {
      padding: 0.1rem 0.05rem;
      font-size: 0.1rem;
      color: #2e2e2e;
      line-height: 0.2rem;
    }
  }
}
</style>
