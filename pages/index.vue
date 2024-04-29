<script setup>
definePageMeta({
  layout: 'default'
})

const QUERY = `
  {
    allWeeklyChartBooks(first: 3, orderBy: _createdAt_DESC) {
      title
      date
      slug
    }
    allTrades(first: "3", orderBy: _createdAt_DESC, filter: { tradeStatus: { eq: "Open" }}) {
      slug
      title
      direction
      date
      ticker {
        name
        ticker
      }
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
    <ul>
      <li v-for="chartbook of data.allWeeklyChartBooks" :key="chartbook.slug">
        <a class="chart-book--link" :href="`chartbooks/${chartbook.slug}`">
          {{ chartbook.title }} - {{ chartbook.date }}
        </a>
      </li>
    </ul>
    <h2>Trades</h2>
    <ul>
      <li v-for="trade of data.allTrades" :key="trade.slug">
        <a :href="`trades/${trade.slug}`">
          {{ trade.direction }} {{ trade.ticker.name }} - {{ trade.date }}
        </a>
      </li>
    </ul>
  </div>
</template>
