<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container">
      <a href="/">
        <img src="../assets/logo.png" class="mr-3" height="30" alt />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/product">Single Product</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/products">All Products</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/recipies">Recipies</router-link>
          </li>
          <li class="sale nav-item">
            <router-link class="nav-link" to="/sale">
              <span class="sale">SALE</span>
            </router-link>
          </li>
        </ul>
        <ul class="navbar-nav m-auto">
          <li>
            <form class="form-inline">
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
            </form>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/login">Login</router-link>
          </li>
          <span class="mt-2">|</span>
          <li class="nav-item">
            <router-link class="nav-link" to="/register">Register</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "MainNavbar"
};
</script>

<style lang="scss" scoped>
span {
  color: $primary;
}

.sale {
  font-weight: bold;
  &:hover {
    color: lighten($primary, 30%);
  }
}
</style>