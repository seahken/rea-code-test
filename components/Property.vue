<template>
  <article class="property" ref="property">
    <div class="header" :style="headerStyles">
      <img :src="propertyData.agency.logo" />
    </div>
    <div class="body">
      <img :src="propertyData.mainImage" class="main-image" />
    </div>
    <div class="footer">
      <p>{{ propertyData.price }}</p>
    </div>
    <button class="button" ref="button" :style="buttonStyles">{{ buttonText }}</button>
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
  data() {
    return {
      isHovered: false
    }
  },
  mounted() {
    this.$refs.property.addEventListener('mouseenter', () => {
      this.isHovered = true
    })

    this.$refs.property.addEventListener('mouseleave', () => {
      this.isHovered = false
    })
  },
  computed: {
    headerStyles() {
      const styles = []
      const backgroundColor = this.propertyData.agency?.brandingColors?.primary
      if (backgroundColor) styles.push({ backgroundColor })

      return styles
    },
    buttonText() {
      if (this.isResultsColumn) {
        if (this.isPropertyAdded) return 'Already Added'
        return 'Add Property'
      }

      if (this.isSavedColumn) return 'Remove Property'
    },
    buttonStyles() {
      const styles = [{ display: 'none' }]
      if (this.isHovered) styles.push({ display: 'block' })
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
