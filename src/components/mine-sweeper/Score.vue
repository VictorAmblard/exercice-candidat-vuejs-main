<template lang='pug'>
div
  p Score : {{ score }}
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Score',
  props: {
    score: {
      type: Number
    }
  }
})
</script>

<style lang="scss">
</style>
