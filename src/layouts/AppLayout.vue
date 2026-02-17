<script setup>
import { ref } from 'vue';
import Sidebar from '@/components/layout/Sidebar.vue';
import Header from '@/components/layout/Header.vue';

const isSidebarOpen = ref(true);

const toggleSidebar = () => {
    isSidebarOpen.value = !isSidebarOpen.value;
};

const closeSidebar = () => {
    isSidebarOpen.value = false;
};
</script>

<template>
    <div class="min-h-screen bg-background font-body">
        <Sidebar :is-open="isSidebarOpen" @toggle="toggleSidebar" @close="closeSidebar" />

        <div class="flex flex-col min-h-screen transition-all duration-300 ease-in-out" :class="[isSidebarOpen ? 'md:pl-64' : '']">
            <Header @toggle-sidebar="toggleSidebar" />

            <main class="flex-1 py-6 px-4 sm:px-6 lg:px-8">
                <slot></slot>
            </main>
        </div>
    </div>
</template>
