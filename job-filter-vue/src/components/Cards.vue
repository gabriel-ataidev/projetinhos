<template>
  <div id="cards">
    <p>cards is working</p>
    <div
      v-for="(n, index) in 10"
      :key="index"
      class="card"
      :class="cardFeatured"
    >
      <div class="image"><img :src="cards[index].logo" /></div>
      <div class="text">
        <div class="line1">
          <span>{{ cards[index].company }}</span
          ><span v-show="cards[index].new" class="color-card new">NEW!</span
          ><span
            class="color-card"
            :class="featured"
            v-show="cards[index].featured"
            >FEATURED</span
          >
        </div>
        <div class="line2">
          <h1>{{ cards[index].position }}</h1>
        </div>
        <div class="line3">
          <span>{{ cards[index].postedAt }}</span
          ><span>{{ cards[index].contract }}</span
          ><span>{{ cards[index].location }}</span>
        </div>
      </div>
      <div class="technologies">
        <span>{{ cards[index].role }}</span>
        <span>{{ cards[index].level }}</span>
        <span v-for="(n, v) in 3" :key="v" v-show="cards[index].tools[v]">{{
          cards[index].tools[v]
        }}</span>
        <span v-for="(n, i) in 3" :key="i" v-show="cards[index].languages[i]">{{
          cards[index].languages[i]
        }}</span>
      </div>
    </div>
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