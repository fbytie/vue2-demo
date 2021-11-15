<template>
  <div
    id="app"
    class="min-vh-100"
  >
    <NavBar />
    <router-view class="vh-100 w-100 center washed-yellow lh-copy" />
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
