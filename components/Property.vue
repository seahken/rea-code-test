<template>
  <article class="property">
    <div class="header" :style="headerStyles">
      <img :src="propertyData.agency.logo" />
    </div>
    <div class="body">
      <img :src="propertyData.mainImage" class="main-image" />
    </div>
    <div class="footer">
      <p>{{ propertyData.price }}</p>
    </div>
  </article>
</template>

<script>
export default {
  name: 'Property',
  props: {
    propertyData: {
      type: Object,
      required: true
    },
    isResultsColumn: {
      type: Boolean,
      default: false
    },
    isSavedColumn: {
      type: Boolean,
      default: false
    },
    isPropertyAdded: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    headerStyles() {
      const styles = []
      const backgroundColor = this.propertyData.agency?.brandingColors?.primary
      if (backgroundColor) styles.push({ backgroundColor })

      return styles
    }
  }
}
</script>

<style scoped>
.property {
  box-shadow: rgb(0 0 0 / 20%) 0px 0.0625rem 0.1875rem 0px;
  border-radius: 0.1875rem;
  background-color: rgb(255, 255, 255);
}

.header {
  padding: 8px;
}

.main-image {
  width: 100%;
}
</style>
