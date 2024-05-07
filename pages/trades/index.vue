<script setup>
definePageMeta({
  layout: 'default'
})

const QUERY = `
  {
    allTrades(first: 3, orderBy: _createdAt_DESC) {
      slug
      title
      direction
      date
      featuredImage
      tradeStatus
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
    <h2>Trades</h2>
    <ul class="grid-container">
      <li v-for="trade of data.allTrades" :key="trade.slug" class="column-sm-12 column-md-6 column-lg-4">
        <TeaserCard
          :featured-image="trade.featuredImage"
          :slug="`trades/${trade.slug}`"
          :title="`${trade.direction} ${trade.ticker.name} - ${trade.date}`"
          :lead="`Status: ${trade.tradeStatus}`"
        />
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
</style>
