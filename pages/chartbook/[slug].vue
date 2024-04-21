<script setup>
const route = useRoute();

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
`;

const { data, error } = await useGraphqlQuery({
  query: QUERY,
  variables: { slug: route.params.slug },
});

const {
  weeklyChartBook: { title, date, charts },
} = data.value;
</script>

<template>
  <p v-if="error">{{ error }}</p>
  <div v-else>
    <h2>Lestoque Weekly Chart Book</h2>
    <p>{{ date }}</p>
    <section v-for="chart of charts">
      <h3>
        {{ chart.ticker.name }} ({{ chart.ticker.ticker }}): {{ chart.period }}
      </h3>
      <div class="chart-analysis">
        <img :src="chart.chartUrl" />
        <p>{{ chart.analysis }}</p>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
.chart-analysis {
  @include vertical-rhythm;
}
</style>
