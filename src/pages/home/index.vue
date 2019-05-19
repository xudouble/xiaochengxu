<template>
  <div>
    <!-- 搜索条 -->
    <search-bar></search-bar>
    <!-- 轮播图 -->
    <swiper :indicator-dots="indicatorDots">
      <swiper-item :key="index" v-for="(item, index) in imgUrls">
        <image :src="item" class="slide-image"/>
      </swiper-item>
    </swiper>
    <!-- 菜单效果 -->
    <div class="menu">
    <img :key='index' v-for='(item, index) in menus' :src="item.image_src">
    </div>

<!-- 楼层效果 -->
<div class="floor">
  <div class="floor-title">
    <img src="https://www.zhengzhicheng.cn/pyg/pic_floor01_title.png" alt="">
  </div>
  <div class="floor-content">
    <div class="left">
      <img src="https://www.zhengzhicheng.cn/pyg/pic_floor01_1@2x.png" alt="">
    </div>
    <div class="right">
      <img src="https://www.zhengzhicheng.cn/pyg/pic_floor01_2@2x.png" alt="">
       <img src="https://www.zhengzhicheng.cn/pyg/pic_floor01_2@2x.png" alt="">
        <img src="https://www.zhengzhicheng.cn/pyg/pic_floor01_2@2x.png" alt="">
         <img src="https://www.zhengzhicheng.cn/pyg/pic_floor01_2@2x.png" alt="">
    </div>
  </div>
</div>

  </div>
</template>
<script>
// 导入公共的Search组件
import SearchBar from "../../components/search";
// 导入公共调用接口方法
import request from "../../utils/request";
export default {
  data() {
    return {
      // 该属性的作用：显示底部的小圆点
      indicatorDots: true,
      imgUrls: [
        "https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640",
        "https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640",
        "https://images.unsplash.com/photo-1551446591-142875a901a1?w=640"
      ],
      menus: []
    };
  },
  components: {
    "search-bar": SearchBar
  },
  created() {
    // let that = this;
    this.initData();
    // 调用后台接口，获取轮播图数据
    // mpvue.request({
    //   url: "https://www.zhengzhicheng.cn/api/public/v1/home/swiperdata",
    //   success: function(res) {
    //     // console.log(res)
    //     // 使用服务器返回的数据覆盖data中的数据
    //     // that.imgUrls = res.data.message;
    //     // res.data.message本身是对象数组，但是，我们只需要图片地址
    //     let imgs = res.data.message.map(item => {
    //       return item.image_src;
    //     });
    //     // 更新图片数据
    //     that.imgUrls = imgs;
    //   }
    // });
    // // 调用菜单接口
    // mpvue.request({
    //   url: "https://www.zhengzhicheng.cn/api/public/v1/home/catitems",
    //   success: function(res) {
    //     console.log(res);
    //     //   let menuRes=res.data.message
    //     that.menus = res.data.message;
    //   }
    // });
  },
  methods: {
    async initData() {
      // 轮播图数据
      let swiperRes = await request("home/swiperdata");
      let imgs = swiperRes.data.message.map(item => {
        return item.image_src;
      });
      // 更新图片数据
      this.imgUrls = imgs;
  
      // 菜单数据
   
      let menuRes = await request("home/catitems");
      this.menus = menuRes.data.message;
    }
  }
};
</script>
<style scoped>
.slide-image {
  width: 750rpx;
}
.menu {
  display: flex;

  justify-content: space-around;
}
.menu img {
  width: 128rpx;
  height: 140rpx;
}
.floor {
  margin-top: 10rpx;
}
.floor .floor-title img {
  width: 750rpx;
  height: 80rpx;
}
.floor .floor-content {
  display: flex;
  justify-content: space-around;
}
.floor .floor-content .left img {
  width: 260rpx;
  height: 370rpx;
}
.floor .floor-content .right {
  flex: 1;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.floor .floor-content .right img {
  width:232rpx;
  height:188rpx;
  border-radius:4px;
}
</style>