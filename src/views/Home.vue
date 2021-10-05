<template>
  <header
    id="home-cover-image"
    class="cover nested-img vh-100 bg-center center"
  >
    <NavBar />
    <div class="logo-vertically-centered ma3 center measure-wide">
      <img
        src="../assets/vector/bytie-gradient.svg"
        alt="BYTIE illustration logo"
        class="img"
      >
      <h1 class="washed-yellow center tc tracked-wide ttu f3 ph4">
        Illustrations
      </h1>
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
  padding-top: 30vh;
}
</style>
