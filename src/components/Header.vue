<template>
  <div class="header">
    <h1>{{text}}</h1>
    <input type="text" v-model="text">
    <button @click="func('1234')">Send back</button>
    <comp @text="sendBack"></comp>
  </div>
</template>

<script>
export default {
  props: ['text'],
  methods: {
    sendBack() {
      this.$emit('receivedData', 1234)
    }
  }
}
</script>

<style scoped>
  .header {
    background: grey;
    width: 100%;
  }
</style>
