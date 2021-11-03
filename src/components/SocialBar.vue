<template>
  <div :class="'db center white ' + $attrs['class']">
    <a
      v-for="(link, index) in links"
      :key="index"
      :href="link.href"
    >
      <FeatherIcon
        :icon="link.name"
        :size="24"
      />
    </a>
  </div>
</template>

<script>

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
      },
      {
        name: 'twitter',
        key: 1,
        href: 'https://twitter.com/fBytie'
      },
      {
        name: 'instagram',
        key: 2,
        href: 'https://www.instagram.com/fbytie/'
      }]
    }
  }
}
</script>

<style scoped>

</style>
