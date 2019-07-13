<template>
  <div class="right">
    <h1>{{text}}</h1>
  </div>
</template>

<script>
export default {
  props: ['text']
}
</script>

<style scoped>
  .right {
    background: grey;
    width: 100%;
  }
</style>
