<template>
  <div id="app">
    <FilterContainer />
    <Cards />
  </div>
</template>

<script>

import FilterContainer from "./components/FilterContainer.vue";
import Cards from "./components/Cards.vue";

export default {
  name: "App",
  components: {
    FilterContainer,
    Cards,
  },
};
</script>

<style lang="less">
#app {
  font-family: "Spartan", sans-serif;
}
</style>
