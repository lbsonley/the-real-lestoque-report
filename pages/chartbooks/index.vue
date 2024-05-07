<script setup>
definePageMeta({
  layout: 'default'
})

const QUERY = `
  {
    allWeeklyChartBooks(orderBy: _createdAt_DESC) {
      title
      date
      slug
      featuredImage
    }
  }
`

const { data, error } = await useGraphqlQuery({ query: QUERY })
</script>

<template>
  <p v-if="error">
    {{ error }}
  </p>
  <div v-else>
    <h2>Chart Books</h2>
    <ul class="grid-container px-0">
      <li v-for="chartbook of data.allWeeklyChartBooks" :key="chartbook.slug" class="column-sm-12 column-md-6 column-lg-4">
        <TeaserCard
          :title="`${chartbook.title} - ${chartbook.date}`"
          :slug="`chartbooks/${chartbook.slug}`"
          :featured-image="chartbook.featuredImage"
        />
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
.teaser-list-item {
  list-style: none;
}
</style>
