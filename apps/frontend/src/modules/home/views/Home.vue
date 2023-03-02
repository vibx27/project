<template>
  <a-layout style="height: 100vh" has-sider>

    <a-layout-sider :width=sideWidth v-model:collapsed="collapsed" :collapsedWidth="0"
                    :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0 }">
      <div class="logo" />
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-menu-item key="1">
          <user-outlined />
          <span>nav 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <video-camera-outlined />
          <span>nav 2</span>
        </a-menu-item>
        <a-menu-item key="3">
          <upload-outlined />
          <span>nav 3</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>

    <a-layout :style="{'margin-left': collapsed ? '0px' : sideWidth, 'transition': 'all 0.2s'}">

      <a-layout-header style="background: #fff; padding: 0">
        <menu-unfold-outlined
            v-if="collapsed"
            class="trigger"
            @click="() => (collapsed = !collapsed)"
        />
        <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
      </a-layout-header>

      <a-layout-content :style="{ margin: '25px 16px 5px 16px', padding: '24px', background: '#fff', minHeight: '280px', overflow: 'scroll'}">
        <p v-for="i in 50">Content</p>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons-vue';


const sideWidth = '250px'

export default defineComponent({
  components: {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  },
  setup() {
    const collapsed = ref<boolean>(window.innerHeight > window.innerWidth)

    function onScreenResize() {
      window.addEventListener("resize", () => {
        collapsed.value = window.innerHeight > window.innerWidth
      })
    }
    onScreenResize()

    return {
      selectedKeys: ref<string[]>(['1']),
      collapsed: collapsed,
      sideWidth: sideWidth
    };
  },
});
</script>

<style>
.trigger {
  font-size: 18px;
  line-height: 20px;
  margin: 0 20px;
  cursor: pointer;
  transition: color 0.3s;
}

.trigger:hover {
  color: #1890ff;
}

.logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}

.site-layout .site-layout-background {
  background: #fff;
}
</style>