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
  name: "Header",
  data() {
    return {
      position: "首页",
      routeHash: {
        "/": "首页",
        "/numbermanagement": "资产管理>>号码管理",
        "/statemanagement": "资产管理>>状态管理"
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
      console.log(path);
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
