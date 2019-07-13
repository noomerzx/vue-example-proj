<template>
  <div class="red">
    Name: <input type="text"><br>
    Lastname: <input type="text"><br>
    <button>Next</button><br>
    {{ data }}
    <hr>
    Tel: <input type="text"><br>
    Email: <input type="text"><br>
    Address: <textarea name="" id="" cols="30" rows="10"></textarea><br>
    <button>Next</button>

    <hr>

    <h1>Result</h1>
    name: 
    Lastname: 
    tel: 
    email:
    address:
  </div>
</template>

<script>
export default {
  props: ['data']
}
</script>

<style>
</style>

