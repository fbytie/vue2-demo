<template>
  <header
    id="home"
    :style="{ 'background-image': headerImage }"
  >
    <div class="logo">
      <img
        :src="headerLogo"
        alt="BYTIE illustration logo"
      >
      <h1>ILLUSTRATIONS</h1>
    </div>
    <HelloWorld />
  </header>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
/*
import SomeOtherComponent from '@/components/SomeOtherComponent.vue'
*/

export default {
  name: 'Home',
  components: {
    HelloWorld /* , SomeOtherComponent */
  },
  data () {
    return {
      headerImage: './img/header.jpg',
      headerLogo: './img/vector/default-monochrome-white.svg'
    }
  }
}
</script>
