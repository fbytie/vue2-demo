<template>
  <div class="bg-black-90 w-100 h-100 fixed top-0">
    <img
      id="modalImg"
      :src="src"
      :alt="alt"
      class="w-auto"
      @click="showModal = true"
    >
  </div>
</template>

<script>
export default {
  name: 'FolioImageModal',
  props: {
    src: {
      type: String,
      default: '../assets/logo.png'
    },
    alt: {
      type: String,
      default: 'no image'
    }
  }
}
</script>

<style scoped>
#modalImg {
  max-height: 100vh;
}
</style>
