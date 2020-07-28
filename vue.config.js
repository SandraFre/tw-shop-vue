module.exports = {
    css: {
      loaderOptions: {
        scss: {
          prependData: `
          @import "~@/scss/variables/main.scss";
          @import "~@/scss/main.scss";
          @import "~@/scss/vendors/main.scss";
          `
        }
      }
    }
  }
  