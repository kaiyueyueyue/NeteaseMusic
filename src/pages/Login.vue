<template>
    <div>
        <p class="title" @click="goBack">
            <i class="iconfont icon-xitongfanhui"></i>
            <i>手机号登录</i>
        </p>
        <form action="javascript:;">
            <p>
                <i class="iconfont icon-shouji"></i>
                <input autocomplete="off" type="text" name="phone" placeholder="请输入手机号" v-model="account.phone">
                <span @click="clear" id="clear">&times;</span>
            </p>
            <p>
                <i class="iconfont icon-icon-1"></i>
                <input autocomplete="off" type="password" name="password" placeholder="请输入密码" v-model="account.password">
                <span id="forget">忘记密码?</span>
            </p>
            <!-- <router-link :to="{path:'/mine'}"> -->
                 <input @click="setLocalstorage" class="btn" type="submit" value="登录">
            <!-- </router-link> -->
        </form>
    </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      account: {
        phone: "",
        password: ""
      },
      userId: ""
    };
  },
  methods: {
    goBack(){
      this.$router.go(-1)
    },
    setLocalstorage() {
      fetch(
        `http://120.79.162.149:3000/login/cellphone?phone=${
          this.account.phone
        }&password=${this.account.password}`
      ).then(response => {
        if (response.ok) {
          response.json().then(data => {
            // console.log(data);
            if (data.code == 200) {
              Toast({
                message: "登陆成功！",
                position: "center",
                duration: 3000
              });
              this.userId = data.account.id;
              window.localStorage.setItem("account", this.userId);
              this.$router.push({ path: "/mine" });
            } else if (data.code == 502) {
              Toast({
                message: data.msg,
                position: "center",
                duration: 3000
              });
            } else if (data.code == 400) {
              Toast({
                message: "账号不存在",
                position: "center",
                duration: 3000
              });
            } else {
              Toast({
                message: "登录失败！",
                position: "center",
                duration: 3000
              });
            }
            // console.log(this.userId);
          });
        }
      });
      // let infor = JSON.stringify(this.account);
    },
    clear() {
      this.account.phone = "";
    }
  }
};
</script>
<style lang="scss" scoped>
.title {
  line-height: 0.53rem;
  background: #db3e35;
  overflow: hidden;
  i {
    color: #fff;
    float: left;
    padding-left: 0.23rem;
    font-style: normal;
    font-size: 0.15rem;
    :first-child {
      font-size: 0.17rem;
    }
  }
}
form {
  width: 94%;
  margin: 0.4rem auto 0;
  p {
    display: -webkit-flex;
    line-height: 0.34rem;
    margin-bottom: 0.2rem;
    border-bottom: 1px solid #d6d6d6;
    i {
      font-size: 0.2rem;
      margin-right: 0.1rem;
    }
    #clear {
      font-size: 0.24rem;
      color: #afb0b2;
    }
    #forget {
      font-size: 0.1rem;
      color: #507fb5;
    }
    input {
      flex: 1;
      font-size: 0.14rem;
      display: block;
      outline: none;
      background: #fff;
      border: 0;
      caret-color: red;
    }
    input:-webkit-autofill {
      box-shadow: 0 0 0px 1000px white inset !important;
    }
  }
  .btn {
    width: 90%;
    height: 0.41rem;
    margin: 0 auto;
    outline: none;
    border: 0;
    border-radius: 0.205rem;
    background: #db3e35;
    display: block;
    margin-top: 0.05rem;
    font-size: 0.14rem;
    color: #fff;
  }
}
</style>
