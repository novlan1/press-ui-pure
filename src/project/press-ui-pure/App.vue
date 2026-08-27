<template>
  <div
    id="app"
    style="height:100%;"
  >
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import { setLang } from 'src/utils/i18n/i18n';

export default {
  data() {
    return {};
  },
  mounted() {
    document.documentElement.style.setProperty('--window-top', '44px');
    setLang();
  },
};
</script>
<style lang="scss" src="src/utils/style/demo.scss"></style>
<style>
/* html {
  --window-top: 44px;
} */

/* 与 press-ui-demo-vue3-uni / vue3-pure 项目对齐：全局灰底（#f5f6fa）。
   vue3-uni 靠 pages.json 的 globalStyle.backgroundColor 提供整 app 灰底，
   本项目用纯 Vue2+webpack 渲染，必须手动在 <html>/<body> 上设。
   首页 .index-page 自带 background-color: #f5f6fa 不会受影响。 */
html,
body {
  background: #f5f6fa;
}
</style>
