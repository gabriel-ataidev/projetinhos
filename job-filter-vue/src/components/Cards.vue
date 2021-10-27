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

</style>#cards {
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  align-items: center;
  .card {
    background: #fff;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    width: 100%;
    max-width: 80vw;
    padding: 20px 30px;
    border-radius: 5px;
    filter: drop-shadow(0px 1px 10px #6ec4c43d);
    .text {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin: 5px 20px;
      min-height: 88px;
      .line1 {
        color: #5ba4a4;
        font-size: 13px;
        span + span {
          margin-left: 6px;
        }
        .color-card {
          text-align: center;
          font-size: 11px;
          color: white;
          background: #5ba4a4;
          padding: 7px 7px 5px;
          border-radius: 14px;
        }
        .featured {
          background: #000;
        }
      }
      .line2 {
        display: flex;
        font-size: 12px;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        &:hover {
          color: #5ba4a4;
        }
      }
      .line3 {
        color: #a2a3a3;
        font-weight: 500;
        font-size: 14px;
        span {
          padding-right: 15px;
          & + span {
            &::before {
              content: "•";
              padding-right: 15px;
            }
          }
        }
      }
    }
    .technologies {
      display: flex;
      flex: 1;
      justify-content: flex-end;
      span {
        font-size: 12px;
        border: none;
        padding: 9px 8px 6px;
        margin: 0 8px;
        background: #eff6f7;
        color: #5ba4a4;
        border-radius: 5px;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        &:hover {
          color: #eff6f7;
          background: #5ba4a4;
        }
      }
    }
  }
  .card-disabled {
    display: none;
  }
  .card-featured {
    border-left: 5px solid #5ba4a4;
  }
}
@media (max-width: 376px) {
  #cards {
    margin: 40px 25px;
    .card {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 10px 15px;
      margin: 0;
      margin-top: 40px;
      height: 100%;
      min-height: fit-content;
      position: relative;
      .image {
        position: absolute;
        top: -30px;
        left: 15px;
        img {
          max-width: 50px;
          height: auto;
        }
      }
      .text {
        display: flex;
        margin: 0;
        flex-direction: column;
        align-items: flex-start;
        margin-top: 30px;
        .line1 {
          font-size: 16px;
        }
        .line2 {
          padding: 20px 0;
        }
        .line3 {
          font-size: 13px;
        }
      }
      .technologies {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        justify-content: flex-start;
        margin: 20px 0;
        border-top: 1px solid #a2a3a3;
        span {
          margin: 16px 16px 0 0;
        }
      }
    }
  }
}
</style>
