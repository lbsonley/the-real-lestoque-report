<script setup>
definePageMeta({
  layout: "default",
});

const QUERY = `
  {
    allWeeklyChartBooks(orderBy: _firstPublishedAt_DESC) {
      title
      date
      slug
    }
  }
`;

const { data, error } = await useGraphqlQuery({ query: QUERY });
</script>

<template>
  <p v-if="error">{{ error }}</p>
  <div v-else>
    <ul class="chart-book--list">
      <li v-for="chartbook of data.allWeeklyChartBooks">
        <a class="chart-book--link" :href="`chartbook/${chartbook.slug}`">
          {{ chartbook.title }} - {{ chartbook.date }}
        </a>
      </li>
    </ul>
  </div>
</template>
