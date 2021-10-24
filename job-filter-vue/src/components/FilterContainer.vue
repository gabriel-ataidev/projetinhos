<template>
  <div id="filter">
      <p>filter is working</p>
  </div>
</template>

<script>
export default {
    name: "FilterContainer",
    data() {
        return{
            // data: null,
            // company: null,
            // companies: null,
        }
    },
    methods: {
        async getData() {
            const req = await fetch("http://localhost:3000/data");
            const dataJson = await req.json();
            console.log(dataJson);
            // for (let i = 0; i < dataJson.length; i++) {
            //     this.data = dataJson[i];
            //     this.companies = dataJson[i].company;
            //     console.log(dataJson[i].company);
            // }
        }
    },
    mounted() {
        this.getData();
    }
}
</script>

<style>

</style>