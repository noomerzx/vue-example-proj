<template>
  <div class="about">
    <h1>This is an about page</h1>
    <input type="text" v-model="text">
  </div>
</template>

<script>
export default {
  props: ['id'],
  data () {
    return {
      text: ''
    }
  },
  created () {
    // let id = this.$route.params.id
    console.log('xxx = ' + this.id)
  }
}
</script>
