<template>
<div class="banner-box">
    <mt-swipe class="banner" :auto="2000" :show-indicators="false">
        <mt-swipe-item><img src="../../assets/images/radio/radio-banner-1.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../../assets/images/radio/radio-banner-2.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../../assets/images/radio/radio-banner-3.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../../assets/images/radio/radio-banner-4.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../../assets/images/radio/radio-banner-5.jpg" alt=""></mt-swipe-item>
    </mt-swipe>

</div>
    
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.banner {
  width: 96%;
  height: 1.35rem;
  margin: 0.1rem auto;
  border-radius: 0.05rem;
}
.banner-box {
  //   overflow: hidden;
  padding-top: 0.1rem;
  height: 1.11rem;
  background: #e24439;
}
img {
  width: 100%;
  height: 100%;
}
</style>
