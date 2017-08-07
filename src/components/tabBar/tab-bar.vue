<template>
  <div class="tabbar">
    <ul class="tabbar-wrapper">
      <li class="tabbar-item">
        <a ref="home" href="index.html" class="tabbar-home">
          <i></i>
          首页
         </a>
      </li>

      <li class="tabbar-item">
        <a ref="announced" class="tabbar-announced">
          <i></i>
          所有商品
        </a>
      </li>

      <li class="tabbar-item">
        <a ref="single" class="tabbar-single">
          <i></i>
          最新揭晓
        </a>
      </li>

      <li class="tabbar-item">
        <a ref="cart" class="tabbar-cart">
          <i></i>
          购物车
        </a>
        <!-- <div ref="cart"></div> -->
        <!-- <span class="mycart-num" v-show="selectGoodsNum>0" ref="num">{{selectGoodsNum}}</span> -->
      </li>

      <li class="tabbar-item">
        <a ref="personal" href="member.html" class="tabbar-personal">
          <i></i>
          我的云购
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      tabName: {
        type: String
      }
    },
    mounted: function () {
      this.$refs[this.tabName].classList.add('on')
    },
    // data() {
    //   return {
    //     balls: [
    //       {
    //         show: false
    //       },
    //       {
    //         show: false
    //       },
    //       {
    //         show: false
    //       },
    //       {
    //         show: false
    //       },
    //       {
    //         show: false
    //       }
    //     ],
    //     dropBalls: []
    //   }
    // },
    // computed: {
    //   selectGoodsNum() {
    //     // return this.$store.getters.getCartList.length
    //   }
    // },
    // mounted() {

    // },

  }
</script>

<style lang="scss" scoped>
@import "../../scss/variable.scss";
   a{
    color:#2c3e50;
    text-decoration:none;
   }
  .tabbar-wrapper { 
    left: 0;
    right: 0;
    bottom: 0;
    height: $tabbar-height;
    background: #fff;
    box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.1);
    position: fixed;
    display: flex;
    flex-direction: row;//默认就是这个属性值 
    .tabbar-home {
      i {
        background: url("./images/icon_main_tab_home_uncheck.png");
        background-size: 20px 22px;
      }
    }
    //选中后
    a.on{ 
      color: $orange-color;
      i{
        background: url("./images/icon_main_tab_home_check.png");
        background-size: 20px 22px;
      }
      &.tabbar-announced{
        i{
          background: url("./images/icon_main_tab_allgoods_check.png");
          background-size: 20px 22px;
        }
      }
      &.tabbar-single {
        i {
          background: url("./images/icon_main_tab_newest_check.png");
          background-size: 20px 22px;
        }
      }
      &.tabbar-cart {
        i {
          background: url("./images/icon_main_tab_cart_check.png");
          background-size: 20px 22px;
        }
      }
      &.tabbar-personal {
        i {
          background: url("./images/icon_main_tab_home_check.png");
          background-size: 20px 22px;
        }
      }
    }

    // 未先中
    .tabbar-announced {
      i {
        background: url("./images/icon_main_tab_allgoods_uncheck.png");
        background-size: 20px 22px;
      }
    }
    .tabbar-single {
      i {
        background: url("./images/icon_main_tab_newest_uncheck.png");
        background-size: 20px 22px;
      }
    }
    .tabbar-cart {
      i {
        background: url("./images/icon_main_tab_cart_uncheck.png");
        background-size: 20px 22px;
      }
    }
    .tabbar-personal {
      i {
        background: url("./images/icon_main_tab_home_uncheck.png");
        background-size: 20px 22px;
      }
    }
    .tabbar-item {

      flex: 0 1 33.3%;
      text-align: center;
      font-size: 12px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
     
      i {
        width: 20px;
        height: 22px;
        display: block;
        margin: 0 auto 2px auto;
      }
    }
  }

  // .mycart-num {
  //   width: 18px;
  //   height: 18px;
  //   line-height: 18px;
  //   text-align: center;
  //   position: absolute;
  //   top: -5px;
  //   right: 5px;
  //   display: block;
  //   background: #f10215;
  //   color: #fff;
  //   font-style: normal;
  //   border-radius: 50%;
  //   transition: all .1s ease-out;
  // }
  // .ball-container {
  //   .ball {
  //     position: fixed;
  //     left: 32px;
  //     bottom: 22px;
  //     z-index: 200;
  //     transition: all 0.4s cubic-bezier(0.49, -0.29, 0.75, 0.41);
  //     .inner {
  //       width: 16px;
  //       height: 16px;
  //       border-radius: 50%;
  //       background: $primary-color;
  //       transition: all 0.4s linear;
  //     }
  //   }
  // }
</style>
