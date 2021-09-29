<template>
  <header
    id="home"
    class="cover-image"
  >
    <NavBar />
    <div>
      <img
        :src="headerLogo"
        alt="BYTIE illustration logo"
      >
      <h1>ILLUSTRATIONS</h1>
    </div>
    <!--    <HelloWorld />-->
  </header>
</template>

<script>
// @ is an alias to /src
/* import HelloWorld from '@/components/HelloWorld.vue' */
import NavBar from '../components/NavBar'
/*
import SomeOtherComponent from '@/components/SomeOtherComponent.vue'
*/

export default {
  name: 'Home',
  components: {
    NavBar
    /* HelloWorld */ /* , SomeOtherComponent */
  },
  data () {
    return {
      headerImage: '@/assets/img/header.jpg',
      headerLogo: '@/assets/img/vector/bytie-gradient.svg'
    }
  }
}
</script>

<style scoped>
.cover-image{
  :background-image: headerImage;
}
</style>
