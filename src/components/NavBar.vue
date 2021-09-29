<template>
  <nav class="dt bg-near-black w-100 h1 h2-ns border-box pa3 ph 5-ns">
    <a
      v-for="link in links"
      :key="link.key"
      class="link bytie-pink hover-washed-red f6 f5-ns dib mh2 mh4-ns ttu tracked-s tracked-tight-m tracked-l"
      :href="link.id"
    >{{ link.name }}</a>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {
      links: [{
        name: 'Home',
        key: 0,
        id: '#home'
      },
      {
        name: 'About Me',
        key: 1,
        id: '#aboutme'
      },
      {
        name: 'My Work',
        key: 2,
        id: '#mywork'
      },
      {
        name: 'Contact',
        key: 3,
        id: '#contact'
      }]
    }
  }
}
</script>

<style scoped>

</style>
