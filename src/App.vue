<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link :to="{ name: 'home' }">Home</router-link> |
      <router-link :to="{ name: 'home', query: { test: 'xxx' }}">Home2</router-link> |
      <router-link :to="{ name: 'about', params: { id: 1 } }">About</router-link>
    </div>
    <keep-alive>
      <router-view/>
    </keep-alive> -->
    <data-template>
      <template #header>
        <div>
          asdasd
        </div>
      </template>
      <template #body>this is body</template>
      <div>5555555</div>
      <div>asdas</div>
      asdasd
    </data-template>
  </div>
</template>

<script>
import DataTemplate from '@/components/DataTemplate.vue'
import axios from 'axios'

export default {
  components: {
    DataTemplate
  },
  async created () {
    let data = await axios.get('https://us-central1-cloud-fn-1c36b.cloudfunctions.net/getItems')

    console.log(data)
  },
  methods: {
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
