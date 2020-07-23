<template>
  <div class="container container-main">
    <home-hero />
    <home-items />
  </div>
</template>

<script>
import HomeHero from '@/components/home/HomeHero.vue'
import HomeItems from '@/components/home/HomeItems.vue'

export default {
  name: 'Home',
  components: {
    HomeHero,
    HomeItems
},
}
</script>


