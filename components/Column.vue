<template>
  <div>
    <h2>{{ title }}</h2>
    <div class="wrapper">
      <Property v-for="property in properties" :propertyData="property" />
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
    }
  }
}
</script>
