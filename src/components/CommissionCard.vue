<template>
  <div class="card">
    <h3 class="washed-yellow">
      {{ commissionData.type }}
    </h3>
  </div>
</template>

<script>
export default {
  name: 'CommissionCard',
  props: {
    commissionData: {
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
