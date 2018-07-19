<template>
    <div>
        <function-list></function-list>
        <mine-music :mineList="mineList" :collectionList="collectionList"></mine-music>

    </div>
</template>
<script>
  import functionList from "../components/left/left-content/function-list";
  import MineMusic from "../components/mine/MineMusic"
export default {
    name:'Left',
  components:{
    functionList,
    MineMusic
  },
  data() {
    return {
      mineList: [],
      collectionList: [],
      userId: ""
    }
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
                } else {
                  this.collectionList.push(item);
                }
              });
            });
          }
        }
      );
      // console.log(this.mineList);
      // console.log(this.collectionList);
    },
  },
  created() {
    this.userId = localStorage.getItem("account");
    // console.log(localStorage.getItem("account"));
    this.getUserList();
  }
};
</script>
<style lang="scss" scoped>
</style>
