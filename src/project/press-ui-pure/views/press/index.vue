<template>
  <div class="page-wrap">
    <PressHeader />

    <div class="uni-page-wrapper">
      <!--
        缓存 /pages/press 下的子路由（Vue 2 直接包裹 router-view 即可，include 按组件 name 匹配）：
        - PageIndex（首页 PressDemoIndex）：展开的分类折叠状态要保留
        - PageHelp / PageIntroduce：help 页面 dialog 状态 + introduce 列表滚动位置
        其他 85 个组件示例页不缓存（每次进入重新挂载，避免内存浪费）
        注意：App.vue 外层的 keep-alive 缓存的是本包装组件（PressWrap），
        首页与组件示例页共享同一路由记录，PressWrap 不销毁但内层
        router-view 切换会销毁 PressDemoIndex，所以必须在内层再加 keep-alive。
      -->
      <keep-alive :include="cachedPageNames">
        <router-view />
      </keep-alive>
    </div>

    <div
      v-if="showTabBar"
      class="press-tab-bar"
    >
      <div
        v-for="item in tabBarList"
        :key="item.path"
        class="press-tab-bar-item"
        @click="onTabBarClick(item)"
      >
        <img
          class="press-tab-bar-icon"
          :src="getTabIcon(item)"
          alt=""
        >
        <div
          class="press-tab-bar-text"
          :style="{ color: isActiveTab(item) ? TAB_SELECTED_COLOR : TAB_COLOR }"
        >
          {{ item.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PressHeader from './header.vue';

const assemblyDefault = require('src/static/tabbar/assembly_default_3x.png');
const assemblySelected = require('src/static/tabbar/assembly_selected_3x.png');
const myDefault = require('src/static/tabbar/my_default_3x.png');
const mySelected = require('src/static/tabbar/my_selected_3x.png');

const TAB_COLOR = '#333333';
const TAB_SELECTED_COLOR = '#465CFF';

export default {
  name: 'PressWrap',
  components: {
    PressHeader,
  },
  data() {
    return {
      TAB_COLOR,
      TAB_SELECTED_COLOR,
      tabBarList: [
        {
          path: '/pages/press',
          text: '组件',
          iconPath: assemblyDefault,
          selectedIconPath: assemblySelected,
        },
        {
          path: '/pages/index/help',
          text: '帮助',
          iconPath: myDefault,
          selectedIconPath: mySelected,
        },
      ],
    };
  },
  computed: {
    showTabBar() {
      return this.tabBarList.some(item => item.path === this.$route.path);
    },

    /**
     * keep-alive 缓存白名单：只缓存首页 / help / introduce 三个固定页面，
     * 其它组件示例页（如 button/cell/collapse）不缓存（每次进入重新挂载，避免占内存）。
     * name 字段与 src/pages/{index,help,introduce}/*.vue 的组件 name 选项对应。
     */
    cachedPageNames() {
      return ['PageIndex', 'PageHelp', 'PageIntroduce'];
    },
  },
  mounted() {

  },
  methods: {
    isActiveTab(item) {
      return item.path === this.$route.path;
    },
    getTabIcon(item) {
      return this.isActiveTab(item) ? item.selectedIconPath : item.iconPath;
    },
    onTabBarClick(item) {
      if (item.path === this.$route.path) return;
      this.$router.push(item.path);
    },
  },
};
</script>

<style lang="scss" scoped>
.page-wrap {
  height:100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.uni-page-wrapper {
  flex: 1;
  height: calc(100% - 44px);
  height: calc(100% - 44px - constant(safe-area-inset-top));
  height: calc(100% - 44px - env(safe-area-inset-top));
  overflow: auto;
}

.press-tab-bar {
  flex-shrink: 0;
  display: flex;
  height: 50px;
  height: calc(50px + constant(safe-area-inset-bottom));
  height: calc(50px + env(safe-area-inset-bottom));
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
  background-color: #FFFFFF;
  border-top: 1px solid #ebedf0;
  box-sizing: border-box;
}

.press-tab-bar-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.press-tab-bar-icon {
  width: 28px;
  height: 28px;
}

.press-tab-bar-text {
  margin-top: 4px;
  font-size: 12px;
  line-height: 1;
}
</style>
