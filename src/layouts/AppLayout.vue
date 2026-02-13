<script setup>
import { ref } from 'vue';
import Sidebar from '@/components/layout/Sidebar.vue';
import Header from '@/components/layout/Header.vue';

const isSidebarOpen = ref(false);

const toggleSidebar = () => {
    isSidebarOpen.value = !isSidebarOpen.value;
};

const closeSidebar = () => {
    isSidebarOpen.value = false;
};
</script>

<template>
    <div class="min-h-screen bg-background font-body">
        <Sidebar :is-open="isSidebarOpen" @close="closeSidebar" />

        <div class="md:pl-64 flex flex-col min-h-screen">
            <Header @toggle-sidebar="toggleSidebar" />

            <main class="flex-1 py-6 px-4 sm:px-6 lg:px-8">
                <slot></slot>
            </main>
        </div>
    </div>
</template>
