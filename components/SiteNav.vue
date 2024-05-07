<template>
  <nav ref="nav" class="nav nav--is-closed">
    <button ref="navTrigger" class="nav__trigger">
      NAV
    </button>
    <div data-nav="flyout" class="nav__flyout">
      <ul class="nav__list">
        <li class="nav__list-item">
          <a class="nav__link" href="/chartbooks">Chartbooks</a>
        </li>
        <li class="nav__list-item">
          <a class="nav__link" href="/trades">Trades</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
const nav = ref<HTMLElement | null>(null)
const navTrigger = ref<HTMLElement | null>(null)

const handleToggleNav = () => {
  nav.value!.classList.toggle('nav--is-closed')
  nav.value!.classList.toggle('nav--is-open')
}

onMounted(() => {
  navTrigger.value!.addEventListener('click', handleToggleNav)
})
</script>

<style lang="scss">
@use "~/assets/css/variables";

.nav {
  position: relative;

  &.nav--is-closed {
    .nav__flyout {
      transform: translateY(-100vh);
      opacity: 0;
    }
  }

  &.nav--is-open {
    overflow: auto;

    .nav__flyout {
      transform: translateY(0px);
      opacity: 1;
    }
  }
}

.nav__trigger {
  width: 40px;
  height: 40px;
  border: none;
  background: transparent;
  color: variables.$color-text-inverted;
}

.nav__flyout {
  position: fixed;
  top: 120px;
  bottom: 0;
  left: 0;
  width: 100vw;
  max-height: calc(100vh - 120px);
  padding-bottom: 20px;
  overflow: scroll;
  transition: transform 300ms ease-out, opacity 300ms ease-out;
  background-color: #fefefe;
  will-change: transform, opacity;
}

.nav__list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.nav__list-item {
  padding: 10px;
}

.nav__link {
  transition: color 300ms ease-out;
  color: variables.$color-black;

  &:hover {
    color: variables.$color-purple-500;
  }
}
</style>
