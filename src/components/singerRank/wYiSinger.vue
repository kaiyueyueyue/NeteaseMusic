<template>
  <div class="singer">

    <mt-index-list :show-indicator="false">
          <mt-index-section index="热门" @click="goBack">
              <div  @click="setSingerSongList(c.artists[0].id)" :key="index" v-for="(c,index) in hot">
                <router-link class="hotSinger" :to="{path:'/singersonglist',query:{id:c.artists[0].id}}">
                  <mt-cell :title="c.artists[0].name">
                    <img v-lazy="c.artists[0].img1v1Url"/>
                  </mt-cell>
                </router-link>
              </div>
          </mt-index-section>
      


      
         <mt-index-section index="A">
            <div @click="setSingerSongList(n.id)" :key="index" v-for="(n,index) in A">
              <router-link class="router-box" :to="{path:'/singersonglist',query:{id:n.id}}">
                <mt-cell :title="n.name">
                  <img v-lazy="n.img1v1Url"/>
                </mt-cell> 
              </router-link>
            </div>
          </mt-index-section>
     


      
          <mt-index-section index="B">
            <div   @click="setSingerSongList(n.id)" :key="index" v-for="(n,index) in B">
              <router-link class="router-box" :to="{path:'/singersonglist',query:{id:n.id}}">
                <mt-cell :title="n.name" >
                  <img v-lazy="n.img1v1Url"/>
                </mt-cell>
              </router-link>
            </div>
          </mt-index-section>


          <mt-index-section index="C">
            <div   @click="setSingerSongList(n.id)" :key="index" v-for="(n,index) in C">
              <router-link class="router-box" :to="{path:'/singersonglist',query:{id:n.id}}">
                <mt-cell :title="n.name" >
                  <img v-lazy="n.img1v1Url"/>
                </mt-cell>
              </router-link>
            </div>
          </mt-index-section>

          <mt-index-section index="E">
            <div   @click="setSingerSongList(n.id)" :key="index" v-for="(n,index) in E">
              <router-link class="router-box" :to="{path:'/singersonglist',query:{id:n.id}}">
                <mt-cell :title="n.name" >
                  <img v-lazy="n.img1v1Url"/>
                </mt-cell>
              </router-link>
            </div>
          </mt-index-section>

          <mt-index-section index="F">
            <div   @click="setSingerSongList(n.id)" :key="index" v-for="(n,index) in F">
              <router-link class="router-box" :to="{path:'/singersonglist',query:{id:n.id}}">
                <mt-cell :title="n.name" >
                  <img v-lazy="n.img1v1Url"/>
                </mt-cell>
              </router-link>
            </div>
          </mt-index-section>


          <mt-index-section index="G">
            <div   @click="setSingerSongList(n.id)" :key="index" v-for="(n,index) in G">
              <router-link class="router-box" :to="{path:'/singersonglist',query:{id:n.id}}">
                <mt-cell :title="n.name" >
                  <img v-lazy="n.img1v1Url"/>
                </mt-cell>
              </router-link>
            </div>
          </mt-index-section>
      

          <mt-index-section index="H">
            <div   @click="setSingerSongList(n.id)" :key="index" v-for="(n,index) in H">
              <router-link class="router-box" :to="{path:'/singersonglist',query:{id:n.id}}">
                <mt-cell :title="n.name" >
                  <img v-lazy="n.img1v1Url"/>
                </mt-cell>
              </router-link>
            </div>
          </mt-index-section>

          <mt-index-section index="I">
            <div   @click="setSingerSongList(n.id)" :key="index" v-for="(n,index) in I">
              <router-link class="router-box" :to="{path:'/singersonglist',query:{id:n.id}}">
                <mt-cell :title="n.name" >
                  <img v-lazy="n.img1v1Url"/>
                </mt-cell>
              </router-link>
            </div>
          </mt-index-section>

          <mt-index-section index="J">
            <div   @click="setSingerSongList(n.id)" :key="index" v-for="(n,index) in J">
              <router-link class="router-box" :to="{path:'/singersonglist',query:{id:n.id}}">
                <mt-cell :title="n.name" >
                  <img v-lazy="n.img1v1Url"/>
                </mt-cell>
              </router-link>
            </div>
          </mt-index-section>

          <mt-index-section index="K">
            <div   @click="setSingerSongList(n.id)" :key="index" v-for="(n,index) in K">
              <router-link class="router-box" :to="{path:'/singersonglist',query:{id:n.id}}">
                <mt-cell :title="n.name" >
                  <img v-lazy="n.img1v1Url"/>
                </mt-cell>
              </router-link>
            </div>
          </mt-index-section>

          <mt-index-section index="L">
            <div   @click="setSingerSongList(n.id)" :key="index" v-for="(n,index) in L">
              <router-link class="router-box" :to="{path:'/singersonglist',query:{id:n.id}}">
                <mt-cell :title="n.name" >
                  <img v-lazy="n.img1v1Url"/>
                </mt-cell>
              </router-link>
            </div>
          </mt-index-section>

          <mt-index-section index="M">
            <div   @click="setSingerSongList(n.id)" :key="index" v-for="(n,index) in M">
              <router-link class="router-box" :to="{path:'/singersonglist',query:{id:n.id}}">
                <mt-cell :title="n.name" >
                  <img v-lazy="n.img1v1Url"/>
                </mt-cell>
              </router-link>
            </div>
          </mt-index-section>

          <mt-index-section index="N">
            <div   @click="setSingerSongList(n.id)" :key="index" v-for="(n,index) in N">
              <router-link class="router-box" :to="{path:'/singersonglist',query:{id:n.id}}">
                <mt-cell :title="n.name" >
                  <img v-lazy="n.img1v1Url"/>
                </mt-cell>
              </router-link>
            </div>
          </mt-index-section>

          <mt-index-section index="O">
            <div   @click="setSingerSongList(n.id)" :key="index" v-for="(n,index) in O">
              <router-link class="router-box" :to="{path:'/singersonglist',query:{id:n.id}}">
                <mt-cell :title="n.name" >
                  <img v-lazy="n.img1v1Url"/>
                </mt-cell>
              </router-link>
            </div>
          </mt-index-section>

          <mt-index-section index="P">
            <div   @click="setSingerSongList(n.id)" :key="index" v-for="(n,index) in P">
              <router-link class="router-box" :to="{path:'/singersonglist',query:{id:n.id}}">
                <mt-cell :title="n.name" >
                  <img v-lazy="n.img1v1Url"/>
                </mt-cell>
              </router-link>
            </div>
          </mt-index-section>

          <mt-index-section index="R">
            <div   @click="setSingerSongList(n.id)" :key="index" v-for="(n,index) in R">
              <router-link class="router-box" :to="{path:'/singersonglist',query:{id:n.id}}">
                <mt-cell :title="n.name" >
                  <img v-lazy="n.img1v1Url"/>
                </mt-cell>
              </router-link>
            </div>
          </mt-index-section>

          <mt-index-section index="S">
            <div   @click="setSingerSongList(n.id)" :key="index" v-for="(n,index) in S">
              <router-link class="router-box" :to="{path:'/singersonglist',query:{id:n.id}}">
                <mt-cell :title="n.name" >
                  <img v-lazy="n.img1v1Url"/>
                </mt-cell>
              </router-link>
            </div>
          </mt-index-section>

          <mt-index-section index="T">
            <div   @click="setSingerSongList(n.id)" :key="index" v-for="(n,index) in T">
              <router-link class="router-box" :to="{path:'/singersonglist',query:{id:n.id}}">
                <mt-cell :title="n.name" >
                  <img v-lazy="n.img1v1Url"/>
                </mt-cell>
              </router-link>
            </div>
          </mt-index-section>

          <mt-index-section index="W">
            <div   @click="setSingerSongList(n.id)" :key="index" v-for="(n,index) in W">
              <router-link class="router-box" :to="{path:'/singersonglist',query:{id:n.id}}">
                <mt-cell :title="n.name" >
                  <img v-lazy="n.img1v1Url"/>
                </mt-cell>
              </router-link>
            </div>
          </mt-index-section>

          <mt-index-section index="X">
            <div   @click="setSingerSongList(n.id)" :key="index" v-for="(n,index) in X">
              <router-link class="router-box" :to="{path:'/singersonglist',query:{id:n.id}}">
                <mt-cell :title="n.name" >
                  <img v-lazy="n.img1v1Url"/>
                </mt-cell>
              </router-link>
            </div>
          </mt-index-section>

          <mt-index-section index="Y">
            <div   @click="setSingerSongList(n.id)" :key="index" v-for="(n,index) in Y">
              <router-link class="router-box" :to="{path:'/singersonglist',query:{id:n.id}}">
                <mt-cell :title="n.name" >
                  <img v-lazy="n.img1v1Url"/>
                </mt-cell>
              </router-link>
            </div>
          </mt-index-section>
     


    </mt-index-list>
  </div>
</template>

<script>
import { IndexList, IndexSection, Indicator } from "mint-ui";
import Vue from "vue";
import {mapActions} from 'vuex'
Vue.component(IndexList.name, IndexList);
Vue.component(IndexSection.name, IndexSection);

var pinyin = require("pinyin");

export default {
  name: "singer",
  data() {
    return {
      hot: [],
      offset: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      singer: "",
      A: [],
      B: [],
      C: [],
      D: [],
      E: [],
      F: [],
      G: [],
      H: [],
      I: [],
      J: [],
      K: [],
      L: [],
      M: [],
      N: [],
      O: [],
      P: [],
      Q: [],
      R: [],
      S: [],
      T: [],
      U: [],
      V: [],
      W: [],
      X: [],
      Y: [],
      Z: []
    };
  },
  methods: {
    ...mapActions(["setSingerSongList"]),
    goBack() {
      this.$router.go(-1);
    },
    initPage() {
      this.offset.forEach(v => {
        fetch(
          `http://120.79.162.149:3000/top/artists?offset=${v}&limit=1`
        ).then(response => {
          if (response.ok) {
            response.json().then(data => {
              this.hot.push(data);
              // console.log(data.artists);
            });
          }
        });
      });

      // console.log(this.hot)
    },
    getSinger() {
      Indicator.open({
        text: "加载中...",
        spinnerType: "fading-circle"
      });

      setTimeout(() => {
        Indicator.close();
      }, 4000);

      // console.log(pinyin('AAA'))
      fetch(`http://120.79.162.149:3000/top/artists?limit=100`).then(
        response => {
          if (response.ok) {
            response.json().then(data => {
              console.log(data);
              // this.hot.push(data)
              // console.log(data.artists);
              this.singer = data.artists;
              this.singer.forEach((v, k) => {
                // console.log(pinyin(v.name)[0][0].substr(0, 1))
                switch (pinyin(v.name)[0][0]
                  .substr(0, 1)
                  .toLowerCase()) {
                  case "a":
                    this.A.push(v);
                    break;
                  case "b":
                    this.B.push(v);
                    break;
                  case "c":
                    this.C.push(v);
                    break;
                  case "d":
                    this.D.push(v);
                    break;
                  case "e":
                    this.E.push(v);
                    break;
                  case "f":
                    this.F.push(v);
                    break;
                  case "g":
                    this.G.push(v);
                    break;
                  case "h":
                    this.H.push(v);
                    break;
                  case "i":
                    this.I.push(v);
                    break;
                  case "j":
                    this.J.push(v);
                    break;
                  case "k":
                    this.K.push(v);
                    break;
                  case "l":
                    this.L.push(v);
                    break;
                  case "m":
                    this.M.push(v);
                    break;
                  case "n":
                    this.N.push(v);
                    break;
                  case "o":
                    this.O.push(v);
                    break;
                  case "p":
                    this.P.push(v);
                    break;
                  case "q":
                    this.Q.push(v);
                    break;
                  case "r":
                    this.R.push(v);
                    break;
                  case "s":
                    this.S.push(v);
                    break;
                  case "t":
                    this.T.push(v);
                    break;
                  case "u":
                    this.U.push(v);
                    break;
                  case "v":
                    this.V.push(v);
                    break;
                  case "w":
                    this.W.push(v);
                    break;
                  case "x":
                    this.X.push(v);
                    break;
                  case "y":
                    this.Y.push(v);
                    break;
                }
                // console.log(this.A)
              });
            });
          }
        }
      );
      // console.log(this.singer)

      // console.log(this.C)
    }
  },
  created() {
    this.initPage();
    this.getSinger();
  }
};
</script>

<style  lang="scss" scoped>
.singer {
  font-size: 0.13rem;
  height: 100%;
  width: 100%;
}
.mint-cell {
  background-color: #f2f3f4;
  img {
    border-radius: 0.06rem;
    width: 0.4rem;
    height: 0.4rem;
    // margin-right: 1.5rem;
    float: left;
  }
}
.router-box,
.hotSinger {
  color: #333;
}
</style>
