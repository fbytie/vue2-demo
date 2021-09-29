<template>
  <nav class="dt bg-near-black w-100 h1 h2-ns border-box pa3 ph5-ns">
    <a
      v-for="link in links"
      :key="link.id"
      class="link bytie-pink hover-washed-red f6 f5-ns dib mh2 mh3-ns ttu tracked-s tracked-tight-m tracked-l"
      :href="link.selector"
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
        id: 0,
        selector: '#home'
      },
      {
        name: 'About Me',
        id: 1,
        selector: '#aboutme'
      },
      {
        name: 'My Work',
        id: 2,
        selector: '#mywork'
      },
      {
        name: 'Contact',
        id: 3,
        selector: '#contact'
      }]
    }
  }
}
</script>

<style scoped>

</style>
