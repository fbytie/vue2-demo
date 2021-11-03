<template>
  <div class="mv4">
    <div
      id="about"
      class="bg-black-50 w-80 w-100-m w-75-l center tc flex flex-wrap"
    >
      <div
        id="about-me-image-bg"
        class="h-auto-l w-100 w-50-l cover"
      />
      <div class="w-100 w-50-l ph4 ph5-ns pb5 bytie-light-pink text-block">
        <h2 class="pa3 pa5-ns tracked washed-yellow">
          About Me
        </h2>
        <p
          v-for="(paragraph, index) in aboutMeText"
          :key="index"
        >
          {{ paragraph }}
        </p>
      </div>
    </div>
    <div class="w-100 h2" />
  </div>
</template>

<script>

export default {
  name: 'About',
  data () {
    return {
      aboutMeText: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec dui nunc mattis enim ut. Augue lacus viverra vitae congue eu. Id cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque.',
        'Ac orci phasellus egestas tellus rutrum tellus pellentesque eu. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Volutpat diam ut venenatis tellus in metus vulputate eu scelerisque.'
      ]
    }
  }
}

</script>

<style scoped>

#about-me-image-bg {
  background: url("../assets/aboutMe.png") no-repeat center center;
  min-height: 30rem;
}

</style>
