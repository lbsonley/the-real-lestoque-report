<template>
  <nav ref="nav" class="nav nav--is-closed">
    <button ref="navTrigger" class="nav__trigger">
      <span />
      <span />
      <span />
      <span />
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
      transform: scale(0);
      pointer-events: none;
    }
  }

  &.nav--is-open {
    overflow: auto;

    .nav__flyout {
      transform: scale(1);
      pointer-events: all;
    }

    .nav__trigger span:nth-child(1) {
      top: 18px;
      width: 0%;
      left: 50%;
    }

    .nav__trigger span:nth-child(2) {
      transform: rotate(45deg);
    }

    .nav__trigger span:nth-child(3) {
      transform: rotate(-45deg);
    }

    .nav__trigger span:nth-child(4) {
      top: 18px;
      width: 0%;
      left: 50%;
    }
  }
}

.nav__trigger {
  position: relative;
  width: 40px;
  height: 30px;
  border: none;
  background: transparent;
  color: variables.$color-text-inverted;
  transform: rotate(0deg);
  transition: .5s ease-in-out;
  cursor: pointer;

  & span {
    display: block;
    position: absolute;
    height: 4px;
    width: 100%;
    background: variables.$color-text-inverted;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: .25s ease-in-out;

    &:nth-child(1) {
      top: 2px;
    }

    &:nth-child(2),
    &:nth-child(3) {
      top: 13px;
    }

    &:nth-child(4) {
      top: 24px;
    }
  }
}

.nav__flyout {
  position: fixed;
  top: 120px;
  right: 0;
  max-height: calc(100vh - 120px);
  min-width: 400px;
  padding: 20px;
  overflow: scroll;
  transition: transform 300ms ease-out;
  transform-origin: 100vw 0;
  background-color: variables.$color-blue-800;
  will-change: transform;
  z-index: 1;
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
  color: variables.$color-text-inverted;
  font-size: variables.$font-size-lead;

  &:hover {
    color: variables.$color-purple-500;
  }
}
</style>
