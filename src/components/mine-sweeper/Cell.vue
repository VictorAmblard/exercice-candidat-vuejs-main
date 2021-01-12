<template lang='pug'>
div(v-if="visible" id="visible" class="cell") {{ value }}
div(v-else id="nonvisible" class="cell" @click="clickCell(id)")
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'
export default Vue.extend({
  name: 'Cell',
  props: {
    id: {
      type: Number
    },
    value: {
      type: Number
    },
    visible: {
      type: Boolean
    }
  },
  methods: {
    ...mapActions(['clickCell'])
  }
})
</script>

<style lang="scss">
.cell{
  padding: 35%;
  text-align: center;
  cursor: pointer;
  width: 100px;
  height: 100px;
  background-color: green;
}

#visible{
  background-color: white;
}

.nonvisible{
  padding: 35%;
  text-align: center;
  cursor: pointer;
  width: 100px;
  height: 100px;
  background-color: green;
}

</style>
