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
          <!-- <li class="nav-item">
            <router-link class="nav-link" to="/product">Single Product</router-link>
          </li> -->
          <li class="nav-item">
            <router-link class="nav-link" to="/products">Gaminiai</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/recipies">Receptai</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">Apie mus</router-link>
          </li>
          <li class="sale nav-item">
            <router-link class="nav-link" to="/sale">
              <span class="sale">IŠPARDAVIMAS</span>
            </router-link>
          </li>
        </ul>
        <ul class="navbar-nav m-auto">
          <li>
            <form class="form-inline" @submit.prevent="handleSearch">
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Ieškoti"
                aria-label="Search"
                v-model="search"
              />
              <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Ieškoti</button>
            </form>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item mr-3">
            <a class="nav-link p-0">
              <router-link class="nav-link__link shopping-item-link" to="/cart">
                <v-icon name="shopping-cart" scale="2" />
                <div class="shopping-item-link__count">{{count}}</div>
              </router-link>
            </a>
          </li>
          <li class="nav-item" v-if="!loggedIn">
            <a class="nav-link">
              <router-link class="nav-link__link text-nowrap" to="/register">Registruotis</router-link>
            </a>
          </li>
          <span class="text-muted mt-2" v-if="!loggedIn">|</span>
          <li class="nav-item" v-if="!loggedIn">
            <a class="nav-link">
              <router-link class="nav-link__link text-nowrap" to="/login">Prisijungti</router-link>
            </a>
          </li>

          <li class="nav-item dropdown" v-if="loggedIn">
            <a
              class="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
            >{{email}}</a>
            <div class="dropdown-menu">
              <a class="dropdown-item" @click="logout">Loggout</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Settings</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "MainNavbar",
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