<script setup>
import Button from '@/components/ui/Button.vue';
import TextInput from '@/components/ui/TextInput.vue';
import Breadcrumb from '@/components/ui/Breadcrumb.vue';
import Pagination from '@/components/ui/Pagination.vue';
import { ref } from 'vue';

const breadcrumbs = [
    { text: 'Home', to: '/' },
    { text: 'Dashboard', active: true },
];

const currentPage = ref(1);

const onPageChange = (page) => {
    currentPage.value = page;
};
</script>

<template>
    <div class="space-y-6">
        <div class="flex items-center justify-between">
            <h1 class="text-2xl font-bold text-gray-900">Dashboard</h1>
            <Button variant="primary">Create Ticket</Button>
        </div>

        <Breadcrumb :items="breadcrumbs" />

        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <!-- Stats Card Example -->
            <div v-for="i in 4" :key="i" class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div class="flex items-center">
                    <div class="rounded-full bg-primary/10 p-3 text-primary">
                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    </div>
                    <div class="ml-4">
                        <h3 class="text-sm font-medium text-gray-500">Total Users</h3>
                        <p class="text-2xl font-semibold text-gray-900">1,234</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="rounded-lg border border-gray-200 bg-white shadow-sm">
            <div class="border-b border-gray-200 px-6 py-4">
                <h3 class="text-lg font-medium text-gray-900">Recent Tickets</h3>
            </div>
            <div class="p-6">
                <TextInput placeholder="Search tickets..." class="max-w-xs mb-4">
                    <template #prefix>
                        <svg class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </template>
                </TextInput>

                <!-- Table Placeholder -->
                <div class="overflow-hidden rounded-lg border border-gray-200">
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                            <tr>
                                <th
                                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    ID</th>
                                <th
                                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Subject</th>
                                <th
                                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Status</th>
                                <th
                                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Date</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200 bg-white">
                            <tr v-for="i in 5" :key="i">
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#100{{ i }}
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Login Issue</td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <span
                                        class="inline-flex rounded-full bg-success/10 px-2 text-xs font-semibold leading-5 text-success">Open</span>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2 mins ago</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="mt-4">
                    <Pagination :current-page="currentPage" :total-pages="10" :total-items="100"
                        @page-change="onPageChange" />
                </div>
            </div>
        </div>
    </div>
</template>
