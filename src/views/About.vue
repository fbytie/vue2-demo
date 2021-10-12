<template>
  <div class="mv4">
    <!--about me-->
    <div
      id="about"
      class="mv4 cf bg-black-50 w-80 w-75-l center tc"
    >
      <div class="w-100 w-50-l flex fn fl-l">
        <img
          id="about-me-image"
          src="../assets/aboutMe.png"
        >
      </div>
      <h2 class="washed-yellow pa3 pa5-ns tracked dib center">
        About Me
      </h2>
      <div class="w-100 w-50-l pa4 pa5-ns bytie-light-pink text-block lh-copy flex">
        <p class="db">
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec dui nunc mattis enim ut. Augue lacus viverra vitae congue eu. Id cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque.
          </span>
          <br> <br>
          Ac orci phasellus egestas tellus rutrum tellus pellentesque eu. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Volutpat diam ut venenatis tellus in metus vulputate eu scelerisque.
        </p>
      </div>
    </div>
    <div class="w-100 h2" />
  </div>
</template>

<script>

export default {
  name: 'About',
  components: {
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
#about-me-image {
  max-height: 100%;
  width: auto;
}

</style>
