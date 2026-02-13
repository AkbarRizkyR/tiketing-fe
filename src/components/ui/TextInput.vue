<script setup>
import { computed, useSlots } from 'vue';

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
        default: ' ', // default to space for floating label trick
    },
    type: {
        type: String,
        default: 'text',
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
        default: () => `input-${Math.random().toString(36).substr(2, 9)}`,
    },
});

const emit = defineEmits(['update:modelValue']);
const slots = useSlots();

const updateValue = (event) => {
    emit('update:modelValue', event.target.value);
};

const inputClasses = computed(() => {
    return [
        'block w-full rounded-lg border bg-white px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 disabled:bg-gray-50 disabled:text-gray-500 transition-colors',
        props.error
            ? 'border-danger focus:border-danger focus:ring-danger/20'
            : 'border-gray-300 focus:border-primary focus:ring-primary/20 hover:border-gray-400',
        slots.prefix ? 'pl-10' : '',
        slots.suffix ? 'pr-10' : '',
    ].join(' ');
});
</script>

<template>
    <div class="w-full">
        <label v-if="label" :for="id" class="mb-1.5 block text-sm font-medium text-gray-700">
            {{ label }} <span v-if="required" class="text-danger">*</span>
        </label>
        <div class="relative">
            <div v-if="$slots.prefix"
                class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                <slot name="prefix"></slot>
            </div>

            <input :id="id" :type="type" :value="modelValue" :placeholder="placeholder" :disabled="disabled"
                :class="inputClasses" @input="updateValue" v-bind="$attrs" />

            <div v-if="$slots.suffix"
                class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
                <slot name="suffix"></slot>
            </div>
        </div>
        <p v-if="error" class="mt-1 text-sm text-danger">{{ error }}</p>
    </div>
</template>
