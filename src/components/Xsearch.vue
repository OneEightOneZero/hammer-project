<template>
  <section _ngcontent-c0 class="main-wrapper is-header-shown">
    <div _ngcontent-c0></div>
    <div _nghost-c8 class>
      <div _ngcontent-c8 class="search-wrap active">
        <div _ngcontent-c8 _nghost-c9>
          <div _ngcontent-c9 class="search-form">
            <div _ngcontent-c9 class="module-form-row-m">
              <div _ngcontent-c9 class="form-item" style="margin-top:-6px;">
                <input
                  _ngcontent-c9
                  class="input-box ng-untouched ng-pristine ng-valid"
                  maxlength="30"
                  type="text"
                  placeholder="请输入要搜索的内容"
                  
                >
                <!---->
              </div>
              <span _ngcontent-c9 class="search-btn"></span>
              <span _ngcontent-c9 class="cancel" @click="toContact">返回</span>
            </div>
          </div>
          <div _ngcontent-c9 _nghost-c10>
            <!---->
          </div>
          <div _ngcontent-c9 _nghost-c11 class="ng-tns-c11-8">
            <div _ngcontent-c11 class="ng-tns-c11-8">
              <div
                _ngcontent-c11
                class="item-board-shade ng-trigger ng-trigger-itemShadeAnimate"
                style="background-color: rgba(0, 0, 0, 0.8); display: none;"
              ></div>
              <div
                _ngcontent-c11
                class="item-board ng-trigger ng-trigger-itemBoardAnimate"
                style="display: none;"
              ></div>
            </div>
          </div>
        </div>
        <div _ngcontent-c8 class="hot-list">
          <h4 _ngcontent-c8>热门搜索</h4>
          <ul _ngcontent-c8>
            <!---->
            <li _ngcontent-c8 class="color-0">坚果 Pro 2S</li>
            <li _ngcontent-c8 class="color-1">坚果 R1</li>
            <li _ngcontent-c8 class="color-2">坚果 3</li>
            <li _ngcontent-c8 class="color-3">闹钟式无线充电座</li>
            <li _ngcontent-c8 class="color-4">畅呼吸净化器</li>
            <li _ngcontent-c8 class="color-5">移动电源</li>
            <li _ngcontent-c8 class="color-6">卫衣</li>
            <li _ngcontent-c8 class="color-7">帆布鞋</li>
            <li _ngcontent-c8 class="color-8">保护套</li>
            <li _ngcontent-c8 class="color-9">口罩</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  methods: {
    toContact() {
      // this.$router.push('/app/contact')
      // 根据命名路由来进行跳转
      this.$router.push({ name: "wechat" });
    }
  }
};
</script>
<style scoped>
.main-wrapper.is-header-shown[_ngcontent-c0] {
    margin-top: 50px;
}
.main-wrapper[_ngcontent-c0] {
    overflow: scroll;
}
.search-wrap.active[_ngcontent-c8] {
    opacity: 1;
    top: 0;
    left: 0;
    -webkit-transform: translate(0);
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    transition: opacity 0s linear,-webkit-transform .25s cubic-bezier(.4,.01,.165,.99);
    transition: transform .25s cubic-bezier(.4,.01,.165,.99),opacity 0s linear;
    transition: transform .25s cubic-bezier(.4,.01,.165,.99),opacity 0s linear,-webkit-transform .25s cubic-bezier(.4,.01,.165,.99);
}
.search-wrap[_ngcontent-c8] {
    color: #000;
    background-color: #ededed;
    overflow: auto;
    position: fixed;
    padding: .5rem;
    padding-top: 2.4rem;
    top: 0;
    left: 50rem;
    right: 0;
    bottom: 0;
    z-index: 600;
    opacity: 0;
    -webkit-transform: translate(100%);
    -webkit-transform: translate3d(100%,0,0);
    transform: translate3d(100%,0,0);
    transition: opacity 0s linear .25s,left 0s linear .25s,-webkit-transform .25s cubic-bezier(.4,.01,.165,.99);
    transition: transform .25s cubic-bezier(.4,.01,.165,.99),opacity 0s linear .25s,left 0s linear .25s;
    transition: transform .25s cubic-bezier(.4,.01,.165,.99),opacity 0s linear .25s,left 0s linear .25s,-webkit-transform .25s cubic-bezier(.4,.01,.165,.99);
}
.search-form[_ngcontent-c9] {
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 2.4rem;
    padding: .46rem .3rem;
    z-index: 205;
    background-color: #f5f5f5;
    box-shadow: 0 1px 10px 0 rgba(0,0,0,.1);
}
.module-form-row-m[_ngcontent-c9] {
    position: relative;
    height: 100%;
}
.module-form-row-m[_ngcontent-c9] {
    display: flex;
    margin: 0 auto;
}
.module-form-row-m[_ngcontent-c9] .form-item[_ngcontent-c9] {
    height: 1.5rem;
    border-radius: .8rem;
}
.module-form-row-m[_ngcontent-c9] .form-item[_ngcontent-c9] {
    overflow: hidden;
    box-flex: 1;
    flex: 1;
    -moz-flex: 1;
    -webkit-flex: 1;
    position: relative;
    height: 2.15rem;
    background: #fff;
    border-radius: .25rem;
    box-shadow: inset 0 0.05rem 5px rgba(0,0,0,.02), inset 0 2px 8px rgba(0,0,0,.15), inset 0 0 0 0.05rem rgba(0,0,0,.1), 0 0.05rem 0.05rem 0 hsla(0,0%,100%,.1);
    color: #333;
}
.module-form-row-m[_ngcontent-c9] .form-item[_ngcontent-c9] .input-box[_ngcontent-c9] {
    font-size: .7rem;
    height: 100%;
    padding-left: 1.5rem;
}
.module-form-row-m[_ngcontent-c9] .form-item[_ngcontent-c9] input[_ngcontent-c9], .module-form-row-m[_ngcontent-c9] .form-item[_ngcontent-c9] select[_ngcontent-c9] {
    /* -webkit-box-sizing: border-box; */
    /* -moz-box-sizing: border-box; */
    -webkit-appearance: none;
    display: block;
    width: 100%;
    height: 100%;
    padding: 0 .65rem;
    background-color: transparent;
    border: none;
    border-radius: .25rem;
    font-size: .7rem;
}
.module-form-row-m[_ngcontent-c9] .search-btn[_ngcontent-c9] {
    display: inline-block;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAAGXRFW…tC/HEsmg41fiWsnQr//lg13W2cxjhVVr9r/346mQkCfwUYACzE4s6QiHG6AAAAAElFTkSuQmCC) no-repeat;
    background-size: .7rem .7rem;
    background-position: 50% 50%;
    height: 1.5rem;
    width: 1.5rem;
    transition: none;
    position: absolute;
    left: 0;
    top: 0;
}
.module-form-row-m[_ngcontent-c9] .cancel[_ngcontent-c9] {
    position: relative;
    display: inline-block;
    font-size: .7rem;
    font-weight: 700;
    width: 3rem;
    height: 1.5rem;
    line-height: 1.5rem;
    text-align: center;
    margin-left: .6rem;
    color: #626262;
}
.hot-list[_ngcontent-c8] {
    padding: 0 .5rem;
}
.hot-list[_ngcontent-c8] h4[_ngcontent-c8] {
    font-size: .75rem;
    line-height: .75rem;
    color: #8e8e8e;
    font-weight: 400;
    padding: 1.2rem 0 .75rem .35rem;
}
.hot-list[_ngcontent-c8] li.color-0[_ngcontent-c8] {
    color: #cd3f36;
    background-color: #ffe7e5;
}
.hot-list[_ngcontent-c8] li[_ngcontent-c8] {
    position: relative;
    font-size: 13.5px;
    font-weight: 700;
    height: 30px;
    line-height: 30px;
    display: inline-block;
    padding: 0 16px;
    text-align: center;
    border-radius: .8rem;
    color: dimgray;
    margin: 0 4.16px 8.33px 0;
}
.hot-list[_ngcontent-c8] li.color-1[_ngcontent-c8] {
    color: #3bc9e6;
    background-color: #edfcfc;
}
.hot-list[_ngcontent-c8] li.color-2[_ngcontent-c8] {
    color: #e78612;
    background-color: #fff7e4;
}
.hot-list[_ngcontent-c8] li.color-3[_ngcontent-c8] {
    color: #88af2e;
    background-color: #f7fbe0;
}
.hot-list[_ngcontent-c8] li.color-4[_ngcontent-c8] {
    color: #9547ce;
    background-color: #f5e0fb;
}
.hot-list[_ngcontent-c8] li.color-5[_ngcontent-c8] {
    color: #e6b400;
    background-color: #fffce4;
}
.hot-list[_ngcontent-c8] li.color-6[_ngcontent-c8] {
    color: #9e6e39;
    background-color: #fffbdf;
}
.hot-list[_ngcontent-c8] li.color-7[_ngcontent-c8] {
    color: #cd3f36;
    background-color: #ffe7e5;
}
.hot-list[_ngcontent-c8] li.color-8[_ngcontent-c8] {
    color: #3bc9e6;
    background-color: #edfcfc;
}
.hot-list[_ngcontent-c8] li.color-9[_ngcontent-c8] {
    color: #e78612;
    background-color: #fff7e4;
}
</style>


