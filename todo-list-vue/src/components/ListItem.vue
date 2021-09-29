<template>
  <li>
    <span class="list-item">
      <input
        type="checkbox"
        :id="index"
        class="item-checkbox"
        v-model="item.checked"
      />
      <label :for="index" :class="getItemClass(item.checked)">{{
        item.label
      }}</label>
    </span>
    <span v-html="deleteIcon" @click="deleteItem(index)"></span>
  </li>
</template>

<script>
import feather from "feather-icons";
export default {
  name: "ListItem",
  props: {
    item: Object,
    index: Number,
  },
  computed: {
    deleteIcon() {
      return feather.icons.trash.toSvg({ width: 19 });
    },
  },
  methods: {
    getItemClass(itemChecked) {
      return itemChecked ? "item-checked" : "";
    },
    deleteItem(index) {
      this.$emit("delete-item", index);
    },
  },
};
</script>

<style scoped>
li {
  width: 100%;
}
li,
.list-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.item-checkbox {
  margin-right: 10px;
}
.item-checked {
  text-decoration: line-through;
}
</style>
