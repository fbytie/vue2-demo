<template>
  <div class="min-vh-100 mv4">
    <div class="w-100 w-two-thirds-ns bytie-light-pink center pa3 pa5-ns lh-copy bg-black-50">
      <h2 class="washed-yellow pv4 tracked lh-copy">
        Terms of Service
      </h2>
      <p
        v-for="(paragraph, index) in termsOfService"
        :key="index"
      >
        {{ paragraph }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ToS',
  data () {
    return {
      termsOfService: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non facilisis ex. Aliquam imperdiet elementum ultrices. Sed cursus tortor ac neque placerat, ut commodo sapien aliquet. Pellentesque tincidunt lobortis ex, eu sagittis urna suscipit ut. Morbi aliquam posuere tempor. Vivamus volutpat nec leo eget pellentesque. Pellentesque euismod odio vitae augue porttitor porta. Pellentesque nec tincidunt dui. Nam ornare felis eu ullamcorper posuere. Quisque volutpat massa diam, sed pulvinar ligula blandit eu. Morbi dui nibh, ullamcorper ac vestibulum sed, dignissim quis orci. Mauris finibus enim nulla, et blandit diam consectetur vel. Integer euismod urna eget odio tempor dignissim.',
        'Nullam augue turpis, viverra ut luctus vel, dapibus vel neque. Praesent laoreet lacinia dui id rutrum. Sed malesuada tellus quis augue tempus aliquam. Etiam mattis nulla sed elit maximus vestibulum. Nullam ac dolor id ipsum suscipit condimentum quis sit amet ex. Mauris ac rhoncus ligula. Nunc fringilla imperdiet suscipit. Fusce venenatis sed nisl eu convallis. Cras sagittis egestas cursus. Cras eget sagittis sem. Mauris odio sem, vehicula et consectetur a, congue in orci. Nam varius massa eu quam ultricies, ac efficitur quam fermentum. Phasellus mollis ut nibh ut fringilla.',
        'Nunc ut imperdiet dolor, sit amet vestibulum purus. Duis pellentesque purus sapien, sit amet vulputate augue auctor eget. Cras sed lobortis justo. Nulla maximus luctus nunc, ut tristique urna blandit in. Cras interdum metus ac felis ullamcorper, eget semper neque dapibus. Integer mollis est nisl, a ultricies nisl blandit quis. Curabitur id auctor magna. Aliquam eros mi, interdum eget vestibulum semper, viverra non mi. Ut eget est tortor. Curabitur sit amet sem placerat, consectetur nibh eu, bibendum mauris. Etiam at dapibus nunc, vel aliquet ipsum. Nunc interdum maximus arcu ac semper. Nullam vitae nulla quis neque iaculis sollicitudin. Phasellus in nisl tellus. Suspendisse sit amet nisl volutpat, ultricies orci sed, laoreet velit. Morbi mollis mauris at tellus gravida, id pharetra odio egestas.',
        'Curabitur metus odio, lacinia sed mollis ut, tempus vitae tortor. Vestibulum condimentum velit eu ipsum varius, sit amet efficitur velit aliquet. Aenean vehicula venenatis aliquam. Nam eu lectus nisl. Pellentesque vulputate egestas porttitor. Morbi in est placerat, malesuada risus a, eleifend ipsum. Morbi gravida id velit nec finibus.'
      ]
    }
  }
}
</script>

<style scoped>

</style>
