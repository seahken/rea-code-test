<template>
  <div class="app">
    <Column
      title="Results"
      :properties="renderedResults"
      :renderedSaved="renderedSaved"
      @saveProperty="saveProperty"
      @removeProperty="removeProperty"
      :isResultsColumn="true"
    />
    <Column
      title="Saved Properties"
      :properties="renderedSaved"
      @saveProperty="saveProperty"
      @removeProperty="removeProperty"
      :isSavedColumn="true"
    />
  </div>
</template>

<script>
import Column from '~/components/Column'

export default {
  name: 'App',
  components: {
    Column
  },
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
      if (this.renderedSaved.findIndex(item => item.id === id) === -1) this.renderedSaved.push(savedProperty)
    },
    removeProperty(id) {
      const removedPropertyIndex = this.renderedSaved.findIndex(item => item.id === id)

      if (removedPropertyIndex !== -1) this.renderedSaved.splice(removedPropertyIndex, 1)
    }
  }
}
</script>

<style lang="scss" scoped>
.app {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;

  > div {
    margin: 0 1rem 5rem;
  }
}
</style>
