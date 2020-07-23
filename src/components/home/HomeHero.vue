<template>
  <div id="carouselHero" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselHero" data-slide-to="0" class="active"></li>
      <li data-target="#carouselHero" data-slide-to="1"></li>
      <li data-target="#carouselHero" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="d-block w-100" src="~@/assets/img/home/home-hero-1.jpg" alt="First slide" />
        <div class="carousel-caption d-none d-md-block">
          <h1>Dabar savo mėgiamus Tupperware produktus galite užsisakyti internetu!</h1>
          <router-link
            class="btn btn-sm btn-primary d-flex justify-content-center rounded-pill"
            to="/shop"
          >Rinktis produktus</router-link>
        </div>
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="~@/assets/img/home/home-hero-2.jpg" alt="Second slide" />
        <div class="carousel-caption d-none d-md-block">
          <h1>Nauji pasiūlymai kiekvieną savaitę!</h1>
          <router-link
            class="btn btn-sm btn-primary d-flex justify-content-center rounded-pill"
            to="/sale"
          >Išpardavimo prekės</router-link>
        </div>
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="~@/assets/img/home/home-hero-3.jpg" alt="Third slide" />
        <div class="carousel-caption d-none d-md-block">
          <h1>Gaminkite kartu su Tupperware!</h1>
          <router-link
            class="btn btn-sm btn-primary d-flex justify-content-center rounded-pill"
            to="/recipies"
          >Receptai</router-link>
        </div>
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselHero" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselHero" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.carousel-item {
  height: 60vh;
  opacity: 90%;
}
.btn {
  margin-top: 0;
  margin-bottom: 0;
  margin-left: auto;
  margin-right: auto;
  font-weight: bold;
  padding-top: 7px;
  width: auto;
}
h1 {
  font-weight: bold;
  text-shadow: -1.5px -1.5px 0 $primary, 1.5px -1.5px 0 $primary,
    -1.5px 1.5px 0 $primary;
}
</style>