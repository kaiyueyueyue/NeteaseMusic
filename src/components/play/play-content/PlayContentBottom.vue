<template>
			<!-- <div class="playmusic">
				<audio  controls  loop  :src="musicUrl.url">
				</audio>
		    </div> -->

				<div class="audio-wrapper playmusic">
						<audio ref="audio" autoplay  loop  :src="musicUrl.url">
								<!-- <source src="../../../assets/mp3/MA.mp3" type="audio/mp3"> -->
						</audio>

						<div class="audio-right">
							<!--  <p style="max-width: 536px;">I Really Like You.mp3</p> -->
								<div class="progress-bar-bg" ref="progressBarBg">
										<span ref="progressDot"></span>
										<div class="progress-bar" ref="progressBar"></div>
								</div>
								<div class="audio-time">
										<span class="audio-length-current" id="audioCurTime">{{currentTime}}</span><span  class="audio-length-total">03:06</span>
								</div>
						</div>
						<div class="audio-left">
								<a href="javascript:;"><i class="iconfont icon-icon-2"></i></a>
								<a href="javascript:;"  @click="preSong"><i class="iconfont icon-shangyishoushangyige"></i></a>
								<!-- <div class="playimg"> -->
										<img @click="clickAudio" ref="audioPlayer" :src="changeImg">
								<!-- </div> -->
								<a href="javascript:;" @click="nextSong"><i class="iconfont icon-xiayigexiayishou"></i></a>
								<a href="javascript:;">
                  <i class="iconfont icon-shoucang1" id="love" @click="love" ></i>
                  <!-- <i class="iconfont icon-shoucang1" id="love" v-show="or_show"></i> -->
                  <!-- <i class="iconfont icon-xihuan" id="loveone" v-show="!or_show"></i> -->
                </a>
						</div>
  </div>
</template>

<script>
import $ from "jquery";
import { mapActions } from "vuex";
export default {
  props: ["musicUrl"],
  name: "userInfo",
  data() {
    return {
      index: 0,
      changeImg: require("../../../assets/images/index/start.png"),
      currentTime: "00:00",
      name: "vue js",
      or_show: false,
      flag: 1
    };
  },
  mounted() {
    // audio.play()
    var audio = this.$refs.audio;
    // 放在这是因为刚开始的进度条不动 让其改变还原到初始状态
    audio.play();
    audio.addEventListener(
      "timeupdate",
      () => {
        this.updateProgress(audio);
      },
      false
    );
    // love()
  },
  methods: {
    ...mapActions(["nextSong", "preSong"]),

    love(event) {
      // alert('Hello'+ this.name + '!')
      $("#love").css("color", "red");
    },

    updateProgress(audio) {
      var value = audio.currentTime / audio.duration;
      //  $('#progressBar').css('width', value * 100 + '%');
      //  $('#progressDot').css('left', value * 100 + '%');
      // this.$refs.pro.style.width=value * 100 + '%'
      this.$refs.progressBar.width = value * 100 + "%";
      this.$refs.progressDot.style.left = value * 100 + "%";
      this.currentTime = this.transTime(audio.currentTime);
      // console.log(this.$refs.progressBar.width, this.currentTime, this.$refs.progressDot.left)
    },
    audioEnded() {
      this.$refs.progressBar.width = 0;
      this.$refs.progressDot.left = 0;
      // $("#audioPlayer").attr("src", "image/play.png");
    },
    clickAudio() {
      var audio = this.$refs.audio;
      // audio.addEventListener('timeupdate', () => {
      //   //  console.log(this)
      //   this.updateProgress(audio)
      //   console.log(123);
      // }, false)

      // 监听播放完成事件
      audio.addEventListener(
        "ended",
        () => {
          this.audioEnded();
        },
        false
      );
      if (audio.paused) {
        // 开始播放当前点击的音频
        audio.play();
        this.changeImg = require("../../../assets/images/index/start.png");
        this.$emit("playOrPause", "on");
        // $('#audioPlayer').attr('src', '../../../assets/images/index/stop.png')

        // 暂停其他正在播放的音频
        var audios = this.$refs.audio;
        for (var i = 0; i < audios.length; i++) {
          if (i != this.index && !audios[i].pause) {
            audios[i].pause();
          }
        }
      } else {
        audio.pause();
        this.changeImg = require("../../../assets/images/index/stop.png");
        this.$emit("playOrPause", "off");
        // console.log("2");
      }
    },
    transTime(value) {
      var time = "";
      var h = parseInt(value / 3600);
      value %= 3600;
      var m = parseInt(value / 60);
      var s = parseInt(value % 60);
      if (h > 0) {
        time = this.formatTime(h + ":" + m + ":" + s);
      } else {
        time = this.formatTime(m + ":" + s);
      }
      return time;
    },
    formatTime(value) {
      var time = "";
      var s = value.split(":");
      var i = 0;
      for (; i < s.length - 1; i++) {
        time += s[i].length == 1 ? "0" + s[i] : s[i];
        time += ":";
      }
      time += s[i].length == 1 ? "0" + s[i] : s[i];
      return time;
    }
  }
};
</script>

<style lang="scss" scoped>
.playmusic {
  width: 100%;
  text-align: center;
  // margin:0 auto;
  audio {
    width: 70%;
    margin: 0 auto;
  }
}
// @import url(../../../assets/css/index.css);

// .bofang{
// 	width: 100%;
// 	margin:0 auto;
// }
// audio{
// 	width:50%;
// }

.audio-wrapper {
  // background-color: #fcfcfc;
  margin: 0.1rem auto;
  // max-width: 670px;
  // height: 70px;
  display: flex;
  flex-direction: column;
  padding-bottom: 0.85rem;
}

.audio-left {
  display: flex;
  justify-content: space-around;
  // height: 0.52rem;
  margin-top: 0.3rem;
  a {
    font-size: 0.34rem;
    i {
      display: block;
      font-size: 0.34rem;
      color: white;
      font-size: normal;
    }
    #love {
      color: #3a3b3d;
    }
  }
}
.audio-left img {
  width: 0.48rem;
  height: 0.48rem;
  border: 0.02rem solid #eee;
  // display: initial;
  border-radius: 50%;
  cursor: pointer;
  margin-top: -0.05rem;
}

.audio-right {
  // margin-right: 2%;
  // float: right;
  width: 88%;
  margin: 0 auto;
  // height: 100%;
  // padding-top: 0.2rem;
}
.audio-left .iconfont .icon-xihuan {
  color: red;
}
// .audio-right p {
//     font-size: 15px;
//     height: 35%;
//     margin: 8px 0;

//     /* 歌曲名称只显示在一行，超出部分显示为省略号 */
//     overflow: hidden;
//     white-space: nowrap;
//     text-overflow: ellipsis;
//     max-width: 243px;   /* 要适配小屏幕手机，所以最大宽度先设小一点，后面js根据屏幕大小重新设置 */
// }

.progress-bar-bg {
  width: 74%;
  margin: 0 auto;
  background-color: #d9d9d9;
  position: relative;
  height: 0.02rem;
  cursor: pointer;
}

.progress-bar {
  background-color: #649fec;
  width: 0;
  height: 0.02rem;
}

.progress-bar-bg span {
  content: " ";
  width: 0.1rem;
  height: 0.1rem;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  background-color: #3e87e8;
  position: absolute;
  left: 0;
  top: 50%;
  margin-top: -0.05rem;
  margin-left: -0.05rem;
  cursor: pointer;
}

.audio-time {
  // overflow: hidden;
  margin-top: -0.07rem;
  color: white;
}

.audio-length-total {
  float: right;
  font-size: 0.12rem;
}

.audio-length-current {
  float: left;
  font-size: 0.12rem;
}
</style>
