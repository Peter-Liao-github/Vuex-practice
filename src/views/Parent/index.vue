<template>
  <div>
    <p>Parent</p>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'NestedParent',
  methods: {
    changeChild (cid) {
      if (this.$router.params.cid !== cid) { this.$router.push({ name: 'child', params: { cid } }).catch((err) => { console.log(err) }) }
    }
  }
}
</script>

<style>

</style>
