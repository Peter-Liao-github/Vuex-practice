<template>
  <div>Peter</div>
</template>

<script>
export default {
  name: 'Peter',
  // 用量較少， 因為前面 router 就先做掉了
  beforeRouteEnter (to, from, next) {
    console.log('enter')
    next()
  },
  // 常用到， 像在 loading / 接 api 時
  beforeRouteUpdate (to, from, next) {
    console.log('update')
    next()
  },
  // 準備要離開了的提示
  beforeRouteLeave (to, from, next) {
    console.log('leave')
    if (confirm('真的要走？')) {
      next()
    }
  }
}
</script>

<style>

</style>
