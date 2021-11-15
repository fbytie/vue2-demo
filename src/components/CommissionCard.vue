<template>
  <div class="card flex-wrap">
    <h3 class="washed-yellow">
      {{ commissionType.title }}
    </h3>
    <div class="price cb">
      Base Price: {{ commissionType.cost }}
    </div>
    <div class="estimated-delivery-time">
      Estimated Time of Delivery: {{ commissionType.edt }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommissionCard',
  props: {
    commissionType: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
