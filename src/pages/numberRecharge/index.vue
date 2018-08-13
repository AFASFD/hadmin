<template>
  <div class="numberRecharge">
        <div class="form-warp">
            <el-form ref="form" :model="form" label-width="100px">
                <el-form-item label="手机号码：">
                    <el-input v-model="form.number" placeholder="请输入手机号"></el-input>
                </el-form-item>
                <el-form-item label="金额：">
                    <ul class="clearfix">
                        <li @click="setA" :class="{active: active==='a'}">30元</li>
                        <li @click="setB" :class="{active: active==='b'}">50元</li>
                        <li @click="setC" :class="{active: active==='c'}">100元</li>
                        <li @click="setD" :class="{active: active==='d'}">200元</li>
                        <br>
                        <li @click="setE" :class="{active: active==='e'}">500元</li>
                        <li @click="setF" :class="{active: active==='f'}">1000元</li>
                        <li class="otherMoney clearfix" :class="{active: active==='o'}">
                            <input type="text" @input="setO($event.target.value)" @click="activeO()" maxlength="5" placeholder="其它金额">元
                        </li>
                    </ul>
                </el-form-item>
                <el-form-item>
                    <el-button type="success" @click="onSubmit">立即充值</el-button>
                </el-form-item>
            </el-form>
        </div>
      <div class="prompt">
            <h3>温馨提示</h3>
            <p>1、充值成功一般1-10分钟快速到账，如超48小时仍未到账，请与10086联系。</p>
            <p>2、每天晚上22：30至次日凌晨00:30为银联结算时间，此段时间网站暂停在线充值。</p>
            <p>3、请仔细核对您要充值的号码和充值金额，以防出错。在网上提交的充值内容，是具备法律效力的 交易指令，若因客户输入错误而造成的损失，中国移动不承担任何责任，并且不承诺为客户追回 损失的义务。</p>
            <p>4、近三个月的充值发票可到号码所在地沟通100服务厅打印发票，全球通提供月话费发票，赠送费 用不出具发票。 （具体以各地市沟通100营业厅执行为准）。</p>
      </div>
  </div>
</template>

<script>
export default {
  name: "NumberRecharge",
  data() {
    return {
      form: {
        number: "",
        money: ""
      },
      active: ""
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
      console.log(this.form);
    },
    setA() {
      this.active = "a";
      this.form.money = 30;
    },
    setB() {
      this.active = "b";
      this.form.money = 50;
    },
    setC() {
      this.active = "c";
      this.form.money = 100;
    },
    setD() {
      this.active = "d";
      this.form.money = 200;
    },
    setE() {
      this.active = "e";
      this.form.money = 500;
    },
    setF() {
      this.active = "f";
      this.form.money = 1000;
    },
    activeO() {
      this.active = "o";
    },
    setO(n) {
      console.log(n);
      this.form.money = n;
      console.log(this.form)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.numberRecharge {
  padding: 50px;
  .form-warp {
    .el-input {
      width: 250px;
    }
    ul {
      li {
        position: relative;
        &::before {
          display: none;
        }
        &.active {
          border: 1px solid #8ebe31;
          color: #8ebe31;
          &::before {
            display: block;
            content: "";
            width: 22px;
            height: 22px;
            background: url("../../assets/ckok.png") no-repeat center center;
            position: absolute;
            right: 0;
            bottom: 0;
          }
        }
        float: left;
        position: relative;
        height: 36px;
        line-height: 36px;
        padding: 0px 6px;
        border: 1px solid #ccc;
        letter-spacing: 2px;
        font-size: 14px;
        width: 8em;
        text-align: center;
        margin-right: 10px;
        border-radius: 4px;
      }
      .otherMoney {
        text-align: left;
        input {
          float: left;
          border: none;
          outline: none;
          height: 100%;
          line-height: 36px;
          padding: 0;
          font-size: 14px;
          width: 80%;
          padding-left: 10px;
          vertical-align: top;
          &::-moz-placeholder {
            color: #8f8f8f;
          }
          &::-webkit-input-placeholder {
            color: #8f8f8f;
          }
          &:-ms-input-placeholder {
            color: #8f8f8f;
          }
        }
      }
    }
  }
  .prompt {
    margin-top: 40px;
    margin-left: 100px;
    h3 {
      color: #1c84c2;
      font-size: 18px;
      margin-bottom: 20px;
    }
    p {
      line-height: 32px;
      color: #777676;
      font-size: 14px;
    }
  }
}
</style>
