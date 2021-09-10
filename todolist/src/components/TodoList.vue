<template>
  <div class="todo-list">
    <h3>Todo List</h3>
    <input type="text" v-on:keyup.enter="addNewItemToList">

    <ul>
      <li v-for="(item, index) in list" :key="index">
        <input type="checkbox" v-model="item.checked">
        <span :class="getItemClass(item.checked)">{{ item.label}}</span>
        <span v-html="deleteIcon"></span>
      </li>
    </ul>
  </div>
</template>

<script>
import feather from 'feather-icons';

export default {
  name: 'TodoList',
  data() {
    return {
      list: [ {label: 'fazer almoço', checked: true},
      {label: 'fazer almoço 2', checked: false} ]
    }
  },
  created() {
    const itensInLocalStorage = JSON.parse(localStorage.getItem('list'));
    this.list = itensInLocalStorage ? itensInLocalStorage : [];
  },
  computed: {
    deleteIcon() {
      return feather.icons.trash.toSvg({ 'width': 19})
    }
  },
  methods: {
    getItemClass(itemChecked) {
      return itemChecked ? 'item-checked' : '';
    },
    addNewItemToList(event) {
      const newItem = event.target.value;
      this.list.unshift({
        label: newItem, checked: false
      });

      localStorage.setItem('list', JSON.stringify(this.list));
      event.target.value = '';
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
  .item-checked{
    text-decoration: line-through;
  }
</style>