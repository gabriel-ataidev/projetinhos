<template>
  <div class="todo-list">
    <h3>Todo List</h3>
    <input type="text">

    <ul>
      <li v-for="(item, index) in list" :key="index">
        <input type="checkbox" v-model="item.checked">
        {{ item.label}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  data() {
    return {
      list: [ {label: 'fazer almoço', checked: true},
      {label: 'fazer almoço 2', checked: false} ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul{
    list-style: none;
    padding: 0;
  }
</style>
