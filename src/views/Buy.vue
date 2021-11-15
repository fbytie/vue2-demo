<template>
  <div>
    <h2 class="pa3 pa5-ns tracked washed-yellow">
      Available Commission Types
    </h2>
    <router-link
      v-for="(commissionType, index) in commissionTypes"
      :key="index"
      :to="{ name: 'commission-card-samples', params: { type: commissionType.title } }"
    >
      <CommissionCard
        :commission-type="commissionType"
        class="type-card w-80 pa4 mv3 tracked washed-yellow bytie-light-pink bg-black-10 hover-bg-black-40 center"
      />
    </router-link>
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
      commissionTypes: [
        {
          title: 'Portrait',
          cost: '$39.99',
          edt: '2 days'
        },
        {
          title: 'Landscape',
          cost: '$99.99',
          edt: '7 days'
        },
        {
          title: 'Splash',
          cost: '$249.99',
          edt: '20 days'
        }
      ]
    }
  }
}
</script>

<style scoped>
.type-card {
  transition: all 0.2s linear;
}
.type-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 #ff9898;
}
</style>
