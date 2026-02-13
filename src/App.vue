<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import AppLayout from '@/layouts/AppLayout.vue';
import AuthLayout from '@/layouts/AuthLayout.vue';

const layouts = {
  AppLayout,
  AuthLayout,
};

const route = useRoute();
const layout = computed(() => {
  const layoutName = route.meta.layout;
  return layoutName ? layouts[layoutName] : 'div';
});
</script>

<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>