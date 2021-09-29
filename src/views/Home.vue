<template>
  <header
    id="home"
    class="cover-image cover nested-img vh-100 bg-center center"
  >
    <NavBar />
    <div class="pt8 ma3 center measure-wide">
      <img
        src="../assets/vector/bytie-gradient.svg"
        alt="BYTIE illustration logo"
        class="img "
      >
      <h1 class="near-white center tc tracked-wide ttu f3 ph4">
        Illustrations
      </h1>
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
      headerImage: '../assets/img/header.jpg',
      headerLogo: '../assets/img/vector/bytie-gradient.svg'
      // why don't these display?
    }
  }
}
</script>

<style scoped>
.cover-image{
  background-image: url('../assets/header.jpg');
}
.tracked-wide{
  letter-spacing: 1.05em;
}
.pt8{
  padding-top: 15%;
}
</style>
