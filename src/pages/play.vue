<template>
<div>
    <div class="play" :style="'display:'+this.$store.state.playDisplay">
        <play-header :musicInfor="musicInfor"></play-header>
        <play-content-top ref="playContentTop" :musicInfor="musicInfor"></play-content-top>
        <play-content-bottom :musicUrl="musicUrl" @playOrPause="playOrPause"></play-content-bottom>
        <h3>{{this.$store.state.num}}</h3>
    </div>
    <common-footer :musicInfor="musicInfor" id="bottom" :style="'display:' + this.$store.state.bottomDisplay"></common-footer>
</div>

    

</template>
<script>
import CommonFooter from "../components/common/CommonFooter";
import PlayHeader from "../components/play/play-header/PlayHeader";
import PlayContentBottom from "../components/play/play-content/PlayContentBottom";
import PlayContentTop from "../components/play/play-content/PlayContentTop";
export default {
  data() {
    return {
      musicUrl: "",
      musicInfor: "",
      id: ""
      // num:this.$store.state.num
    };
  },
  components: {
    PlayHeader,
    PlayContentBottom,
    PlayContentTop,
    CommonFooter
  },
  methods: {
    playOrPause(data) {
      this.$refs.playContentTop.$emit("playOrPause", data);
    },

    playMusic(id) {
      fetch(`http://120.79.162.149:3000/music/url?id=${id}`).then(response => {
        if (response.ok) {
          response.json().then(data => {
            this.musicUrl = data.data[0];
          });
        }
      });
    }
  },
  watch: {
    id() {
      this.playMusic(this.id);

      if (this.musicInfor == "") {
        fetch(`http://120.79.162.149:3000/song/detail?ids=${this.id}`).then(
          response => {
            response.json().then(data => {
              // console.log(data)
              this.musicInfor = data.songs[0];
            });
          }
        );
      }
    }
  },
  updated() {
    // console.log(this.$store.state.songListInfor)

    if (this.$store.state.songListInfor.tracks) {
      // console.log(1)

      this.id = this.$store.state.songListInfor.tracks[
        this.$store.state.num
      ].id;

      this.musicInfor = this.$store.state.songListInfor.tracks[
        this.$store.state.num
      ];
    } else if (this.$store.state.songListInfor.hotSongs) {
      this.id = this.$store.state.songListInfor.hotSongs[
        this.$store.state.num
      ].id;
      this.musicInfor = this.$store.state.songListInfor.hotSongs[
        this.$store.state.num
      ];
      // console.log(this.musicInfor)
    } else {
      this.id = this.$store.state.num;
      // console.log(111,this.$store.state.num)
    }

    // this.musicInfor = this.$route.query;
    // this.musicInfor = this.$store.state.songListInfor.tracks[
    //   this.$store.state.num
    // ];
    // console.log(this.musicInfor)
    // this.playMusic();
  }
};
</script>
<style lang="scss" scoped>
.play {
  display: none;
  height: 100%;
  background: #000;
  // opacity: 0.6;
}
#bottom {
  width: 100%;
  position: absolute;
  bottom: 0;
  // display: none;
}
</style>
