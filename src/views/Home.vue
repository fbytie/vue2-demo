<template>
  <header
    id="home-cover-image"
    class="cover nested-img vh-100 bg-center center"
  >
    <NavBar />
    <div class="logo-vertically-centered ma3 center w-50 measure-wide-ns">
      <img
        src="../assets/vector/bytie-gradient.svg"
        alt="BYTIE illustration logo"
        class="img"
      >
      <p class="washed-yellow center tc tracked-wide ttu f7 f3-l mh4">
        Illustrations
      </p>
    </div>
    <!--    <HelloWorld />-->
  </header>
</template>

<script>
// @ is an alias to /src
/* import HelloWorld from '@/components/HelloWorld.vue' */
import NavBar from '@/components/NavBar'
/*
import SomeOtherComponent from '@/components/SomeOtherComponent.vue'
*/

export default {
  name: 'Home',
  components: {
    NavBar
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
.logo-vertically-centered{
  margin-top: 35vh;
}
</style>
