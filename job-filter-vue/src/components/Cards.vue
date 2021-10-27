<template>
  <div id="cards">
    <p>cards is working</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
    name: 'Cards',
}
  name: "Cards",
  data() {
    return {
      cards: null,
    };
  },
  created() {
    axios.get("http://localhost:3000/data").then((response) => {
      this.cards = response.data;
    });
  },
};
</script>

<style>

</style>