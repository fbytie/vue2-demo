<template>
  <div class="dib center">
    <img
      v-for="(image, index) in images"
      :key="index"
      :src="image.path"
      :alt="image.altText"
    >
  </div>
</template>

<script>
export default {
  name: 'FolioImage',
  data () {
    return {
      images: [{
        path: '../assets/logo.png',
        altText: 'logo'
      }]
    }
  }
}
</script>

<style scoped>

</style>
