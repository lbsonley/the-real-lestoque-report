<script setup>
const route = useRoute();

const QUERY = `
  query getTrade($slug:String!) {
    trade(filter: {slug: {eq: $slug}}) {
      ticker {
        name
      }
      date
      direction
      layers {
        entryDate
        entryPrice
        initialStop
        profitTarget
        size
        notes
        patterns {
          title
        }
        tradeSetup {
          title
        }
        charts {
          period
          date
          chartUrl
          analysis
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
  trade: { ticker, direction, date, layers },
} = data.value;
</script>

<template>
  <p v-if="error">{{ error }}</p>
  <div v-else>
    <h2>{{ direction }} {{ ticker.name }} - {{ date }}</h2>
    <h3>Entry Info</h3>
    <section v-for="(layer, index) of layers">
      <h4>Layer {{ index + 1 }}</h4>
      <table>
        <tr>
          <td>Trade Setup</td>
          <td>{{ layer.tradeSetup.title }}</td>
        </tr>
        <tr>
          <td>Entry Date</td>
          <td>{{ layer.entryDate }}</td>
        </tr>
        <tr>
          <td>Entry Price</td>
          <td>{{ layer.entryPrice }}</td>
        </tr>
        <tr>
          <td>Size</td>
          <td>{{ layer.size }}</td>
        </tr>
        <tr>
          <td>Initial Stop</td>
          <td>
            {{ layer.initialStop }} ({{
              (direction === "Short"
                ? Math.round((layer.entryPrice - layer.initialStop) * 10000) /
                  10000
                : Math.round((layer.initialStop - layer.entryPrice) * 10000) /
                  10000
              ).toFixed(4)
            }})
          </td>
        </tr>
        <tr>
          <td>Profit Target</td>
          <td>
            {{ layer.profitTarget }} ({{
              (direction === "Short"
                ? Math.round((layer.entryPrice - layer.profitTarget) * 10000) /
                  10000
                : Math.round((layer.profitTarget - layer.entryPrice) * 10000) /
                  10000
              ).toFixed(4)
            }})
          </td>
        </tr>
        <tr>
          <td>Reward/Risk</td>
          <td>
            {{
              Math.round(
                (Math.abs(layer.profitTarget - layer.entryPrice) /
                  Math.abs(layer.initialStop - layer.entryPrice) +
                  Number.EPSILON) *
                  100
              ) / 100
            }}
          </td>
        </tr>
      </table>
      <div v-if="layer.notes">
        <h4>Notes</h4>
        <p>{{ layer.notes }}</p>
      </div>
      <div v-for="chart of layer.charts">
        <h4>{{ ticker.name }}: {{ chart.period }}</h4>
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
