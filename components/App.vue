<template>
  <div>

  </div>
</template>

<script>
export default {
  name: 'App',
  props: {
    results: {
      type: Array,
      default: () => {}
    },
    saved: {
      type: Array,
      default: () => {}
    }
  },
  computed: {
    renderedResults() {
      return this.results
    },
    renderedSaved() {
      return this.saved
    }
  },
  methods: {

  }
}
</script>
