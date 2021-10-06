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
        class="cf fl w-100 w-50-m w-25-ns dib"
      >
        <FolioImage
          :src="image.path"
          :alt="image.alt"
        />
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
      images: [{
        alt: 'Shade',
        path: 'http://bytie.eu/img/10.jpg'
      },
      {
        alt: 'Quies',
        path: 'http://bytie.eu/img/9.jpg'
      },
      {
        alt: 'Yukiko',
        path: 'http://bytie.eu/img/12.jpg'
      },
      {
        alt: 'Velox',
        path: 'http://bytie.eu/img/1.jpg'
      },
      {
        alt: 'Velox',
        path: 'http://bytie.eu/img/1.jpg'
      }]
    }
  }
}
</script>

<style scoped>

</style>
