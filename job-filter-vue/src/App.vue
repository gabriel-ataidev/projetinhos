<template>
  <div id="app">
    <Background />
    <FilterContainer />
    <Cards />
  </div>
</template>

<script>

import Background from "./components/Background.vue";
import FilterContainer from "./components/FilterContainer.vue";
import Cards from "./components/Cards.vue";
// import axios from 'axios';

export default {
  name: "App",
  components: {
    Background,
    FilterContainer,
    Cards,
  },
  // created() {
  //   axios.get('http://localhost:3000/data').then( response => {
  //     console.log(response);
  //   });
  // },
}
</script>

<style lang="less">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body,
a,
button {
  font: 700 15px "Spartan", sans-serif;
}
#app {
  font-family: "Spartan", sans-serif;
}
</style>
