<template>
  <div class="white">
    <div>
      <!--about me-->
      <div
        id="contact"
        class="mv4 cf w-75 center tc"
      >
        <h2 class="washed-yellow pa5 tracked center lh-copy">
          Contact
        </h2>
        <div class="text-block w-50-ns pa5 bytie-light-pink flex fl-ns db dib-ns">
          <p class="db">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec dui nunc mattis enim ut. Augue lacus viverra vitae congue eu. Id cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque.
            </span>
            <br> <br>
            Ac orci phasellus egestas tellus rutrum tellus pellentesque eu. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Volutpat diam ut venenatis tellus in metus vulputate eu scelerisque.
          </p>
        </div>
        <div class="text-block w-50-ns h-100 pa4 bytie-light-pink bg-black-80 db dib-ns fl br3">
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
              <div class="tc">
                <button
                  type="submit"
                  class="flex flex-wrap self-stretch w-100 mv1 bg-red near-white tc"
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
export default {
  name: 'Contact',
  components: {
  }
}
</script>

<style scoped>

</style>
