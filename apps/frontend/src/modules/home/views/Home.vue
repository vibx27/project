<script lang="ts">
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined
} from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';



export default defineComponent({
  components: {
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined
  },
  setup() {
    return {
      selectedKeys1: ref<string[]>(['2']),
      selectedKeys2: ref<string[]>(['1']),
      collapsed: ref<boolean>(true),
      openKeys: ref<string[]>(['sub1']),
      routes: ref<object[]>([
        {
          path: 'index',
          breadcrumbName: 'Page 1',
        },
        {
          path: 'first',
          breadcrumbName: 'Page 2',
        },
        {
          path: 'second',
          breadcrumbName: 'Page 3',
        },
      ])
    };
  },
});
</script>


<template>
  <div style="position:relative;">
    <a-layout style="min-height: 100%" has-sider>

      <div style="width: 48px; overflow: hidden; transition: width .2s"></div>
      <a-layout-sider v-model:collapsed="collapsed" collapsible theme="light"  style="overflow: hidden; max-width: 48px; min-width: 48px; width: 48px; flex: 0 0 48px; position: fixed; top: 0; left: 0; z-index: 10; height: 100%;">
        <template v-slot:trigger>
          <menu-unfold-outlined
              v-if="collapsed"
              class="trigger"
          />
          <menu-fold-outlined v-else class="trigger"/>
        </template>
        <div class="logo" />
        <a-menu v-model:selectedKeys="selectedKeys" mode="inline">
          <a-sub-menu key="sub1">
            <template #title>
            <span>
              <user-outlined />
              <span>User</span>
            </span>
            </template>
            <a-menu-item key="3">Tom</a-menu-item>
            <a-menu-item key="4">Bill</a-menu-item>
            <a-menu-item key="5">Alex</a-menu-item>
          </a-sub-menu>
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
      <a-layout style="width: calc(100% - 48px)">
<!--          <a-layout-header class="header">-->
<!--            <div class="logo" />-->
<!--          </a-layout-header>-->
        <a-page-header
            style="border: 1px solid rgb(235, 237, 240)"
            :breadcrumb="{ routes }"
        >
          <template v-slot:title>
            <span style="font-size: 2rem">Title</span>
          </template>
        </a-page-header>
        <!--      <a-breadcrumb style="margin: 16px 0">-->
        <!--        <a-breadcrumb-item>Home</a-breadcrumb-item>-->
        <!--        <a-breadcrumb-item>List</a-breadcrumb-item>-->
        <!--        <a-breadcrumb-item>App</a-breadcrumb-item>-->
        <!--      </a-breadcrumb>-->
        <a-layout-content
            :style="{margin:'0 24px', padding: '24px', background: '#fff', minHeight: '280px' }"
        >
          <ul>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
          </ul>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<style>
.header{
  background-color: #001529;
}

/*#components-layout-demo-custom-trigger .trigger {*/
/*  font-size: 18px;*/
/*  line-height: 64px;*/
/*  padding: 0 24px;*/
/*  cursor: pointer;*/
/*  transition: color 0.3s;*/
/*}*/

/*#components-layout-demo-custom-trigger .trigger:hover {*/
/*  color: #1890ff;*/
/*}*/

/*#components-layout-demo-custom-trigger .logo {*/
/*  height: 32px;*/
/*  background: rgba(255, 255, 255, 0.3);*/
/*  margin: 16px;*/
/*}*/

/*.site-layout .site-layout-background {*/
/*  background: #fff;*/
/*}*/

/*.site-layout-background {*/
/*  background: #fff;*/
/*}*/
</style>