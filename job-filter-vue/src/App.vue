<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <FilterContainer msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import FilterContainer from './components/FilterContainer.vue'

export default {
  name: 'App',
  components: {
    FilterContainer,
  }
}
</script>

<style>

</style>
