<template>
  <div class="about">
    <PressAbout
      :help-config="helpConfig"
    />
  </div>
</template>

<script>
import PressAbout from 'press-ui/press-about/press-about.vue';

import { DEFAULT_HELPER_CONFIG } from './help-config';


export default {
  // 组件名：与 src/project/press-ui-pure/views/press/index.vue 的 cachedPageNames
  // 白名单对应，让 keep-alive 能缓存 help 页面（保留 PressAbout 弹窗开关状态等）。
  name: 'PageHelp',
  components: {
    PressAbout,
  },
  data() {
    return {
      helpConfig: DEFAULT_HELPER_CONFIG,
    };
  },
  mounted() {
  },
  methods: {
  },
};
</script>
<style>
/* help 页面背景：纯 Vue2+webpack 没有 uni-app 的 <page> 元素，
   灰底已在 App.vue 全局 <html>/<body> 上设了 #f5f6fa。
   这里给 .about 容器显式锁一遍，与全局保持一致（vue3-uni 用 page 选择器等价）。 */
.about {
  background: #f5f6fa;
  min-height: 100%;
}
</style>
<style scoped lang="scss">
</style>
