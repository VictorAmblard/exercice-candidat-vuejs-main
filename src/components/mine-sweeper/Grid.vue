<template lang='pug'>
div
  table
    tr(v-for="line in grid")
      td(v-for="cell in line")
        SolverCell(v-if="cell.solverCell" :infos="cell.info")
        Cell(v-else :id="cell.id" :value="cell.value" :visible="cell.visible")

</template>

<script lang="ts">
import Vue from 'vue'
import Cell from './Cell.vue'
import SolverCell from './SolverCell.vue'
export default Vue.extend({
  name: 'Grid',
  components: {
    Cell,
    SolverCell
  },
  props: {
    grid: {
      type: Array
    }
  }
})
</script>

<style lang="scss">

</style>
