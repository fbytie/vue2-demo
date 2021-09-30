<template>
  <nav class="dt bg-near-black w-100 h1 h2-ns border-box pa3 ph 5-ns">
    <router-link
      v-for="(link, index) in links"
      :key="index"
      :to="link.href"
      class="link bytie-pink hover-washed-red f6 f5-ns dib mh2 mh4-ns ttu tracked-s tracked-tight-m tracked-l"
    >
      {{ link.name }}
    </router-link>
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
        href: '#home'
      },
      {
        name: 'About',
        key: 1,
        href: '/about'
      },
      {
        name: 'Folio',
        key: 2,
        href: '#folio'
      },
      {
        name: 'Contact',
        key: 3,
        href: '#contact'
      }]
    }
  }
}
</script>

<style scoped>

</style>
