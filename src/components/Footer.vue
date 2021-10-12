<template>
  <div class="flex bg-near-black w-100 pa2 ph5-l">
    <div class="w-third gray">
      {{ credits }}
    </div>
    <div class="w-third" />
    <div class="w-third">
      <router-link
        :to="href"
        class="link bytie-pink hover-washed-red f6 f5-ns"
      >
        <!--self-end dib tracked-s tracked-tight-m tracked-l"-->
        {{ displayName }}
      </router-link>
    </div>
  </div>
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
