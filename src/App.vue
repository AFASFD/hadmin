<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
* {
  box-sizing: border-box;
}
html,
body {
  width: 100%;
  height: 100%;
}
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
#app {
  height: 100%;
}
</style>
