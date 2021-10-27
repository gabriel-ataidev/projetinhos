<template>
  <div class="background">
      <div class="bg-image">
        <img src="/images/bg-header-desktop.svg" />
      </div>
    </div>
</template>

<script>
export default {
    name: "Background",
}
</script>

<style lang="less" scoped>
.background {
  height: 100vh;
  width: 100vw;
  position: fixed;
  background: #effafa;
  .bg-image {
    background: #5ba4a4;
    max-height: 17vh;
    overflow: hidden;
    img {
      max-height: inherit;
      min-width: 100vw;
    }
  }
}
</style>