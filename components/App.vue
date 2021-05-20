<template>
  <div>

  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      renderedResults: [ ...this.results ],
      renderedSaved: [ ...this.saved ]
    }
  },
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
  methods: {
    saveProperty(id) {
      const savedProperty = this.renderedResults.find(item => item.id === id)
      this.renderedSaved.push(savedProperty)
    },
    removeProperty(id) {
      const removedPropertyIndex = this.renderedSaved.findIndex(item => item.id === id)

      if (removedPropertyIndex !== -1) this.renderedSaved.splice(removedPropertyIndex, 1)
    }
  }
}
</script>
