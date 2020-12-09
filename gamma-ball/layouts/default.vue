<template>
  <div>
    <div class="home">
      <div class="header-section">
        <div class="container">
          <div class="d-flex flex-column align-items-center">
            <div class="logo">
              <img
                src="~/assets/images/logo.png"
                alt=""
                class="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="container px-0">
        <Nuxt />
      </div>

      <div class="mt-5">
        <p class="text-secondary text-center">
          Built by
          <a
            href="https://twitter.com/i_santiag0"
            class="fancy-link"
          >
            Temitope Ilesanmi
          </a>
        </p>

        <p class="text-center small">
          Credits:
          <a
            href="https://www.football-data.org"
            class="fancy-link"
          >Football data API</a>
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '~/assets/styles.scss';
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
