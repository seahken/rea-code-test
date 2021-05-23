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
    <div class="button-wrapper" :style="buttonWrapperStyles">
      <button :class="buttonClasses" ref="button" @click="buttonAction()">{{ buttonText }}</button>
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
    buttonIsDisabled() {
      return this.isResultsColumn && this.isPropertyAdded
    },
    headerStyles() {
      const styles = []
      const backgroundColor = this.propertyData.agency?.brandingColors?.primary
      if (backgroundColor) styles.push({ backgroundColor })

      return styles
    },
    buttonText() {
      if (this.buttonIsDisabled) return 'Already Added'
      if (this.isSavedColumn) return 'Remove Property'

      return 'Add Property'
    },
    buttonWrapperStyles() {
      const styles = [{ display: 'none' }]
      if (this.isHovered) styles.push({ display: 'block' })
      return styles
    },
    buttonClasses() {
      const classes = ['button']
      if (this.buttonIsDisabled) classes.push('is-disabled')

      return classes
    }
  },
  methods: {
    buttonAction() {
      if (this.buttonIsDisabled) return null
      if (this.isResultsColumn) return this.saveProperty(this.propertyData.id)
      if (this.isSavedColumn) return this.removeProperty(this.propertyData.id)
    },
    saveProperty(id) {
      this.$emit('saveProperty', id)
    },
    removeProperty(id) {
      this.$emit('removeProperty', id)
    }
  }
}
</script>

<style scoped>
.property {
  box-shadow: rgb(0 0 0 / 20%) 0px 0.0625rem 0.1875rem 0px;
  border-radius: 0.1875rem;
  background-color: rgb(255, 255, 255);
  position: relative;
}

.header {
  padding: 8px;
}

.main-image {
  width: 100%;
}

.button-wrapper {
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
}

.button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
}

.button.is-disabled {
  cursor: not-allowed;
}
</style>
