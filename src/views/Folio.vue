<template>
  <div class="min-vh-100">
    <NavBar />
    <div class="w-100 center">
      <h2 class="washed-yellow tracked">
        Folio
      </h2>
      <SocialBar />
      <div class="folio-gallery flex flex-wrap items-end">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="dib w-100 w-50-m w-25-l"
        >
          <FolioImage
            :src="image.path"
            :alt="image.alt"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import SocialBar from '../components/SocialBar'
import FolioImage from '../components/FolioImage'

export default {
  name: 'Folio',
  components: {
    FolioImage,
    SocialBar,
    NavBar
  },
  data () {
    return {
      images: [
        {
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
        }
      ],
      showModal: false,
      modalImageParameters: {
        path: '',
        caption: ''
      }
    }
  }
}
</script>

<style scoped>
.folio-gallery {
}
</style>
