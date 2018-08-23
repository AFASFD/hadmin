<template>
  <div class="content">
      <h4 class="chead">
          <img src="../../../assets/position.png" alt="">
          <span>当前位置>>{{position}}</span>
      </h4>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "Content",
  data() {
    return {
      position: "首页",
      routeHash: {
        "/": "首页",
        "/numbermanagement": "资产管理>>号码管理",
        "/statemanagement": "资产管理>>状态管理",
        "/functionmanagement": "资产管理>>功能管理",
        "/apnmanagement": "资产管理>>APN管理",
        "/setmealmanagement": "资费计划>>套餐管理",
        "/packageprocess": "资费计划>>套餐办理",
        "/flowamanagement": "资费计划>>流量共享管理",
        "/orderinquiry": "资费计划>>订单查询",
        "/flowinquiry": "资费计划>>用量查询",
        "/internationalroam": "资费计划>>国漫管理",
        "/cardmanagement": "资费计划>>两地卡管理",
        "/companybill": "财务缴费>>企业账单",
        "/memberbill": "财务缴费>>成员账单",
        "/numberrecharge": "财务缴费>>号码充值",
        "/ability": "API集成>>能力申请",
        "/dailyrecord": "API集成>>调用日志",
        "/membercount": "统计报表>>成员统计",
        "/setmealcount": "统计报表>>套餐统计",
        "/flowcount": "统计报表>>流量统计",
        "/flowsharecount": "统计报表>>流量共享统计",
        "/workorder": "工单管理>>我的工单",
        "/messagesend": "短信管理>>短信接发",
        "/rolemanagement": "系统管理>>角色管理",
        "/departmentalmanagement": "系统管理>>部门管理",
        "/usermanagement": "系统管理>>用户管理",
        "/operationlog": "系统管理>>操作日志"
      }
    };
  },
  methods: {
    bindEventHub() {
      window.eventHub.on("clickslidebar", msg => {
        this.position = msg;
      });
    },
    setPosition(path) {
      this.position = this.routeHash[path];
    }
  },
  mounted() {
    this.bindEventHub();
    this.setPosition(this.$route.path);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.content {
  position: absolute;
  top: 60px;
  left: 200px;
  right: 0;
  bottom: 0;
  overflow: scroll;
  .chead {
    line-height: 24px;
    padding: 9px 21px 8px;
    background-color: #f2f2f2;
    color: #929292;
    border-bottom: 1px solid #6091fc;
    img {
      vertical-align: middle;
    }
  }
}
</style>
