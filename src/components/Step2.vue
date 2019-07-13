<template>
  <div>
    <label for="">Tel:</label>
    <input class="input-group" type="text" v-model="data.tel">
    <label for="">Email:</label>
    <input class="input-group" type="text" v-model="data.email">
    <label for="">Address:</label>
    <textarea class="input-group" name="" id="" cols="30" rows="10" v-model="data.address"></textarea>
    <button @click="back()">Back</button>
    <button @click="next()">Next</button>
  </div>
</template>

<script>
export default {
  props: ['data'],
  methods: {
    next() {
      this.$emit('changeScene', 'Step3')
    },
    back() {
      this.$emit('changeScene', 'Step1')
    }
  }
}
</script>

<style>

</style>


