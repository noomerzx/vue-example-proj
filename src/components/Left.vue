<template>
  <div class="left">
    <h1>{{text}}</h1>
  </div>
</template>

<script>
export default {
  props: ['text']
}
</script>

<style scoped>
  .left {
    background: grey;
    width: 100%;
  }
</style>
