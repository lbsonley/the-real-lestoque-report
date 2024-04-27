<template>
  <Header />
  <main class="content-wrapper">
    <slot />
  </main>
</template>

<style lang="scss">
.content-wrapper {
  max-width: 960px;
  padding: 0 24px;
  margin: 0 auto;

  @media screen and (width > 1016px) {
    padding: 0;
  }
}
</style>
