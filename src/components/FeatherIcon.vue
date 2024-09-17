<template>
  <div
    class="washed-yellow ma3 dib"
    v-html="iconSvg"
  />
  <!--  TODO: Check real world vue2 > 7. global components for info on icons-->
</template>

<script>
import feather from 'feather-icons'

export default {
  name: 'FeatherIcon',
  props: {
    icon: {
      type: String,
      default: 'alert-circle'
    },
    size: {
      type: Number,
      default: 24
    }
  },
  computed: {
    iconSvg () {
      if (feather.icons[this.icon]) {
        return feather.icons[this.icon].toSvg({
          width: this.size,
          height: this.size
        })
      }
      return ''
    }
  }
}
</script>

<style scoped>

</style>
