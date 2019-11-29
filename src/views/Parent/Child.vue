<template>
  <div>
    <p>
      <router-link :to="{name:'child', params:{cid:5}}">
        Child5
      </router-link>
    </p>
    <p>Child {{ $route.params.cid }}</p>
    <p>{{ $route.query.aaa }}</p>
  </div>
</template>

<script>
export default {
  name: 'NestChild',
  beforeRouteUpdate (to, from, next) {
    next()
  }
}
</script>

<style>
</style>
