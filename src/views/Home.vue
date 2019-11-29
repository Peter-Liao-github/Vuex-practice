<template>
  <div class="home">
    <h1>{{ globalMsg }}</h1>
    <p>
      <input
        v-model="globalMsg"
        type="text"
      >
    </p>

    <h1>{{ number }}</h1>
    <button @click="getNumber()">
      get number
    </button>
    <img
      alt="Vue logo"
      src="../assets/logo.png"
    >
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import RandomNumber from '@/store/modules/RandomNumber.js'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  // data props computed hook watch
  computed: {
    // globalMsg () {
    //   return this.$store.state.globalMsg
    // }
    // ...mapState(['globalMsg', 'name'])
    ...mapState(['number']),
    ...mapState({
      userName: 'name'
    }),
    globalMsg: {
      // get set 如何寫得更精簡？
      get () {
        return this.$store.state.globalMsg
      },
      set (value) {
        // this.$store.state.globalMsg = value
        this.$store.commit('SET_GLOBAL_MSG', value)
      }
    }
  },
  mounted () { // 共用性命名， Random/ HomeRandom/ AboutRandom
    this.$store.registerModule('RandomNumber', RandomNumber)
  },
  beforeDestroy () { // module 註冊註銷用的方式， 反應 vuex 熟不熟
    this.$store.unregisterModule('RandomNumber')
  },
  methods: {
    ...mapMutations(['SET_GLOBAL_MSG']),
    ...mapActions(['GET_RANDOM_NUMBER']), // action 比較少用 map
    getNumber () {
      this.$store.dispatch('GET_RANDOM_NUMBER')
    }
  }
}
</script>
