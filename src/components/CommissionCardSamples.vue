<template>
  <div>
    <h2 class="pa3 pa5-ns tracked washed-yellow">
      {{ type }}
    </h2>
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
</template>

<script>
import FolioImage from './FolioImage'

export default {
  name: 'CommissionCardSamples',
  components: {
    FolioImage
  },
  props: {
    type: {
      type: String,
      required: true,
      default: 'Unavailable'
    }
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
