<template>
<div>
  <slot></slot>
  <slot name="header"></slot>
  <hr>
  <slot name="body"></slot>
  <div class="footer">
    <h1>this is footer</h1>
  </div>
</div>
</template>

<script>
export default {
}
</script>

<style>

</style>
