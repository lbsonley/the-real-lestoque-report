<script setup lang="ts">
import { defineProps, toRefs } from 'vue'

const props = defineProps<{
  title: string;
  slug: string;
  featuredImage: string;
  lead?: string;
}>()

const { title, lead, slug, featuredImage } = toRefs(props)
</script>

<template>
  <div class="teaser-card">
    <a class="teaser-card--link" :href="slug">
      <div class="teaser-card--inner">
        <div class="teaser-card--image-wrapper">
          <img
            class="teaser-card--image"
            :src="featuredImage"
          >
        </div>
        <div class="teaser-card--content">
          <h3 class="teaser-card--title">{{ title }}</h3>
        </div>
        <div v-if="lead" class="teaser-card--lead">
          {{ lead }}
        </div>
      </div>
    </a>
  </div>
</template>

<style lang="scss">
@use "~/assets/css/variables";
.teaser-card {
  height: 100%;
}

.teaser-card--link {
  display: flex;
  text-decoration: none;
  height: 100%;
}

.teaser-card--inner {
  display: flex;
  flex-direction: column;
  border-radius: variables.$border-radius-base;
  overflow: hidden;
}

.teaser-card--image-wrapper {
  position: relative;
  height: 300px;
}

.teaser-card--image {
  height: 100%;
  object-fit: cover;
  object-position: center right;
}

.teaser-card--title,
.teaser-card--lead {
  color: variables.$color-text;
}
</style>
