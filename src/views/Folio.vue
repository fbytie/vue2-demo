<template>
  <div class="min-vh-100">
    <NavBar />
    <div class="w-100 center">
      <h2 class="washed-yellow tracked">
        Folio
      </h2>
      <SocialBar />
      <div
        v-for="(image, index) in images"
        :key="index"
        class="cf fl w-100 w-50-m w-25-ns"
      >
        <FolioImage
          :src="image.path"
          :alt="image.alt"
        />
      </div>
    </div>
    <FolioImageModal
      v-if="showModal"
      :src="modalImageParameters.path"
      :alt="modalImageParameters.caption"
      @open-modal-image="openModalImage"
    />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import SocialBar from '../components/SocialBar'
import FolioImage from '../components/FolioImage'
import FolioImageModal from '../components/FolioImageModal'

export default {
  name: 'Folio',
  components: {
    FolioImageModal,
    FolioImage,
    SocialBar,
    NavBar
  },
  data () {
    return {
      images: [{
        alt: 'alt',
        path: 'http://bytie.eu/img/10.jpg'
      },
      {
        alt: 'alt2',
        path: 'http://bytie.eu/img/9.jpg'
      },
      {
        alt: 'alt',
        path: 'http://bytie.eu/img/12.jpg'
      },
      {
        alt: 'alt',
        path: 'http://bytie.eu/img/1.jpg'
      },
      {
        alt: 'alt',
        path: 'http://bytie.eu/img/1.jpg'
      }],
      showModal: false,
      modalImageParameters: {
        path: '',
        caption: ''
      }
    }
  },
  methods: {
    openModalImage (path, caption) {
      this.path = path
      this.caption = caption
      this.showModal = true
    }
  }
}
</script>

<style scoped>

</style>
