<template>
  <div class="main">
    <Header/>
    <Slidebar/>
    <Content/>
  </div>
</template>

<script>
import Header from "./components/Header";
import Slidebar from "./components/Slidebar";
import Content from "./components/Content";
export default {
  name: "Main",
  data() {
    return {};
  },
  components: { Header, Slidebar, Content },
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  position: relative;
  height: 100%;
  min-width: 1280px;
}
</style>
