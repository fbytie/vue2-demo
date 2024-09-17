<template>
  <div>
    <h1>
      username simple: {{ $route.params.username }}
    </h1>
    <h1>
      username through prop: {{ username }}
    </h1>
  </div>
</template>

<script>
export default {
  name: 'User',
  props: ['username']
}
</script>

<style scoped>

</style>
