<template lang='pug'>
div
  p Score : {{ score }}
  p(v-if="defeat" classe="defeat") Defeat
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Score',
  props: {
    score: {
      type: Number
    },
    defeat: {
      type: Boolean
    }
  }
})
</script>

<style lang="scss">
.defeat{
  color: red;
}
</style>
