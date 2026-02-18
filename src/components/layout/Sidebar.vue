<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { RouterLink, useRouter } from 'vue-router';
import { computed, ref, onMounted } from 'vue';
import { logout } from '@/services/auth.service';
import { useAuthorizationStore } from '@/stores/authorization';
import ConfirmationModal from '@/components/ui/ConfirmationModal.vue';
import { swallAlert } from '@/plugins/sweetalert2';
import { getMenus } from '@/services/menu.service';

const props = defineProps({
    isOpen: {
        type: Boolean,
        default: true,
    },
});

defineEmits(['close', 'toggle']);
const router = useRouter();
const authStore = useAuthorizationStore();

const showLogoutModal = ref(false);
const loadingLogout = ref(false);

const navigation = ref([]);

onMounted(async () => {
    const menus = await getMenus();
    navigation.value = menus.map(menu => ({
        name: menu.label,
        href: menu.path,
        icon: menu.iconPath
    }));
});

const sidebarClasses = computed(() => {
    return [
        'fixed inset-y-0 left-0 z-50 w-64 bg-secondary text-white transition-transform duration-300 ease-in-out',
        props.isOpen ? 'translate-x-0' : '-translate-x-full',
    ].join(' ');
});

const handleLogout = async () => {
    loadingLogout.value = true;
    const response = await logout();
    console.log('Logout Response:', response);

    loadingLogout.value = false;
    showLogoutModal.value = false;

    swallAlert('success', {
        title: 'Logout Berhasil',
        message: 'Anda telah berhasil keluar sistem',
        icon: 'success',
        timer: 1500,
        showConfirmButton: false,
        isNotif: true,
        callback: () => {
            authStore.clearSession();
            router.push({ name: 'login' });
        }
    });
}
</script>

<template>
    <aside :class="sidebarClasses">
        <!-- Logo -->
        <div class="relative flex h-16 items-center justify-center border-b border-gray-700 bg-secondary px-6">
            <h1 class="text-xl font-display font-bold text-white">Ticket Support</h1>

            <!-- Mobile Close Button -->
            <button @click="$emit('close')" class="absolute right-4 text-gray-400 hover:text-white md:hidden">
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            <!-- Desktop Collapse Button -->
            <button @click="$emit('toggle')"
                class="absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 shadow-lg hover:bg-gray-50 hover:text-gray-700 md:flex transition-transform duration-300">
                <svg class="h-3 w-3 transform transition-transform duration-300" :class="{ 'rotate-180': !isOpen }"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
            </button>
        </div>

        <!-- Navigation -->
        <nav class="mt-5 px-3">
            <div class="space-y-1">
                <RouterLink v-for="item in navigation" :key="item.name" :to="item.href"
                    class="group flex items-center rounded-md px-2 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    active-class="bg-gray-900 text-white">
                    <svg class="mr-4 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-300" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="item.icon" />
                    </svg>
                    {{ item.name }}
                </RouterLink>
            </div>
        </nav>

        <!-- Logout (Bottom) -->
        <div class="absolute bottom-0 w-full border-t border-gray-700 p-4">
            <button @click="showLogoutModal = true"
                class="group flex w-full items-center rounded-md px-2 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                <svg class="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-300" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Logout
            </button>
        </div>
    </aside>

    <!-- Logout Confirmation Modal -->
    <ConfirmationModal :is-open="showLogoutModal" title="Konfirmasi Logout"
        message="Apakah Anda yakin ingin mengakhiri sesi?" confirm-text="Ya, Logout" cancel-text="Batal"
        :loading="loadingLogout" @confirm="handleLogout" @close="showLogoutModal = false" />

    <!-- Mobile Overlay -->
    <div v-if="isOpen" class="fixed inset-0 z-40 bg-gray-600 bg-opacity-75 transition-opacity md:hidden"
        @click="$emit('close')"></div>
</template>
