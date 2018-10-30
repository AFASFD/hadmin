<template>
  <div class="header clearfix">
    <ul class="left">
        <!-- <li><img src="../../../assets/logobai.png" alt=""></li> -->
        <li><img src="../../../assets/qylogo.png" alt=""></li>
        <li>智能电表云平台</li>
    </ul>
    <router-link to="/"></router-link>
    <ul class="right">
        <li><router-link to="/"><span @click="emitSlidebar('首页')">首页</span></router-link></li>
        <li><router-link to="/numbermanagement"><span @click="emitSlidebar('资产管理>>号码管理')">号码查询</span></router-link></li>
        <li><span>系统公告</span></li>
        <!-- <li><span>文件下载</span></li> -->
        <!-- <li><span>支持与帮助</span></li> -->
        <li><span>{{name}}</span></li>
        <li><span @click="logOut">退出</span></li>
    </ul>
  </div>
</template>

<script>
import { logout, clearLocal } from "../../../utils/api.js";

export default {
  name: "Header",
  data() {
    return {};
  },
  computed: {
    name() {
      return this.$store.state.name;
    }
  },
  methods: {
    logOut() {
      let username = localStorage.getItem("username");
      try {
        logout(
          {
            username: username
          },
          res => {
            console.log(res);
          }
        );
      } catch (e) {
      } finally {
        clearLocal();
        location.reload();
      }
    },
    emitSlidebar(str) {
      window.eventHub.emit("clickslidebar", str);
    }
  },
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background-color: #5e8ff9;
  box-shadow: 0 0 3px #999;
  height: 60px;
  line-height: 60px;
  .left {
    float: left;
    :nth-child(1) {
      background: url("../../../assets/shubg.png") 0 center no-repeat;
      margin-right: 13px;
    }
    :nth-child(2) {
      background: url("../../../assets/shubg.png") 0 center no-repeat;
      padding-left: 22px;
      font-size: 18px;
      color: #fff;
      font-family: "Microsoft Yahei";
    }
    li {
      float: left;
      img {
        line-height: 60px;
        vertical-align: middle;
      }
    }
  }
  .right {
    float: right;
    li {
      span {
        cursor: pointer;
      }
      font-size: 12px;
      padding: 0px 10px 0 10px;
      // width: 70px;
      line-height: 60px;
      text-align: center;
      background: url("../../../assets/li_icon.png") no-repeat 0 17px;
      float: left;
      color: #fff;
    }
  }
  a {
    text-decoration: none;
    color: #fff;
  }
}
</style>
