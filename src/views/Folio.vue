<template>
  <div>
    <NavBar />
    <h2 class="washed-yellow tracked">
      Folio
    </h2>
    <SocialBar />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import SocialBar from '../components/SocialBar'
export default {
  name: 'Folio',
  components: {
    SocialBar,
    NavBar
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
