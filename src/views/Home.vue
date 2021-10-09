<template>
  <div
    id="home-cover-image"
    class="cover nested-img vh-100 bg-center center"
  >
    <div class="flex items-center vh-75">
      <div class="ma3 center w-50 measure-wide-ns">
        <img
          src="../assets/vector/bytie-gradient.svg"
          alt="BYTIE illustration logo"
          class="img"
        >
        <p class="washed-yellow center tc tracked-wide ttu f7 f3-l mh4">
          Illustrations
        </p>
      </div>
    </div>
    <!--    <HelloWorld />-->
  </div>
</template>

<script>
// @ is an alias to /src
/* import HelloWorld from '@/components/HelloWorld.vue' */
/*
import SomeOtherComponent from '@/components/SomeOtherComponent.vue'
*/

export default {
  name: 'Home',
  components: {
  },
  data () {
    return {
      headerImage: '../assets/header.jpg',
      headerLogo: '../assets/vector/bytie-gradient.svg'
    }
  }
}
</script>

<style scoped>
#home-cover-image{
  background-image: url('../assets/header.jpg');
}
</style>
