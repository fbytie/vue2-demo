<template>
  <div class="min-vh-100 white">
    <div>
      <!--about me-->
      <div
        id="contact"
        class="mv4 w-80 w-50-ns center content-center"
      >
        <h2 class="washed-yellow pv4 tracked lh-copy">
          Contact
        </h2>
        <div class="text-block db w-100 pv4 bytie-light-pink flex fl-ns cb db ma0">
          <p class="db">
            <br> <br>
            Ac orci phasellus egestas tellus rutrum tellus pellentesque eu. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Volutpat diam ut venenatis tellus in metus vulputate eu scelerisque.
          </p>
        </div>
        <SocialBar />
        <div class="text-block w-100 h-100 pa4 bytie-light-pink bg-black-80 db fl cb br3">
          <div>
            <form>
              <div
                class="tl mv3"
              >
                <label
                  for="Name"
                >
                  Name
                </label>
                <div class="ba b--dark-gray">
                  <input
                    id="Name"
                    type="text"
                    name="Name"
                    class="flex flex-wrap self-stretch w-100 mv1 bg-transparent b--none near-white"
                    required
                  >
                </div>
              </div>
              <div
                class="tl mv3"
              >
                <label for="Email">
                  E-mail address
                </label>
                <div class="ba b--dark-gray">
                  <input
                    id="Email"
                    type="email"
                    name="Email"
                    class="flex flex-wrap self-stretch w-100 mv1 bg-transparent b--none near-white"
                    required
                  >
                </div>
              </div>
              <div
                class="tl mv3"
              >
                <label
                  for="Message"
                >Message</label>
                <div class="ba b--dark-gray">
                  <textarea
                    id="Message"
                    class="flex flex-wrap self-stretch w-100 mv1 bg-transparent b--none near-white"
                  />
                </div>
              </div>
              <div class="flex flex-wrap self-stretch w-100 mv1 bg-dark-red tc pa2">
                <button
                  type="submit"
                  class="bn w-100 bg-transparent near-white"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="w-100 h2" />
    </div>
    <div class="fl w-100 w-50-ns flex" />
  </div>
</template>

<script>
import SocialBar from '../components/SocialBar'
export default {
  name: 'Contact',
  components: {
    SocialBar
  }
}
</script>

<style scoped>

</style>
