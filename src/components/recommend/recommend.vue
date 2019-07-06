<template>
  <div>推荐页面</div>
</template>

<script type='text/ecmascript-6'>
import { getRecommend } from "api/recommend";
import { ERR_OK } from "api/config";

export default {
  created() {
    //页面加载完的钩子，这里调用自己的方法_getRecommend
    this._getRecommend();
  },
  methods: {
    _getRecommend() {
      //实际上是使用了 api/recommend 中的 getRecommend()
      getRecommend().then(resp => {
        if (resp.code === ERR_OK) {
          console.log(resp.data.slider);
        }
      });
    }
  }
};
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
@import '~common/stylus/variable';

.recommend {
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;

  .recommend-content {
    height: 100%;
    overflow: hidden;

    .slider-wrapper {
      position: relative;
      width: 100%;
      overflow: hidden;
    }

    .recommend-list {
      .list-title {
        height: 65px;
        line-height: 65px;
        text-align: center;
        font-size: $font-size-medium;
        color: $color-theme;
      }

      .item {
        display: flex;
        box-sizing: border-box;
        align-items: center;
        padding: 0 20px 20px 20px;

        .icon {
          flex: 0 0 60px;
          width: 60px;
          padding-right: 20px;
        }

        .text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex: 1;
          line-height: 20px;
          overflow: hidden;
          font-size: $font-size-medium;

          .name {
            margin-bottom: 10px;
            color: $color-text;
          }

          .desc {
            color: $color-text-d;
          }
        }
      }
    }

    .loading-container {
      position: absolute;
      width: 100%;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
</style>


