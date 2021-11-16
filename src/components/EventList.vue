<template>
  <div>
    <h1>Events Listing</h1>
    <EventCard />
    <p>
      <router-link :to="{ name: 'event-show', params: { id: '1' } }">
        First Event
      </router-link>
    </p>
  </div>
</template>

<script>
import EventCard from '@/EventCard.vue'
export default {
  name: 'EventList',
  components: {
    EventCard
  }
}
</script>

<style scoped>

</style>
