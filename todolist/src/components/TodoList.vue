<template>
  <div class="todo-list">
    <h3>Todo List</h3>
    <input type="text" class="input-new-item" v-on:keyup.enter="addNewItemToList">

    <ul>
      <li v-for="(item, index) in list" :key="index">
        <span class="list-item">
          <input type="checkbox" :id="index" class="item-checkbox" v-model="item.checked">
          <label :for="index" :class="getItemClass(item.checked)">{{ item.label}}</label>
        </span>
        <span v-html="deleteIcon" @click="deleteItem(index)"></span>
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
      event.target.value = '';
    },
    deleteItem(index){
      this.list.splice(index, 1);
    },
    updateLocalStorage() {
      localStorage.setItem('list', JSON.stringify(this.list));
    }
  },
  watch: {
    list() {
      this.updateLocalStorage();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .todo-list{
    width: 500px;
    margin: auto;
  }
  .input-new-item{
    width: 80%;
    height: 30px;
  }
  ul{
    list-style: none;
    padding: 0;
    width: 80%;
    margin: 20px auto;
    text-align: left;  
  }
  li, .list-item{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .item-checkbox{
    margin-right: 10px;
  }
  .item-checked{
    text-decoration: line-through;
  }
</style>