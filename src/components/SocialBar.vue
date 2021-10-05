<template>
  <div class="db center min-vh-100">
    <a
      v-for="(link, index) in links"
      :key="index"
      :href="link.href"
      class="link bytie-light-pink hover-near-white f6 f5-ns dib mh2 mh4-ns"
    >
      {{ link.name }}
      <!--
      <font-awesome
        :icon="link.icon"
        class="near-white h1"
        alt="link.name"
      />-->
    </a>
  </div>
</template>

<script>
/* import { faCamera, faKiwiBird, faPaintBrush } from '@fortawesome/free-solid-svg-icons' */

export default {
  name: 'SocialBar',
  data () {
    return {
      links: [{
        name: 'DeviantArt',
        key: 0,
        href: 'https://www.deviantart.com/fbytie'
        /* icon: faPaintBrush */
      },
      {
        name: 'Twitter',
        key: 1,
        href: 'https://twitter.com/fBytie'
        /* icon: faKiwiBird */
      },
      {
        name: 'Instagram',
        key: 2,
        href: 'https://www.instagram.com/fbytie/'
        /* icon: faCamera */
      }]
    }
  }
}
</script>

<style scoped>

</style>
