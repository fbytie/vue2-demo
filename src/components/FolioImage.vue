<template>
  <div>
    <!--    <img
      src="../assets/logo.png"
    >-->
    <img
      :src="src"
      :alt="alt"
      class="dib"
    >
  </div>
</template>

<script>
export default {
  name: 'FolioImage',
  props: {
    src: {
      type: String,
      default: '../assets/logo.png'
    },
    alt: {
      type: String,
      default: 'no image'
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
