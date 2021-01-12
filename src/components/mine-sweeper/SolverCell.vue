<template lang='pug'>
div(class="solvercell") {{ infos }}
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'SolverCell',
  props: {
    infos: {
      type: String
    }
  }
})
</script>

<style lang="scss">
.solvercell{
  padding-top: 35%;
  text-align: center;
  width: 100px;
  height: 100px;
  background-color: pink;
}
</style>
