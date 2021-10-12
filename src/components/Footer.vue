<template>
  <span class="dt bg-near-black w-100">
    <p class="tl gray dib self-start">
      {{ credits }}
    </p>
    <router-link
      :to="href"
      class="link bytie-pink hover-washed-red f6 f5-ns tr self-end dib tracked-s tracked-tight-m tracked-l"
    >
      {{ displayName }}
    </router-link>
  </span>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      href: '/ToS',
      displayName: 'Terms of Service',
      credits: '©Bytie 2021'
    }
  }
}
</script>

<style scoped>

</style>
