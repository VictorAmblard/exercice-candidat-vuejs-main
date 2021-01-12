<template lang='pug'>
div
  button(@click="newGrid") New game
  Grid(:grid="grid")
  Score(:score="score")
</template>

<script lang="ts">
import Vue from 'vue'
import Grid from './Grid.vue'
import Score from './Score.vue'
import { mapState, mapActions } from 'vuex'
export default Vue.extend({
  name: 'BoardGame',
  components: {
    Grid,
    Score
  },
  computed: {
    ...mapState(['grid', 'score'])
  },
  methods: {
    ...mapActions(['newGrid'])
  }
})
</script>

<style lang="scss">
</style>
