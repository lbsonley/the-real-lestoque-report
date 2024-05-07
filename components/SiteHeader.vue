<template>
  <header class="header">
    <div class="header__inner">
      <div class="header__brand">
        <a class="logo-link" href="/">
          <Icon name="money-bag" width="60" />
        </a>
        <h1 class="site-title">
          Lestoque Report
        </h1>
      </div>
      <SiteNav />
    </div>
  </header>
</template>

<style lang="scss">
@use "~/assets/css/variables";

.header {
  display: flex;
  align-items: center;
  height: 120px;
  background-color: variables.$color-blue-800;
  color: variables.$color-white;
}

.header__inner {
  display: flex;
  flex: 1 0 auto;
  justify-content: space-between;
  margin: 0 variables.$space-8;
}

.header__brand {
  display: flex;
  align-items: center;
}

.logo-link {
  color: variables.$color-white;
  &:hover {
    color: variables.$color-white;
  }
}

.header__nav {
  display: flex;
  gap: variables.$space-flex-16;
  align-items: center;
}

.header__link {
  color: variables.$color-white;
  font-size: variables.$font-size-lead;
  text-decoration: none;
}

.site-title {
  align-self: flex-end;
  margin-top: 0;
  margin-bottom: 0;
  margin-left: variables.$space-16;
  color: variables.$color-white;
  font-size: variables.$font-size-h3;
  line-height: 1;
}
</style>
