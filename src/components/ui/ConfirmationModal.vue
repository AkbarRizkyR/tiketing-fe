<script setup>
import { onMounted, onUnmounted } from 'vue';
import Button from '@/components/ui/Button.vue';

const props = defineProps({
    isOpen: {
        type: Boolean,
        default: false,
    },
    title: {
        type: String,
        default: 'Konfirmasi',
    },
    message: {
        type: String,
        default: 'Apakah Anda yakin?',
    },
    confirmText: {
        type: String,
        default: 'Ya',
    },
    cancelText: {
        type: String,
        default: 'Batal',
    },
    type: {
        type: String,
        default: 'danger', // primary, danger, warning
    },
    loading: {
        type: Boolean,
        default: false,
    }
});

const emit = defineEmits(['close', 'confirm']);

// Close on Escape key
const handleKeydown = (e) => {
    if (e.key === 'Escape' && props.isOpen) {
        emit('close');
    }
};

onMounted(() => document.addEventListener('keydown', handleKeydown));
onUnmounted(() => document.removeEventListener('keydown', handleKeydown));
</script>

<template>
    <Teleport to="body">
        <div v-if="isOpen" class="relative z-50" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <!-- Background backdrop -->
            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" @click="$emit('close')"></div>

            <div class="fixed inset-0 z-10 overflow-y-auto">
                <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <!-- Modal panel -->
                    <div
                        class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <div class="sm:flex sm:items-start">
                                <div class="mx-auto flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"
                                    :class="type === 'danger' ? 'bg-red-100' : 'bg-blue-100'">
                                    <svg v-if="type === 'danger'" class="h-6 w-6 text-red-600" fill="none"
                                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                                    </svg>
                                    <svg v-else class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                    </svg>
                                </div>
                                <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                    <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">{{
                                        title }}
                                    </h3>
                                    <div class="mt-2">
                                        <p class="text-sm text-gray-500">{{ message }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <Button :variant="type" :loading="loading" @click="$emit('confirm')"
                                class="w-full sm:ml-3 sm:w-auto">
                                {{ confirmText }}
                            </Button>
                            <Button variant="outline" @click="$emit('close')" class="mt-3 w-full sm:mt-0 sm:w-auto"
                                :disabled="loading">
                                {{ cancelText }}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Teleport>
</template>
