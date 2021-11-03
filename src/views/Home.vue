<template>
  <div
    id="home-cover-image"
    class="cover bg-center"
  >
    <div class="flex items-center vh-75">
      <div class="ma3 center w-50 measure-wide-ns">
        <img
          src="../assets/vector/bytie-gradient.svg"
          alt="BYTIE illustration logo"
          class="img"
        >
        <p class="tc tracked-wide ttu f7 f3-l mh4">
          Illustrations
        </p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
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
