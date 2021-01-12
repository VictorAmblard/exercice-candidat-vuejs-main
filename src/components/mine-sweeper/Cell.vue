<template lang='pug'>
div(v-if="visible && value === 0" id="visible" class="cell") &#128163;
div(v-else-if="visible && value > 0" id="visible" class="cell") {{ value }}
div(v-else-if="helper && value === 3" id="helper" class="cell" @click="clickCell(id)")
div(v-else class="cell" @click="clickCell(id)")
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapActions } from 'vuex'
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
  computed: {
    ...mapState(['helper'])
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

#helper{
  background-color: yellow;
}

</style>
