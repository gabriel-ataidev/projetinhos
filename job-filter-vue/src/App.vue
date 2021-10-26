<template>
  <div id="app">
    <FilterContainer />
    <Cards />
  </div>
</template>

<script>

import FilterContainer from "./components/FilterContainer.vue";
import Cards from "./components/Cards.vue";
import axios from 'axios';

export default {
  name: "App",
  components: {
    FilterContainer,
    Cards,
  },
  created() {
    axios.get('http://localhost:3000/data').then( response => {
      console.log(response);
    });
  },
}
</script>

<style lang="less">
#app {
  font-family: "Spartan", sans-serif;
}
</style>
