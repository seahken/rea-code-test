<template>
  <div class="column">
    <h2>{{ title }}</h2>
    <div class="wrapper">
      <Property
        v-for="property in properties"
        :propertyData="property"
        :key="property.id"
        @saveProperty="saveProperty"
        @removeProperty="removeProperty"
        :isResultsColumn="isResultsColumn"
        :isSavedColumn="isSavedColumn"
        :isPropertyAdded="isPropertyAdded(property.id)"
      />
    </div>
  </div>
</template>

<script>
import Property from '~/components/Property'

export default {
  name: 'Column',
  components: {
    Property
  },
  props: {
    title: {
      type: String,
      required: true
    },
    properties: {
      type: Array,
      default: () => []
    },
    isResultsColumn: {
      type: Boolean,
      default: false
    },
    isSavedColumn: {
      type: Boolean,
      default: false
    },
    renderedSaved: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    saveProperty(id) {
      this.$emit('saveProperty', id)
    },
    removeProperty(id) {
      this.$emit('removeProperty', id)
    },
    isPropertyAdded(id) {
      return this.renderedSaved.findIndex(item => item.id === id) !== -1
    }
  }
}
</script>

<style lang="scss" scoped>
.column {
  background-color: #EEEEEE;
  border-radius: 1rem;
  padding: 1rem;
}

h2 {
  text-align: center;
}
</style>
