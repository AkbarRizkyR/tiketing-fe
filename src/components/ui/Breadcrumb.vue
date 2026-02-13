<script setup>
import { RouterLink } from 'vue-router';

defineProps({
    items: {
        type: Array,
        required: true,
        // Expected format: [{ text: 'Home', to: '/' }, { text: 'Users', to: '/users' }, { text: 'Detail', active: true }]
    },
});
</script>

<template>
    <nav class="flex" aria-label="Breadcrumb">
        <ol role="list" class="flex items-center space-x-2">
            <li v-for="(item, index) in items" :key="index">
                <div class="flex items-center">
                    <svg v-if="index > 0" class="h-5 w-5 flex-shrink-0 text-gray-300 mx-2" fill="currentColor"
                        viewBox="0 0 20 20" aria-hidden="true">
                        <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                    </svg>

                    <span v-if="item.active" class="ml-1 text-sm font-medium text-gray-500 md:ml-2" aria-current="page">
                        {{ item.text }}
                    </span>
                    <RouterLink v-else :to="item.to"
                        class="ml-1 text-sm font-medium text-gray-700 hover:text-primary md:ml-2 transition-colors">
                        {{ item.text }}
                    </RouterLink>
                </div>
            </li>
        </ol>
    </nav>
</template>
