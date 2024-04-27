<template>
  <div class="icon-wrapper" :style="`--icon-width: ${width};`">
    <IconComponent />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  name: "money-bag";
  width: string;
}>();

const MoneyBag = defineAsyncComponent(() => import("./icons/MoneyBag.vue"));

const { name, width } = toRefs(props);

const iconMap = {
  "money-bag": MoneyBag,
};

const IconComponent = iconMap[name.value];
</script>

<style lang="scss" is:global>
.icon-wrapper {
  width: calc(var(--icon-width) * 1px);

  svg {
    display: block;
    width: 100%;
    height: auto;
  }
}
</style>
