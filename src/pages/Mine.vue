<template>
<div>
  <mine-header :userInfor="userInfor"></mine-header>
    <router-view :mineList="mineList" :collectionList="collectionList" :userEvent="userEvent" :userInfor="userInfor"></router-view>
</div>
    
</template>
<script>
// import MineContent from "../components/mine/MineContent";
import MineHeader from "../components/mine/MineHeader";
export default {
  components: {
    MineHeader
  },
  data() {
    return {
      mineList: [],
      collectionList: [],
      userInfor: "",
      userEvent: "",
      userId: ""
    };
  },
  methods: {
    getUserList() {
      fetch(`http://120.79.162.149:3000/user/playlist?uid=${this.userId}`).then(
        response => {
          if (response.ok) {
            response.json().then(data => {
              // console.log(data.playlist);
              // this.classifyData.push(data);
              data.playlist.forEach(item => {
                if (item.userId == this.userId) {
                  this.mineList.push(item);
                  // console.log(this.mineList);
                } else {
                  this.collectionList.push(item);
                  // console.log(this.collectionList);
                }
              });
            });
          }
        }
      );
      // console.log(this.mineList);
      // console.log(this.collectionList);
    },
    getUserInfor() {
      fetch(`http://120.79.162.149:3000/user/detail?uid=${this.userId}`).then(
        response => {
          if (response.ok) {
            response.json().then(data => {
              // console.log(data);
              this.userInfor = data;
            });
          }
        }
      );
    },
    getUserEvent() {
      fetch(`http://120.79.162.149:3000/user/event?uid=${this.userId}`).then(
        response => {
          if (response.ok) {
            response.json().then(data => {
              // console.log(data);
              this.userEvent = data.events;
            });
          }
        }
      );
    }
  },
  created() {
    this.userId = localStorage.getItem("account");
    // console.log(localStorage.getItem("account"));

    // localStorage.removeItem('account')
    // localStorage.clear()
    this.getUserList();
    this.getUserInfor();
    this.getUserEvent();
  }
};
</script>
<style lang="scss" scoped>
</style>
