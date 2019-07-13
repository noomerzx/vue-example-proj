<template>
  <div>
    <label for="">Name:</label>
    <input class="input-group" type="text" :value="data.name" @input="changeData('name', $event.target.value)">
    <label for="">Last Name:</label>
    <input class="input-group" type="text" :value="data.lastName" @input="changeData('lastName', $event.target.value)">
    <button @click="next()">Next</button>
  </div>
</template>

<script>
export default {
  props: ['data'],
  methods: {
    next () {
      this.$emit('changeScene', 'Step2')
    },
    changeData (key, value) {
      this.$emit('updateData', { key, value })
    }
  }
}
</script>

<style></style>
