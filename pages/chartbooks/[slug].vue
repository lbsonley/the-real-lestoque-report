<script setup>
const route = useRoute()

const QUERY = `
  query getChartBook($slug: String!) {
    weeklyChartBook(filter: {slug: {eq: $slug}}) {
      date
      charts {
        ... on ChartAnalysisRecord {
          id
          period
          ticker {
            name
            ticker
          }
          chartUrl
          analysis(markdown: false)
        }
      }
    }
  }
`

const { data, error } = await useGraphqlQuery({
  query: QUERY,
  variables: { slug: route.params.slug }
})

const {
  weeklyChartBook: { date, charts }
} = data.value
</script>

<template>
  <p v-if="error">
    {{ error }}
  </p>
  <div v-else class="v-rhythm-l">
    <h2>Lestoque Weekly Chart Book - {{ date }}</h2>
    <section v-for="chart of charts" :key="chart.chartUrl" class="v-rhythm-l">
      <h3>
        {{ chart.ticker.name }} ({{ chart.ticker.ticker }}): {{ chart.period }}
      </h3>
      <div class="v-rhythm-m">
        <div class="v-rhythm-s">
          <img :src="chart.chartUrl">
        </div>
        <div class="content-width-narrow v-rhythm-s">
          <p>{{ chart.analysis }}</p>
        </div>
      </div>
    </section>
  </div>
</template>
