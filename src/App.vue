<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
    <!-- <component :is="scene" data="sceneData" @changeScene="changeScene"></component> -->
    <div class="container">
      <component :is="scene" :data="sceneData" @updateData="setData" @changeScene="changeScene"></component>
    </div>
  </div>
</template>

<script>
import Red from '@/components/Red.vue'
import Step1 from '@/components/Step1.vue'
import Step2 from '@/components/Step2.vue'
import Step3 from '@/components/Step3.vue'

export default {
  components: {
    Red,
    Step1,
    Step2,
    Step3
  },
  data () {
    return {
      scene: 'Step1',
      sceneData: {
        name: '',
        lastName: '',
        tel: '',
        email: '',
        address: ''
      }
    }
  },
  methods: {
    changeScene (newScene) {
      console.log('--', this.sceneData)
      this.scene = newScene
    },
    setData (data) {
      this.sceneData[data.key] = data.value
    }
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.container {
  border: 1px solid #eee;
  background: #eee;
  padding: 30px;
}
</style>
