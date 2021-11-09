<template>
  <div
    id="app"
    class="vh-100"
  >
    <NavBar />
    <router-view class="min-vh-100 center w-100 washed-yellow lh-copy" />
    <Footer />
  </div>
</template>

<style>
</style>

<script>
import NavBar from './components/NavBar'
import Footer from './components/Footer'

export default {
  components: { Footer, NavBar }
}
</script>
