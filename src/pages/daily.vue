<template>
    <div>
        <daily-head></daily-head>
        <daily-bg  :date="date"></daily-bg>
        <daily-list :listData="listData"></daily-list>
    </div>
</template>

<script>
import DailyHead from "../components/daily/dailyHead.vue";
import DailyBg from "../components/daily/dailyBg.vue";
import DailyList from "../components/daily/dailyList.vue";

export default {
  name: "daily",
  components: {
    DailyHead,
    DailyBg,
    DailyList
  },
  data() {
    return {
      listData: [],

      date: "",
      userId: ""
    };
  },
  methods: {
    //获取每日推荐歌单
    getListData() {
      fetch(
        `http://120.79.162.149:3000/recommend/songs?id=${this.userId}`
      ).then(response => {
        if (response.ok) {
          response.json().then(data => {
            this.listData = data.recommend;
            console.log(this.listData);
          });
        }
      });
    },
    //获取日期
    createDate() {
      var date = new Date();
      var D = date.getDate();
      return D;
    }
  },
  created() {
    console.log(localStorage.getItem("account"));
    this.userId = localStorage.getItem("account");
    this.getListData();

    this.date = this.createDate();
  }
};
</script>

<style scoped>
</style>