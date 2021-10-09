<template>
  <div
    id="app"
    class="min-vh-100"
  >
    <NavBar />
    <router-view />
  </div>
</template>

<style>
</style>

<script>
import NavBar from './components/NavBar'

export default {
  components: { NavBar }
}
</script>
