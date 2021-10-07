<template>
  <transition name="modal">
    <div
      class="modal-mask fixed top-0 left-0 w-100 h-100 dt bg-black-70"
      @click="$emit('close')"
    >
      <div
        class="dtc v-mid"
      >
        <div class="modal-container w-80 w-40-ns pa1 bg-black br3 shadow-2 helvetica center">
          <div class="modal-header mt0">
            <slot
              name="header"
              class=""
            >
              <!-- commented bc i don't know if i want to keep it yet
              <FeatherIcon
                icon="x"
                size="24"
                class="fr"
                @click="$emit('close')"
              /> -->
            </slot>
          </div>

          <div class="modal-body ma3">
            <img
              id="modalImg"
              :src="src"
              :alt="alt"
              class="w-auto"
              @click="showModal = true"
            >
          </div>

          <div class="modal-footer">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </div>
    <!--    <img
      id="modalImg"
      :src="src"
      :alt="alt"
      class="w-auto"
      @click="showModal = true"
    > ^ dunno how to make modal not close if click isn't outside of container -->
  </transition>
</template>

<script>
/* import FeatherIcon from './FeatherIcon' */
export default {
  name: 'FolioImageModal',
  components: {
    /* FeatherIcon */
  },
  props: {
    src: {
      type: String,
      default: '../assets/logo.png'
    },
    alt: {
      type: String,
      default: 'no image'
    }
  }
}
</script>

<style scoped>
#modalImg {
  max-height: 100vh;
}
.modal-mask {
  z-index: 9998;
  transition: opacity 0.3s ease;
}

.modal-container {
  transition: all 0.3s ease-in-out;
}

.modal-header h3 {
  color: #42b983;
}

.modal-default-button {
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
