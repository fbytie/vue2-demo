<template>
  <div>
    <!--    <img
      src="../assets/logo.png"
    >-->
    <img
      :src="src"
      :alt="alt"
      class="dib o-50-l glow-l"
      @click="showModal = true"
    >
    <FolioImageModal
      v-if="showModal"
      :src="src"
      :alt="alt"
      @close="showModal = false"
    >
      <div slot="body">
        yes
      </div>
    </FolioImageModal>
  </div>
</template>

<script>
import FolioImageModal from './FolioImageModal'

export default {
  name: 'FolioImage',
  components: {
    FolioImageModal
  },
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
  }
}
</script>

<style scoped>

</style>
