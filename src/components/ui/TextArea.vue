<script setup>
import { computed } from 'vue';

const props = defineProps({
    modelValue: {
        type: [String, Number],
        default: '',
    },
    label: {
        type: String,
        default: '',
    },
    placeholder: {
        type: String,
        default: '',
    },
    rows: {
        type: [String, Number],
        default: 4,
    },
    error: {
        type: String,
        default: '',
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    required: {
        type: Boolean,
        default: false,
    },
    id: {
        type: String,
        default: () => `textarea-${Math.random().toString(36).substr(2, 9)}`,
    },
});

const emit = defineEmits(['update:modelValue']);

const updateValue = (event) => {
    emit('update:modelValue', event.target.value);
};

const textareaClasses = computed(() => {
    return [
        'block w-full rounded-lg border bg-white px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 disabled:bg-gray-50 disabled:text-gray-500 transition-colors',
        props.error
            ? 'border-danger focus:border-danger focus:ring-danger/20'
            : 'border-gray-300 focus:border-primary focus:ring-primary/20 hover:border-gray-400',
    ].join(' ');
});
</script>

<template>
    <div class="w-full">
        <label v-if="label" :for="id" class="mb-1.5 block text-sm font-medium text-gray-700">
            {{ label }} <span v-if="required" class="text-danger">*</span>
        </label>
        <textarea :id="id" :rows="rows" :value="modelValue" :placeholder="placeholder" :disabled="disabled"
            :class="textareaClasses" @input="updateValue" v-bind="$attrs"></textarea>
        <p v-if="error" class="mt-1 text-sm text-danger">{{ error }}</p>
    </div>
</template>
