<template>
  <div>
    <h1>Result</h1>
    <label for="">Name: {{data.name}}</label><br>
    <label for="">Last Name: {{data.lastName}}</label><br>
    <label for="">Tel: {{data.tel}}</label><br>
    <label for="">Email: {{data.email}}</label><br>
    <label for="">Address: {{data.address}}</label><br>
    <button @click="back()">Back</button>
  </div>
</template>

<script>
export default {
  props: ['data'],
  methods: {
    back() {
      this.$emit('changeScene', 'Step1')
    }
  }
}
</script>

<style>

</style>


