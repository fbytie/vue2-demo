<template>
  <div>
    <NavBar />
    <div class="db flex pa4">
      <!--about me-->
      <article
        id="about"
        class="bg-black-50 mw9 center ma4 tc flex"
      >
        <div class="mw7 dib">
          <img
            src="../assets/aboutMe.png"
          >
        </div>

        <div class="mw6 ma6 dib bytie-light-pink text-block lh-copy">
          <h2 class="washed-yellow tracked">
            About Me
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec dui nunc mattis enim ut. Augue lacus viverra vitae congue eu. Id cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque.
          </p>
          <p>Ac orci phasellus egestas tellus rutrum tellus pellentesque eu. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Volutpat diam ut venenatis tellus in metus vulputate eu scelerisque.  </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec dui nunc mattis enim ut. Augue lacus viverra vitae congue eu. Id cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque.
          </p>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'

export default {
  name: 'About',
  components: {
    NavBar
    /* HelloWorld */ /* , SomeOtherComponent */
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>

.text-block{
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

</style>
