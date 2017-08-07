<template>
  <div>
    <ul class="index-nav-wrapper">
      <li @click="show"><img src="../images/home_navigation_new_goods.png" alt="">新品</li>
      <li><img src="../images/home_navigation_limited.png" alt="">限购</li>
      <li><img src="../images/home_navigation_share_post.png" alt=""
               @click="test">晒单
      </li>
      <li><img src="../images/home_navigation_new_commer.png" alt="">新手</li>
      <li><img src="../images/home_navigation_recharge.png" alt="">充值</li>
    </ul>
    <alert-tip v-if="showAlert" @closeTip="showAlert = false"></alert-tip>
  </div>
</template>
<script>
  // import alertTip from '@/components/common/alert_tip/alert-tip.vue';
  export default{
    data() {
      return {
        showAlert: false
      }
    },
    methods: {
      // show() {
      //   this.showAlert = true;
      // },
      test() {
          console.log(this.$router);
          // this.$router.push({path: '/posts'})
      }
    },
    components: {
      // alertTip
    }
  }
</script>
<style lang="scss">
  .index-nav-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    height: 90px;
    // line-height: 80px;
    background-color: #fff;
    li {
      flex: 0 1 18%;
      height: 80px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      padding: 3px 10px;
      color: #999;
      font-size: 13px;
      img {
        width: 40px;
        height: 40px;
        flex: 0 0 40px;
      }
    }
  }
</style>
