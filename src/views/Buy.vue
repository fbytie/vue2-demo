<template>
  <div>
    <h2 class="pa3 pa5-ns tracked washed-yellow">
      Available Commission Types
    </h2>
    <CommissionCard
      :commission-data="commissionData"
      class="type-card w-80 pa4 mv3 bg-near-black hover-bg-black-40 center"
    />
    <div />
  </div>
</template>

<script>
import CommissionCard from '../components/CommissionCard.vue'
export default {
  name: 'Buy',
  components: {
    CommissionCard
  },
  data () {
    return {
      commissionData: {
        type: 'Portrait',
        cost: '9.99',
        eta: '2 days'
      }
    }
  }
}
</script>

<style scoped>
.type-card {
  transition: all 0.2s linear;
}
.type-card:hover {
  transform: scale(1.05);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
</style>
