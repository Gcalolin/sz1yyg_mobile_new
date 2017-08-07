<template>
  <div class="container">
    <!-- 轮播 -->
    <swiper ref="mySwiper" class="my-swiper" :options="swiperOption">
      <swiper-slide v-for="item in orderSlideImg" :key="item.order"><img :src="item.image" :alt="item.title"></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <!-- 导航栏-->
    <index-nav></index-nav>
    <!-- 最新揭晓 -->
    <index-lottery></index-lottery>
    <h1 class="section-title">猜你喜欢</h1>
    <!-- <div class="index-product-wrapper clearfix">
      <div class="index-product-items-wrapper border-1px" v-for="i in UMayLike">
        <index-product-item :goodsItem="i" showProgressText="true" @add="addCart"></index-product-item>
      </div>
    </div> -->
    <!-- <modal></modal> -->
  </div>
</template>

<script>
  // 引入插件
  import {
    swiper,
    swiperSlide
  } from 'vue-awesome-swiper';
  // 引入组件
  import indexNav from './index-nav.vue';
  import indexLottery from './index-lottery.vue';
  import indexProductWrapper from './index-product-item.vue';
  // import modal from '../../components/modal.vue'
  // 获得接口
  // import {
  //   slide
  // } from '../../server';

  export default {
    name: 'hello',
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          paginationClickable: true,
          autoplayDisableOnInteraction: false,
          autoplay: 3000,
          loop: true
        },
        slideImg: [],
        // UMayLike:{}
      }
    },
    computed: {
      orderSlideImg() {
        return this.slideImg.sort(function(a,b){
          return b.order-a.order
        })
      }
    },
    mounted() {
      let _this_ = this;
      //获取slideImg数据
      slide().then(function (res) {
        _this_.slideImg = res.data.data;
      });
//      this.$ajax.get('/slides')
//        .then(function(response) {
//          _this_.slideImg = response.data.data;
//        })
//        .catch(function(error) {
//          console.log(error);
//        });
        //获取首页猜你喜欢的数据
//      this.$ajax.get('/goods').then((res)=>{
//        this.UMayLike=res.data.data
//      })
    },
    // methods: {
    //   addCart(target){
    //     this.$emit('add', target);
    //   }
    // },
    components: {
      swiper,
      swiperSlide,
      // modal,
      'index-nav': indexNav,
      'index-lottery': indexLottery,
      // 'index-product-item': indexProductWrapper
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .my-swiper {
    height: 194px;
    color: #fff;
    font-size: 30px;
    text-align: center;
    .swiper-slide {
      img {
        width: 100%;
        height: inherit;
      }
    }
  }
  .section-title {
    margin: 8px 0;
    font-size: 12px;
    text-align: center;
    &::before,
    &::after {
      content: '';
      display: inline-block;
      width: 80px;
      height: 1px;
      transform: scaleY(0.3);
      background: rgba(0, 0, 0, 0.4);
      margin: 3px 10px;
    }
  }
  .index-product-wrapper {
    width: 100%;
    margin: 0 auto;
    background-color: #fff;
    .index-product-items-wrapper {
      box-sizing: border-box;
      padding: 0 0 10px 0;
      &:nth-child(odd) {
        float: left;
      }
      width: 50%;
      padding: 10px;
      &:nth-child(even) {
        float: right;
      }
    }
  }
</style>
