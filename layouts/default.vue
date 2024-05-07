<template>
  <div>
    <SiteHeader />
    <main class="content-wrapper">
      <slot />
    </main>
  </div>
</template>

<style lang="scss">
@use "~/assets/css/variables";

.content-wrapper {
  max-width: variables.$max-content-width-medium;
  padding: 0 variables.$space-16;
  margin: 0 auto;

  @include lg-up {
    padding: 0;
  }
}
</style>
