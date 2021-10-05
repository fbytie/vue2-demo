<template>
  <div class="db center white">
    <a
      v-for="(link, index) in links"
      :key="index"
      :href="link.href"
    >
      <FeatherIcon
        :icon="link.name"
        :size="24"
      />
      <!-- {{ link.name }} -->
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

import FeatherIcon from './FeatherIcon'

export default {
  name: 'SocialBar',
  components: {
    FeatherIcon
  },
  data () {
    return {
      links: [{
        name: 'gift',
        key: 0,
        href: 'https://www.patreon.com/bytie'
        /* icon: faPaintBrush */
      },
      {
        name: 'twitter',
        key: 1,
        href: 'https://twitter.com/fBytie'
        /* icon: faKiwiBird */
      },
      {
        name: 'instagram',
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
