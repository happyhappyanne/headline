<template>

  <div class="home" ref="home">
    <!-- 头部 -->
    <van-nav-bar left-arrow class="head" @click-right="goSearch">
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
=======
    <!-- <van-sticky> -->
      <van-tabs
        class="nav"
        background="#F4F5F6"
        :swipeable="true"
        title-active-color="#4C6FDA"
        color="#4C6FDA"
        sticky
        @change="current"
      >
        <van-tab v-for="(item, index) in tab" :key="index" :title="item" class="nav-tab">
          <section class="container">
            <div class="item" v-for="item in list" :key="item.uniquekey" @click="go(item.url)">
              <h3>{{item.title}}</h3>
              <div class="img">
                <div>
                  <van-image lazy-load width="170" :src="item.thumbnail_pic_s" alt />
                </div>
                <div>
                  <van-image lazy-load width="170" :src="item.thumbnail_pic_s02" alt />
                </div>
              </div>
              <p>
                <span>时间：{{item.date}}</span>&nbsp;&nbsp;
                <span>作者：{{item.author_name}}</span>
              </p>
            </div>
          </section>
        </van-tab>
      </van-tabs>
    <!-- </van-sticky> -->
  </div>
</template>
<script>
import { async } from 'q'
import { get } from 'http';
export default {
  data: function() {
    return {
      tab: ['头条', '社会', '国内', '国际', '娱乐', '体育', '科技'],
      list: [],
      container: null,
      aa: ''
    }
  },
  methods: {
    current: function(name, title){
      console.log(name);
      console.log(title);
      switch(title){
        case "头条":
          this.url = '/top';
          break;
          case "社会":
          this.url = '/shehui';
          break;
          case "国内":
          this.url = '/guonei';
          break;
          case "国际":
          this.url = '/guoji';
          break;
          case "娱乐":
          this.url = '/yule';
          break;
          case "体育":
          this.url = '/tiyu';
          break;
          case "科技":
          this.url = '/keji';
          break;
      }
      console.log(this.url);
      this.getData(this.url);
    },
    //获取后端数据
    getData(url){
      this.$http.get(url).then(res => {
      // console.log(res);
      // 请求失败
      if (res.status !== 200) {
        alert('加载失败')
        return
      }
      this.list = res.data
      console.log(this.list)
    })
    },
    //进入搜索页面
    goSearch(){
      this.$router.push('/search');
    },
    //跳转详情页
    go(url){
      console.log(url);
      location.assign(url);
    }
  },
  beforeMount: function() {
    this.getData('/top');

  }
}
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
      padding-bottom: 26px;
      display: flex;
      justify-content: space-around;
      div {
        flex: 1;
        overflow: hidden;
        img {
          width: 100%;
        }
      }
      :first-child {
        margin-right: 28px;
      }
    }
  }
}
</style>