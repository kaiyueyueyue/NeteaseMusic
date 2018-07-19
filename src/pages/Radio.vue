<template>
    <div>
        <radio-banner></radio-banner>
        <radio-nav></radio-nav>
        <radio-chioce></radio-chioce>
        <radio-recommend></radio-recommend>
        <radio-classify></radio-classify>
    </div>
</template>
<script>
import IndexHeader from "../components/common/IndexHeader";
import RadioBanner from "../components/radio/RadioBanner";
import RadioNav from "../components/radio/RadioNav";
import RadioChioce from "../components/radio/RadioChioce";
import RadioRecommend from "../components/radio/RadioRecommend";
import RadioClassify from "../components/radio/RadioClassify";
export default {
  components: {
    IndexHeader,
    RadioNav,
    RadioChioce,
    RadioRecommend,
    RadioClassify,
    RadioBanner
  },
  mounted() {
    // console.log(this.$route.query.phone, this.$route.query.password);
  }
};
</script>

<style lang="scss" scoped>
</style>
