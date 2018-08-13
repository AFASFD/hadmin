<template>
    <el-menu
      :default-active="currentPath"
      class="el-menu-vertical-demo slidebar"
      :router="true"
      :unique-opened="true">
      <el-menu-item index="/" @click="emitSlidebar('首页')">
        <img src="../../../assets/ic_left01.png" alt="">        
        <span slot="title">首&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;页</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
            <img src="../../../assets/ic_left02.png" alt="">
            <span>资产管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/numbermanagement" @click="emitSlidebar('资产管理>>号码管理')">号码管理</el-menu-item>
          <el-menu-item index="/statemanagement" @click="emitSlidebar('资产管理>>状态管理')">状态管理</el-menu-item>
          <el-menu-item index="/functionmanagement" @click="emitSlidebar('资产管理>>功能管理')">功能管理</el-menu-item>
          <el-menu-item index="/apnmanagement" @click="emitSlidebar('资产管理>>APN管理')">APN管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
            <img src="../../../assets/ic_left03.png" alt="">
            <span>资费计划</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/setmealmanagement" @click="emitSlidebar('资费计划>>套餐管理')">套餐管理</el-menu-item>
          <el-menu-item index="/packageprocess" @click="emitSlidebar('资费计划>>套餐办理')">套餐办理</el-menu-item>
          <el-menu-item index="/flowamanagement" @click="emitSlidebar('资费计划>>流量共享管理')">流量共享管理</el-menu-item>
          <!-- <el-menu-item index="/flowbmanagement" @click="emitFlowbManagement">流量池管理</el-menu-item> -->
          <el-menu-item index="/orderinquiry" @click="emitSlidebar('资费计划>>订单查询')">订单查询</el-menu-item>
          <el-menu-item index="/flowinquiry" @click="emitSlidebar('资费计划>>用量查询')">用量查询</el-menu-item>
          <el-menu-item index="/internationalroam" @click="emitSlidebar('资费计划>>国漫管理')">国漫管理</el-menu-item>
          <el-menu-item index="/cardmanagement" @click="emitSlidebar('资费计划>>两地卡管理')">两地卡管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
            <img src="../../../assets/ic_left04.png" alt="">
            <span>财务缴费</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/companybill" @click="emitSlidebar('财务缴费>>企业账单')">企业账单</el-menu-item>
          <el-menu-item index="/memberbill" @click="emitSlidebar('财务缴费>>成员账单')">成员账单</el-menu-item>
          <el-menu-item index="/numberrecharge" @click="emitSlidebar('财务缴费>>号码充值')">号码充值</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">
            <img src="../../../assets/ic_left07.png" alt="">
            <span>API集成</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/ability" @click="emitSlidebar('API集成>>能力申请')">能力申请</el-menu-item>
          <el-menu-item index="/dailyrecord" @click="emitSlidebar('API集成>>调用日志')">调用日志</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title">
            <img src="../../../assets/mnhtj.png" alt="">
            <span>统计报表</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/membercount" @click="emitSlidebar('统计报表>>成员统计')">成员统计</el-menu-item>
          <el-menu-item index="/setmealcount" @click="emitSlidebar('统计报表>>套餐统计')">套餐统计</el-menu-item>
          <el-menu-item index="/flowcount" @click="emitSlidebar('统计报表>>流量统计')">流量统计</el-menu-item>
          <el-menu-item index="/flowsharecount" @click="emitSlidebar('统计报表>>流量共享统计')">流量共享统计</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="7">
        <template slot="title">
            <img src="../../../assets/mnhgd.png" alt="">
            <span>工单管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/workorder" @click="emitSlidebar('工单管理>>我的工单')">我的工单</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="8">
        <template slot="title">
            <img src="../../../assets/ic_left05.png" alt="">
            <span>短信管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/messagesend" @click="emitSlidebar('短信管理>>短信接发')">短信接发</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="9">
        <template slot="title">
            <img src="../../../assets/mnhxt.png" alt="">
            <span>系统管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/rolemanagement" @click="emitSlidebar('系统管理>>角色管理')">角色管理</el-menu-item>
          <el-menu-item index="/departmentalmanagement" @click="emitSlidebar('系统管理>>部门管理')">部门管理</el-menu-item>
          <el-menu-item index="/usermanagement" @click="emitSlidebar('系统管理>>用户管理')">用户管理</el-menu-item>
          <el-menu-item index="/operationlog" @click="emitSlidebar('系统管理>>操作日志')">操作日志</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
</template>

<script>
export default {
  name: "Slidebar",
  data() {
    return {};
  },
  computed: {
    currentPath: function() {
      return this.$route.path;
    }
  },
  methods: {
    emitSlidebar(str) {
      window.eventHub.emit("clickslidebar", str);
    }
  },
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.slidebar {
  position: absolute;
  top: 60px;
  bottom: 0;
  left: 0;
  z-index: 5;
  border-right: 2px solid #749ffc;
  overflow-x: hidden;
  overflow-y: auto;
  width: 200px;
}
</style>
