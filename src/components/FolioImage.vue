<template>
  <div>
    <div>
      <!--    <img
      src="../assets/logo.png"
    >-->
      <img
        :src="src"
        :alt="alt"
        class="dib o-50 glow"
        @click="sendModalImage"
      >
    </div>
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
      showModal: false
    }
  },
  methods: {
    sendModalImage () {
      this.$emit('open-modal-image', this.src, this.alt)
    }
  }
}
</script>

<style scoped>

</style>
