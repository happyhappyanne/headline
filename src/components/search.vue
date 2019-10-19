<template>
  <div>
    <van-search placeholder="请输入搜索关键词" show-action shape="round" @search="onSearch">
      <div slot="action" @click="onSearch">搜索</div>
    </van-search>
    <div class="love">
        <h3>猜你喜欢</h3>
        <span>前端公开课</span><span>前端公开课</span><span>前端公开课</span><span>前端公开课</span><span>前端公开课</span><span>前端公开课</span><span>前端公开课</span><span>前端公开课</span>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {}
  },
  methods: {
      //搜索
      onSearch: function(){
          this.$toast('点击了搜索');
      }
  }
}
</script>

<style lang="less" scoped>
    .love {
        padding: 0 20px 0 17px;
        color: #333;
        h3 {
            height: 30px;
            text-align: center;
            font-size: 20px;
            vertical-align: bottom;
            font-weight: normal;
        }
        span {
            margin-right: 20px;
            line-height: 28px;
            font-size: 16px;
        }
    }
</style>