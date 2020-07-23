<template>
  <div id="app">
    <div id="nav">
      <main-navbar />
    </div>
    <router-view />
    <div id="footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import MainNavbar from "@/partials/MainNavbar.vue";
import Footer from "@/partials/Footer.vue";

export default {
  name: "App",
  components: {
    MainNavbar,
    Footer,
  },
};
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
