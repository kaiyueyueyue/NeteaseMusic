<template>
    <ul>
        <li>
            <img src="../../assets/images/radio/radio-nav-1.jpg" alt="">
            <p>电台分类</p>
        </li>
        <li>
            <img src="../../assets/images/radio/radio-nav-2.jpg" alt="">
            <p>电台排行</p>
        </li>
        <li>
            <img src="../../assets/images/radio/radio-nav-3.jpg" alt="">
            <p>付费精品</p>
        </li>
        <li>
            <img src="../../assets/images/radio/radio-nav-4.jpg" alt="">
            <p>矮大紧指北</p>
        </li>
    </ul>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.54rem 0 0.09rem;
  border-bottom: 2px solid #eeeff1;
  //   background: #fff;
  img {
    width: 0.49rem;
    height: 0.49rem;
    border-radius: 50%;
  }
  p {
    font-size: 0.11rem;
    color: #2d2f2e;
    line-height: 0.28rem;
    text-align: center;
  }
}
</style>
