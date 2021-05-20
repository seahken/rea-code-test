<template>
  <div class="container">
    <App :results="results" :saved="saved" />
  </div>
</template>

<script>
import { getMockData } from '~/plugins/mockData'

import App from '~/components/App'

export default {
  components: {
    App
  },
  async asyncData() {
    const { results, saved } = JSON.parse(await getMockData())

    return { results, saved }
  }
}
</script>
