<template>
  <div id="app">
    <div id="nav">
      <main-navbar />
    </div>
    <router-view/>
  </div>
</template>

<script>
import MainNavbar from '@/partials/MainNavbar.vue';

export default {
  components: {
    MainNavbar,
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
