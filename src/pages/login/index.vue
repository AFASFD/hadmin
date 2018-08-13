<template>
  <div class="login">
    <img src="../../assets/homesli1.jpg" alt="" width="100%">
    <div class="title">
        <h2>平台介绍</h2>
        <p>
            广东物联云平台是面向广东物联网集团客户，提供对物联卡的资产管理、资费计划、账务缴费和安全管理服务的连接管理云平台。集团客户可通过网页访问直接使用平台，也可通过平台开放的API接口与企业应用进行对接集成。
        </p>
    </div>
    <div class="form-wrap">
        <form id="logform">
            <ul>
                <li>
                    <label>账号:<input type="text" name="username" v-model="logInfo.username"></label>
                </li>
                <li>
                    <label>密码:<input type="password" name="password" v-model="logInfo.password"></label>
                </li>
                <li>
                    <label>验证:<input type="text" id="input" /></label>
                    <input type="button" id="checkCode" class="code" @click="createCode" />
                </li>
                <li class="prompt">{{prompt}}</li>
                <li>
                    <input class="btn" type="submit">
                </li>
            </ul>
        </form>
    </div>
  </div>
</template>

<script>
import { login, clearLocal } from "../../utils/api.js";
var code;
export default {
  name: "LogIn",
  data() {
    return {
      prompt: "",
      logInfo: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    createCode: function() {
      code = "";
      var codeLength = 5; //验证码的长度
      var checkCode = document.getElementById("checkCode");
      var random = new Array(
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
      ); //随机数
      for (var i = 0; i < codeLength; i++) {
        //循环操作
        var charIndex = Math.floor(Math.random() * 36); //取得随机数的索引
        code += random[charIndex]; //根据索引取得随机数加到code上
      }
      checkCode.value = code; //把code值赋给验证码
    },
    //校验验证码
    validate: function() {
      var inputCode = document.getElementById("input").value.toUpperCase(); //取得输入的验证码并转化为大写
      if (inputCode.length <= 0) {
        //若输入的验证码长度为0
        this.prompt = "请输入验证码!"; //则弹出请输入验证码
        return false;
      } else if (inputCode != code) {
        //若输入的验证码与产生的验证码不一致时
        this.prompt = "验证码输入错误!"; //则弹出验证码输入错误
        this.createCode(); //刷新验证码
        return false;
      } else {
        return true;
      }
    },
    bindEvents: function() {
      $("#logform").submit(e => {
        clearLocal();
        this.prompt = "";
        let a = this.validate();
        //a为真表示校验通过
        if (a) {
          login(this.logInfo, res => {
            if (res.data.code === "1003") {
              this.prompt = "错误的用户名或密码";
              return;
            }
            if (res.status === 0) {
              e.preventDefault();
              this.prompt = "登录失败,请重试!";
              return;
            }
            let data = res.data.data;

            localStorage.setItem("username", data.username);
            localStorage.setItem("groupCode", data.groupInfo.groupCode);
            localStorage.setItem("token", data.token);

            this.$store.commit("username", data.name);

            this.$router.push("/");
          });
          e.preventDefault();
        } else {
          e.preventDefault();
        }
      });
    }
  },
  mounted() {
    this.createCode();
    this.bindEvents();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.login {
  position: relative;
  .code {
    width: 70px;
    font-family: Arial;
    font-style: italic;
    font-weight: bold;
    border: 0;
    letter-spacing: 3px;
    color: blue;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    outline: none;
    background-color: #fff;
  }
  .title {
    position: absolute;
    left: 7%;
    top: 180px;
    width: 400px;
    h2 {
      line-height: 64px;
      font-size: 40px;
      font-weight: 400;
      color: #fff;
    }
    p {
      margin-top: 30px;
      font-size: 16px;
      line-height: 36px;
      color: #fff;
    }
  }
  .form-wrap {
    padding-top: 20px;
    width: 280px;
    height: 300px;
    text-align: center;
    overflow-y: auto;
    overflow: hidden;
    background-color: rgba(255, 255, 255, 0.6);
    position: absolute;
    top: 50%;
    right: 190px;
    transform: translateY(-50%);
    border-radius: 10px;
    ul {
      padding: 15px;
      .prompt {
        margin-bottom: 3px;
        height: 20px;
        text-align: center;
        color: red;
      }
      li {
        position: relative;
        margin-bottom: 25px;
        &:last-child {
          margin-bottom: 0;
        }
        label {
          width: 100%;
          input {
            margin-left: 5px;
            outline: none;
            height: 36px;
            padding: 9px 4px;
            border: none;
            border-bottom: 1px solid #0cc;
            color: #333;
            background-color: transparent;
            width: 80%;
            vertical-align: middle;
            line-height: 18px;
            border-radius: 2px;
            cursor: text;
          }
        }
        .btn {
          &:hover {
            background-color: #46acd8;
            color: white !important;
            transition: all 0.2s;
          }
          line-height: 23px;
          padding: 5px 9px;
          border: 1px solid #046ec4;
          color: #046ec4 !important;
          font-size: 16px;
          background-color: transparent;
          width: 80%;
          border-radius: 4px;
          cursor: pointer;
          outline: none;
        }
      }
    }
  }
  img {
    vertical-align: top;
  }
}
</style>
