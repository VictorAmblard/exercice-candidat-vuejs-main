<template>
  <div class="listItem">
    <h4 class="title"> {{ title }} </h4>
    <ul>
      <li class="item" v-for="item in items" :key="item.title"> {{ item.title }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ListItem',
  props: {
    title: {
      type: String
    },
    items: {
      type: Array
    }
  }
}
</script>

<style lang="scss">
.title{
  margin-left: 40px;
  font-weight: bold;
}
.listItem{
  background-color: #f8f9f9;
  padding-right: 20px;
}
.item{
  list-style-type: none;
  background-color: white;
  padding: 10px;
  padding-right: 330px;
  font-size: 14px;
  border: solid 1px;
  border-color: #e7e5e2;
}
</style>
