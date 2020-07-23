<template>
  <!-- Footer -->
<footer class="page-footer font-small bg-dark">

  <div class="top-footer">
    <div class="container">

      <!-- Grid row-->
      <div class="row py-4 d-flex align-items-center">

      </div>
      <!-- Grid row-->

    </div>
  </div>

  <!-- Footer Links -->
  <div class="container text-center text-md-left mt-5 ">

    <!-- Grid row -->
    <div class="row mt-3">

      <!-- Grid column -->
      <div class="col-md-4 mx-auto mb-4">

        <!-- Content -->
        <router-link to="/">
        <img src="@/assets/logo-transparent.png">
        </router-link>

      </div>
      <!-- Grid column -->

      <!-- Grid column -->
      <div class="col-md-4 mx-auto mb-4">

        <!-- Links -->
        <h6 class="text-uppercase font-weight-bold">Nuorodos</h6>
        <hr class="accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;">
        <p>
          <router-link to="/products">Gaminiai</router-link>
        </p>
        <p>
          <router-link to="/sale">Išpardavimas</router-link>
        </p>
        <p>
          <router-link to="/recipies">Receptai</router-link>
        </p>
        <p>
          <router-link to="/about">Apie mus</router-link>
        </p>
    
      </div>
      <!-- Grid column -->


      <!-- Grid column -->
      <div class="col-md-4 mx-auto mb-md-0 mb-4">

        <!-- Links -->
        <h6 class="text-uppercase font-weight-bold">Kontaktai</h6>
        <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;">
        <p>
          <i class="fas fa-home mr-3"></i> New York, NY 10012, US</p>
        <p>
          <i class="fas fa-envelope mr-3"></i> info@example.com</p>
        <p>
          <i class="fas fa-phone mr-3"></i> + 01 234 567 88</p>
        <p>
          <i class="fas fa-print mr-3"></i> + 01 234 567 89</p>

      </div>
      <!-- Grid column -->

    </div>
    <!-- Grid row -->

  </div>
  <!-- Footer Links -->


</footer>
<!-- Footer -->
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style lang="scss" scoped>
footer{
    color: rgba(255, 255, 255, 0.5);
}
    .top-footer{
        background: $primary;
        color: white;
        margin-top: 50px;
    }
    img{
        height: 100px;
        color: rgba(255, 255, 255, 0.5);
    }
</style>