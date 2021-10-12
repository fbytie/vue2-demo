<template>
  <div class="mv4">
    <div>
      <h2 class="tracked">
        Folio
      </h2>
      <SocialBar />
      <div class="flex flex-wrap items-end">
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
import SocialBar from '../components/SocialBar'
import FolioImage from '../components/FolioImage'

export default {
  name: 'Folio',
  components: {
    FolioImage,
    SocialBar
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
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>
