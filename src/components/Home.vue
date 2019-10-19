<template>
  <div class="home">
    <!-- 头部 -->
    <van-nav-bar left-arrow class="head" :fixed="true">
      <van-icon name="envelop-o" slot="left" class="home-left" />
      <img src="../assets/images/logo.png" width="182" height="52" slot="title" class="home-title" />
      <van-icon name="search" slot="right" class="home-right" />
    </van-nav-bar>
    <!-- 导航 -->
    <van-tabs
      class="nav"
      background="#F4F5F6"
      :swipeable="true"
      title-active-color="#4C6FDA"
      color="#4C6FDA"
    >
      <van-tab v-for="item in tab" :title="item" class="nav-tab">
        <section class="container">
          <div class="item" v-for="item in list">
            <h3>{{item.title}}</h3>
            <div class="img">
              <img src="{{item.thumbnail_pic_s}}" alt />
              <img src="{{itemt.humbnail_pic_s02}}" alt />
            </div>
            <p>
              <span>时间：{{item.date}}</span>
              <span>作者：{{item.author}}</span>
            </p>
          </div>
        </section>
      </van-tab>
    </van-tabs>
    {{list}}
  </div>
</template>
<script>
import { async } from "q";
export default {
  data: function() {
    return {
      tab: ["头条", "社会", "国内", "国际", "娱乐", "体育", "科技"],
      list: []
    };
  },
  methods: {},
  beforeMount: function() {
    this.$http.get("/top").then(res => {
      // console.log(res);
      // 请求失败
      if (res.status !== 200) {
        alert('加载失败');
        return;
    }
    this.list = res.data;

    });
  }
};
</script>
<style lang="less" scoped>
.home {
  height: 1000px;
}
.head {
  height: 90px;
  line-height: 90px;
  font-size: 34px;
  .home-left,
  .home-right {
    font-size: 34px;
  }
  .home-title {
    vertical-align: middle;
  }
}
.nav {
  margin-top: 90px;
  .container {
    padding: 0 23px;
    box-sizing: border-box;
    .item {
      padding: 23px 0 23px 0;
      border-bottom: 1px solid #bbb;
      p {
        font-size: 18px;
        color: #bbb;
      }
    }
    .item h3 {
      font-size: 30px;
      padding-bottom: 30px;
    }
    .item .img {
      display: flex;
      justify-content: space-around;
      padding-bottom: 26px;
      img {
        flex: 1;
      }
      :first-child {
        margin-right: 28px;
      }
    }
  }
}
</style>